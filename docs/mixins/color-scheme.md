# `color-scheme.scss` Documentation

## Overview

The `color-scheme.scss` file provides a mixin for applying styles based on the user's preferred color scheme. This is useful for creating responsive designs that adapt to light and dark mode preferences.

## Mixins

### `color-scheme($name)`

Applies styles based on the user's preferred color scheme.

#### Usage

```scss
@mixin color-scheme($name) {
  @media (prefers-color-scheme: #{$name}) {
    @content;
  }
}
```

**Parameters:**

- `$name`: The color scheme to target. Options are `light` and `dark`.

**Usage Examples:**

1. **Applying Styles for Dark Mode:**

   ```scss
   @include color-scheme(dark) {
     background-color: #333;
     color: #fff;
   }
   ```

   This will apply dark mode styles when the user's system preference is set to dark mode.

2. **Applying Styles for Light Mode:**

   ```scss
   @include color-scheme(light) {
     background-color: #fff;
     color: #000;
   }
   ```

   This will apply light mode styles when the user's system preference is set to light mode.

## Notes

- The mixin uses the `prefers-color-scheme` media feature to target the user's system color scheme preference.
- Ensure that the `$name` parameter matches either `light` or `dark` to apply the correct styles based on the user's preference.
