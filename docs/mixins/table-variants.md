# `table-variants.scss` Documentation

## Overview

The `table-variants.scss` file contains a mixin for defining different table styles based on their state. This mixin helps in creating consistent styling for tables with various states such as default, striped, active, and hover.

## Mixins

### `table-variant`

Generates table styles for a specified state, including color and background variations. Useful for creating tables with different appearances based on their context or state.

#### Parameters

- **`$state`**: The state of the table (e.g., `primary`, `secondary`). This will be used to create class names like `.table-primary`.
- **`$background`**: The background color to be applied to the table.

#### Usage

```scss
@mixin table-variant($state, $background) {
  .table-#{$state} {
    $color: color-contrast(opaque($body-bg, $background));
    $hover-bg: mix($color, $background, percentage($table-hover-bg-factor));
    $striped-bg: mix($color, $background, percentage($table-striped-bg-factor));
    $active-bg: mix($color, $background, percentage($table-active-bg-factor));
    $table-border-color: mix($color, $background, percentage($table-border-factor));

    --#{$prefix}table-color: #{$color};
    --#{$prefix}table-bg: #{$background};
    --#{$prefix}table-border-color: #{$table-border-color};
    --#{$prefix}table-striped-bg: #{$striped-bg};
    --#{$prefix}table-striped-color: #{color-contrast($striped-bg)};
    --#{$prefix}table-active-bg: #{$active-bg};
    --#{$prefix}table-active-color: #{color-contrast($active-bg)};
    --#{$prefix}table-hover-bg: #{$hover-bg};
    --#{$prefix}table-hover-color: #{color-contrast($hover-bg)};

    color: var(--#{$prefix}table-color);
    border-color: var(--#{$prefix}table-border-color);
  }
}
```

**Usage Example:**

```scss
.table-primary {
  @include table-variant(primary, #f0f8ff);
}

.table-secondary {
  @include table-variant(secondary, #e9ecef);
}
```

This mixin ensures that table elements are styled consistently based on their state, with appropriate background colors, border colors, and hover effects. Adjust the parameters as needed to match the desired appearance and functionality for different table variants.