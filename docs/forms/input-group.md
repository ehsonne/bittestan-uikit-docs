# Input Group Styles

This documentation explains the SCSS setup for input group components, which are used to group multiple form controls, buttons, or text together in a single row.

## SCSS Structure

### Base Class: `.bt-input-group`

The `.bt-input-group` class is the container for grouping form elements like inputs, selects, and buttons.

#### Structure Overview

- **Flexbox Layout**: The input group uses flexbox to arrange its children in a row, allowing for flexible and responsive layouts.
- **Positioning**: Ensures that form controls are positioned correctly relative to each other, especially when one is focused.
- **Z-Index Management**: Manages the layering of elements to ensure focused controls and buttons are visually prioritized.

### Textual Addons: `.bt-input-group-text`

The `.bt-input-group-text` class is used for adding text or other inline elements (e.g., radio/checkbox) to an input group.

- **Alignment**: Uses flexbox to center the content vertically within the group.
- **Styling**: Inherits the font size and line height of the form controls, with customizable background, padding, and border styles.

### Sizing

Input groups can be resized using `.bt-input-group-lg` or `.bt-input-group-sm` classes to match larger or smaller form controls.

- **Large Size**: `.bt-input-group-lg`
  - Applies larger padding, font size, and border radius.
- **Small Size**: `.bt-input-group-sm`
  - Applies smaller padding, font size, and border radius.

### Rounded Corners

Special rules ensure consistent and proper rounded corners when elements are grouped together.

- **Edge Cases**: When multiple elements are grouped, these rules remove border radius between them to create a seamless appearance.
- **Validation State**: Adjusts borders based on validation states to maintain a clean design.

## CSS Variables and Mixins

The SCSS file uses variables and mixins for consistent styling across different input group components.

### Variables

- `$input-group-addon-padding-y`: Vertical padding for text addons.
- `$input-group-addon-padding-x`: Horizontal padding for text addons.
- `$input-group-addon-font-weight`: Font weight for text addons.
- `$input-group-addon-color`: Text color for text addons.
- `$input-group-addon-bg`: Background color for text addons.
- `$input-group-addon-border-color`: Border color for text addons.
- `$input-border-width`: Border width for input group elements.
- `$form-validation-states`: States used for form validation styling.

### Mixins

- `@include font-size($size)`: Applies the specified font size.
- `@include border-radius($radius, $other-radius...)`: Applies border radius, with options for specific corners.
- `@include border-end-radius($radius)`: Removes the end border radius for seamless connections.
- `@include border-start-radius($radius)`: Removes the start border radius for seamless connections.
- `@include box-shadow($shadows...)`: Applies box shadows, typically used for focus states.
- `@include transition($properties...)`: Adds transitions for smoother interactions.

## Class Descriptions

### `.bt-input-group`

- **Usage:**
  ```html
  <div class="bt-input-group">
    <input type="text" class="bt-form-control" placeholder="Username">
    <span class="bt-input-group-text">@example.com</span>
  </div>
  ```

- **Properties:**
  - `position: relative;`
  - `display: flex;`
  - `flex-wrap: wrap;`
  - `align-items: stretch;`
  - `width: 100%;`

### `.bt-input-group-text`

- **Usage:**
  ```html
  <span class="bt-input-group-text">$</span>
  ```

- **Properties:**
  - `display: flex;`
  - `align-items: center;`
  - `padding: $input-group-addon-padding-y $input-group-addon-padding-x;`
  - `font-size: $input-font-size;`
  - `font-weight: $input-group-addon-font-weight;`
  - `color: $input-group-addon-color;`
  - `background-color: $input-group-addon-bg;`
  - `border: $input-border-width solid $input-group-addon-border-color;`

### Sizing Classes

- **`.bt-input-group-lg`**: For larger input groups.
- **`.bt-input-group-sm`**: For smaller input groups.

### Rounded Corners

- Ensures that adjacent form controls in an input group do not have unnecessary border radius, creating a seamless look.

### Customization

You can easily customize input group elements by adjusting SCSS variables or overriding specific styles in your project.

- **Example of Custom Sizing:**
  ```scss
  .bt-input-group-lg {
    .bt-form-control {
      padding: 1rem;
    }
  }
  ```

- **Example of Custom Background:**
  ```scss
  .bt-input-group-text {
    background-color: #f8f9fa; // Example custom background color
  }
  ```

## Example Usage

```html
<div class="bt-input-group">
  <span class="bt-input-group-text">https://</span>
  <input type="text" class="bt-form-control" placeholder="Website URL">
</div>
```

### Explanation:

- The `.bt-input-group` wraps around an input and a span with the `.bt-input-group-text` class.
- The input takes up the remaining space, while the span provides additional context or information.
