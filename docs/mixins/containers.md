# `containers.scss` Documentation

## Overview

The `containers.scss` file provides a mixin for creating responsive containers with customizable gutters. Containers are used to center and pad content within the viewport.

## Mixins

### `make-container($gutter: $container-padding-x)`

Creates a responsive container with customizable gutter widths.

#### Usage

```scss
@mixin make-container($gutter: $container-padding-x) {
  --#{$prefix}gutter-x: #{$gutter};
  --#{$prefix}gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  margin-right: auto;
  margin-left: auto;
}
```

**Parameters:**

- `$gutter`: The horizontal padding (gutter) for the container. Defaults to `$container-padding-x`.

**Usage Examples:**

1. **Creating a Default Container:**

   ```scss
   .container {
     @include make-container;
   }
   ```

   This will create a container with default gutter values specified by `$container-padding-x`.

2. **Creating a Container with Custom Gutter:**

   ```scss
   .container-custom {
     @include make-container(1rem);
   }
   ```

   This will create a container with a horizontal gutter of `1rem`.

## Notes

- The mixin sets the `padding-right` and `padding-left` to half of the specified gutter value to center the content within the container.
- The container's width is set to `100%` and margins are set to `auto` to ensure it is centered horizontally.
- Ensure that the `$prefix` variable is defined in your project to apply the appropriate CSS variable names.
