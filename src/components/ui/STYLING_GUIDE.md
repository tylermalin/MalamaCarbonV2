# Mālama Carbon - Consistent Page Styling Guide

## Overview
This guide outlines the consistent styling system implemented across all pages to ensure cohesive design, proper spacing, and multi-column layouts where appropriate.

## Design System Components

### 1. Section Styles (`sectionStyles`)
Consistent spacing and styling constants used throughout all pages:

```typescript
export const sectionStyles = {
  container: "container mx-auto px-6 py-20",
  section: "py-20 px-6",
  sectionAlt: "py-20 px-6 bg-muted/30",
  sectionGradient: "py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5",
  maxWidth: "max-w-7xl mx-auto",
  grid: "grid lg:grid-cols-2 gap-20",
  grid3Col: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
  grid4Col: "grid grid-cols-2 md:grid-cols-4 gap-6",
  card: "shadow-xl border-2 border-primary/10 hover:border-primary/20 transition-all duration-300",
  cardContent: "p-12",
  heading: "text-5xl md:text-7xl mb-6 text-primary font-bold",
  heading2: "text-4xl md:text-5xl mb-6 text-primary font-bold",
  heading3: "text-3xl font-bold mb-8 text-primary",
  subheading: "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8",
  text: "text-lg text-muted-foreground leading-relaxed",
  button: "hover:scale-105 transition-transform duration-300",
  icon: "w-16 h-16 text-primary mx-auto mb-6",
  iconSmall: "w-8 h-8 text-primary",
  iconLarge: "w-24 h-24 text-primary/30"
};
```

### 2. Layout Components

#### HeroSection
- **Purpose**: Main page introduction with title, subtitle, and optional action buttons
- **Background**: Gradient background with primary/secondary colors
- **Usage**: First section of every page
- **Props**: `title`, `subtitle`, `children` (optional buttons)

#### ContentSection
- **Purpose**: Standard content container with configurable backgrounds
- **Background Options**: `default`, `alt` (muted), `gradient`
- **Usage**: Main content areas throughout pages
- **Props**: `children`, `className`, `background`

#### TwoColumnLayout
- **Purpose**: Two-column responsive layout with animation
- **Grid**: `lg:grid-cols-2 gap-20`
- **Animation**: Staggered entrance from left/right
- **Props**: `left`, `right`, `reverse`, `className`

