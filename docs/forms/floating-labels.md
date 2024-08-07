# Floating Labels

This documentation covers the SCSS setup for implementing floating labels in form controls. Floating labels are labels that float above the input field when the user interacts with it or enters a value.

## SCSS Structure

### Base Class: `.bt-form-floating`

The `.bt-form-floating` class is the base class used to create floating labels for form controls. It positions the label relative to the input and includes styles for various states and form control types.

#### Structure Overview

- **Positioning**: The `.bt-form-floating` container is set to `relative` to manage the positioning of the label and form controls within it.
- **Child Elements**: This class targets direct child elements like `.bt-form-control`, `.bt-form-control-plaintext`, and `.bt-form-select` to apply specific styles.

## CSS Variables and Mixins

The SCSS file uses a variety of variables and mixins to control the styling and behavior of floating labels.

### Variables

- `$form-floating-height`: Controls the height of form controls within the floating label container.
- `$form-floating-line-height`: Sets the line-height for the form controls.
- `$form-floating-padding-y`: Vertical padding for form controls and labels.
- `$form-floating-padding-x`: Horizontal padding for form controls and labels.
- `$form-floating-input-padding-t`: Top padding adjustment when input is focused or has a value.
- `$form-floating-input-padding-b`: Bottom padding adjustment for similar states.
- `$form-floating-transition`: Transition effect applied to the label when floating.
- `$form-floating-label-opacity`: Sets the opacity of the label color.
- `$form-floating-label-transform`: Transform effect for floating the label.
- `$form-floating-label-height`: Controls the height of the label background when floating.
- `$form-floating-label-disabled-color`: Label color when the associated input is disabled.
- `$input-bg`: Background color of the input field.
- `$input-border-width`: Width of the input border.
- `$input-border-radius`: Border-radius applied to the input and the floating label.
- `$input-disabled-bg`: Background color when input is disabled.

### Mixins

- `@include transition($form-floating-transition)`: Adds a transition effect to the label.
- `@include border-radius($input-border-radius)`: Applies border-radius to the label or input.

## Class Descriptions

### `.bt-form-floating`

The primary container class for floating labels. It applies relative positioning and handles the layout of the form control and label.

- **Usage:**
  ```html
  <div class="bt-form-floating">
    <input type="text" class="bt-form-control" id="floatingInput" placeholder=" ">
    <label for="floatingInput">Floating Label</label>
  </div>
  ```

### Form Controls Inside `.bt-form-floating`

- **`.bt-form-control`, `.bt-form-control-plaintext`, `.bt-form-select`**:
  - These are the primary form controls that support floating labels.
  - They inherit padding and line-height adjustments from the parent `.bt-form-floating`.

- **Properties:**
  - `height: $form-floating-height;`
  - `min-height: $form-floating-height;`
  - `line-height: $form-floating-line-height;`
  - `padding: $form-floating-padding-y $form-floating-padding-x;`

- **Behavior:**
  - **Placeholder Handling**: The placeholder color is set to transparent to make room for the floating label.
  - **Focus and Value State**: When focused or not empty (`:not(:placeholder-shown)`), the padding adjusts to make room for the label to float above the input.

### Label

The label within `.bt-form-floating` is positioned absolutely and floats above the form control when it is focused or has a value.

- **Properties:**
  - `position: absolute;`
  - `top: 0;`
  - `left: 0;`
  - `z-index: 2;`
  - `height: 100%;`
  - `padding: $form-floating-padding-y $form-floating-padding-x;`
  - `color: rgba(var(--#{$prefix}body-color-rgb), #{$form-floating-label-opacity});`
  - `transform-origin: 0 0;`
  - `@include transition($form-floating-transition);`

- **Behavior:**
  - **Floating State**: The label floats above the input when the input is focused or has a value. This is managed with the `$form-floating-label-transform` variable.

- **Disabled State**: The label color changes to `$form-floating-label-disabled-color` when the associated input is disabled.

### Textareas

Textareas within a floating label container have special handling to accommodate for their resizable nature.

- **Properties:**
  - The `::after` pseudo-element is used to create a background color for the label when the textarea is focused or has a value.

- **Disabled State**: The background color of the label changes when the textarea is disabled.

### `.bt-form-control-plaintext`

A specialized form control type that does not display a border but still supports floating labels.

- **Special Handling**: The label’s border width is adjusted to align correctly with the plaintext form control.

## Example Usage

```html
<div class="bt-form-floating">
  <input type="email" class="bt-form-control" id="floatingEmail" placeholder=" ">
  <label for="floatingEmail">Email address</label>
</div>

<div class="bt-form-floating">
  <select class="bt-form-select" id="floatingSelect">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <label for="floatingSelect">Works with selects</label>
</div>

<div class="bt-form-floating">
  <textarea class="bt-form-control" placeholder=" " id="floatingTextarea"></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
```
