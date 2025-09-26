// Portfolio configuration settings
export const config = {
  // Maximum number of rows to show in collapsible content before enabling scroll
  maxRowsInCollapsibleContent: 1,

  // Height per row in pixels for different sections (used to calculate scroll height)
  rowHeight: {
    techSkills: 140, // Compact height per row for small tech skills cards
    softSkills: 200, // Approximate height per row for soft skills cards
    certifications: 240, // Approximate height per row for certification cards
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
