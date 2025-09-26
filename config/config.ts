// Portfolio configuration settings
export const config = {
  // Maximum number of rows to show in collapsible content before enabling scroll for each section
  maxRowsInCollapsibleContent: {
    techSkills: 1,
    softSkills: 2,
    certifications: 2,
    projects: 2,
  },

  // Height per row in pixels for different sections (used to calculate scroll height)
  rowHeight: {
    techSkills: 160, // Compact height per row for small tech skills cards (including gaps)
    softSkills: 220, // Approximate height per row for soft skills cards (including gaps)
    certifications: 280, // Approximate height per row for certification cards (including gaps)
    projects: 320, // Approximate height per row for project cards (including gaps)
  },

  // Grid configuration for different sections
  grid: {
    techSkills: 'sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6', // Compact grid for small cards
    softSkills: 'md:grid-cols-2 lg:grid-cols-3',
    certifications: 'md:grid-cols-2 lg:grid-cols-3',
    projects: 'md:grid-cols-2 lg:grid-cols-3',
  },

  // Scroll configuration
  scrollbar: {
    className:
      'overflow-y-auto scrollbar-thin scrollbar-thumb-green-500/50 scrollbar-track-transparent',
  },
} as const;

export type Config = typeof config;
