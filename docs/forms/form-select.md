# Custom Select Styles

This documentation covers the SCSS setup for creating custom-styled select dropdowns that replace the default browser appearance, drawing inspiration from [Primer CSS](https://primer.github.io/).

## SCSS Structure

### Base Class: `.bt-form-select`

The `.bt-form-select` class provides custom styles for select dropdowns, ensuring a consistent and visually appealing design across browsers.

#### Structure Overview

- **Layout**: The select elements are styled to occupy 100% of their container width, with custom padding, background, and border settings.
- **Customizability**: The class leverages SCSS variables and mixins, making it easy to customize the appearance of the select elements.
- **Dark Mode**: Support for dark mode styling is included, allowing for seamless integration in dark-themed interfaces.

## CSS Variables and Mixins

The SCSS file uses several variables and mixins to control the styling of the select elements.

### Variables

- `$form-select-indicator`: The SVG or image used as the custom select dropdown indicator.
- `$form-select-padding-y`: Vertical padding for the select element.
- `$form-select-padding-x`: Horizontal padding for the select element.
- `$form-select-indicator-padding`: Padding to accommodate the custom select dropdown indicator.
- `$form-select-font-family`: The font family for the select element text.
- `$form-select-font-size`: The font size of the select element text.
- `$form-select-font-weight`: The font weight of the select element text.
- `$form-select-line-height`: The line height for the select element text.
- `$form-select-color`: The text color for the select element.
- `$form-select-bg`: The background color for the select element.
- `$form-select-bg-position`: The position of the background image (custom indicator) within the select element.
- `$form-select-bg-size`: The size of the background image (custom indicator) within the select element.
- `$form-select-border-width`: The width of the border around the select element.
- `$form-select-border-color`: The color of the border around the select element.
- `$form-select-border-radius`: The border-radius for the select element.
- `$form-select-box-shadow`: The box-shadow applied to the select element.
- `$form-select-transition`: The transition effects for the select element.
- `$form-select-focus-border-color`: The border color when the select element is focused.
- `$form-select-focus-box-shadow`: The box-shadow applied to the select element when focused.
- `$form-select-disabled-color`: The text color when the select element is disabled.
- `$form-select-disabled-bg`: The background color when the select element is disabled.
- `$form-select-disabled-border-color`: The border color when the select element is disabled.
- `$form-select-padding-y-sm`: Vertical padding for small-sized select elements.
- `$form-select-padding-x-sm`: Horizontal padding for small-sized select elements.
- `$form-select-font-size-sm`: Font size for small-sized select elements.
- `$form-select-border-radius-sm`: Border radius for small-sized select elements.
- `$form-select-padding-y-lg`: Vertical padding for large-sized select elements.
- `$form-select-padding-x-lg`: Horizontal padding for large-sized select elements.
- `$form-select-font-size-lg`: Font size for large-sized select elements.
- `$form-select-border-radius-lg`: Border radius for large-sized select elements.
- `$form-select-indicator-dark`: The SVG or image used as the custom select dropdown indicator in dark mode.

### Mixins

- `@include font-size($size)`: Sets the font size for the select element.
- `@include border-radius($radius)`: Applies border-radius to the select element.
- `@include box-shadow($shadows...)`: Applies box-shadow to the select element.
- `@include transition($properties...)`: Applies transition effects to the select element.
- `@include color-mode(dark)`: Applies styles specifically for dark mode when dark mode is enabled.

## Class Descriptions

### `.bt-form-select`

The main class for styling select elements, ensuring a custom look and feel.

- **Usage:**
  ```html
  <select class="bt-form-select">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
  ```

- **Properties:**
  - `display: block;`
  - `width: 100%;`
  - `padding: $form-select-padding-y $form-select-indicator-padding $form-select-padding-y $form-select-padding-x;`
  - `font-family: $form-select-font-family;`
  - `background-color: $form-select-bg;`
  - `background-image: var(--form-select-bg-img);`
  - `background-repeat: no-repeat;`
  - `background-position: $form-select-bg-position;`
  - `background-size: $form-select-bg-size;`
  - `border: $form-select-border-width solid $form-select-border-color;`
  - `appearance: none;`
  - `@include border-radius($form-select-border-radius, 0);`
  - `@include box-shadow($form-select-box-shadow);`
  - `@include transition($form-select-transition);`

- **Focus State:**
  - `border-color: $form-select-focus-border-color;`
  - `box-shadow: $form-select-focus-box-shadow;`

- **Multiple and Size Attributes:**
  - When the `multiple` attribute is used or the `size` attribute is set to a value greater than 1, the custom background image is removed, and right padding is adjusted.

- **Disabled State:**
  - The select element's color, background, and border color change to indicate it is disabled.

- **Firefox-Specific:**
  - Removes the outline from the select box in Firefox with `&:-moz-focusring`.

### Size Variants

- **`.bt-form-select-sm`:**
  - **Usage:**
    ```html
    <select class="bt-form-select bt-form-select-sm">
      <option>Small Option 1</option>
      <option>Small Option 2</option>
    </select>
    ```
  - **Properties:**
    - Smaller padding and font size compared to the base class.

- **`.bt-form-select-lg`:**
  - **Usage:**
    ```html
    <select class="bt-form-select bt-form-select-lg">
      <option>Large Option 1</option>
      <option>Large Option 2</option>
    </select>
    ```
  - **Properties:**
    - Larger padding and font size compared to the base class.

### Dark Mode Support

- **Dark Mode Styles:**
  - If dark mode is enabled, the `--form-select-bg-img` variable is updated to use a different SVG or image suited for dark mode.
  - This is done using the `@include color-mode(dark)` mixin.

## Example Usage

```html
<!-- Basic Select Example -->
<select class="bt-form-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

<!-- Small Select Example -->
<select class="bt-form-select bt-form-select-sm">
  <option>Small Option 1</option>
  <option>Small Option 2</option>
</select>

<!-- Large Select Example -->
<select class="bt-form-select bt-form-select-lg">
  <option>Large Option 1</option>
  <option>Large Option 2</option>
</select>

<!-- Dark Mode Select Example (with dark mode enabled) -->
<select class="bt-form-select">
  <option>Dark Mode Option 1</option>
  <option>Dark Mode Option 2</option>
</select>
