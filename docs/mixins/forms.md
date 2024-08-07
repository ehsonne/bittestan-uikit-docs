# `forms.scss` Documentation

## Overview

The `forms.scss` file provides mixins for handling form validation states and styling. These mixins enable customization of form control appearances based on their validation status (`valid` or `invalid`), including tooltips and icons. The mixins also ensure compatibility with Dart Sass using conditional logic.

## Mixins

### `form-validation-state-selector($state)`

Generates selectors based on the form validation state (`valid` or `invalid`). This mixin supports conditional logic to handle different states.

#### Usage

```scss
@mixin form-validation-state-selector($state) {
  @if ($state == "valid" or $state == "invalid") {
    .was-validated #{if(&, "&", "")}:#{$state},
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  } @else {
    #{if(&, "&", "")}.is-#{$state} {
      @content;
    }
  }
}
```

**Parameters:**

- `$state`: The validation state to target (`valid` or `invalid`).

**Usage Examples:**

1. **Apply Styles for Valid State:**

   ```scss
   @include form-validation-state-selector(valid) {
     color: green;
   }
   ```

2. **Apply Styles for Invalid State:**

   ```scss
   @include form-validation-state-selector(invalid) {
     color: red;
   }
   ```

### `Styles for form controls based on their validation state`

Applies styles for form controls based on their validation state, including feedback messages, tooltips, and icons.

#### Usage

```scss
@mixin form-validation-state($state, $color, $icon, $tooltip-color: color-contrast($color), $tooltip-bg-color: rgba($color, $form-feedback-tooltip-opacity), $focus-box-shadow: 0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity), $border-color: $color) {
  .#{$state}-feedback {
    display: none;
    width: 100%;
    margin-top: $form-feedback-margin-top;
    @include font-size($form-feedback-font-size);
    font-style: $form-feedback-font-style;
    color: $color;
  }

  .#{$state}-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: $form-feedback-tooltip-padding-y $form-feedback-tooltip-padding-x;
    margin-top: .1rem;
    @include font-size($form-feedback-tooltip-font-size);
    line-height: $form-feedback-tooltip-line-height;
    color: $tooltip-color;
    background-color: $tooltip-bg-color;
    @include border-radius($form-feedback-tooltip-border-radius);
  }

  @include form-validation-state-selector($state) {
    ~.#{$state}-feedback,
    ~.#{$state}-tooltip {
      display: block;
    }
  }

  .bt-form-control {
    @include form-validation-state-selector($state) {
      border-color: $border-color;

      @if $enable-validation-icons {
        padding-right: $input-height-inner;
        background-image: escape-svg($icon);
        background-repeat: no-repeat;
        background-position: right $input-height-inner-quarter center;
        background-size: $input-height-inner-half $input-height-inner-half;
      }

      &:focus {
        border-color: $border-color;

        @if $enable-shadows {
          @include box-shadow($input-box-shadow, $focus-box-shadow);
        } @else {
          box-shadow: $focus-box-shadow;
        }
      }
    }
  }

  textarea.bt-form-control {
    @include form-validation-state-selector($state) {
      @if $enable-validation-icons {
        padding-right: $input-height-inner;
        background-position: top $input-height-inner-quarter right $input-height-inner-quarter;
      }
    }
  }

  .bt-form-select {
    @include form-validation-state-selector($state) {
      border-color: $border-color;

      @if $enable-validation-icons {
        &:not([multiple]):not([size]),
        &:not([multiple])[size="1"] {
          --#{$prefix}form-select-bg-icon: #{escape-svg($icon)};
          padding-right: $form-select-feedback-icon-padding-end;
          background-position: $form-select-bg-position, $form-select-feedback-icon-position;
          background-size: $form-select-bg-size, $form-select-feedback-icon-size;
        }
      }

      &:focus {
        border-color: $border-color;

        @if $enable-shadows {
          @include box-shadow($form-select-box-shadow, $focus-box-shadow);
        } @else {
          box-shadow: $focus-box-shadow;
        }
      }
    }
  }

  .bt-form-control-color {
    @include form-validation-state-selector($state) {
      @if $enable-validation-icons {
        width: add($form-color-width, $input-height-inner);
      }
    }
  }

  .bt-form-check-input {
    @include form-validation-state-selector($state) {
      border-color: $border-color;

      &:checked {
        background-color: $color;
      }

      &:focus {
        box-shadow: $focus-box-shadow;
      }

      ~.bt-form-check-label {
        color: $color;
      }
    }
  }

  .bt-form-check-inline .bt-form-check-input {
    ~.#{$state}-feedback {
      margin-left: .5em;
    }
  }

  .bt-input-group {
    >.bt-form-control:not(:focus),
    >.bt-form-select:not(:focus),
    >.bt-form-floating:not(:focus-within) {
      @include form-validation-state-selector($state) {
        @if $state == "valid" {
          z-index: 3;
        } @else if $state == "invalid" {
          z-index: 4;
        }
      }
    }
  }
}
```

**Parameters:**

- `$state`: The validation state to apply styles for (`valid` or `invalid`).
- `$color`: The color to use for the validation state.
- `$icon`: The icon to use for the validation state.
- `$tooltip-color`: Color for the tooltip text (defaults to `color-contrast($color)`).
- `$tooltip-bg-color`: Background color for the tooltip (defaults to `rgba($color, $form-feedback-tooltip-opacity)`).
- `$focus-box-shadow`: Box shadow for focus state (defaults to `0 0 $input-btn-focus-blur $input-focus-width rgba($color, $input-btn-focus-color-opacity)`).
- `$border-color`: Border color for the form control (defaults to `$color`).

**Usage Examples:**

1. **Apply Validation Styles:**

   ```scss
   @include form-validation-state(valid, green, url('valid-icon.svg')) {
     // Custom styles for valid state
   }
   ```

2. **Apply Invalid State Styles:**

   ```scss
   @include form-validation-state(invalid, red, url('invalid-icon.svg')) {
     // Custom styles for invalid state
   }
   ```

## Notes

- This mixin uses a technique for compatibility with Dart Sass. For more information, see [this Sass issue](https://github.com/sass/sass/issues/1873#issuecomment-152293725).
- Ensure global variables like `$enable-validation-icons` and `$enable-shadows` are properly configured to enable or disable icons and shadows.
- Customize the `$border-color`, `$focus-box-shadow`, and other parameters as needed to fit your design requirements.
