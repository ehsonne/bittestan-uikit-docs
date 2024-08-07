# `caret.scss` Documentation

## Overview

The `caret.scss` file provides mixins for generating caret (triangle) indicators, which are often used in UI components such as dropdowns or collapsible elements. These mixins allow you to create caret indicators pointing in different directions with customizable sizes and spacing.

## Mixins

### `caret-down($width: $caret-width)`

Generates a downward-pointing caret.

#### Usage

```scss
@mixin caret-down($width: $caret-width) {
  border-top: $width solid;
  border-right: $width solid transparent;
  border-bottom: 0;
  border-left: $width solid transparent;
}
```

**Parameters:**

- `$width`: The width of the caret. Defaults to `$caret-width`.

**Usage Example:**

```scss
.dropdown-toggle {
  @include caret-down();
}
```

### `caret-up($width: $caret-width)`

Generates an upward-pointing caret.

#### Usage

```scss
@mixin caret-up($width: $caret-width) {
  border-top: 0;
  border-right: $width solid transparent;
  border-bottom: $width solid;
  border-left: $width solid transparent;
}
```

**Parameters:**

- `$width`: The width of the caret. Defaults to `$caret-width`.

**Usage Example:**

```scss
.dropdown-toggle {
  @include caret-up();
}
```

### `caret-end($width: $caret-width)`

Generates a caret pointing to the end.

#### Usage

```scss
@mixin caret-end($width: $caret-width) {
  border-top: $width solid transparent;
  border-right: 0;
  border-bottom: $width solid transparent;
  border-left: $width solid;
}
```

**Parameters:**

- `$width`: The width of the caret. Defaults to `$caret-width`.

**Usage Example:**

```scss
.menu-item {
  @include caret-end();
}
```

### `caret-start($width: $caret-width)`

Generates a caret pointing to the start.

#### Usage

```scss
@mixin caret-start($width: $caret-width) {
  border-top: $width solid transparent;
  border-right: $width solid;
  border-bottom: $width solid transparent;
}
```

**Parameters:**

- `$width`: The width of the caret. Defaults to `$caret-width`.

**Usage Example:**

```scss
.menu-item {
  @include caret-start();
}
```

### `caret($direction: down, $width: $caret-width, $spacing: $caret-spacing, $vertical-align: $caret-vertical-align)`

Generates a caret indicator in the specified direction with customizable size, spacing, and vertical alignment.

#### Usage

```scss
@mixin caret($direction: down, $width: $caret-width, $spacing: $caret-spacing, $vertical-align: $caret-vertical-align) {
  @if $enable-caret {
    &::after {
      display: inline-block;
      margin-left: $spacing;
      vertical-align: $vertical-align;
      content: "";

      @if $direction == down {
        @include caret-down($width);
      }

      @else if $direction == up {
        @include caret-up($width);
      }

      @else if $direction == end {
        @include caret-end($width);
      }
    }

    @if $direction == start {
      &::after {
        display: none;
      }

      &::before {
        display: inline-block;
        margin-right: $spacing;
        vertical-align: $vertical-align;
        content: "";
        @include caret-start($width);
      }
    }

    &:empty::after {
      margin-left: 0;
    }
  }
}
```

**Parameters:**

- `$direction`: The direction the caret should point. Options are `down`, `up`, `end`, and `start`. Defaults to `down`.
- `$width`: The width of the caret. Defaults to `$caret-width`.
- `$spacing`: The spacing between the caret and the adjacent content. Defaults to `$caret-spacing`.
- `$vertical-align`: The vertical alignment of the caret. Defaults to `$caret-vertical-align`.

**Usage Example:**

```scss
.dropdown-toggle {
  @include caret(down);
}

.menu-item {
  @include caret(start);
}
```

## Variables

- `$caret-width`: The default width of the caret.
- `$caret-spacing`: The default spacing for the caret.
- `$caret-vertical-align`: The default vertical alignment for the caret.
- `$enable-caret`: Boolean flag to enable or disable caret generation.

## Notes

- Ensure that the variables such as `$caret-width`, `$caret-spacing`, and `$caret-vertical-align` are defined in your project for these mixins to work correctly.
- The mixins assume that caret indicators are applied using the `::before` or `::after` pseudo-elements. Adjust as needed based on your specific use case.
