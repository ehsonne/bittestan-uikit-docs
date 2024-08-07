# Tables

This documentation covers the SCSS setup for styling tables in your project. It includes information on variables, classes, and mixins used to customize the appearance of tables, including features like zebra-striping, responsive design, and table variants.

## SCSS Variables

### Table CSS Variables

These SCSS variables control the default appearance and behavior of tables.

- `--#{$prefix}table-color`: The default text color for table cells.
- `--#{$prefix}table-bg`: The default background color for table cells.
- `--#{$prefix}table-border-color`: The default border color for table cells.
- `--#{$prefix}table-accent-bg`: Background color used for accenting certain table cells.
- `--#{$prefix}table-striped-color`: Text color used in striped table rows or columns.
- `--#{$prefix}table-striped-bg`: Background color used in striped table rows or columns.
- `--#{$prefix}table-active-color`: Text color for active table cells.
- `--#{$prefix}table-active-bg`: Background color for active table cells.
- `--#{$prefix}table-hover-color`: Text color for table cells on hover.
- `--#{$prefix}table-hover-bg`: Background color for table cells on hover.

## CSS Classes

### `.table`

The base class for all tables. It applies standard table styling including width, margin, border color, and vertical alignment.

- **Properties:**
  - `width: 100%;`
  - `margin-bottom: $spacer;`
  - `vertical-align: $table-cell-vertical-align;`
  - `border-color: var(--#{$prefix}table-border-color);`

- **Usage:**
  ```html
  <table class="table">
    <!-- Table content -->
  </table>
  ```

### `.table-group-divider`

Adds a thick border between groups of rows within the table.

- **Properties:**
  - `border-top: calc(#{$table-border-width} * 2) solid $table-group-separator-color;`

- **Usage:**
  ```html
  <table class="table">
    <tbody>
      <tr><td>Group 1, Row 1</td></tr>
      <tr class="table-group-divider"></tr>
      <tr><td>Group 2, Row 1</td></tr>
    </tbody>
  </table>
  ```

### `.caption-top`

Adjusts the position of the table's caption to the top.

- **Properties:**
  - `caption-side: top;`

- **Usage:**
  ```html
  <table class="table caption-top">
    <caption>Table Caption</caption>
    <!-- Table content -->
  </table>
  ```

### `.table-sm`

Creates a condensed table with smaller padding.

- **Properties:**
  - Reduces the padding on table cells.
  
- **Usage:**
  ```html
  <table class="table table-sm">
    <!-- Table content -->
  </table>
  ```

### `.table-bordered`

Adds borders to all sides of the table cells.

- **Properties:**
  - Adds border width to rows and cells.
  
- **Usage:**
  ```html
  <table class="table table-bordered">
    <!-- Table content -->
  </table>
  ```

### `.table-borderless`

Removes borders from table cells, making the table appear borderless.

- **Properties:**
  - Removes bottom border from table cells and top border from subsequent rows.
  
- **Usage:**
  ```html
  <table class="table table-borderless">
    <!-- Table content -->
  </table>
  ```

### `.table-striped`

Applies zebra-striping to table rows, alternating their background colors.

- **Properties:**
  - Alternates row background colors using the `$table-striped-order` variable.
  
- **Usage:**
  ```html
  <table class="table table-striped">
    <!-- Table content -->
  </table>
  ```

### `.table-striped-columns`

Applies zebra-striping to table columns instead of rows.

- **Properties:**
  - Alternates column background colors using the `$table-striped-columns-order` variable.
  
- **Usage:**
  ```html
  <table class="table table-striped-columns">
    <!-- Table content -->
  </table>
  ```

### `.table-active`

Highlights table rows or cells as active.

- **Properties:**
  - Changes background and text color to active state colors.
  
- **Usage:**
  ```html
  <table class="table">
    <tr class="table-active"><td>Active Row</td></tr>
    <!-- More rows -->
  </table>
  ```

### `.table-hover`

Adds a hover effect to table rows.

- **Properties:**
  - Changes background and text color when hovering over table rows.
  
- **Usage:**
  ```html
  <table class="table table-hover">
    <!-- Table content -->
  </table>
  ```

### `.table-responsive-*`

Creates responsive tables that overflow horizontally on smaller screens.

- **Breakpoints:**
  - `.table-responsive-sm`: Applies for small screens and up.
  - `.table-responsive-md`: Applies for medium screens and up.
  - `.table-responsive-lg`: Applies for large screens and up.
  - `.table-responsive-xl`: Applies for extra-large screens and up.
  
- **Usage:**
  ```html
  <div class="table-responsive-sm">
    <table class="table">
      <!-- Table content -->
    </table>
  </div>
  ```

## Mixins

### `table-variant($color, $value)`

Creates a table variant by setting the table cell backgrounds, border colors, and the colors of striped, hovered, and active states based on the `$color` and `$value`.

- **Usage:**
  ```scss
  @include table-variant(primary, $primary-color);
  ```

### `media-breakpoint-down($breakpoint)`

Applies styles for table responsiveness based on the screen size breakpoint.

- **Usage:**
  ```scss
  @include media-breakpoint-down(md) {
    .table-responsive {
      overflow-x: auto;
    }
  }
  ```

### Example Usage

```html
<div class="table-responsive">
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
      <tr class="table-active">
        <td>Active Data 1</td>
        <td>Active Data 2</td>
        <td>Active Data 3</td>
      </tr>
    </tbody>
  </table>
</div>
```
