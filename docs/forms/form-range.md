# Range Input Styles

This documentation covers the SCSS setup for styling range inputs (sliders) across various browsers, ensuring consistent appearance and behavior.

## SCSS Structure

### Base Class: `.bt-form-range`

The `.bt-form-range` class provides consistent styling for range input elements. It handles cross-browser differences and ensures that the range inputs look the same on all platforms.

#### Structure Overview

- **Layout**: Range inputs are styled to take up 100% of their container's width with custom height, background, and appearance settings.
- **Cross-Browser Compatibility**: Vendor-specific styles ensure that the range inputs are styled consistently across different browsers, including WebKit and Mozilla.
- **Customizability**: The class utilizes SCSS variables and mixins to allow easy customization of the range inputs.

## CSS Variables and Mixins

The SCSS file makes use of various variables and mixins to control the styling of the range inputs.

### Variables

- `$form-range-thumb-width`: Sets the width of the range input thumb (slider handle).
- `$form-range-thumb-height`: Sets the height of the range input thumb.
- `$form-range-thumb-bg`: Sets the background of the range input thumb.
- `$form-range-thumb-border`: Sets the border properties of the range input thumb.
- `$form-range-thumb-border-radius`: Sets the border-radius of the range input thumb.
- `$form-range-thumb-box-shadow`: Sets the box-shadow for the range input thumb.
- `$form-range-thumb-focus-box-shadow`: Sets the box-shadow when the range input thumb is focused.
- `$form-range-thumb-active-bg`: Sets the background of the range input thumb when active (clicked or being dragged).
- `$form-range-thumb-transition`: Sets the transition effect for the range input thumb.
- `$form-range-track-width`: Sets the width of the range input track (the line that the thumb moves along).
- `$form-range-track-height`: Sets the height of the range input track.
- `$form-range-track-bg`: Sets the background color of the range input track.
- `$form-range-track-border-radius`: Sets the border-radius of the range input track.
- `$form-range-track-box-shadow`: Sets the box-shadow for the range input track.
- `$form-range-track-cursor`: Sets the cursor style when hovering over the range input track.
- `$form-range-thumb-disabled-bg`: Sets the background color of the range input thumb when the range input is disabled.

### Mixins

- `@include gradient-bg($background)`: Applies a gradient background to the range input thumb.
- `@include border-radius($radius)`: Applies border-radius to the range input thumb and track.
- `@include box-shadow($shadows...)`: Applies box-shadow to the range input thumb and track.
- `@include transition($properties...)`: Applies transition effects to the range input thumb for smooth animations.

## Class Descriptions

### `.bt-form-range`

The main class for styling range inputs, ensuring a consistent look and feel across different browsers.

- **Usage:**
  ```html
  <input type="range" class="bt-form-range">
  ```

- **Properties:**
  - `width: 100%;`
  - `height: auto;` (based on thumb height and shadow width)
  - `padding: 0;`
  - `appearance: none;`
  - `background-color: transparent;`

- **Browser-Specific Styling:**
  - **WebKit (Chrome, Safari, Edge):**
    - Styles the slider thumb using `&::-webkit-slider-thumb` and the track using `&::-webkit-slider-runnable-track`.
    - Handles focus state for the thumb with custom box-shadow.
    - Adjusts the thumb's margin to center it on the track.
  - **Mozilla (Firefox):**
    - Styles the slider thumb using `&::-moz-range-thumb` and the track using `&::-moz-range-track`.
    - Handles focus state and active state with custom styles.

- **Disabled State:**
  - Disables pointer events and adjusts the thumb background color when the input is disabled.

### Vendor-Specific Pseudo-Elements

- **`::-webkit-slider-thumb`**:
  - Customizes the appearance of the slider thumb in WebKit-based browsers.
  - **Properties:**
    - `width: $form-range-thumb-width;`
    - `height: $form-range-thumb-height;`
    - `border: $form-range-thumb-border;`
    - `@include border-radius($form-range-thumb-border-radius);`
    - `@include box-shadow($form-range-thumb-box-shadow);`
    - `@include gradient-bg($form-range-thumb-bg);`
    - **Active State:** Changes the background using `@include gradient-bg($form-range-thumb-active-bg);`.

- **`::-webkit-slider-runnable-track`**:
  - Customizes the appearance of the slider track in WebKit-based browsers.
  - **Properties:**
    - `width: $form-range-track-width;`
    - `height: $form-range-track-height;`
    - `background-color: $form-range-track-bg;`
    - `@include border-radius($form-range-track-border-radius);`
    - `@include box-shadow($form-range-track-box-shadow);`

- **`::-moz-range-thumb`**:
  - Customizes the appearance of the slider thumb in Mozilla-based browsers.
  - **Properties:**
    - Same as WebKit thumb, with specific adjustments for Mozilla.
    - **Active State:** Changes the background using `@include gradient-bg($form-range-thumb-active-bg);`.

- **`::-moz-range-track`**:
  - Customizes the appearance of the slider track in Mozilla-based browsers.
  - **Properties:**
    - Same as WebKit track, with specific adjustments for Mozilla.

### Disabled Styling

- Disables interaction with the slider and visually indicates the disabled state by changing the thumb's background color.

## Example Usage

```html
<!-- Basic Range Input Example -->
<input type="range" class="bt-form-range">

<!-- Disabled Range Input Example -->
<input type="range" class="bt-form-range" disabled>
