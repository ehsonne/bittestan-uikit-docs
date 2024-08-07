# Navbar

This documentation covers the structure and components of the navbar, including the SCSS variables, mixins, and classes that help in creating customizable, responsive navigation bars.

## SCSS Variables

### Navbar CSS Variables

These variables are used to define the styles for different parts of the navbar.

- `--#{$prefix}navbar-padding-x`: Horizontal padding for the navbar.
- `--#{$prefix}navbar-padding-y`: Vertical padding for the navbar.
- `--#{$prefix}navbar-color`: Default text color for the navbar.
- `--#{$prefix}navbar-hover-color`: Text color when hovering over navbar items.
- `--#{$prefix}navbar-disabled-color`: Text color for disabled navbar items.
- `--#{$prefix}navbar-active-color`: Text color for active navbar items.
- `--#{$prefix}navbar-brand-padding-y`: Vertical padding for the navbar brand.
- `--#{$prefix}navbar-brand-margin-end`: Margin at the end of the navbar brand.
- `--#{$prefix}navbar-brand-font-size`: Font size for the navbar brand.
- `--#{$prefix}navbar-brand-color`: Color of the navbar brand.
- `--#{$prefix}navbar-brand-hover-color`: Color of the navbar brand on hover.
- `--#{$prefix}navbar-nav-link-padding-x`: Horizontal padding for navbar links.
- `--#{$prefix}navbar-toggler-padding-y`: Vertical padding for the navbar toggler.
- `--#{$prefix}navbar-toggler-padding-x`: Horizontal padding for the navbar toggler.
- `--#{$prefix}navbar-toggler-font-size`: Font size for the navbar toggler.
- `--#{$prefix}navbar-toggler-icon-bg`: Background image for the navbar toggler icon.
- `--#{$prefix}navbar-toggler-border-color`: Border color for the navbar toggler.
- `--#{$prefix}navbar-toggler-border-radius`: Border radius for the navbar toggler.
- `--#{$prefix}navbar-toggler-focus-width`: Width of the focus state border for the navbar toggler.
- `--#{$prefix}navbar-toggler-transition`: Transition properties for the navbar toggler.

## Mixins

### `gradient-bg()`
Applies a background gradient to the navbar.

### `rfs($value, $var)`
Applies a responsive font-size (RFS) to the specified variable.

### `media-breakpoint-up($breakpoint)`
Applies styles at a specified breakpoint and above.

### `border-radius($radius)`
Sets the border-radius for elements.

### `transition($properties)`
Sets transition properties for smooth animations.

### `color-mode($mode)`
Applies styles based on the color mode (e.g., light or dark).

## CSS Classes

### `.bt-navbar`

This is the main navbar class which sets the basic structure and styling for the navbar.

- **Properties:**
  - `position: relative;`
  - `display: flex;`
  - `flex-wrap: wrap;`
  - `align-items: center;`
  - `justify-content: space-between;`
  - `padding: var(--#{$prefix}navbar-padding-y) var(--#{$prefix}navbar-padding-x);`
  
- **Usage:**
  ```html
  <nav class="bt-navbar">
    <!-- Navbar content -->
  </nav>
  ```

### `.bt-navbar-brand`

Defines the styling for the brand name or logo in the navbar.

- **Properties:**
  - `padding-top: var(--#{$prefix}navbar-brand-padding-y);`
  - `padding-bottom: var(--#{$prefix}navbar-brand-padding-y);`
  - `margin-right: var(--#{$prefix}navbar-brand-margin-end);`
  - `color: var(--#{$prefix}navbar-brand-color);`
  - `font-size: var(--#{$prefix}navbar-brand-font-size);`
  
- **Usage:**
  ```html
  <a class="bt-navbar-brand" href="#">Brand</a>
  ```

### `.bt-navbar-nav`

Custom styles for navbar navigation, allowing usage without `.nav`.

- **Properties:**
  - `display: flex;`
  - `flex-direction: column;`
  - `list-style: none;`
  
- **Usage:**
  ```html
  <ul class="bt-navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
  </ul>
  ```

### `.bt-navbar-text`

Defines styles for text within the navbar.

- **Properties:**
  - `padding-top: $nav-link-padding-y;`
  - `padding-bottom: $nav-link-padding-y;`
  - `color: var(--#{$prefix}navbar-color);`
  
- **Usage:**
  ```html
  <span class="bt-navbar-text">Navbar text</span>
  ```

### `.bt-navbar-collapse`

Styles for the collapsible navbar content.

- **Properties:**
  - `flex-basis: 100%;`
  - `flex-grow: 1;`
  - `align-items: center;`
  
- **Usage:**
  ```html
  <div class="bt-navbar-collapse">
    <!-- Collapsible content -->
  </div>
  ```

### `.bt-navbar-toggler`

Styles for the button that toggles the collapse of the navbar.

- **Properties:**
  - `padding: var(--#{$prefix}navbar-toggler-padding-y) var(--#{$prefix}navbar-toggler-padding-x);`
  - `font-size: var(--#{$prefix}navbar-toggler-font-size);`
  - `color: var(--#{$prefix}navbar-color);`
  - `border-radius: var(--#{$prefix}navbar-toggler-border-radius);`
  
- **Usage:**
  ```html
  <button class="bt-navbar-toggler" type="button">
    <span class="bt-navbar-toggler-icon"></span>
  </button>
  ```

### `.bt-navbar-expand`

Responsive classes for expanding the navbar at different breakpoints.

- **Generated Classes:**
  - `.bt-navbar-expand-sm`
  - `.bt-navbar-expand-md`
  - `.bt-navbar-expand-lg`
  - `.bt-navbar-expand-xl`
  
- **Usage:**
  ```html
  <nav class="bt-navbar bt-navbar-expand-lg">
    <!-- Navbar content -->
  </nav>
  ```

### `.bt-navbar-dark`

Applies a dark theme to the navbar.

- **Properties:**
  - Adjusts various color variables to provide a dark background and light text.
  
- **Usage:**
  ```html
  <nav class="bt-navbar bt-navbar-dark">
    <!-- Navbar content -->
  </nav>
  ```

### `.bt-navbar-light`

Applies a light theme to the navbar.

- **Properties:**
  - Adjusts various color variables to provide a light background and dark text.
  
- **Usage:**
  ```html
  <nav class="bt-navbar bt-navbar-light">
    <!-- Navbar content -->
  </nav>
  ```