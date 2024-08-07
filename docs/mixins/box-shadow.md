# `box-shadow.scss` Documentation

## Overview

The `box-shadow.scss` file provides a mixin for applying CSS box-shadow styles to elements. The mixin supports multiple shadow values and includes validation to ensure correct usage of the `none` keyword.

## Mixin

### `box-shadow($shadow...)`

Applies one or more box-shadow effects to an element.

#### Usage

```scss
@mixin box-shadow($shadow...) {
  @if $enable-shadows {
    $result: ();

    @each $value in $shadow {
      @if $value != null {
        $result: append($result, $value, "comma");
      }

      @if $value == none and length($shadow) > 1 {
        @warn "The keyword 'none' must be used as a single argument.";
      }
    }

    @if (length($result) > 0) {
      box-shadow: $result;
    }
  }
}
```

**Parameters:**

- `$shadow...`: A variable list of box-shadow values. Can include values like `0px 4px 8px rgba(0, 0, 0, 0.3)`, `inset 0px 2px 4px rgba(0, 0, 0, 0.1)`, or the keyword `none`.

**Behavior:**

- If `$enable-shadows` is `true`, the mixin applies the provided box-shadow values to the `box-shadow` property.
- The mixin supports multiple shadow values, separated by commas.
- The `none` keyword should be used as a single argument; using it in conjunction with other shadow values will produce a warning.

**Example**

```scss
.element {
  @include box-shadow(
    0px 4px 8px rgba(0, 0, 0, 0.3),
    inset 0px 2px 4px rgba(0, 0, 0, 0.1)
  );
}

.card {
  @include box-shadow(
    none
  );
}
```

**Warnings:**

- Using `none` in combination with other shadow values will generate a warning: 

  ```plaintext
  The keyword 'none' must be used as a single argument.
  ```

## Variables

- `$enable-shadows`: Boolean variable that determines whether box-shadow styles should be applied.

## Customization

- **Enable Shadows**: Set `$enable-shadows` to `true` or `false` to control whether shadows are applied.
- **Shadow Values**: Customize the `$shadow` values as needed for different shadow effects.

## Example

```scss
.card {
  @include box-shadow(
    0px 4px 8px rgba(0, 0, 0, 0.2),
    0px 0px 5px rgba(0, 0, 0, 0.1)
  );
}

.notification {
  @include box-shadow(
    none
  );
}
```

## Notes

- Ensure `$enable-shadows` is set to `true` in order to see the effects of the box-shadow mixin.
- Avoid mixing the `none` keyword with other shadow values to prevent warnings.
