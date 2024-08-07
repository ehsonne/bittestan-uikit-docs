# Toasts

This documentation covers the SCSS setup for styling toast notifications in your project. It includes information on variables, classes, and mixins used to customize the appearance and behavior of toasts.

## SCSS Variables

### Toast CSS Variables

These SCSS variables control the default appearance and behavior of toast notifications.

- `--#{$prefix}toast-zindex`: Controls the z-index stacking order of the toast.
- `--#{$prefix}toast-padding-x`: Horizontal padding inside the toast.
- `--#{$prefix}toast-padding-y`: Vertical padding inside the toast.
- `--#{$prefix}toast-spacing`: Spacing between multiple toasts.
- `--#{$prefix}toast-max-width`: Maximum width of the toast.
- `--#{$prefix}toast-font-size`: Font size for the toast content.
- `--#{$prefix}toast-color`: Text color inside the toast.
- `--#{$prefix}toast-bg`: Background color of the toast.
- `--#{$prefix}toast-border-width`: Width of the toast border.
- `--#{$prefix}toast-border-color`: Border color of the toast.
- `--#{$prefix}toast-border-radius`: Border radius for rounded corners on the toast.
- `--#{$prefix}toast-box-shadow`: Box shadow for the toast.
- `--#{$prefix}toast-header-color`: Text color for the toast header.
- `--#{$prefix}toast-header-bg`: Background color for the toast header.
- `--#{$prefix}toast-header-border-color`: Border color for the toast header.

## CSS Classes

### `.bt-toast`

The base class for individual toasts. It applies styles like width, padding, colors, and border properties.

- **Properties:**
  - `width: var(--#{$prefix}toast-max-width);`
  - `max-width: 100%;`
  - `color: var(--#{$prefix}toast-color);`
  - `background-color: var(--#{$prefix}toast-bg);`
  - `border: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-border-color);`
  - `box-shadow: var(--#{$prefix}toast-box-shadow);`
  - `@include border-radius(var(--#{$prefix}toast-border-radius));`

- **States:**
  - `.showing`: Applies opacity 0 during the showing transition.
  - `:not(.show)`: Hides the toast when it's not in the "show" state.

- **Usage:**
  ```html
  <div class="bt-toast">
    <div class="bt-toast-header">
      <!-- Header content -->
    </div>
    <div class="bt-toast-body">
      <!-- Body content -->
    </div>
  </div>
  ```

### `.bt-toast-container`

A container for managing the positioning and stacking of multiple toasts.

- **Properties:**
  - `position: absolute;`
  - `z-index: var(--#{$prefix}toast-zindex);`
  - `width: max-content;`
  - `pointer-events: none;`
  - `> :not(:last-child)`: Adds spacing between stacked toasts.

- **Usage:**
  ```html
  <div class="bt-toast-container">
    <div class="bt-toast">Toast 1</div>
    <div class="bt-toast">Toast 2</div>
  </div>
  ```

### `.bt-toast-header`

Styles the header of the toast, including layout and background properties.

- **Properties:**
  - `display: flex;`
  - `align-items: center;`
  - `padding: var(--#{$prefix}toast-padding-y) var(--#{$prefix}toast-padding-x);`
  - `color: var(--#{$prefix}toast-header-color);`
  - `background-color: var(--#{$prefix}toast-header-bg);`
  - `border-bottom: var(--#{$prefix}toast-border-width) solid var(--#{$prefix}toast-header-border-color);`
  - `@include border-top-radius(calc(var(--#{$prefix}toast-border-radius) - var(--#{$prefix}toast-border-width)));`

- **Close Button:**
  - `.btn-close`: Positioned inside the header with adjusted margins for spacing.

- **Usage:**
  ```html
  <div class="bt-toast">
    <div class="bt-toast-header">
      Toast Header
      <button type="button" class="btn-close"></button>
    </div>
    <div class="bt-toast-body">Toast body content</div>
  </div>
  ```

### `.bt-toast-body`

Styles the body content of the toast, including padding and text wrapping.

- **Properties:**
  - `padding: var(--#{$prefix}toast-padding-x);`
  - `word-wrap: break-word;`

- **Usage:**
  ```html
  <div class="bt-toast-body">
    Toast body content
  </div>
  ```

## Example Usage

```html
<div class="bt-toast-container" style="top: 20px; right: 20px;">
  <div class="bt-toast show">
    <div class="bt-toast-header">
      Toast Header
      <button type="button" class="btn-close"></button>
    </div>
    <div class="bt-toast-body">
      This is a toast notification example.
    </div>
  </div>
</div>
```

