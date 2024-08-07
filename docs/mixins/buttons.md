# `buttons.scss` Documentation

## Overview

The `buttons.scss` file provides mixins for generating various button styles. These mixins help to create consistent button variants with different states such as default, hover, focus, active, and disabled. You can also control button sizes and outline styles using the provided mixins.

## Mixins

### `Styles and styles for hover, focus, active, and disabled states`

Generates default button styles and styles for hover, focus, active, and disabled states.

#### Usage

```scss
@mixin button-variant(
  $background,
  $border,
  $color: color-contrast($background),
  $hover-background: if($color == $color-contrast-light, shade-color($background, $btn-hover-bg-shade-amount), tint-color($background, $btn-hover-bg-tint-amount)),
  $hover-border: if($color == $color-contrast-light, shade-color($border, $btn-hover-border-shade-amount), tint-color($border, $btn-hover-border-tint-amount)),
  $hover-color: color-contrast($hover-background),
  $active-background: if($color == $color-contrast-light, shade-color($background, $btn-active-bg-shade-amount), tint-color($background, $btn-active-bg-tint-amount)),
  $active-border: if($color == $color-contrast-light, shade-color($border, $btn-active-border-shade-amount), tint-color($border, $btn-active-border-tint-amount)),
  $active-color: color-contrast($active-background),
  $disabled-background: $background,
  $disabled-border: $border,
  $disabled-color: color-contrast($disabled-background)
) {
  --#{$prefix}btn-color: #{$color};
  --#{$prefix}btn-bg: #{$background};
  --#{$prefix}btn-border-color: #{$border};
  --#{$prefix}btn-hover-color: #{$hover-color};
  --#{$prefix}btn-hover-bg: #{$hover-background};
  --#{$prefix}btn-hover-border-color: #{$hover-border};
  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb(mix($color, $border, 15%))};
  --#{$prefix}btn-active-color: #{$active-color};
  --#{$prefix}btn-active-bg: #{$active-background};
  --#{$prefix}btn-active-border-color: #{$active-border};
  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
  --#{$prefix}btn-disabled-color: #{$disabled-color};
  --#{$prefix}btn-disabled-bg: #{$disabled-background};
  --#{$prefix}btn-disabled-border-color: #{$disabled-border};
}
```

**Parameters:**

- `$background`: The background color of the button.
- `$border`: The border color of the button.
- `$color`: The text color of the button. Defaults to the color contrast of `$background`.
- `$hover-background`: The background color on hover. Defaults to a shade or tint of `$background`.
- `$hover-border`: The border color on hover. Defaults to a shade or tint of `$border`.
- `$hover-color`: The text color on hover. Defaults to the color contrast of `$hover-background`.
- `$active-background`: The background color when the button is active. Defaults to a shade or tint of `$background`.
- `$active-border`: The border color when the button is active. Defaults to a shade or tint of `$border`.
- `$active-color`: The text color when the button is active. Defaults to the color contrast of `$active-background`.
- `$disabled-background`: The background color when the button is disabled. Defaults to `$background`.
- `$disabled-border`: The border color when the button is disabled. Defaults to `$border`.
- `$disabled-color`: The text color when the button is disabled. Defaults to the color contrast of `$disabled-background`.

**Usage Example:**

```scss
.btn-primary {
  @include button-variant(#007bff, #007bff);
}
```

### `Styles for outline button variants`

Generates styles for outline button variants.

#### Usage

```scss
@mixin button-outline-variant(
  $color,
  $color-hover: color-contrast($color),
  $active-background: $color,
  $active-border: $color,
  $active-color: color-contrast($active-background)
) {
  --#{$prefix}btn-color: #{$color};
  --#{$prefix}btn-border-color: #{$color};
  --#{$prefix}btn-hover-color: #{$color-hover};
  --#{$prefix}btn-hover-bg: #{$active-background};
  --#{$prefix}btn-hover-border-color: #{$active-border};
  --#{$prefix}btn-focus-shadow-rgb: #{to-rgb($color)};
  --#{$prefix}btn-active-color: #{$active-color};
  --#{$prefix}btn-active-bg: #{$active-background};
  --#{$prefix}btn-active-border-color: #{$active-border};
  --#{$prefix}btn-active-shadow: #{$btn-active-box-shadow};
  --#{$prefix}btn-disabled-color: #{$color};
  --#{$prefix}btn-disabled-bg: transparent;
  --#{$prefix}btn-disabled-border-color: #{$color};
  --#{$prefix}gradient: none;
}
```

**Parameters:**

- `$color`: The border and text color of the button.
- `$color-hover`: The text color on hover. Defaults to the color contrast of `$color`.
- `$active-background`: The background color when the button is active. Defaults to `$color`.
- `$active-border`: The border color when the button is active. Defaults to `$color`.
- `$active-color`: The text color when the button is active. Defaults to the color contrast of `$active-background`.

**Usage Example:**

```scss
.btn-outline-primary {
  @include button-outline-variant(#007bff);
}
```

### `button-size($padding-y, $padding-x, $font-size, $border-radius)`

Sets the size, font size, and border radius for buttons.

#### Usage

```scss
@mixin button-size($padding-y, $padding-x, $font-size, $border-radius) {
  --#{$prefix}btn-padding-y: #{$padding-y};
  --#{$prefix}btn-padding-x: #{$padding-x};
  @include rfs($font-size, --#{$prefix}btn-font-size);
  --#{$prefix}btn-border-radius: #{$border-radius};
}
```

**Parameters:**

- `$padding-y`: Vertical padding for the button.
- `$padding-x`: Horizontal padding for the button.
- `$font-size`: Font size for the button text.
- `$border-radius`: Border radius for the button.

**Usage Example:**

```scss
.btn-large {
  @include button-size(0.5rem, 1rem, 1rem, 0.3rem);
}
```

## Variables

- `$btn-hover-bg-shade-amount`: Amount to shade the background color on hover.
- `$btn-hover-bg-tint-amount`: Amount to tint the background color on hover.
- `$btn-hover-border-shade-amount`: Amount to shade the border color on hover.
- `$btn-hover-border-tint-amount`: Amount to tint the border color on hover.
- `$btn-active-bg-shade-amount`: Amount to shade the background color when active.
- `$btn-active-bg-tint-amount`: Amount to tint the background color when active.
- `$btn-active-border-shade-amount`: Amount to shade the border color when active.
- `$btn-active-border-tint-amount`: Amount to tint the border color when active.
- `$btn-active-box-shadow`: Box-shadow for the active state.
- `$prefix`: A prefix used for CSS custom properties.

## Notes

- Ensure that the variables such as `$btn-active-box-shadow` and `$prefix` are defined in your project for these mixins to work correctly.
- Adjust the color and size parameters according to your design requirements to maintain consistency across your buttons.
