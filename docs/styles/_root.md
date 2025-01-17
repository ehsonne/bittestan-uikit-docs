# `root.scss` Documentation

## Overview

The `root.scss` file defines CSS custom properties (variables) that provide a consistent way to manage theme colors, fonts, borders, shadows, and other design elements. These variables are used throughout the UI kit to ensure design consistency and ease of customization.

## CSS Custom Properties

### Colors

#### Default Theme Colors

Defines colors for the default and light themes.

```scss
@each $color, $value in $colors {
  --#{$prefix}#{$color}: #{$value};
}

@each $color, $value in $grays {
  --#{$prefix}gray-#{$color}: #{$value};
}

@each $color, $value in $theme-colors {
  --#{$prefix}#{$color}: #{$value};
}

@each $color, $value in $theme-colors-rgb {
  --#{$prefix}#{$color}-rgb: #{$value};
}

@each $color, $value in $theme-colors-text {
  --#{$prefix}#{$color}-text-emphasis: #{$value};
}

@each $color, $value in $theme-colors-bg-subtle {
  --#{$prefix}#{$color}-bg-subtle: #{$value};
}

@each $color, $value in $theme-colors-border-subtle {
  --#{$prefix}#{$color}-border-subtle: #{$value};
}

--#{$prefix}white-rgb: #{to-rgb($white)};
--#{$prefix}black-rgb: #{to-rgb($black)};
```

#### Fonts

Defines font-related variables.

```scss
--#{$prefix}font-sans-serif: #{inspect($font-family-sans-serif)};
--#{$prefix}font-monospace: #{inspect($font-family-monospace)};
--#{$prefix}gradient: #{$gradient};
```

#### Root and Body

Defines font size, font family, font weight, line height, and various body colors.

```scss
@if $font-size-root !=null {
  --#{$prefix}root-font-size: #{$font-size-root};
}

--#{$prefix}body-font-family: #{inspect($font-family-base)};
@include rfs($font-size-base, --#{$prefix}body-font-size);
--#{$prefix}body-font-weight: #{$font-weight-base};
--#{$prefix}body-line-height: #{$line-height-base};

@if $body-text-align !=null {
  --#{$prefix}body-text-align: #{$body-text-align};
}

--#{$prefix}body-color: #{$body-color};
--#{$prefix}body-color-rgb: #{to-rgb($body-color)};
--#{$prefix}body-bg: #{$body-bg};
--#{$prefix}body-bg-rgb: #{to-rgb($body-bg)};

--#{$prefix}emphasis-color: #{$body-emphasis-color};
--#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color)};

--#{$prefix}secondary-color: #{$body-secondary-color};
--#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color)};
--#{$prefix}secondary-bg: #{$body-secondary-bg};
--#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg)};

--#{$prefix}tertiary-color: #{$body-tertiary-color};
--#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color)};
--#{$prefix}tertiary-bg: #{$body-tertiary-bg};
--#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg)};
```

#### Borders

Defines border width, style, color, radius, and shadow.

```scss
--#{$prefix}border-width: #{$border-width};
--#{$prefix}border-style: #{$border-style};
--#{$prefix}border-color: #{$border-color};
--#{$prefix}border-color-translucent: #{$border-color-translucent};

--#{$prefix}border-radius: #{$border-radius};
--#{$prefix}border-radius-sm: #{$border-radius-sm};
--#{$prefix}border-radius-lg: #{$border-radius-lg};
--#{$prefix}border-radius-xl: #{$border-radius-xl};
--#{$prefix}border-radius-xxl: #{$border-radius-xxl};
--#{$prefix}border-radius-2xl: var(--#{$prefix}border-radius-xxl); // Deprecated in v5.3.0 for consistency
--#{$prefix}border-radius-pill: #{$border-radius-pill};
```

#### Box Shadows

Defines various box-shadow properties.

```scss
--#{$prefix}box-shadow: #{$box-shadow};
--#{$prefix}box-shadow-sm: #{$box-shadow-sm};
--#{$prefix}box-shadow-lg: #{$box-shadow-lg};
--#{$prefix}box-shadow-inset: #{$box-shadow-inset};
```

#### Focus Styles

Defines focus ring properties for accessibility.

```scss
--#{$prefix}focus-ring-width: #{$focus-ring-width};
--#{$prefix}focus-ring-opacity: #{$focus-ring-opacity};
--#{$prefix}focus-ring-color: #{$focus-ring-color};
```

#### Form Validation

Defines colors for form validation states.

```scss
--#{$prefix}form-valid-color: #{$form-valid-color};
--#{$prefix}form-valid-border-color: #{$form-valid-border-color};
--#{$prefix}form-invalid-color: #{$form-invalid-color};
--#{$prefix}form-invalid-border-color: #{$form-invalid-border-color};
```

### Dark Mode

When dark mode is enabled, these variables will override the default theme colors.

```scss
@if $enable-dark-mode {
  @include color-mode(dark, true) {
    color-scheme: dark;

    --#{$prefix}body-color: #{$body-color-dark};
    --#{$prefix}body-color-rgb: #{to-rgb($body-color-dark)};
    --#{$prefix}body-bg: #{$body-bg-dark};
    --#{$prefix}body-bg-rgb: #{to-rgb($body-bg-dark)};

    --#{$prefix}emphasis-color: #{$body-emphasis-color-dark};
    --#{$prefix}emphasis-color-rgb: #{to-rgb($body-emphasis-color-dark)};

    --#{$prefix}secondary-color: #{$body-secondary-color-dark};
    --#{$prefix}secondary-color-rgb: #{to-rgb($body-secondary-color-dark)};
    --#{$prefix}secondary-bg: #{$body-secondary-bg-dark};
    --#{$prefix}secondary-bg-rgb: #{to-rgb($body-secondary-bg-dark)};

    --#{$prefix}tertiary-color: #{$body-tertiary-color-dark};
    --#{$prefix}tertiary-color-rgb: #{to-rgb($body-tertiary-color-dark)};
    --#{$prefix}tertiary-bg: #{$body-tertiary-bg-dark};
    --#{$prefix}tertiary-bg-rgb: #{to-rgb($body-tertiary-bg-dark)};

    @each $color, $value in $theme-colors-text-dark {
      --#{$prefix}#{$color}-text-emphasis: #{$value};
    }

    @each $color, $value in $theme-colors-bg-subtle-dark {
      --#{$prefix}#{$color}-bg-subtle: #{$value};
    }

    @each $color, $value in $theme-colors-border-subtle-dark {
      --#{$prefix}#{$color}-border-subtle: #{$value};
    }

    --#{$prefix}heading-color: #{$headings-color-dark};

    --#{$prefix}link-color: #{$link-color-dark};
    --#{$prefix}link-hover-color: #{$link-hover-color-dark};
    --#{$prefix}link-color-rgb: #{to-rgb($link-color-dark)};
    --#{$prefix}link-hover-color-rgb: #{to-rgb($link-hover-color-dark)};

    --#{$prefix}code-color: #{$code-color-dark};
    --#{$prefix}highlight-color: #{$mark-color-dark};
    --#{$prefix}highlight-bg: #{$mark-bg-dark};

    --#{$prefix}border-color: #{$border-color-dark};
    --#{$prefix}border-color-translucent: #{$border-color-translucent-dark};

    --#{$prefix}form-valid-color: #{$form-valid-color-dark};
    --#{$prefix}form-valid-border-color: #{$form-valid-border-color-dark};
    --#{$prefix}form-invalid-color: #{$form-invalid-color-dark};
    --#{$prefix}form-invalid-border-color: #{$form-invalid-border-color-dark};
  }
}
```
