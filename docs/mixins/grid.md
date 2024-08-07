# `grid.scss` Documentation

## Overview

The `grid.scss` file contains mixins for creating and managing grid systems. These mixins help in generating semantic grid columns, handling gutters, and managing various grid layouts with flexible and CSS Grid-based approaches.

## Mixins

### `make-row($gutter: $grid-gutter-width)`

Creates a row container with gutter spacing. This mixin sets up the flex container and adjusts margins to account for gutters.

#### Usage

```scss
@mixin make-row($gutter: $grid-gutter-width) {
  --#{$prefix}gutter-x: #{$gutter};
  --#{$prefix}gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--#{$prefix}gutter-y)); // stylelint-disable-line function-disallowed-list
  margin-right: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list
  margin-left: calc(-.5 * var(--#{$prefix}gutter-x)); // stylelint-disable-line function-disallowed-list
}
```

**Parameters:**

- `$gutter`: The width of the gutter (optional, defaults to `$grid-gutter-width`).

**Usage Example:**

```scss
.row {
  @include make-row();
}
```

### `make-col-ready()`

Prepares a column for use in the grid by setting box-sizing, width, padding, and margin.

#### Usage

```scss
@mixin make-col-ready() {
  box-sizing: if(variable-exists(include-column-box-sizing) and $include-column-box-sizing, border-box, null);
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  padding-left: calc(var(--#{$prefix}gutter-x) * .5); // stylelint-disable-line function-disallowed-list
  margin-top: var(--#{$prefix}gutter-y);
}
```

**Usage Example:**

```scss
.column {
  @include make-col-ready();
}
```

### `make-col($size: false, $columns: $grid-columns)`

Configures a column based on its size relative to the total number of columns.

#### Usage

```scss
@mixin make-col($size: false, $columns: $grid-columns) {
  @if $size {
    flex: 0 0 auto;
    width: percentage(divide($size, $columns));
  } @else {
    flex: 1 1 0;
    max-width: 100%;
  }
}
```

**Parameters:**

- `$size`: The number of columns the element should span (optional).
- `$columns`: Total number of columns in the grid (optional, defaults to `$grid-columns`).

**Usage Example:**

```scss
.col-6 {
  @include make-col(6);
}
```

### `make-col-auto()`

Configures a column to have automatic width and no flex properties.

#### Usage

```scss
@mixin make-col-auto() {
  flex: 0 0 auto;
  width: auto;
}
```

**Usage Example:**

```scss
.col-auto {
  @include make-col-auto();
}
```

### `make-col-offset($size, $columns: $grid-columns)`

Adds an offset to a column.

#### Usage

```scss
@mixin make-col-offset($size, $columns: $grid-columns) {
  $num: divide($size, $columns);
  margin-left: if($num ==0, 0, percentage($num));
}
```

**Parameters:**

- `$size`: The number of columns to offset.
- `$columns`: Total number of columns in the grid (optional, defaults to `$grid-columns`).

**Usage Example:**

```scss
.offset-3 {
  @include make-col-offset(3);
}
```

### `row-cols($count)`

Forces immediate children of a `.row` to have equal-width columns based on the specified count.

#### Usage

```scss
@mixin row-cols($count) {
  >* {
    flex: 0 0 auto;
    width: percentage(divide(1, $count));
  }
}
```

**Parameters:**

- `$count`: Number of columns.

**Usage Example:**

```scss
.row-cols-3 {
  @include row-cols(3);
}
```

### `Grid column classes`

Generates the grid column classes for the specified number of columns and breakpoints.

#### Usage

```scss
@mixin make-grid-columns($columns: $grid-columns, $gutter: $grid-gutter-width, $breakpoints: $grid-breakpoints) {
  @each $breakpoint in map-keys($breakpoints) {
    $infix: breakpoint-infix($breakpoint, $breakpoints);

    @include media-breakpoint-up($breakpoint, $breakpoints) {

      .col#{$infix} {
        flex: 1 0 0%;
      }

      .row-cols#{$infix}-auto>* {
        @include make-col-auto();
      }

      @if $grid-row-columns >0 {
        @for $i from 1 through $grid-row-columns {
          .row-cols#{$infix}-#{$i} {
            @include row-cols($i);
          }
        }
      }

      .col#{$infix}-auto {
        @include make-col-auto();
      }

      @if $columns >0 {
        @for $i from 1 through $columns {
          .col#{$infix}-#{$i} {
            @include make-col($i, $columns);
          }
        }

        @for $i from 0 through ($columns - 1) {
          @if not ($infix =="" and $i ==0) {
            .offset#{$infix}-#{$i} {
              @include make-col-offset($i, $columns);
            }
          }
        }
      }

      @each $key, $value in $gutters {
        .g#{$infix}-#{$key},
        .gx#{$infix}-#{$key} {
          --#{$prefix}gutter-x: #{$value};
        }

        .g#{$infix}-#{$key},
        .gy#{$infix}-#{$key} {
          --#{$prefix}gutter-y: #{$value};
        }
      }
    }
  }
}
```

**Parameters:**

- `$columns`: Total number of columns in the grid (optional, defaults to `$grid-columns`).
- `$gutter`: The gutter width (optional, defaults to `$grid-gutter-width`).
- `$breakpoints`: Map of breakpoints (optional, defaults to `$grid-breakpoints`).

**Usage Example:**

```scss
@include make-grid-columns();
```

### `make-cssgrid($columns: $grid-columns, $breakpoints: $grid-breakpoints)`

Generates CSS Grid column and row span utilities for the specified number of columns and breakpoints.

#### Usage

```scss
@mixin make-cssgrid($columns: $grid-columns, $breakpoints: $grid-breakpoints) {
  @each $breakpoint in map-keys($breakpoints) {
    $infix: breakpoint-infix($breakpoint, $breakpoints);

    @include media-breakpoint-up($breakpoint, $breakpoints) {
      @if $columns >0 {
        @for $i from 1 through $columns {
          .g-col#{$infix}-#{$i} {
            grid-column: auto / span $i;
          }
        }

        @for $i from 1 through ($columns - 1) {
          .g-start#{$infix}-#{$i} {
            grid-column-start: $i;
          }
        }
      }
    }
  }
}
```

**Parameters:**

- `$columns`: Total number of columns in the grid (optional, defaults to `$grid-columns`).
- `$breakpoints`: Map of breakpoints (optional, defaults to `$grid-breakpoints`).

**Usage Example:**

```scss
@include make-cssgrid();
```

## Notes

- Adjust `$gutter` and `$columns` as needed to fit your layout design.
- Ensure that breakpoints are defined in `$grid-breakpoints` for responsive grid behavior.