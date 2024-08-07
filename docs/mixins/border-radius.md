# `border-radios.scss` Documentation

## Overview

The `border-radios.scss` file contains mixins and a helper function for applying border-radius styles to elements. These mixins support various border-radius configurations for different sides of an element and ensure compatibility with both rounded and non-rounded designs.

## Helper Function

### `valid-radius($radius)`

This helper function ensures that border-radius values are non-negative. Negative values are replaced with `0`. 

#### Usage

```scss
@function valid-radius($radius) {
  $return: ();

  @each $value in $radius {
    @if type-of($value) == number {
      $return: append($return, max($value, 0));
    } @else {
      $return: append($return, $value);
    }
  }

  @return $return;
}
```

**Parameters:**

- `$radius`: A list or number representing the border-radius values.

**Returns:**

- A list of non-negative border-radius values.

## Mixins

### `border-radius($radius: $border-radius, $fallback-border-radius: false)`

Applies a border-radius to all corners of an element.

#### Usage

```scss
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false) {
  @if $enable-rounded {
    border-radius: valid-radius($radius);
  } @else if $fallback-border-radius != false {
    border-radius: $fallback-border-radius;
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.
- `$fallback-border-radius`: Optional fallback border-radius value if `$enable-rounded` is `false`.

### `border-top-radius($radius: $border-radius)`

Applies border-radius to the top-left and top-right corners of an element.

#### Usage

```scss
@mixin border-top-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-left-radius: valid-radius($radius);
    border-top-right-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

### `border-end-radius($radius: $border-radius)`

Applies border-radius to the top-right and bottom-right corners of an element.

#### Usage

```scss
@mixin border-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-right-radius: valid-radius($radius);
    border-bottom-right-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

### `border-bottom-radius($radius: $border-radius)`

Applies border-radius to the bottom-right and bottom-left corners of an element.

#### Usage

```scss
@mixin border-bottom-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-bottom-right-radius: valid-radius($radius);
    border-bottom-left-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

### `border-start-radius($radius: $border-radius)`

Applies border-radius to the top-left and bottom-left corners of an element.

#### Usage

```scss
@mixin border-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-left-radius: valid-radius($radius);
    border-bottom-left-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

### `border-top-start-radius($radius: $border-radius)`

Applies border-radius to the top-left corner of an element.

#### Usage

```scss
@mixin border-top-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-left-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

### `border-top-end-radius($radius: $border-radius)`

Applies border-radius to the top-right corner of an element.

#### Usage

```scss
@mixin border-top-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-top-right-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

### `border-bottom-end-radius($radius: $border-radius)`

Applies border-radius to the bottom-right corner of an element.

#### Usage

```scss
@mixin border-bottom-end-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-bottom-right-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

### `border-bottom-start-radius($radius: $border-radius)`

Applies border-radius to the bottom-left corner of an element.

#### Usage

```scss
@mixin border-bottom-start-radius($radius: $border-radius) {
  @if $enable-rounded {
    border-bottom-left-radius: valid-radius($radius);
  }
}
```

**Parameters:**

- `$radius`: The border-radius value or list of values. Defaults to `$border-radius`.

## Variables

- `$border-radius`: Default border-radius value or list used by the mixins.
- `$enable-rounded`: Boolean variable to enable or disable rounded corners.
- `$fallback-border-radius`: Optional fallback value for border-radius if `$enable-rounded` is `false`.

## Example

```scss
.box {
  @include border-radius(10px);
}

.card {
  @include border-top-radius(5px);
  @include border-bottom-end-radius(8px);
}
```

## Customization

- **Border-Radius Values**: Adjust the `$border-radius` variable to set default border-radius values.
- **Enable Rounded Corners**: Set `$enable-rounded` to `true` or `false` to control the application of border-radius styles.
- **Fallback Border-Radius**: Provide a `$fallback-border-radius` value for use when rounded corners are not enabled.
