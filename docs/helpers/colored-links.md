# `colored-links.scss` Documentation

## Overview

The `colored-links.scss` file is part of the UI kit and provides utility classes for styling links with theme colors. It also includes special handling for link hover and focus states.

## Functionality

### RGBA Function Note

The file uses an all-caps `RGBA()` function due to a known Sass bug. For more information, refer to the [Sass issue #2251](https://github.com/sass/node-sass/issues/2251).

### Utility Classes

The file generates CSS utility classes for links based on the colors defined in the `$theme-colors` map. The generated classes include:

- **Text Color**: The color of the link.
- **Text Decoration Color**: The color of the underline or text decoration of the link.
- **Hover and Focus States**: Adjusted colors for hover and focus states based on a shading or tinting percentage.

## Generated Classes

For each color in `$theme-colors`, the following classes are generated:

```scss
.bt-link-<color> {
  color: RGBA(var(--<prefix><color>-rgb), var(--<prefix>link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--<prefix><color>-rgb), var(--<prefix>link-underline-opacity, 1)) !important;

  @if $link-shade-percentage != 0 {
    &:hover,
    &:focus {
      $hover-color: if(color-contrast(<color-value>) == $color-contrast-light,
                        shade-color(<color-value>, $link-shade-percentage),
                        tint-color(<color-value>, $link-shade-percentage));
      color: RGBA(#{to-rgb($hover-color)}, var(--<prefix>link-opacity, 1)) !important;
      text-decoration-color: RGBA(to-rgb($hover-color), var(--<prefix>link-underline-opacity, 1)) !important;
    }
  }
}
```

### Special Link Helper

In addition to the theme-based link classes, there is a special one-off helper:

```scss
.bt-link-body-emphasis {
  color: RGBA(var(--<prefix>emphasis-color-rgb), var(--<prefix>link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--<prefix>emphasis-color-rgb), var(--<prefix>link-underline-opacity, 1)) !important;

  @if $link-shade-percentage != 0 {
    &:hover,
    &:focus {
      color: RGBA(var(--<prefix>emphasis-color-rgb), var(--<prefix>link-opacity, .75)) !important;
      text-decoration-color: RGBA(var(--<prefix>emphasis-color-rgb), var(--<prefix>link-underline-opacity, .75)) !important;
    }
  }
}
```

### Variables

- `$theme-colors`: A map containing color names and their corresponding values.
- `$enable-important-utilities`: A boolean variable that determines whether `!important` should be added to the CSS rules.
- `$link-shade-percentage`: The percentage used for shading or tinting the link color on hover and focus.

## Example

Assuming `$theme-colors` contains:

```scss
$theme-colors: (
  primary: #007bff,
  secondary: #6c757d
);
```

The generated classes would be:

```scss
.bt-link-primary {
  color: RGBA(var(--prefix-primary-rgb), var(--prefix-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--prefix-primary-rgb), var(--prefix-link-underline-opacity, 1)) !important;

  &:hover,
  &:focus {
    color: RGBA(to-rgb(shade-color(#007bff, $link-shade-percentage)), var(--prefix-link-opacity, 1)) !important;
    text-decoration-color: RGBA(to-rgb(shade-color(#007bff, $link-shade-percentage)), var(--prefix-link-underline-opacity, 1)) !important;
  }
}

.bt-link-secondary {
  color: RGBA(var(--prefix-secondary-rgb), var(--prefix-link-opacity, 1)) !important;
  text-decoration-color: RGBA(var(--prefix-secondary-rgb), var(--prefix-link-underline-opacity, 1)) !important;

  &:hover,
  &:focus {
    color: RGBA(to-rgb(shade-color(#6c757d, $link-shade-percentage)), var(--prefix-link-opacity, 1)) !important;
    text-decoration-color: RGBA(to-rgb(shade-color(#6c757d, $link-shade-percentage)), var(--prefix-link-underline-opacity, 1)) !important;
  }
}
```

## Customization

- **Prefix Variable**: Customize `--<prefix>` to fit your project's needs.
- **Link Opacity**: Adjust `var(--<prefix>link-opacity)` to set the desired link text opacity.
- **Link Underline Opacity**: Adjust `var(--<prefix>link-underline-opacity)` to set the desired underline opacity.
- **Link Shade Percentage**: Modify `$link-shade-percentage` to change the shading or tinting effect on hover and focus states.

## References

- [Sass Issue #2251](https://github.com/sass/node-sass/issues/2251)