import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// Create a singleton Supabase client
export const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

// Auth helper functions
export const authHelpers = {
  async signUp(email: string, password: string, name: string) {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b827df6e/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ email, password, name })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Sign up failed');
      }

      return { data, error: null };
    } catch (error) {
      console.error('Sign up error:', error);
      return { data: null, error: error.message };
    }
  },

  async signIn(email: string, password: string) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        throw error;
      }

      return { data, error: null };
    } catch (error) {
      console.error('Sign in error:', error);
      return { data: null, error: error.message };
    }
  },

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        throw error;
      }

      return { error: null };
    } catch (error) {
      console.error('Sign out error:', error);
      return { error: error.message };
    }
  },

  async getCurrentSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      
      if (error) {
        throw error;
      }

      return { session, error: null };
    } catch (error) {
      console.error('Get session error:', error);
      return { session: null, error: error.message };
    }
  }
};

// Project API helpers
export const projectAPI = {
  async createProject(projectData: any, accessToken: string) {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b827df6e/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(projectData)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to create project');
      }

      return { data, error: null };
    } catch (error) {
      console.error('Create project error:', error);
      return { data: null, error: error.message };
    }
  },

  async getUserProjects(accessToken: string) {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b827df6e/projects`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch projects');
      }

      return { data: data.projects, error: null };
    } catch (error) {
      console.error('Fetch projects error:', error);
      return { data: null, error: error.message };
    }
  },

  async updateProjectMetrics(projectId: string, metrics: any, accessToken: string) {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b827df6e/projects/${projectId}/metrics`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify(metrics)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to update project metrics');
      }

      return { data, error: null };
    } catch (error) {
      console.error('Update project metrics error:', error);
      return { data: null, error: error.message };
    }
  },

  async getGlobalStats() {
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-b827df6e/stats/global`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch global stats');
      }

      return { data: data.stats, error: null };
    } catch (error) {
      console.error('Fetch global stats error:', error);
      return { data: null, error: error.message };
    }
  }
};