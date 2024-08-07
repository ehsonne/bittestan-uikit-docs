# Form Checks

This documentation covers the SCSS setup for form checks, radios, switches, and inline form checks. These components are crucial for building forms that require selection inputs like checkboxes and radio buttons.

## SCSS Structure

### Base Class: `.bt-form-check`

The `.bt-form-check` class is the base class used to style form checks (checkboxes) and radios. It ensures proper alignment and spacing of the input and label elements.

#### Structure Overview

- **Layout**: The form check elements are displayed as block-level elements with a minimum height and padding for proper spacing.
- **Child Elements**: Direct child elements like `.bt-form-check-input` and `.bt-form-check-label` are targeted for specific styles.

## CSS Variables and Mixins

The SCSS file uses a variety of variables and mixins to control the styling and behavior of form checks and related elements.

### Variables

- `$form-check-min-height`: Controls the minimum height of form checks.
- `$form-check-padding-start`: Padding applied at the start (left or right) of form checks.
- `$form-check-margin-bottom`: Margin below each form check element.
- `$form-check-input-width`: Sets the width and height of the form check inputs (checkboxes and radios).
- `$form-check-input-border`: Border style for form check inputs.
- `$form-check-input-border-radius`: Border-radius for checkbox inputs.
- `$form-check-radio-border-radius`: Border-radius for radio inputs.
- `$form-check-input-active-filter`: Filter applied when a form check input is active.
- `$form-check-input-focus-border`: Border color when a form check input is focused.
- `$form-check-input-focus-box-shadow`: Box shadow applied when a form check input is focused.
- `$form-check-input-checked-bg-color`: Background color when a form check input is checked.
- `$form-check-input-checked-border-color`: Border color when a form check input is checked.
- `$form-check-input-checked-bg-image`: Background image for a checked checkbox.
- `$form-check-radio-checked-bg-image`: Background image for a checked radio button.
- `$form-check-input-indeterminate-bg-color`: Background color for an indeterminate checkbox.
- `$form-check-input-indeterminate-border-color`: Border color for an indeterminate checkbox.
- `$form-check-input-disabled-opacity`: Opacity for disabled form check inputs.
- `$form-check-label-disabled-opacity`: Opacity for labels when the associated input is disabled.
- `$form-check-label-color`: Color of the form check label.
- `$form-check-label-cursor`: Cursor style for form check labels.
- `$form-switch-padding-start`: Padding for switch inputs.
- `$form-switch-width`: Width of the switch input.
- `$form-switch-border-radius`: Border-radius for switch inputs.
- `$form-switch-transition`: Transition effect for switch inputs.
- `$form-switch-bg-image`: Background image for switch inputs.
- `$form-switch-focus-bg-image`: Background image for switch inputs when focused.
- `$form-switch-checked-bg-image`: Background image for switch inputs when checked.
- `$form-switch-checked-bg-position`: Background position for checked switch inputs.
- `$form-check-inline-margin-end`: Margin between inline form check elements.
- `$form-check-btn-check-disabled-opacity`: Opacity for disabled form check buttons.

### Mixins

- `@include transition($form-check-transition)`: Adds a transition effect to form check inputs.
- `@include border-radius($form-check-input-border-radius)`: Applies border-radius to checkbox inputs.
- `@include border-radius($form-switch-border-radius, 0)`: Applies border-radius to switch inputs.
- `@include color-mode(dark)`: Styles for dark mode.

## Class Descriptions

### `.bt-form-check`

The primary container class for form checks (checkboxes) and radios.

- **Usage:**
  ```html
  <div class="bt-form-check">
    <input class="bt-form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="bt-form-check-label" for="flexCheckDefault">
      Default checkbox
    </label>
  </div>
  ```

- **Properties:**
  - `display: block;`
  - `min-height: $form-check-min-height;`
  - `padding-left: $form-check-padding-start;`
  - `margin-bottom: $form-check-margin-bottom;`

### `.bt-form-check-reverse`

A variation of `.bt-form-check` where the input is placed on the right and the label on the left.

- **Properties:**
  - `padding-right: $form-check-padding-start;`
  - `padding-left: 0;`
  - `text-align: right;`

- **Input Properties:**
  - `float: right;`
  - `margin-right: $form-check-padding-start * -1;`

### `.bt-form-check-input`

This class styles the actual checkbox or radio input within a form check.

- **Properties:**
  - `flex-shrink: 0;`
  - `width: $form-check-input-width;`
  - `height: $form-check-input-width;`
  - `margin-top: ($line-height-base - $form-check-input-width) * .5;`
  - `vertical-align: top;`
  - `appearance: none;`
  - `background-color: var(--#{$prefix}form-check-bg);`
  - `background-repeat: no-repeat;`
  - `background-position: center;`
  - `background-size: contain;`
  - `border: $form-check-input-border;`
  - `print-color-adjust: exact;`
  - `@include transition($form-check-transition);`

- **Behavior:**
  - **Focus State**: Adds a focus border color and box-shadow.
  - **Checked State**: Changes the background and border color, and updates the background image.
  - **Indeterminate State**: Handles the specific styles for an indeterminate checkbox.
  - **Disabled State**: Applies opacity and disables pointer events.

### `.bt-form-check-label`

This class styles the label associated with a form check input.

- **Properties:**
  - `color: $form-check-label-color;`
  - `cursor: $form-check-label-cursor;`

### `.bt-form-switch`

A special variation of the form check for toggle switches.

- **Properties:**
  - `padding-left: $form-switch-padding-start;`

- **Input Properties:**
  - `width: $form-switch-width;`
  - `background-image: var(--#{$prefix}form-switch-bg);`
  - `background-position: left center;`
  - `@include border-radius($form-switch-border-radius, 0);`

- **Behavior:**
  - **Focus and Checked States**: Updates background image and position based on the state of the switch.

### `.bt-form-check-inline`

This class allows form checks to be displayed inline.

- **Properties:**
  - `display: inline-block;`
  - `margin-right: $form-check-inline-margin-end;`

### `.bt-btn-check`

A hidden checkbox or radio used for toggle buttons.

- **Properties:**
  - `position: absolute;`
  - `clip: rect(0, 0, 0, 0);`
  - `pointer-events: none;`

- **Disabled State**: Disables pointer events for the associated button when the checkbox or radio is disabled.

### Dark Mode

If dark mode is enabled, additional styles are applied to adjust the appearance of form check elements for dark mode.

## Example Usage

```html
<!-- Checkbox Example -->
<div class="bt-form-check">
  <input class="bt-form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="bt-form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>

<!-- Radio Button Example -->
<div class="bt-form-check">
  <input class="bt-form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="bt-form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>

<!-- Switch Example -->
<div class="bt-form-check bt-form-switch">
  <input class="bt-form-check-input" type="checkbox" id="flexSwitchCheckDefault">
  <label class="bt-form-check-label" for="flexSwitchCheckDefault">
    Default switch checkbox input
  </label>
</div>

<!-- Inline Checkbox Example -->
<div class="bt-form-check bt-form-check-inline">
  <input class="bt-form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="bt-form-check-label" for="inlineCheckbox1">1</label>
</div>
