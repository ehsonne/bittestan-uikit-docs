# `functions.scss` Documentation

## Overview

The `functions.scss` file contains various utility functions and mixins used throughout the UI kit. These functions provide essential operations for color manipulation, map evaluation, and mathematical calculations.

## Mixins

### `_assert-ascending`

Ensures that a Sass map is sorted in ascending order based on its values.

#### Parameters

- **`$map`**: The Sass map to be checked.
- **`$map-name`**: The name of the map, used in warning messages.

#### Usage

```scss
@mixin _assert-ascending($map, $map-name) {
  // Implementation
}
```

### `_assert-starts-at-zero`

Ensures that the smallest value in a map starts at zero.

#### Parameters

- **`$map`**: The Sass map to be checked.
- **`$map-name`**: The name of the map (default is `$grid-breakpoints`).

#### Usage

```scss
@mixin _assert-starts-at-zero($map, $map-name: "$grid-breakpoints") {
  // Implementation
}
```

## Functions

### `to-rgb`

Converts a color value to its RGB components.

#### Parameters

- **`$value`**: The color value to convert.

#### Returns

- A list of RGB components.

#### Usage

```scss
@function to-rgb($value) {
  @return red($value), green($value), blue($value);
}
```

### `rgba-css-var`

Generates an RGBA color value from CSS variables.

#### Parameters

- **`$identifier`**: The identifier for the color (e.g., "body").
- **`$target`**: The target property (e.g., "bg" for background).

#### Returns

- An `rgba` color value.

#### Usage

```scss
@function rgba-css-var($identifier, $target) {
  // Implementation
}
```

### `map-loop`

Applies a function to each key-value pair in a Sass map.

#### Parameters

- **`$map`**: The map to iterate over.
- **`$func`**: The function to apply.
- **`$args...`**: Additional arguments to pass to the function.

#### Returns

- A map with the results of the function applied.

#### Usage

```scss
@function map-loop($map, $func, $args...) {
  // Implementation
}
```

### `varify`

Generates a list of CSS variables from a list of variable names.

#### Parameters

- **`$list`**: A list of variable names.

#### Returns

- A list of CSS variable values.

#### Usage

```scss
@function varify($list) {
  // Implementation
}
```

### `negativify-map`

Creates a negative variant of a map, prefixing keys with `n` and negating values.

#### Parameters

- **`$map`**: The map to be transformed.

#### Returns

- A new map with negative values.

#### Usage

```scss
@function negativify-map($map) {
  // Implementation
}
```

### `map-get-multiple`

Retrieves multiple keys from a Sass map.

#### Parameters

- **`$map`**: The map to retrieve values from.
- **`$values`**: A list of keys to retrieve.

#### Returns

- A map with the retrieved key-value pairs.

#### Usage

```scss
@function map-get-multiple($map, $values) {
  // Implementation
}
```

### `map-merge-multiple`

Merges multiple maps into one.

#### Parameters

- **`$maps...`**: Maps to be merged.

#### Returns

- A merged map.

#### Usage

```scss
@function map-merge-multiple($maps...) {
  // Implementation
}
```

### `str-replace`

Replaces substrings within a string.

#### Parameters

- **`$string`**: The original string.
- **`$search`**: The substring to replace.
- **`$replace`**: The replacement string (default is an empty string).

#### Returns

- The updated string.

#### Usage

```scss
@function str-replace($string, $search, $replace: "") {
  // Implementation
}
```

### `escape-svg`

Escapes characters in SVG data URIs.

#### Parameters

- **`$string`**: The SVG string to escape.

#### Returns

- The escaped SVG string.

#### Usage

```scss
@function escape-svg($string) {
  // Implementation
}
```

### `color-contrast`

Determines the best color for contrast against a given background.

#### Parameters

- **`$background`**: The background color.
- **`$color-contrast-dark`**: Color for dark text (default is `$color-contrast-dark`).
- **`$color-contrast-light`**: Color for light text (default is `$color-contrast-light`).
- **`$min-contrast-ratio`**: Minimum contrast ratio (default is `$min-contrast-ratio`).

#### Returns

- The best color for the specified contrast ratio.

#### Usage

```scss
@function color-contrast($background, $color-contrast-dark: $color-contrast-dark, $color-contrast-light: $color-contrast-light, $min-contrast-ratio: $min-contrast-ratio) {
  // Implementation
}
```

### `contrast-ratio`

Calculates the contrast ratio between two colors.

#### Parameters

- **`$background`**: The background color.
- **`$foreground`**: The foreground color (default is `$color-contrast-light`).

#### Returns

- The contrast ratio.

#### Usage

```scss
@function contrast-ratio($background, $foreground: $color-contrast-light) {
  // Implementation
}
```

### `luminance`

Calculates the relative luminance of a color.

#### Parameters

- **`$color`**: The color to analyze.

#### Returns

- The relative luminance of the color.

#### Usage

```scss
@function luminance($color) {
  // Implementation
}
```

### `opaque`

Calculates an opaque color by mixing a foreground color with a background color.

#### Parameters

- **`$background`**: The background color.
- **`$foreground`**: The foreground color with opacity.

#### Returns

- The resulting opaque color.

#### Usage

```scss
@function opaque($background, $foreground) {
  // Implementation
}
```

### `tint-color`

Tints a color by mixing it with white.

#### Parameters

- **`$color`**: The color to tint.
- **`$weight`**: The weight of the tint.

#### Returns

- The tinted color.

#### Usage

```scss
@function tint-color($color, $weight) {
  // Implementation
}
```

### `shade-color`

Shades a color by mixing it with black.

#### Parameters

- **`$color`**: The color to shade.
- **`$weight`**: The weight of the shade.

#### Returns

- The shaded color.

#### Usage

```scss
@function shade-color($color, $weight) {
  // Implementation
}
```

### `shift-color`

Shifts a color by either shading or tinting it based on the weight.

#### Parameters

- **`$color`**: The color to shift.
- **`$weight`**: The weight of the shift.

#### Returns

- The shifted color.

#### Usage

```scss
@function shift-color($color, $weight) {
  // Implementation
}
```

### `add`

Adds two values together, handling different units and calculations.

#### Parameters

- **`$value1`**: The first value.
- **`$value2`**: The second value.
- **`$return-calc`**: Boolean to determine if the result should be returned as a `calc()` expression (default is `true`).

#### Returns

- The sum of the values.

#### Usage

```scss
@function add($value1, $value2, $return-calc: true) {
  // Implementation
}
```

### `subtract`

Subtracts one value from another, handling different units and calculations.

#### Parameters

- **`$value1`**: The value to subtract from.
- **`$value2`**: The value to subtract.
- **`$return-calc`**: Boolean to determine if the result should be returned as a `calc()` expression (default is `true`).

#### Returns

- The difference between the values.

#### Usage

```scss
@function subtract($value1, $value2, $return-calc: true) {
  // Implementation
}
```

### `divide`

Divides one value by another, handling precision and units.

#### Parameters

- **`$dividend`**: The value to be divided.
- **`$divisor`**: The value to divide by.
- **`$precision`**: The precision for the division (default is `10`).

#### Returns

- The result of the division.

#### Usage

```scss
@function divide($dividend, $divisor, $precision: 10) {
  // Implementation
}
```
