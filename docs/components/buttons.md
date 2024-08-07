# Button Styles and Variants

This section details the SCSS for defining the base styles, variants, and sizes for buttons within the framework. The styles include base variables, different button states, alternative button variants, link buttons, and size modifications.

## Base Styles

The `.bt-btn` class defines the base styles for all buttons, utilizing CSS variables for easy customization and reusability.

```scss
.bt-btn {
  // Define button CSS variables
  --#{$prefix}btn-padding-x: #{$btn-padding-x};
  --#{$prefix}btn-padding-y: #{$btn-padding-y};
  --#{$prefix}btn-font-family: #{$btn-font-family};
  @include rfs($btn-font-size, --#{$prefix}btn-font-size);
  --#{$prefix}btn-font-weight: #{$btn-font-weight};
  --#{$prefix}btn-line-height: #{$btn-line-height};
  --#{$prefix}btn-color: #{$btn-color};
  --#{$prefix}btn-bg: transparent;
  --#{$prefix}btn-border-width: #{$btn-border-width};
  --#{$prefix}btn-border-color: transparent;
  --#{$prefix}btn-border-radius: #{$btn-border-radius};
  --#{$prefix}btn-hover-border-color: transparent;
  --#{$prefix}btn-box-shadow: #{$btn-box-shadow};
  --#{$prefix}btn-disabled-opacity: #{$btn-disabled-opacity};
  --#{$prefix}btn-focus-box-shadow: 0 0 0 #{$btn-focus-width} rgba(var(--#{$prefix}btn-focus-shadow-rgb), .5);

  // Base button styles
  display: inline-block;
  padding: var(--#{$prefix}btn-padding-y) var(--#{$prefix}btn-padding-x);
  font-family: var(--#{$prefix}btn-font-family);
  @include font-size(var(--#{$prefix}btn-font-size));
  font-weight: var(--#{$prefix}btn-font-weight);
  line-height: var(--#{$prefix}btn-line-height);
  color: var(--#{$prefix}btn-color);
  text-align: center;
  text-decoration: if($link-decoration == none, null, none);
  white-space: $btn-white-space;
  vertical-align: middle;
  cursor: if($enable-button-pointers, pointer, null);
  user-select: none;
  border: var(--#{$prefix}btn-border-width) solid var(--#{$prefix}btn-border-color);
  @include border-radius(var(--#{$prefix}btn-border-radius));
  @include gradient-bg(var(--#{$prefix}btn-bg));
  @include box-shadow(var(--#{$prefix}btn-box-shadow));
  @include transition($btn-transition);

  // Define button hover states
  &:hover {
    color: var(--#{$prefix}btn-hover-color);
    text-decoration: if($link-hover-decoration == underline, none, null);
    background-color: var(--#{$prefix}btn-hover-bg);
    border-color: var(--#{$prefix}btn-hover-border-color);
  }

  // Other button states (focus, active, disabled) defined below...
}
```

### Key Features:
- **CSS Variables:** Variables like `--#{$prefix}btn-padding-x` allow for easy theming and customization.
- **Responsiveness:** The `@include rfs()` mixin ensures font sizes are responsive.
- **State Management:** States like `:hover`, `:focus-visible`, and `:disabled` are managed with appropriate color and border changes.

## Button Variants

Button variants are generated for each color defined in `$theme-colors`. These variants include regular and outline styles.

```scss
// Button color variants
@each $color, $value in $theme-colors {
  .bt-btn-#{$color} {
    @if $color == "light" {
      @include button-variant($value,
        $value,
        $hover-background: shade-color($value, $btn-hover-bg-shade-amount),
        $hover-border: shade-color($value, $btn-hover-border-shade-amount),
        $active-background: shade-color($value, $btn-active-bg-shade-amount),
        $active-border: shade-color($value, $btn-active-border-shade-amount));
    }
    @else if $color == "dark" {
      @include button-variant($value,
        $value,
        $hover-background: tint-color($value, $btn-hover-bg-tint-amount),
        $hover-border: tint-color($value, $btn-hover-border-tint-amount),
        $active-background: tint-color($value, $btn-active-bg-tint-amount),
        $active-border: tint-color($value, $btn-active-border-tint-amount));
    }
    @else {
      @include button-variant($value, $value);
    }
  }
}

// Button outline variants
@each $color, $value in $theme-colors {
  .bt-btn-outline-#{$color} {
    @include button-outline-variant($value);
  }
}
```

### Key Features:
- **Theme Colors:** Variants are automatically generated based on the `$theme-colors` map.
- **Custom Variants:** Special handling for "light" and "dark" colors to provide appropriate contrast in different states.

## Link Buttons

The `.bt-btn-link` class makes a button look and behave like a hyperlink.

```scss
.bt-btn-link {
  --#{$prefix}btn-font-weight: #{$font-weight-normal};
  --#{$prefix}btn-color: #{$btn-link-color};
  --#{$prefix}btn-bg: transparent;
  --#{$prefix}btn-border-color: transparent;
  --#{$prefix}btn-hover-color: #{$btn-link-hover-color};
  --#{$prefix}btn-hover-border-color: transparent;
  --#{$prefix}btn-active-color: #{$btn-link-hover-color};
  --#{$prefix}btn-active-border-color: transparent;
  --#{$prefix}btn-disabled-color: #{$btn-link-disabled-color};
  --#{$prefix}btn-box-shadow: 0 0 0 #000;

  text-decoration: $link-decoration;

  @if $enable-gradients {
    background-image: none;
  }

  &:hover,
  &:focus-visible {
    text-decoration: $link-hover-decoration;
  }

  &:focus-visible {
    color: var(--#{$prefix}btn-color);
  }

  &:hover {
    color: var(--#{$prefix}btn-hover-color);
  }
}
```

### Key Features:
- **No Background:** `background-color` and `border-color` are set to `transparent` to mimic link behavior.
- **Text Decoration:** The text decoration changes on hover and focus for a traditional link look.

## Button Sizes

Different button sizes are handled with the `.bt-btn-lg` and `.bt-btn-sm` classes.

```scss
.bt-btn-lg {
  @include button-size($btn-padding-y-lg, $btn-padding-x-lg, $btn-font-size-lg, $btn-border-radius-lg);
}

.bt-btn-sm {
  @include button-size($btn-padding-y-sm, $btn-padding-x-sm, $btn-font-size-sm, $btn-border-radius-sm);
}
```

### Key Features:
- **Custom Sizes:** Easily modify button padding, font size, and border-radius by using different classes.
- **Responsive:** The sizes are defined using mixins that ensure consistency across different screen sizes.

## Summary

This documentation covers the base button styles, variant generation, link button behavior, and sizing options for buttons. By leveraging these SCSS rules, you can create a wide variety of button styles that are consistent, responsive, and customizable.