#### ThreeColumnLayout
- **Purpose**: Three-column responsive layout
- **Grid**: `md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Animation**: Staggered entrance from bottom
- **Props**: `columns` (array), `className`

#### FourColumnLayout
- **Purpose**: Four-column responsive layout for stats/features
- **Grid**: `grid-cols-2 md:grid-cols-4 gap-6`
- **Animation**: Staggered entrance from bottom
- **Props**: `columns` (array), `className`

### 3. Content Components

#### FeatureCard
- **Purpose**: Feature showcase with icon, title, and description
- **Styling**: Consistent card design with shadows and borders
- **Props**: `icon`, `title`, `description`, `className`

#### StatsCard
- **Purpose**: Statistics display with icon, value, and label
- **Styling**: Light background with backdrop blur
- **Props**: `icon`, `value`, `label`, `className`

#### CTASection
- **Purpose**: Call-to-action section with gradient background
- **Background**: Primary to secondary gradient
- **Props**: `title`, `subtitle`, `primaryButton`, `secondaryButton`

#### ProcessSteps
- **Purpose**: Step-by-step process visualization
- **Features**: Numbered steps, icons, descriptions, timeframes
- **Props**: `steps` (array), `className`

## Page Structure Template

### Standard Page Layout
```typescript
export function PageName({ props }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection
        title="Page Title"
        subtitle="Page description and value proposition"
      >
        {/* Optional action buttons */}
      </HeroSection>

      {/* Content Section 1 */}
      <ContentSection background="default">
        <motion.div className="text-center mb-16">
          <h2 className={sectionStyles.heading2}>Section Title</h2>
          <p className={sectionStyles.subheading}>Section description</p>
        </motion.div>
        
        {/* Content using layout components */}
        <TwoColumnLayout
          left={<LeftContent />}
          right={<RightContent />}
        />
      </ContentSection>

      {/* Content Section 2 - Alternative Background */}
      <ContentSection background="alt">
        <ThreeColumnLayout
          columns={[<Column1 />, <Column2 />, <Column3 />]}
        />
      </ContentSection>

      {/* Stats Section */}
      <ContentSection background="gradient">
        <FourColumnLayout
          columns={stats.map(stat => (
            <StatsCard
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        />
      </ContentSection>

      {/* CTA Section */}
      <CTASection
        title="Call to Action"
        subtitle="Encourage user action"
        primaryButton={{
          text: "Primary Action",
          onClick: handleAction,
          icon: ArrowRight
        }}
        secondaryButton={{
          text: "Secondary Action",
          onClick: handleSecondary
        }}
      />

      {/* Footer */}
      <Footer {...footerProps} />
    </div>
  );
}
```

## Multi-Column Usage Guidelines

### When to Use Two Columns
- **Content + Visual**: Text content paired with images/diagrams
- **Feature Comparison**: Two competing or complementary features
- **Form + Information**: Contact forms with company information
- **Process Steps**: Two-step processes or workflows

### When to Use Three Columns
- **Feature Showcase**: Three main features or benefits
- **Service Tiers**: Basic, Pro, Enterprise offerings
- **Team Members**: Key team member profiles
- **Process Overview**: Three main phases of a process

### When to Use Four Columns
- **Statistics**: Key metrics and numbers
- **Quick Features**: Brief feature highlights
- **Benefits Grid**: Four main advantages
- **Social Proof**: Testimonials or partner logos

## Responsive Behavior

### Mobile-First Approach
- **Grid Breakpoints**: `grid-cols-2 md:grid-cols-2 lg:grid-cols-3`
- **Spacing**: Consistent padding and margins across all screen sizes
- **Typography**: Responsive font sizes with `text-5xl md:text-7xl`

### Animation Considerations
- **Staggered Entrances**: Delays based on column position
- **Viewport Triggers**: Animations trigger when elements come into view
- **Performance**: Optimized animations for smooth performance

## Color System

### Primary Colors
- **Primary**: Main brand color for headings and accents
- **Secondary**: Supporting color for gradients and highlights
- **Accent**: Tertiary color for special elements

### Background Variants
- **Default**: Clean white/background color
- **Alt**: Light muted background (`bg-muted/30`)
- **Gradient**: Subtle gradient with primary/secondary tones

## Typography Scale

### Headings
- **H1**: `text-5xl md:text-7xl` (Hero titles)
- **H2**: `text-4xl md:text-5xl` (Section titles)
- **H3**: `text-3xl` (Subsection titles)

### Body Text
- **Subtitle**: `text-xl md:text-2xl` (Section descriptions)
- **Body**: `text-lg` (Main content)
- **Small**: `text-sm` (Captions, metadata)

## Spacing System

### Vertical Spacing
- **Section**: `py-20` (80px top/bottom)
- **Container**: `py-20` (80px top/bottom)
- **Content**: `mb-16` (64px between sections)
- **Elements**: `mb-8`, `mb-6`, `mb-4` (32px, 24px, 16px)

### Horizontal Spacing
- **Container**: `px-6` (24px left/right)
- **Grid Gaps**: `gap-20`, `gap-8`, `gap-6` (80px, 32px, 24px)
- **Card Padding**: `p-12` (48px all around)

## Implementation Examples

### Updated Pages
1. **ExplorePlatform.tsx** - Uses HeroSection, ContentSection, ThreeColumnLayout, FourColumnLayout, CTASection
2. **HowItWorksPage.tsx** - Uses HeroSection, ContentSection, FourColumnLayout, ProcessSteps, CTASection

### Benefits of New System
- **Consistency**: All pages follow the same design patterns
- **Maintainability**: Centralized styling makes updates easier
- **Responsiveness**: Built-in responsive behavior
- **Performance**: Optimized animations and transitions
- **Accessibility**: Consistent spacing and typography improve readability

## Best Practices

1. **Always use layout components** instead of custom grid implementations
2. **Maintain consistent spacing** using the predefined section styles
3. **Use appropriate backgrounds** for different content types
4. **Implement responsive grids** with proper breakpoints
5. **Include animations** for better user engagement
6. **Follow the page structure template** for consistency
7. **Use semantic HTML** with proper heading hierarchy
8. **Test on multiple screen sizes** to ensure responsive behavior

## Future Enhancements

- **Dark Mode Support**: Add dark theme variants
- **Custom Themes**: Allow page-specific styling overrides
- **Animation Presets**: Predefined animation combinations
- **Layout Templates**: Page-specific layout patterns
- **Component Library**: Additional specialized components
