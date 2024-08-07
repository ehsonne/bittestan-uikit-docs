# Progress

This documentation explains the SCSS structure for creating customizable progress bars. It includes details about SCSS variables, mixins, keyframes, and CSS classes that can be used to style progress components effectively.

## Keyframes

### `@keyframes progress-bar-stripes`

A keyframe animation for creating a striped effect on progress bars.

- **Usage:**
  This animation is only included if transitions are enabled (`$enable-transitions: true`).
  ```scss
  @keyframes progress-bar-stripes {
    0% {
      background-position-x: $progress-height;
    }
  }
  ```

## SCSS Variables

### Progress CSS Variables

These variables control the appearance and behavior of progress components.

- `--#{$prefix}progress-height`: Height of the progress bar.
- `--#{$prefix}progress-font-size`: Font size for text within the progress bar.
- `--#{$prefix}progress-bg`: Background color of the progress bar container.
- `--#{$prefix}progress-border-radius`: Border radius of the progress bar.
- `--#{$prefix}progress-box-shadow`: Box shadow applied to the progress bar container.
- `--#{$prefix}progress-bar-color`: Text color within the progress bar.
- `--#{$prefix}progress-bar-bg`: Background color of the progress bar.
- `--#{$prefix}progress-bar-transition`: Transition property for smooth animations on the progress bar.

## Mixins

### `rfs($value, $var)`
Applies a responsive font-size (RFS) to the specified variable.

### `border-radius($radius)`
Sets the border-radius for elements.

### `box-shadow($shadow)`
Applies a box-shadow to elements.

### `transition($properties)`
Sets transition properties for smooth animations and state changes.

### `gradient-striped()`
Applies a striped background pattern to elements.

## CSS Classes

### `.bt-progress`

The primary class for styling the progress bar container.

- **Properties:**
  - `display: flex;`
  - `height: var(--#{$prefix}progress-height);`
  - `overflow: hidden;`
  - `background-color: var(--#{$prefix}progress-bg);`
  - Includes border-radius and box-shadow styling.

- **Usage:**
  ```html
  <div class="bt-progress">
    <!-- Progress bar items -->
  </div>
  ```

### `.bt-progress-stacked`

A wrapper class for creating stacked progress bars.

- **Properties:**
  - Ensures overflow is visible to manage stacked elements.
  
- **Usage:**
  ```html
  <div class="bt-progress-stacked">
    <div class="bt-progress">
      <div class="bt-progress-bar" style="width: 60%;">60%</div>
    </div>
    <div class="bt-progress">
      <div class="bt-progress-bar" style="width: 30%;">30%</div>
    </div>
  </div>
  ```

### `.bt-progress-bar`

Defines the style for the individual progress bar within the container.

- **Properties:**
  - `display: flex;`
  - `flex-direction: column;`
  - `justify-content: center;`
  - `color: var(--#{$prefix}progress-bar-color);`
  - `background-color: var(--#{$prefix}progress-bar-bg);`
  - Includes transition properties for smooth updates to the bar's width or other animated properties.
  
- **Usage:**
  ```html
  <div class="bt-progress-bar" style="width: 75%;">
    75%
  </div>
  ```

### `.bt-progress-bar-striped`

Adds a striped pattern to the progress bar.

- **Properties:**
  - Uses a gradient background to create stripes.
  - Background size is set to match the progress bar height.
  
- **Usage:**
  ```html
  <div class="bt-progress-bar bt-progress-bar-striped" style="width: 50%;">
    50%
  </div>
  ```

### `.bt-progress-bar-animated`

Adds an animated effect to the striped progress bar.

- **Properties:**
  - Applies the `progress-bar-stripes` animation to create a moving striped effect.
  - Disables animation when the user prefers reduced motion (`prefers-reduced-motion: reduce`).

- **Usage:**
  ```html
  <div class="bt-progress-bar bt-progress-bar-striped bt-progress-bar-animated" style="width: 50%;">
    50%
  </div>
  ```

### Example Usage

```html
<div class="bt-progress">
  <div class="bt-progress-bar" style="width: 25%;">25%</div>
</div>

<div class="bt-progress bt-progress-stacked">
  <div class="bt-progress-bar" style="width: 60%;">60%</div>
  <div class="bt-progress-bar bt-progress-bar-striped" style="width: 30%;">30%</div>
  <div class="bt-progress-bar bt-progress-bar-striped bt-progress-bar-animated" style="width: 10%;">10%</div>
</div>
```
