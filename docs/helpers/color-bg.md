# `color-bg.scss` Documentation

## Overview

The `color-bg.scss` file is part of the UI kit's helpers directory. It is designed to generate utility classes for setting text color and background color based on the theme colors.

## Functionality

### RGBA Function Note

The file uses an all-caps `RGBA()` function due to a known Sass bug. For more information, refer to the [Sass issue #2251](https://github.com/sass/node-sass/issues/2251).

### Utility Classes

The file iterates over the theme colors defined in the `$theme-colors` map and creates CSS utility classes for each color. The generated classes include:

- `color`: The text color of the element.
- `background-color`: The background color of the element, with support for opacity.

## Generated Classes

For each color in `$theme-colors`, the following classes are generated:

```scss
.bt-text-bg-<color> {
  color: color-contrast(<color-value>) !important;
  background-color: RGBA(var(--<prefix><color>-rgb), var(--<prefix>bg-opacity, 1)) !important;
}
```

### Variables

- `$theme-colors`: A map containing the color names and their corresponding values.
- `$enable-important-utilities`: A boolean variable that determines whether `!important` should be added to the CSS rules.

### Example

Assuming `$theme-colors` contains a color entry like:

```scss
$theme-colors: (
  primary: #007bff,
  secondary: #6c757d
);
```

The generated classes would be:

```scss
.bt-text-bg-primary {
  color: color-contrast(#007bff) !important;
  background-color: RGBA(var(--prefix-primary-rgb), var(--prefix-bg-opacity, 1)) !important;
}

.bt-text-bg-secondary {
  color: color-contrast(#6c757d) !important;
  background-color: RGBA(var(--prefix-secondary-rgb), var(--prefix-bg-opacity, 1)) !important;
}
```

## Customization

- **Prefix Variable**: You can customize the `--<prefix>` to fit your project's needs.
- **Opacity**: Adjust the `var(--prefix-bg-opacity, 1)` to set the desired background opacity.

## References

- [Sass Issue #2251](https://github.com/sass/node-sass/issues/2251)