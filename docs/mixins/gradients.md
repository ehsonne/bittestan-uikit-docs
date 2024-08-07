# `gradients.scss` Documentation

## Overview

The `gradients.scss` file contains mixins for applying various types of gradients to elements. These mixins help you create horizontal, vertical, directional, radial, and striped gradients with customizable colors and positions.

## Mixins

### `gradient-bg($color: null)`

Applies a background color and, if gradients are enabled, adds a gradient background image.

#### Usage

```scss
@mixin gradient-bg($color: null) {
  background-color: $color;

  @if $enable-gradients {
    background-image: var(--#{$prefix}gradient);
  }
}
```

**Parameters:**

- `$color`: The background color to apply (optional).

**Usage Examples:**

1. **Apply Gradient Background:**

   ```scss
   .element {
     @include gradient-bg($blue);
   }
   ```

2. **Apply Background Color Only:**

   ```scss
   .element {
     @include gradient-bg();
   }
   ```

### `A horizontal gradient`

Creates a horizontal gradient that transitions from the start color to the end color.

#### Usage

```scss
@mixin gradient-x($start-color: $gray-700, $end-color: $gray-800, $start-percent: 0%, $end-percent: 100%) {
  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent);
}
```

**Parameters:**

- `$start-color`: The starting color of the gradient.
- `$end-color`: The ending color of the gradient.
- `$start-percent`: The position of the start color (defaults to `0%`).
- `$end-percent`: The position of the end color (defaults to `100%`).

**Usage Examples:**

1. **Apply Horizontal Gradient:**

   ```scss
   .element {
     @include gradient-x($blue, $purple);
   }
   ```

2. **Apply Horizontal Gradient with Custom Positions:**

   ```scss
   .element {
     @include gradient-x($blue, $purple, 20%, 80%);
   }
   ```

### `A vertical gradient`

Creates a vertical gradient that transitions from the start color to the end color.

#### Usage

```scss
@mixin gradient-y($start-color: $gray-700, $end-color: $gray-800, $start-percent: null, $end-percent: null) {
  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent);
}
```

**Parameters:**

- `$start-color`: The starting color of the gradient.
- `$end-color`: The ending color of the gradient.
- `$start-percent`: The position of the start color (optional).
- `$end-percent`: The position of the end color (optional).

**Usage Examples:**

1. **Apply Vertical Gradient:**

   ```scss
   .element {
     @include gradient-y($blue, $purple);
   }
   ```

2. **Apply Vertical Gradient with Custom Positions:**

   ```scss
   .element {
     @include gradient-y($blue, $purple, 10%, 90%);
   }
   ```

### `A gradient with a specified direction`

Creates a gradient with a specified direction.

#### Usage

```scss
@mixin gradient-directional($start-color: $gray-700, $end-color: $gray-800, $deg: 45deg) {
  background-image: linear-gradient($deg, $start-color, $end-color);
}
```

**Parameters:**

- `$start-color`: The starting color of the gradient.
- `$end-color`: The ending color of the gradient.
- `$deg`: The direction of the gradient (default is `45deg`).

**Usage Examples:**

1. **Apply Directional Gradient:**

   ```scss
   .element {
     @include gradient-directional($blue, $purple);
   }
   ```

2. **Apply Directional Gradient with Custom Angle:**

   ```scss
   .element {
     @include gradient-directional($blue, $purple, 90deg);
   }
   ```

### `A horizontal gradient with three color stops`

Creates a horizontal gradient with three color stops.

#### Usage

```scss
@mixin gradient-x-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);
}
```

**Parameters:**

- `$start-color`: The starting color of the gradient.
- `$mid-color`: The middle color of the gradient.
- `$color-stop`: The position of the middle color (default is `50%`).
- `$end-color`: The ending color of the gradient.

**Usage Examples:**

1. **Apply Three-Color Horizontal Gradient:**

   ```scss
   .element {
     @include gradient-x-three-colors($blue, $purple, 40%, $red);
   }
   ```

### `A vertical gradient with three color stops`

Creates a vertical gradient with three color stops.

#### Usage

```scss
@mixin gradient-y-three-colors($start-color: $blue, $mid-color: $purple, $color-stop: 50%, $end-color: $red) {
  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);
}
```

**Parameters:**

- `$start-color`: The starting color of the gradient.
- `$mid-color`: The middle color of the gradient.
- `$color-stop`: The position of the middle color (default is `50%`).
- `$end-color`: The ending color of the gradient.

**Usage Examples:**

1. **Apply Three-Color Vertical Gradient:**

   ```scss
   .element {
     @include gradient-y-three-colors($blue, $purple, 40%, $red);
   }
   ```

### `A radial gradient`

Creates a radial gradient from the inner color to the outer color.

#### Usage

```scss
@mixin gradient-radial($inner-color: $gray-700, $outer-color: $gray-800) {
  background-image: radial-gradient(circle, $inner-color, $outer-color);
}
```

**Parameters:**

- `$inner-color`: The color at the center of the gradient.
- `$outer-color`: The color at the edges of the gradient.

**Usage Examples:**

1. **Apply Radial Gradient:**

   ```scss
   .element {
     @include gradient-radial($blue, $purple);
   }
   ```

### `A striped gradient`

Creates a striped gradient background.

#### Usage

```scss
@mixin gradient-striped($color: rgba($white, .15), $angle: 45deg) {
  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);
}
```

**Parameters:**

- `$color`: The color of the stripes (default is `rgba($white, .15)`).
- `$angle`: The angle of the stripes (default is `45deg`).

**Usage Examples:**

1. **Apply Striped Gradient:**

   ```scss
   .element {
     @include gradient-striped($blue, 30deg);
   }
   ```

2. **Apply Default Striped Gradient:**

   ```scss
   .element {
     @include gradient-striped();
   }
   ```

## Notes

- Ensure the `$enable-gradients` variable is set to `true` if you want to use gradient backgrounds.
- Customize colors, positions, and angles as needed to fit your design requirements.
