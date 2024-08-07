# Form Text Styles

This documentation covers the SCSS setup for styling form text elements, such as helper text or validation messages, within a form.

## SCSS Structure

### Base Class: `.bt-form-text`

The `.bt-form-text` class is designed to style small pieces of text associated with form controls, such as descriptions or validation messages. This class ensures that the text is styled consistently across all form elements.

#### Structure Overview

- **Typography**: Controls the font size, style, and weight, ensuring readability and alignment with the overall form design.
- **Spacing**: Adds a margin at the top to provide space between the text and the preceding form control.
- **Color**: Sets the color to differentiate the form text from the main form content or to highlight important information.

## CSS Variables and Mixins

The SCSS file uses several variables and mixins to control the styling of form text elements.

### Variables

- `$form-text-margin-top`: Controls the space above the form text to separate it from the form control above.
- `$form-text-font-size`: Sets the font size for the form text, typically smaller than the main text to subtly differentiate it.
- `$form-text-font-style`: Defines the font style, such as normal or italic, for the form text.
- `$form-text-font-weight`: Sets the font weight for the form text, controlling its boldness.
- `$form-text-color`: Specifies the color for the form text, which can be customized to fit the design scheme.

### Mixins

- `@include font-size($size)`: Applies the specified font size to the form text.

## Class Description

### `.bt-form-text`

The primary class for styling form text elements.

- **Usage:**
  ```html
  <small class="bt-form-text">This is helper text for a form control.</small>
  ```

- **Properties:**
  - `margin-top: $form-text-margin-top;`
  - `@include font-size($form-text-font-size);`
  - `font-style: $form-text-font-style;`
  - `font-weight: $form-text-font-weight;`
  - `color: $form-text-color;`

### Customization

You can easily customize the `.bt-form-text` class by adjusting the SCSS variables to fit your design needs. Here’s how you can override these styles in your project:

- **Change Font Size:**
  ```scss
  .bt-form-text {
    @include font-size(0.875rem); // Example of custom font size
  }
  ```

- **Adjust Color:**
  ```scss
  .bt-form-text {
    color: #6c757d; // Example of a custom color
  }
  ```

- **Modify Margin:**
  ```scss
  .bt-form-text {
    margin-top: 0.5rem; // Example of custom margin
  }
  ```

## Example Usage

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp">
    <small id="emailHelp" class="bt-form-text">We'll never share your email with anyone else.</small>
  </div>
</form>
```

### Explanation:

- The `.bt-form-text` class is applied to a `<small>` element to provide additional context or helper text for the input field above.
- The class styles this text with a smaller font size, a specific color, and appropriate margin to visually separate it from the form control.

