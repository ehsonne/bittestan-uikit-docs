# `transition.scss` Documentation

## Overview

The `transition.scss` file provides a mixin for applying CSS transitions with options for reduced motion settings. This mixin allows you to define transitions for different properties and handle cases where the user prefers reduced motion.

## Mixins

### `transition`

Applies CSS transitions to an element. You can specify multiple transition properties and durations. The mixin also supports handling reduced motion preferences.

#### Parameters

- **`$transition...`**: One or more transition properties, such as `transition: property duration timing-function delay;`. If no arguments are provided, the mixin defaults to using `$transition-base`.

#### Usage

```scss
@mixin transition($transition...) {
  @if length($transition)==0 {
    $transition: $transition-base;
  }

  @if length($transition)>1 {
    @each $value in $transition {
      @if $value ==null or $value ==none {
        @warn "The keyword 'none' or 'null' must be used as a single argument.";
      }
    }
  }

  @if $enable-transitions {
    @if nth($transition, 1) !=null {
      transition: $transition;
    }

    @if $enable-reduced-motion and nth($transition, 1) !=null and nth($transition, 1) !=none {
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }
  }
}
```

**Usage Example:**

```scss
.button {
  @include transition(all 0.3s ease-in-out);
}

.card {
  @include transition(transform 0.5s ease-in-out, opacity 0.5s ease-in-out);
}
```

**Notes:**

- If no arguments are provided, the mixin defaults to `$transition-base`, which should be defined elsewhere in your styles.
- The mixin handles cases where the user prefers reduced motion by applying `transition: none` if the `prefers-reduced-motion` media query is active.
- Use the `@warn` directive to alert if `none` or `null` is provided as a single argument, as it is not valid in this context.

This mixin ensures that transitions are applied consistently and respects user preferences for reduced motion.