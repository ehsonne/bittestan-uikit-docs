# Grid

This documentation provides an overview of the grid system implemented in the `_grid.scss` file. The grid system includes mixins and utility classes for building responsive layouts with predefined breakpoints and column sizes.

## Mixins

### `make-container($padding-x: $grid-gutter-width / 2)`

- **Description:** 
  This mixin creates a container element that centers its content and applies horizontal padding.
  
- **Parameters:**
  - `$padding-x`: The horizontal padding to be applied to the container. Defaults to half of the grid gutter width.

- **Usage:**
  ```scss
  .example-container {
    @include make-container();
  }
  ```

### `make-row($gutter: $grid-gutter-width)`

- **Description:** 
  This mixin creates a flexbox row that wraps its content and applies negative margins to account for padding in columns.
  
- **Parameters:**
  - `$gutter`: The gutter size to be applied as negative margin. Defaults to the grid gutter width.

- **Usage:**
  ```scss
  .example-row {
    @include make-row();
  }
  ```

### `make-col-ready($gutter: $grid-gutter-width)`

- **Description:** 
  This mixin prepares a column by setting its width to 100% and applying horizontal padding.
  
- **Parameters:**
  - `$gutter`: The gutter size to be applied as padding. Defaults to the grid gutter width.

- **Usage:**
  ```scss
  .example-col {
    @include make-col-ready();
  }
  ```

### `make-col($size, $columns: $grid-columns)`

- **Description:** 
  This mixin sets up a column by applying flexible width and max-width based on the column size and total number of columns.
  
- **Parameters:**
  - `$size`: The size of the column in relation to the total number of columns.
  - `$columns`: The total number of columns in the grid. Defaults to `$grid-columns`.

- **Usage:**
  ```scss
  .example-col-4 {
    @include make-col(4);
  }
  ```

## Grid Classes

### `.bt-container`

- **Description:** 
  A class for creating a centered container with responsive max-width based on breakpoints.

- **Usage:**
  ```html
  <div class="bt-container">
    <!-- Content here -->
  </div>
  ```

### `.bt-container-fluid`

- **Description:** 
  A class for creating a full-width container that spans the entire width of the viewport.

- **Usage:**
  ```html
  <div class="bt-container-fluid">
    <!-- Content here -->
  </div>
  ```

### `.bt-row`

- **Description:** 
  A class for creating a flexbox row that wraps its columns and applies the necessary gutter margin.

- **Usage:**
  ```html
  <div class="bt-row">
    <!-- Columns here -->
  </div>
  ```

### Column Classes

- **Description:** 
  Classes for creating responsive columns based on breakpoints and grid columns. Classes are automatically generated for each breakpoint and column size.

- **Generated Classes:**
  - `.bt-col-[breakpoint]-[1-12]`: Creates columns based on the grid system.
  
  For example, `.bt-col-md-6` would create a column that spans 50% of the row width on medium-sized screens.

- **Usage:**
  ```html
  <div class="bt-col-md-6">
    <!-- Column content here -->
  </div>
  ```

### Breakpoint-Specific Column Classes

- **Description:** 
  Columns adjust their width based on the current screen size. The grid system generates classes for each defined breakpoint.

- **Breakpoints:** 
  - `xs`, `sm`, `md`, `lg`, `xl`

- **Usage:**
  ```html
  <div class="bt-col-md-6 bt-col-lg-4">
    <!-- Column content here -->
  </div>
  ```
