# `breakpoints.scss` Documentation

## Overview

The `breakpoints.scss` file provides mixins and functions for managing responsive design breakpoints in your stylesheets. These utilities make it easy to apply styles conditionally based on the viewport width, and they support a range of responsive design use cases.

## Breakpoints

Breakpoints are defined as a map of names to minimum width values. By default, the `$grid-breakpoints` variable provides these values:

```scss
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

## Functions

### `breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints))`

Returns the name of the next breakpoint after the specified breakpoint name.

#### Usage

```scss
@function breakpoint-next($name, $breakpoints: $grid-breakpoints, $breakpoint-names: map-keys($breakpoints)) {
  $n: index($breakpoint-names, $name);

  @if not $n {
    @error "breakpoint `#{$name}` not found in `#{$breakpoints}`";
  }

  @return if($n < length($breakpoint-names), nth($breakpoint-names, $n + 1), null);
}
```

**Parameters:**

- `$name`: The current breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.
- `$breakpoint-names`: List of breakpoint names. Defaults to keys of `$breakpoints`.

**Returns:**

- The name of the next breakpoint, or `null` if the specified breakpoint is the last one.

### `breakpoint-min($name, $breakpoints: $grid-breakpoints)`

Returns the minimum width of the specified breakpoint.

#### Usage

```scss
@function breakpoint-min($name, $breakpoints: $grid-breakpoints) {
  $min: map-get($breakpoints, $name);
  @return if($min != 0, $min, null);
}
```

**Parameters:**

- `$name`: The breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.

**Returns:**

- The minimum width of the specified breakpoint, or `null` if it's the smallest breakpoint.

### `breakpoint-max($name, $breakpoints: $grid-breakpoints)`

Returns the maximum width of the specified breakpoint, reduced by 0.02px to address browser rounding issues.

#### Usage

```scss
@function breakpoint-max($name, $breakpoints: $grid-breakpoints) {
  $max: map-get($breakpoints, $name);
  @return if($max and $max > 0, $max - .02, null);
}
```

**Parameters:**

- `$name`: The breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.

**Returns:**

- The maximum width of the specified breakpoint, reduced by 0.02px, or `null` if the breakpoint doesn't exist.

### `breakpoint-infix($name, $breakpoints: $grid-breakpoints)`

Returns a dash-prefixed string for use in class names, or an empty string if the breakpoint is the smallest.

#### Usage

```scss
@function breakpoint-infix($name, $breakpoints: $grid-breakpoints) {
  @return if(breakpoint-min($name, $breakpoints) == null, "", "-#{$name}");
}
```

**Parameters:**

- `$name`: The breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.

**Returns:**

- A dash-prefixed string for class names, or an empty string if it's the smallest breakpoint.

## Mixins

### `media-breakpoint-up($name, $breakpoints: $grid-breakpoints)`

Generates a media query for viewport widths at least the size of the specified breakpoint.

#### Usage

```scss
@mixin media-breakpoint-up($name, $breakpoints: $grid-breakpoints) {
  $min: breakpoint-min($name, $breakpoints);

  @if $min {
    @media (min-width: $min) {
      @content;
    }
  } @else {
    @content;
  }
}
```

**Parameters:**

- `$name`: The breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.

**Usage Example:**

```scss
.element {
  @include media-breakpoint-up(sm) {
    background-color: red;
  }
}
```

### `media-breakpoint-down($name, $breakpoints: $grid-breakpoints)`

Generates a media query for viewport widths at most the size of the specified breakpoint.

#### Usage

```scss
@mixin media-breakpoint-down($name, $breakpoints: $grid-breakpoints) {
  $max: breakpoint-max($name, $breakpoints);

  @if $max {
    @media (max-width: $max) {
      @content;
    }
  } @else {
    @content;
  }
}
```

**Parameters:**

- `$name`: The breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.

**Usage Example:**

```scss
.element {
  @include media-breakpoint-down(md) {
    background-color: blue;
  }
}
```

### `media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints)`

Generates a media query for viewport widths between the specified breakpoints.

#### Usage

```scss
@mixin media-breakpoint-between($lower, $upper, $breakpoints: $grid-breakpoints) {
  $min: breakpoint-min($lower, $breakpoints);
  $max: breakpoint-max($upper, $breakpoints);

  @if $min != null and $max != null {
    @media (min-width: $min) and (max-width: $max) {
      @content;
    }
  } @else if $max == null {
    @include media-breakpoint-up($lower, $breakpoints) {
      @content;
    }
  } @else if $min == null {
    @include media-breakpoint-down($upper, $breakpoints) {
      @content;
    }
  }
}
```

**Parameters:**

- `$lower`: The lower breakpoint name.
- `$upper`: The upper breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.

**Usage Example:**

```scss
.element {
  @include media-breakpoint-between(sm, lg) {
    background-color: green;
  }
}
```

### `media-breakpoint-only($name, $breakpoints: $grid-breakpoints)`

Generates a media query for viewport widths only within the specified breakpoint.

#### Usage

```scss
@mixin media-breakpoint-only($name, $breakpoints: $grid-breakpoints) {
  $min: breakpoint-min($name, $breakpoints);
  $next: breakpoint-next($name, $breakpoints);
  $max: breakpoint-max($next, $breakpoints);

  @if $min != null and $max != null {
    @media (min-width: $min) and (max-width: $max) {
      @content;
    }
  } @else if $max == null {
    @include media-breakpoint-up($name, $breakpoints) {
      @content;
    }
  } @else if $min == null {
    @include media-breakpoint-down($next, $breakpoints) {
      @content;
    }
  }
}
```

**Parameters:**

- `$name`: The breakpoint name.
- `$breakpoints`: A map of breakpoint names to minimum widths. Defaults to `$grid-breakpoints`.

**Usage Example:**

```scss
.element {
  @include media-breakpoint-only(md) {
    background-color: yellow;
  }
}
```

## Variables

- `$grid-breakpoints`: Default map of breakpoint names to minimum widths.

## Notes

- Ensure that `$grid-breakpoints` is defined in your project to use these mixins and functions.
- These utilities support responsive design and make it easy to adapt styles across different viewport sizes.
