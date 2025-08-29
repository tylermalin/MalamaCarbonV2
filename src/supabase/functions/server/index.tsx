import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

app.use('*', logger(console.log));
app.use('*', cors({
  origin: '*',
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
}));

// Initialize Supabase client with service role key for admin operations
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

// Sign up route
app.post('/make-server-b827df6e/auth/signup', async (c) => {
  try {
    const { email, password, name } = await c.req.json();

    if (!email || !password || !name) {
      return c.json({ error: 'Email, password, and name are required' }, 400);
    }

    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      // Automatically confirm the user's email since an email server hasn't been configured.
      email_confirm: true
    });

    if (error) {
      console.log(`Error creating user during signup: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    // Store user profile data
    await kv.set(`user:${data.user.id}`, {
      id: data.user.id,
      email: data.user.email,
      name,
      created_at: new Date().toISOString(),
      projects: []
    });

    return c.json({ 
      message: 'User created successfully', 
      user: { 
        id: data.user.id, 
        email: data.user.email, 
        name 
      } 
    });
  } catch (error) {
    console.log(`Error in signup route: ${error}`);
    return c.json({ error: 'Internal server error during signup' }, 500);
  }
});

// Create carbon project route (requires authentication)
app.post('/make-server-b827df6e/projects', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) {
      return c.json({ error: 'Authorization token required' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user?.id) {
      console.log(`Authorization error while creating project: ${authError?.message}`);
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { name, location, projectType, description } = await c.req.json();

    if (!name || !location || !projectType) {
      return c.json({ error: 'Name, location, and project type are required' }, 400);
    }

    const projectId = `project_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const project = {
      id: projectId,
      name,
      location,
      projectType,
      description: description || '',
      userId: user.id,
      created_at: new Date().toISOString(),
      status: 'active',
      carbonSequestered: 0,
      sensorsDeployed: 0,
      biocharsProduced: 0,
      creditsIssued: 0
    };

    // Store project
    await kv.set(`project:${projectId}`, project);

    // Add project to user's project list
    const userData = await kv.get(`user:${user.id}`);
    if (userData) {
      userData.projects = userData.projects || [];
      userData.projects.push(projectId);
      await kv.set(`user:${user.id}`, userData);
    }

    return c.json({ project });
  } catch (error) {
    console.log(`Error creating project: ${error}`);
    return c.json({ error: 'Internal server error while creating project' }, 500);
  }
});

// Get user projects route (requires authentication)
app.get('/make-server-b827df6e/projects', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) {
      return c.json({ error: 'Authorization token required' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user?.id) {
      console.log(`Authorization error while fetching projects: ${authError?.message}`);
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const userData = await kv.get(`user:${user.id}`);
    if (!userData || !userData.projects) {
      return c.json({ projects: [] });
    }

    // Fetch all user projects
    const projects = await kv.mget(userData.projects.map((id: string) => `project:${id}`));
    
    return c.json({ projects: projects.filter(Boolean) });
  } catch (error) {
    console.log(`Error fetching projects: ${error}`);
    return c.json({ error: 'Internal server error while fetching projects' }, 500);
  }
});

// Update project metrics route (requires authentication)
app.put('/make-server-b827df6e/projects/:projectId/metrics', async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    if (!accessToken) {
      return c.json({ error: 'Authorization token required' }, 401);
    }

    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);
    if (authError || !user?.id) {
      console.log(`Authorization error while updating project metrics: ${authError?.message}`);
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const projectId = c.req.param('projectId');
    const { carbonSequestered, sensorsDeployed, biocharsProduced, creditsIssued } = await c.req.json();

    const project = await kv.get(`project:${projectId}`);
    if (!project) {
      return c.json({ error: 'Project not found' }, 404);
    }

    if (project.userId !== user.id) {
      return c.json({ error: 'Unauthorized to update this project' }, 403);
    }

    // Update project metrics
    const updatedProject = {
      ...project,
      carbonSequestered: carbonSequestered ?? project.carbonSequestered,
      sensorsDeployed: sensorsDeployed ?? project.sensorsDeployed,
      biocharsProduced: biocharsProduced ?? project.biocharsProduced,
      creditsIssued: creditsIssued ?? project.creditsIssued,
      updated_at: new Date().toISOString()
    };

    await kv.set(`project:${projectId}`, updatedProject);

    return c.json({ project: updatedProject });
  } catch (error) {
    console.log(`Error updating project metrics: ${error}`);
    return c.json({ error: 'Internal server error while updating project metrics' }, 500);
  }
});

// Get global carbon statistics route (public)
app.get('/make-server-b827df6e/stats/global', async (c) => {
  try {
    // Get all projects to calculate global stats
    const allProjectKeys = await kv.getByPrefix('project:');
    const projects = allProjectKeys || [];

    const stats = {
      totalProjects: projects.length,
      totalCarbonSequestered: projects.reduce((sum, project) => sum + (project.carbonSequestered || 0), 0),
      totalSensorsDeployed: projects.reduce((sum, project) => sum + (project.sensorsDeployed || 0), 0),
      totalBiocharsProduced: projects.reduce((sum, project) => sum + (project.biocharsProduced || 0), 0),
      totalCreditsIssued: projects.reduce((sum, project) => sum + (project.creditsIssued || 0), 0),
      lastUpdated: new Date().toISOString()
    };

    return c.json({ stats });
  } catch (error) {
    console.log(`Error fetching global stats: ${error}`);
    return c.json({ error: 'Internal server error while fetching global stats' }, 500);
  }
});

// Health check route
app.get('/make-server-b827df6e/health', (c) => {
  return c.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

Deno.serve(app.fetch);