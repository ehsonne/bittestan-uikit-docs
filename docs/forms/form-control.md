# Form Controls

This documentation covers the SCSS setup for form controls, including input fields, text areas, file selectors, and form control sizing. These components are essential for building user input forms with consistent styling and behavior.

## SCSS Structure

### Base Class: `.bt-form-control`

The `.bt-form-control` class is the foundation for styling form input fields. It ensures that all form controls have a consistent appearance and behavior.

#### Structure Overview

- **Layout**: Form controls are displayed as block-level elements with 100% width to ensure they fill their container.
- **Styling**: The class applies consistent padding, font properties, colors, and background settings to all form controls.
- **Customizability**: The class uses SCSS variables and mixins to allow for easy customization of the form controls.

## CSS Variables and Mixins

The SCSS file uses a variety of variables and mixins to control the styling and behavior of form controls.

### Variables

- `$input-padding-y`, `$input-padding-x`: Control the vertical and horizontal padding inside form controls.
- `$input-font-family`: Sets the font family for the form controls.
- `$input-font-size`: Sets the font size for the form controls.
- `$input-font-weight`: Sets the font weight for the form controls.
- `$input-line-height`: Sets the line height for the form controls.
- `$input-color`: Sets the text color for the form controls.
- `$input-bg`: Sets the background color for the form controls.
- `$input-border-width`: Sets the border width for the form controls.
- `$input-border-color`: Sets the border color for the form controls.
- `$input-border-radius`: Sets the border-radius for the form controls.
- `$input-box-shadow`: Sets the box-shadow for the form controls.
- `$input-transition`: Defines the transition effects for form controls.
- `$input-focus-color`, `$input-focus-bg`, `$input-focus-border-color`: Define the styles for form controls when they are focused.
- `$input-focus-box-shadow`: Sets the box-shadow for focused form controls.
- `$input-placeholder-color`: Sets the color for placeholder text in form controls.
- `$input-disabled-color`, `$input-disabled-bg`, `$input-disabled-border-color`: Define the styles for disabled form controls.
- `$form-file-button-color`: Sets the text color for file selector buttons.
- `$form-file-button-bg`: Sets the background for file selector buttons.
- `$form-file-button-hover-bg`: Sets the background color for file selector buttons on hover.
- `$input-height`, `$input-height-sm`, `$input-height-lg`: Define the heights for default, small, and large form controls.
- `$form-color-width`: Sets the width for color picker inputs.

### Mixins

- `@include font-size($size)`: Applies font size to form controls.
- `@include border-radius($radius, 0)`: Applies border-radius to form controls.
- `@include box-shadow($shadows...)`: Applies box-shadow to form controls.
- `@include transition($properties...)`: Applies transition effects to form controls.
- `@include gradient-bg($background)`: Adds a gradient background to elements, such as file selector buttons.

## Class Descriptions

### `.bt-form-control`

The base class for most form controls, providing consistent styling and responsive behavior.

- **Usage:**
  ```html
  <input type="text" class="bt-form-control" placeholder="Enter text">
  ```

- **Properties:**
  - `display: block;`
  - `width: 100%;`
  - `padding: $input-padding-y $input-padding-x;`
  - `font-family: $input-font-family;`
  - `color: $input-color;`
  - `background-color: $input-bg;`
  - `border: $input-border-width solid $input-border-color;`
  - `@include border-radius($input-border-radius, 0);`
  - `@include box-shadow($input-box-shadow);`
  - `@include transition($input-transition);`

- **Behavior:**
  - **Focus State:** Changes the color, background, and border color when the input is focused.
  - **Disabled State:** Adjusts color, background, and border for disabled inputs.
  - **File Inputs:** Customizes the appearance and behavior of file input elements.

### `.bt-form-control-plaintext`

Styles form controls to appear as plain text, making them look like regular text instead of inputs.

- **Usage:**
  ```html
  <input type="text" class="bt-form-control-plaintext" value="Read-only text">
  ```

- **Properties:**
  - `display: block;`
  - `width: 100%;`
  - `padding: $input-padding-y 0;`
  - `color: $input-plaintext-color;`
  - `background-color: transparent;`
  - `border: solid transparent;`
  - `border-width: $input-border-width 0;`

- **Behavior:**
  - **Focus State:** No special styling is applied on focus, maintaining the plain text appearance.

### `.bt-form-control-sm`, `.bt-form-control-lg`

These classes adjust the size of form controls to be smaller or larger.

- **Usage:**
  ```html
  <input type="text" class="bt-form-control-sm" placeholder="Small input">
  <input type="text" class="bt-form-control-lg" placeholder="Large input">
  ```

- **Properties:**
  - **Small:**
    - `min-height: $input-height-sm;`
    - `padding: $input-padding-y-sm $input-padding-x-sm;`
    - `@include font-size($input-font-size-sm);`
    - `@include border-radius($input-border-radius-sm);`

  - **Large:**
    - `min-height: $input-height-lg;`
    - `padding: $input-padding-y-lg $input-padding-x-lg;`
    - `@include font-size($input-font-size-lg);`
    - `@include border-radius($input-border-radius-lg);`

- **Behavior:**
  - These classes ensure that file selector buttons within small or large inputs also get appropriate padding and margins.

### `textarea.bt-form-control`

Applies the `.bt-form-control` styles to `<textarea>` elements, ensuring they don't shrink too much when resized.

- **Properties:**
  - Ensures a minimum height for textareas to maintain usability.
  - Supports small and large sizing variations with `bt-form-control-sm` and `bt-form-control-lg`.

### `.bt-form-control-color`

Styles color picker inputs with consistent height, width, and padding.

- **Usage:**
  ```html
  <input type="color" class="bt-form-control-color">
  ```

- **Properties:**
  - `width: $form-color-width;`
  - `height: $input-height;`
  - `padding: $input-padding-y;`
  - **Disabled and Readonly States:** Maintains pointer cursor when enabled.

- **Behavior:**
  - **Cross-browser Styles:** Applies consistent styling to the color swatch in different browsers.

### Form Control Sizing

Additional classes allow for resizing form controls to better suit different UI layouts.

- **Usage:**
  ```html
  <input type="text" class="bt-form-control bt-form-control-sm">
  <input type="text" class="bt-form-control bt-form-control-lg">
  ```

- **Properties:**
  - Adjusts padding, height, and font-size for different form control sizes.

## Example Usage

```html
<!-- Text Input Example -->
<input type="text" class="bt-form-control" placeholder="Enter text">

<!-- Read-only Input Example -->
<input type="text" class="bt-form-control-plaintext" value="Read-only text" readonly>

<!-- Small Input Example -->
<input type="text" class="bt-form-control bt-form-control-sm" placeholder="Small input">

<!-- Large Input Example -->
<input type="text" class="bt-form-control bt-form-control-lg" placeholder="Large input">

<!-- Textarea Example -->
<textarea class="bt-form-control" rows="3"></textarea>

<!-- Color Picker Example -->
<input type="color" class="bt-form-control-color">
