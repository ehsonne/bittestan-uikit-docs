# Label Styles

This documentation provides an overview of the SCSS styles for label components, which are used to style labels in forms, including those for horizontal and inline forms.

## SCSS Structure

### Base Class: `.bt-form-label`

The `.bt-form-label` class is used to style labels in forms.

#### Structure Overview

- **Margin and Spacing**: Controls the space below labels to ensure proper spacing between the label and the associated form control.
- **Typography**: Sets the font size, style, weight, and color for consistent label appearance across the application.

### Horizontal and Inline Form Labels: `.bt-col-form-label`

The `.bt-col-form-label` class is used for labels in horizontal and inline forms where alignment with form controls is necessary.

- **Padding**: Adds vertical padding to align the label text with the form control.
- **Margin and Inheritance**: Removes the bottom margin (especially important when overriding default styles like `<legend>`), and inherits font size.
- **Typography**: Maintains consistent font style, weight, and line height for proper alignment and readability.

### Sizing Variants

Input labels can be adjusted for different sizes using `.bt-col-form-label-lg` for larger labels and `.bt-col-form-label-sm` for smaller labels.

- **Large Size**: `.bt-col-form-label-lg`
  - Increases padding and applies a larger font size to the label.
  
- **Small Size**: `.bt-col-form-label-sm`
  - Decreases padding and applies a smaller font size to the label.

## CSS Variables and Mixins

The SCSS file utilizes variables and mixins to ensure consistent styling across different label components.

### Variables

- `$form-label-margin-bottom`: Controls the margin below labels.
- `$form-label-font-size`: Specifies the font size for labels.
- `$form-label-font-style`: Sets the font style (e.g., normal, italic).
- `$form-label-font-weight`: Defines the font weight (e.g., normal, bold).
- `$form-label-color`: Determines the color of the label text.
- `$input-padding-y`, `$input-padding-y-lg`, `$input-padding-y-sm`: Define vertical padding for inputs, used to align labels with form controls.
- `$input-border-width`: Sets the width of input borders, used in calculating label padding.
- `$input-font-size-lg`, `$input-font-size-sm`: Set font sizes for larger and smaller labels respectively.
- `$input-line-height`: Defines the line height for consistent vertical alignment.

### Mixins

- `@include font-size($size)`: Applies the specified font size.
- `@include border-radius($radius, $other-radius...)`: Applies border radius, typically for controlling the shape of labels in certain contexts.

## Class Descriptions

### `.bt-form-label`

- **Usage:**
  ```html
  <label class="bt-form-label" for="inputID">Label Text</label>
  ```

- **Properties:**
  - `margin-bottom: $form-label-margin-bottom;`
  - `font-size: $form-label-font-size;`
  - `font-style: $form-label-font-style;`
  - `font-weight: $form-label-font-weight;`
  - `color: $form-label-color;`

### `.bt-col-form-label`

- **Usage:**
  ```html
  <label class="bt-col-form-label" for="inputID">Label Text</label>
  ```

- **Properties:**
  - `padding-top: add($input-padding-y, $input-border-width);`
  - `padding-bottom: add($input-padding-y, $input-border-width);`
  - `margin-bottom: 0;`
  - `font-size: inherit;`
  - `font-style: $form-label-font-style;`
  - `font-weight: $form-label-font-weight;`
  - `line-height: $input-line-height;`
  - `color: $form-label-color;`

### `.bt-col-form-label-lg`

- **Usage:**
  ```html
  <label class="bt-col-form-label-lg" for="inputID">Large Label Text</label>
  ```

- **Properties:**
  - `padding-top: add($input-padding-y-lg, $input-border-width);`
  - `padding-bottom: add($input-padding-y-lg, $input-border-width);`
  - `font-size: $input-font-size-lg;`

### `.bt-col-form-label-sm`

- **Usage:**
  ```html
  <label class="bt-col-form-label-sm" for="inputID">Small Label Text</label>
  ```

- **Properties:**
  - `padding-top: add($input-padding-y-sm, $input-border-width);`
  - `padding-bottom: add($input-padding-y-sm, $input-border-width);`
  - `font-size: $input-font-size-sm;`

## Customization

You can easily customize label components by adjusting SCSS variables or overriding specific styles in your project.

### Example of Custom Font Size

```scss
.bt-form-label {
  @include font-size(1.25rem); // Customize the label font size
}
```

### Example of Custom Padding for Horizontal Forms

```scss
.bt-col-form-label {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
```

## Example Usage

```html
<form>
  <div class="form-group">
    <label class="bt-form-label" for="username">Username</label>
    <input type="text" class="bt-form-control" id="username" placeholder="Enter username">
  </div>
  <div class="form-group row">
    <label class="bt-col-form-label col-sm-2" for="password">Password</label>
    <div class="col-sm-10">
      <input type="password" class="bt-form-control" id="password" placeholder="Enter password">
    </div>
  </div>
</form>
```

### Explanation:

- The `.bt-form-label` class is used for standard form labels.
- The `.bt-col-form-label` class aligns labels in a horizontal form layout, ensuring they align correctly with the input fields.
