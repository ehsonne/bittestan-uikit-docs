# Pagination

This documentation explains the SCSS structure for creating customizable pagination components. It includes information on SCSS variables, mixins, and CSS classes that can be used to style pagination elements effectively.

## SCSS Variables

### Pagination CSS Variables

These variables are used to customize the appearance of the pagination component.

- `--#{$prefix}pagination-padding-x`: Horizontal padding for pagination items.
- `--#{$prefix}pagination-padding-y`: Vertical padding for pagination items.
- `--#{$prefix}pagination-font-size`: Font size for pagination items.
- `--#{$prefix}pagination-color`: Default text color for pagination items.
- `--#{$prefix}pagination-bg`: Background color for pagination items.
- `--#{$prefix}pagination-border-width`: Border width for pagination items.
- `--#{$prefix}pagination-border-color`: Border color for pagination items.
- `--#{$prefix}pagination-border-radius`: Border radius for pagination items.
- `--#{$prefix}pagination-hover-color`: Text color when hovering over pagination items.
- `--#{$prefix}pagination-hover-bg`: Background color when hovering over pagination items.
- `--#{$prefix}pagination-hover-border-color`: Border color when hovering over pagination items.
- `--#{$prefix}pagination-focus-color`: Text color when a pagination item is focused.
- `--#{$prefix}pagination-focus-bg`: Background color when a pagination item is focused.
- `--#{$prefix}pagination-focus-box-shadow`: Box shadow when a pagination item is focused.
- `--#{$prefix}pagination-active-color`: Text color for active pagination items.
- `--#{$prefix}pagination-active-bg`: Background color for active pagination items.
- `--#{$prefix}pagination-active-border-color`: Border color for active pagination items.
- `--#{$prefix}pagination-disabled-color`: Text color for disabled pagination items.
- `--#{$prefix}pagination-disabled-bg`: Background color for disabled pagination items.
- `--#{$prefix}pagination-disabled-border-color`: Border color for disabled pagination items.

## Mixins

### `rfs($value, $var)`
Applies a responsive font-size (RFS) to the specified variable.

### `transition($properties)`
Sets transition properties for smooth animations and state changes.

### `gradient-bg($background)`
Applies a gradient background to elements.

### `border-radius($radius)`
Sets the border-radius for elements.

### `border-start-radius($radius)`
Sets the border-radius for the start (left side in LTR, right side in RTL) of an element.

### `border-end-radius($radius)`
Sets the border-radius for the end (right side in LTR, left side in RTL) of an element.

### `pagination-size($padding-y, $padding-x, $font-size, $border-radius)`
Sets the size of pagination items by defining padding, font-size, and border-radius.

## CSS Classes

### `.bt-pagination`

The primary class for styling pagination components.

- **Properties:**
  - `display: flex;`
  - `padding: var(--#{$prefix}pagination-padding-y) var(--#{$prefix}pagination-padding-x);`
  - `background-color: var(--#{$prefix}pagination-bg);`
  - `border: var(--#{$prefix}pagination-border-width) solid var(--#{$prefix}pagination-border-color);`
  
- **Usage:**
  ```html
  <ul class="bt-pagination">
    <!-- Pagination items -->
  </ul>
  ```

### `.bt-page-link`

Defines the style for each pagination link.

- **Properties:**
  - `display: block;`
  - `padding: var(--#{$prefix}pagination-padding-y) var(--#{$prefix}pagination-padding-x);`
  - `color: var(--#{$prefix}pagination-color);`
  - `background-color: var(--#{$prefix}pagination-bg);`
  - `border: var(--#{$prefix}pagination-border-width) solid var(--#{$prefix}pagination-border-color);`
  
- **States:**
  - `:hover`: Changes background, border, and text color on hover.
  - `:focus`: Applies focus styles including box-shadow and color changes.
  - `.active`: Applies styles for active pagination items.
  - `.disabled`: Applies styles for disabled pagination items, making them unclickable.
  
- **Usage:**
  ```html
  <li class="bt-page-item">
    <a class="bt-page-link" href="#">1</a>
  </li>
  ```

### `.bt-page-item`

A wrapper class for each pagination item.

- **Properties:**
  - Handles margin and border-radius for pagination items.
  
- **Usage:**
  ```html
  <li class="bt-page-item">
    <a class="bt-page-link" href="#">1</a>
  </li>
  ```

### Sizing Classes

Adjust the size of the pagination items using the following classes:

- `.bt-pagination-lg`: Applies large sizing to the pagination items.
- `.bt-pagination-sm`: Applies small sizing to the pagination items.

- **Usage:**
  ```html
  <ul class="bt-pagination bt-pagination-lg">
    <!-- Pagination items -->
  </ul>
  ```

## Example Usage

```html
<nav aria-label="Page navigation example">
  <ul class="bt-pagination">
    <li class="bt-page-item">
      <a class="bt-page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="bt-page-item"><a class="bt-page-link" href="#">1</a></li>
    <li class="bt-page-item"><a class="bt-page-link" href="#">2</a></li>
    <li class="bt-page-item"><a class="bt-page-link" href="#">3</a></li>
    <li class="bt-page-item">
      <a class="bt-page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```