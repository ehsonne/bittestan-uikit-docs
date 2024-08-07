# `pagination.scss` Documentation

## Overview

The `pagination.scss` file provides mixins for styling pagination components. These mixins are used to set consistent sizes and spacing for pagination elements.

## Mixins

### `pagination-size`

Sets the padding, font size, and border radius for pagination elements.

#### Parameters

- **`$padding-y`**: The vertical padding for pagination items.
- **`$padding-x`**: The horizontal padding for pagination items.
- **`$font-size`**: The font size for pagination items.
- **`$border-radius`**: The border radius for pagination items.

#### Usage

```scss
@mixin pagination-size($padding-y, $padding-x, $font-size, $border-radius) {
  --#{$prefix}pagination-padding-x: #{$padding-x};
  --#{$prefix}pagination-padding-y: #{$padding-y};
  @include rfs($font-size, --#{$prefix}pagination-font-size);
  --#{$prefix}pagination-border-radius: #{$border-radius};
}
```

**Usage Example:**

```scss
.pagination {
  @include pagination-size(0.5rem, 1rem, 0.875rem, 0.25rem);
}
```

This mixin helps to ensure that pagination components have a consistent size and appearance, adhering to design requirements and maintaining uniformity across different parts of a project.
