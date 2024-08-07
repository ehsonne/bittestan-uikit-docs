# `utilities.scss` Documentation

## Overview

The `utilities.scss` file provides a mixin for generating utility classes. This mixin allows for the dynamic creation of utility classes based on a map of settings, which can include CSS variables, custom classes, responsive font sizes (RFS), and other properties.

## Mixins

### `generate-utility`

Generates utility classes based on the provided configuration map. It handles various properties, states, and supports generating CSS variables.

#### Parameters

- **`$utility`**: A map containing the configuration for the utility class. This map can include:
  - `values`: The values to be applied.
  - `property`: The CSS properties to which the values will be applied.
  - `class`: Optional custom class name prefix.
  - `css-variable-name`: Optional name for the CSS variable.
  - `state`: Optional pseudo-classes for state variations.
  - `rfs`: Optional flag to handle responsive font sizes.
  - `css-var`: Optional flag for using CSS variables.
  - `local-vars`: Optional map for local variables.
  - `rtl`: Optional flag for right-to-left (RTL) support.
- **`$infix`**: Optional string to be appended to the class name, typically used for responsive breakpoints or modifiers.
- **`$is-rfs-media-query`**: Boolean indicating whether the utility should be generated within a responsive font size (RFS) media query.

#### Usage

```scss
@mixin generate-utility($utility, $infix: "", $is-rfs-media-query: false) {
  $values: map-get($utility, values);

  // If the values are a list or string, convert it into a map
  @if type-of($values)=="string" or type-of(nth($values, 1)) !="list" {
    $values: zip($values, $values);
  }

  @each $key, $value in $values {
    $properties: map-get($utility, property);

    // Multiple properties are possible, for example with vertical or horizontal margins or paddings
    @if type-of($properties)=="string" {
      $properties: append((), $properties);
    }

    // Use custom class if present
    $property-class: if(map-has-key($utility, class), map-get($utility, class), nth($properties, 1));
    $property-class: if($property-class ==null, "", $property-class);

    // Use custom CSS variable name if present, otherwise default to `class`
    $css-variable-name: if(map-has-key($utility, css-variable-name), map-get($utility, css-variable-name), map-get($utility, class));

    // State params to generate pseudo-classes
    $state: if(map-has-key($utility, state), map-get($utility, state), ());

    $infix: if($property-class =="" and str-slice($infix, 1, 1)=="-", str-slice($infix, 2), $infix);

    // Don't prefix if value key is null (e.g. with shadow class)
    $property-class-modifier: if($key, if($property-class =="" and $infix =="", "", "-") + $key, "");

    @if map-get($utility, rfs) {

      // Inside the media query
      @if $is-rfs-media-query {
        $val: rfs-value($value);

        // Do not render anything if fluid and non-fluid values are the same
        $value: if($val ==rfs-fluid-value($value), null, $val);
      }

      @else {
        $value: rfs-fluid-value($value);
      }
    }

    $is-css-var: map-get($utility, css-var);
    $is-local-vars: map-get($utility, local-vars);
    $is-rtl: map-get($utility, rtl);

    @if $value !=null {
      @if $is-rtl ==false {
        /* rtl:begin:remove */
      }

      @if $is-css-var {
        .#{$property-class + $infix + $property-class-modifier} {
          --#{$prefix}#{$css-variable-name}: #{$value};
        }

        @each $pseudo in $state {
          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {
            --#{$prefix}#{$css-variable-name}: #{$value};
          }
        }
      }

      @else {
        .#{$property-class + $infix + $property-class-modifier} {
          @each $property in $properties {
            @if $is-local-vars {
              @each $local-var, $variable in $is-local-vars {
                --#{$prefix}#{$local-var}: #{$variable};
              }
            }

            #{$property}: $value if($enable-important-utilities, !important, null);
          }
        }

        @each $pseudo in $state {
          .#{$property-class + $infix + $property-class-modifier}-#{$pseudo}:#{$pseudo} {
            @each $property in $properties {
              @if $is-local-vars {
                @each $local-var, $variable in $is-local-vars {
                  --#{$prefix}#{$local-var}: #{$variable};
                }
              }

              #{$property}: $value if($enable-important-utilities, !important, null);
            }
          }
        }
      }

      @if $is-rtl ==false {
        /* rtl:end:remove */
      }
    }
  }
}
```

**Usage Example:**

```scss
$utility-map: (
  values: (10px, 20px),
  property: margin,
  class: "m-",
  css-variable-name: "spacing",
  rfs: true
);

@include generate-utility($utility-map);
```

**Notes:**

- The `generate-utility` mixin allows for a high degree of customization for utility classes, including support for CSS variables and RTL (right-to-left) text.
- If `rfs` is enabled, the mixin will adjust values based on responsive font size settings.
- The mixin supports generating utilities for pseudo-classes and can handle both local and global variables.

This mixin helps in creating a flexible utility system that adapts to various design requirements and responsive needs.