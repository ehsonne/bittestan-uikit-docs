# `maps.scss` Documentation

## Overview

The `maps.scss` file contains Sass maps that define the theme colors, text colors, background colors, and border colors used throughout the UI kit. These maps are essential for maintaining consistency in the design and can be customized to fit different themes or branding requirements.

## Maps

### `theme-colors-rgb`

Maps theme colors to their RGB equivalents.

```scss
$theme-colors-rgb: map-loop($theme-colors, to-rgb, "$value") !default;
```

### `theme-colors-text`

Defines text colors for different theme variants.

```scss
$theme-colors-text: (
  "primary": $primary-text-emphasis,
  "secondary": $secondary-text-emphasis,
  "success": $success-text-emphasis,
  "info": $info-text-emphasis,
  "warning": $warning-text-emphasis,
  "danger": $danger-text-emphasis,
  "light": $light-text-emphasis,
  "dark": $dark-text-emphasis,
) !default;
```

### `theme-colors-bg-subtle`

Defines subtle background colors for different theme variants.

```scss
$theme-colors-bg-subtle: (
  "primary": $primary-bg-subtle,
  "secondary": $secondary-bg-subtle,
  "success": $success-bg-subtle,
  "info": $info-bg-subtle,
  "warning": $warning-bg-subtle,
  "danger": $danger-bg-subtle,
  "light": $light-bg-subtle,
  "dark": $dark-bg-subtle,
) !default;
```

### `theme-colors-border-subtle`

Defines subtle border colors for different theme variants.

```scss
$theme-colors-border-subtle: (
  "primary": $primary-border-subtle,
  "secondary": $secondary-border-subtle,
  "success": $success-border-subtle,
  "info": $info-border-subtle,
  "warning": $warning-border-subtle,
  "danger": $danger-border-subtle,
  "light": $light-border-subtle,
  "dark": $dark-border-subtle,
) !default;
```

### Dark Mode Maps

When dark mode is enabled, the following maps define the text, background, and border colors for dark mode themes.

#### `theme-colors-text-dark`

Defines text colors for different theme variants in dark mode.

```scss
$theme-colors-text-dark: (
  "primary": $primary-text-emphasis-dark,
  "secondary": $secondary-text-emphasis-dark,
  "success": $success-text-emphasis-dark,
  "info": $info-text-emphasis-dark,
  "warning": $warning-text-emphasis-dark,
  "danger": $danger-text-emphasis-dark,
  "light": $light-text-emphasis-dark,
  "dark": $dark-text-emphasis-dark,
) !default;
```

#### `theme-colors-bg-subtle-dark`

Defines subtle background colors for different theme variants in dark mode.

```scss
$theme-colors-bg-subtle-dark: (
  "primary": $primary-bg-subtle-dark,
  "secondary": $secondary-bg-subtle-dark,
  "success": $success-bg-subtle-dark,
  "info": $info-bg-subtle-dark,
  "warning": $warning-bg-subtle-dark,
  "danger": $danger-bg-subtle-dark,
  "light": $light-bg-subtle-dark,
  "dark": $dark-bg-subtle-dark,
) !default;
```

#### `theme-colors-border-subtle-dark`

Defines subtle border colors for different theme variants in dark mode.

```scss
$theme-colors-border-subtle-dark: (
  "primary": $primary-border-subtle-dark,
  "secondary": $secondary-border-subtle-dark,
  "success": $success-border-subtle-dark,
  "info": $info-border-subtle-dark,
  "warning": $warning-border-subtle-dark,
  "danger": $danger-border-subtle-dark,
  "light": $light-border-subtle-dark,
  "dark": $dark-border-subtle-dark,
) !default;
```

### Utilities Maps

#### `utilities-colors`

Maps theme colors to RGB values for utility classes.

```scss
$utilities-colors: $theme-colors-rgb !default;
```

#### `utilities-text-colors`

Defines text colors for utility classes.

```scss
$utilities-text: map-merge($utilities-colors,
    ("black": to-rgb($black),
     "white": to-rgb($white),
     "body": to-rgb($body-color))) !default;
$utilities-text-colors: map-loop($utilities-text, rgba-css-var, "$key", "text") !default;
```

#### `utilities-text-emphasis-colors`

Defines emphasis text colors for utility classes.

```scss
$utilities-text-emphasis-colors: (
  "primary-emphasis": var(--#{$prefix}primary-text-emphasis),
  "secondary-emphasis": var(--#{$prefix}secondary-text-emphasis),
  "success-emphasis": var(--#{$prefix}success-text-emphasis),
  "info-emphasis": var(--#{$prefix}info-text-emphasis),
  "warning-emphasis": var(--#{$prefix}warning-text-emphasis),
  "danger-emphasis": var(--#{$prefix}danger-text-emphasis),
  "light-emphasis": var(--#{$prefix}light-text-emphasis),
  "dark-emphasis": var(--#{$prefix}dark-text-emphasis)) !default;
```

#### `utilities-bg-colors`

Defines background colors for utility classes.

```scss
$utilities-bg: map-merge($utilities-colors,
    ("black": to-rgb($black),
     "white": to-rgb($white),
     "body": to-rgb($body-bg))) !default;
$utilities-bg-colors: map-loop($utilities-bg, rgba-css-var, "$key", "bg") !default;
```

#### `utilities-bg-subtle`

Defines subtle background colors for utility classes.

```scss
$utilities-bg-subtle: (
  "primary-subtle": var(--#{$prefix}primary-bg-subtle),
  "secondary-subtle": var(--#{$prefix}secondary-bg-subtle),
  "success-subtle": var(--#{$prefix}success-bg-subtle),
  "info-subtle": var(--#{$prefix}info-bg-subtle),
  "warning-subtle": var(--#{$prefix}warning-bg-subtle),
  "danger-subtle": var(--#{$prefix}danger-bg-subtle),
  "light-subtle": var(--#{$prefix}light-bg-subtle),
  "dark-subtle": var(--#{$prefix}dark-bg-subtle)) !default;
```

#### `utilities-border-colors`

Defines border colors for utility classes.

```scss
$utilities-border: map-merge($utilities-colors,
    ("black": to-rgb($black),
     "white": to-rgb($white))) !default;
$utilities-border-colors: map-loop($utilities-border, rgba-css-var, "$key", "border") !default;
```

#### `utilities-border-subtle`

Defines subtle border colors for utility classes.

```scss
$utilities-border-subtle: (
  "primary-subtle": var(--#{$prefix}primary-border-subtle),
  "secondary-subtle": var(--#{$prefix}secondary-border-subtle),
  "success-subtle": var(--#{$prefix}success-border-subtle),
  "info-subtle": var(--#{$prefix}info-border-subtle),
  "warning-subtle": var(--#{$prefix}warning-border-subtle),
  "danger-subtle": var(--#{$prefix}danger-border-subtle),
  "light-subtle": var(--#{$prefix}light-border-subtle),
  "dark-subtle": var(--#{$prefix}dark-border-subtle)) !default;
```

#### `utilities-links-underline`

Defines link underline colors for utility classes.

```scss
$utilities-links-underline: map-loop($utilities-colors, rgba-css-var, "$key", "link-underline") !default;
```

### Other Maps

#### `negative-spacers`

Maps spacers to negative values if negative margins are enabled.

```scss
$negative-spacers: if($enable-negative-margins, negativify-map($spacers), null) !default;
```

#### `gutters`

Maps spacers to gutters for layout spacing.

```scss
$gutters: $spacers !default;
```