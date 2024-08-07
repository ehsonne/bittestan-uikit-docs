# `color-mode.scss` Documentation

## Overview

The `color-mode.scss` file provides a mixin for handling color modes, such as light and dark themes. It allows you to apply styles based on the user's color scheme preference or a specific data attribute.

## Mixins

### `color-mode($mode: light, $root: false)`

Applies styles based on the user's color scheme preference or a specific data attribute for color mode.

#### Usage

```scss
@mixin color-mode($mode: light, $root: false) {
  @if $color-mode-type == "media-query" {
    @if $root == true {
      @media (prefers-color-scheme: $mode) {
        :root {
          @content;
        }
      }
    }

    @else {
      @media (prefers-color-scheme: $mode) {
        @content;
      }
    }
  }

  @else {
    [data-bs-theme="#{$mode}"] {
      @content;
    }
  }
}
```

**Parameters:**

- `$mode`: The color mode to apply. Options are `light` and `dark`. Defaults to `light`.
- `$root`: A boolean flag indicating whether to apply styles to the `:root` element. Defaults to `false`.

**Usage Examples:**

1. **Applying Styles Based on User's Color Scheme Preference:**

   ```scss
   @include color-mode(dark) {
     background-color: #333;
     color: #fff;
   }
   ```

   This will apply dark mode styles when the user's system preference is set to dark mode.

2. **Applying Styles to `:root` Element for User's Color Scheme Preference:**

   ```scss
   @include color-mode(dark, true) {
     --background-color: #333;
     --text-color: #fff;
   }
   ```

   This will set CSS variables for dark mode when the user's system preference is set to dark mode.

3. **Applying Styles Based on a Specific Data Attribute:**

   ```scss
   @include color-mode(dark) {
     background-color: #333;
     color: #fff;
   }
   ```

   This will apply dark mode styles to elements with a data attribute `data-bs-theme="dark"`.

## Variables

- `$color-mode-type`: Determines whether to use media queries or data attributes. Options are `"media-query"` and `"data-attribute"`. This variable should be set globally in your project.

## Notes

- Ensure that `$color-mode-type` is correctly set to either `"media-query"` or `"data-attribute"` based on your preference.
- The mixin assumes that color mode switching is either based on media queries for user preferences or a data attribute on the HTML elements. Adjust as necessary for your implementation.
