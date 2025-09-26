# Portfolio Configuration

## Overview

This portfolio uses a centralized configuration system located in `config/config.ts` to manage various display settings.

## Configuration Options

### Collapsible Content Scroll Settings

You can control how many rows are displayed before enabling scroll in collapsible sections:

```typescript
// config/config.ts
export const config = {
  // Maximum number of rows to show in collapsible content before enabling scroll
  maxRowsInCollapsibleContent: 2,

  // Height per row in pixels for different sections
  rowHeight: {
    techSkills: 280, // Height per row for tech skills cards
    softSkills: 200, // Height per row for soft skills cards
    certifications: 240, // Height per row for certification cards
  },
};
```

### How it works

1. **Tech Skills Section**: Shows maximum 2 rows (configurable), then adds vertical scroll
2. **Soft Skills Section**: Shows maximum 2 rows (configurable), then adds vertical scroll
3. **Scroll height calculation**: `maxRowsInCollapsibleContent × rowHeight.sectionName`

### Customizing the scroll behavior

To change the number of visible rows before scrolling:

1. Open `config/config.ts`
2. Modify the `maxRowsInCollapsibleContent` value
3. Optionally adjust `rowHeight` values if your card sizes change

**Examples:**

- `maxRowsInCollapsibleContent: 1` - Only 1 row visible before scroll
- `maxRowsInCollapsibleContent: 3` - 3 rows visible before scroll
- `maxRowsInCollapsibleContent: 0` - No scroll (shows all items)

### Grid Configuration

The grid layouts for different sections are also configurable:

```typescript
grid: {
  techSkills: 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  softSkills: 'md:grid-cols-2 lg:grid-cols-3',
  certifications: 'md:grid-cols-2 lg:grid-cols-3',
  projects: 'md:grid-cols-2 lg:grid-cols-3',
}
```

### Scrollbar Styling

The scrollbar appearance is customized with:

```typescript
scrollbar: {
  className: 'overflow-y-auto scrollbar-thin scrollbar-thumb-green-500/50 scrollbar-track-transparent';
}
```

This creates a thin green scrollbar that matches the portfolio's theme.
