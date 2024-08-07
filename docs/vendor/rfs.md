# RFS (Responsive Font Sizes) SCSS

The `rfs.scss` file contains a set of SCSS mixins and functions for creating responsive font sizes, paddings, margins, and other properties. It uses various configuration options to adjust values based on screen size and other factors.

## Configuration

### Base Value
- **`$rfs-base-value`**: The base value for responsive calculations, default is `1.25rem`.

### Units
- **`$rfs-unit`**: The unit to use for calculations, either `rem` or `px`. Default is `rem`.

### Breakpoint
- **`$rfs-breakpoint`**: The screen width at which values start decreasing, default is `1200px`.
- **`$rfs-breakpoint-unit`**: Unit for the breakpoint, either `px`, `em`, or `rem`. Default is `px`.

### Two-Dimensional
- **`$rfs-two-dimensional`**: Whether to resize values based on both width and height. Default is `false`.

### Factor
- **`$rfs-factor`**: Factor for decreasing values. Must be greater than 1. Default is `10`.

### Mode
- **`$rfs-mode`**: Mode for media queries, either `min-media-query` or `max-media-query`. Default is `min-media-query`.

### Classes
- **`$rfs-class`**: Enable or disable classes for responsive design. Options are `false`, `"enable"`, or `"disable"`. Default is `false`.

### Rem Value
- **`$rfs-rem-value`**: The pixel value of `1rem`, default is `16`.

### Safari Iframe Resize Bug Fix
- **`$rfs-safari-iframe-resize-bug-fix`**: Fix for Safari iframe resize bug. Default is `false`.

### Enable RFS
- **`$enable-rfs`**: Enable or disable RFS. Default is `true`.

## Functions

### `divide($dividend, $divisor, $precision: 10)`
Divides `$dividend` by `$divisor` with a specified precision and returns the result.

### `rfs-value($values)`
Returns the formatted non-responsive value for `$values`.

### `rfs-fluid-value($values)`
Returns the responsive value calculated by RFS for `$values`.

## Mixins

### `rfs($values, $property: font-size)`
Generates responsive styles for a given CSS property. Supports both responsive and non-responsive values.

### `font-size($value)`
Shorthand for applying responsive font sizes.

### `padding($value)`
Shorthand for applying responsive padding.

### `padding-top($value)`
Shorthand for applying responsive padding-top.

### `padding-right($value)`
Shorthand for applying responsive padding-right.

### `padding-bottom($value)`
Shorthand for applying responsive padding-bottom.

### `padding-left($value)`
Shorthand for applying responsive padding-left.

### `margin($value)`
Shorthand for applying responsive margin.

### `margin-top($value)`
Shorthand for applying responsive margin-top.

### `margin-right($value)`
Shorthand for applying responsive margin-right.

### `margin-bottom($value)`
Shorthand for applying responsive margin-bottom.

### `margin-left($value)`
Shorthand for applying responsive margin-left.

## Internal Mixins

### `_rfs-media-query`
Determines the appropriate media query based on configuration.

### `_rfs-rule`
Adds disable classes to the selector if needed.

### `_rfs-media-query-rule`
Adds enable classes to the selector if needed.

## Notes
- The file contains custom error messages to handle incorrect configurations.
- It includes a workaround for a Safari iframe resize bug.
- The `rfs` mixin adapts values based on screen size and optionally includes fixes for specific bugs.

For detailed usage and additional customization, refer to the source code or the repository documentation.
