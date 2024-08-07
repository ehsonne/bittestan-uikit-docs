# Accordion Component

The `accordion` component provides a collapsible panel functionality that allows users to toggle between hiding and showing content. This SCSS file defines the base styles, variables, and mixins necessary to style the accordion component.

## Base Styles

The `.bt-accordion` class is the root element for the accordion component. It defines the necessary CSS custom properties (variables) used throughout the accordion's styling.

### CSS Variables

- **`--#{ $prefix }accordion-color`**: Sets the color of the accordion text.
- **`--#{ $prefix }accordion-bg`**: Sets the background color of the accordion.
- **`--#{ $prefix }accordion-transition`**: Defines the transition effect for the accordion.
- **`--#{ $prefix }accordion-border-color`**: Sets the border color of the accordion.
- **`--#{ $prefix }accordion-border-width`**: Sets the border width of the accordion.
- **`--#{ $prefix }accordion-border-radius`**: Defines the border radius for the accordion.
- **`--#{ $prefix }accordion-inner-border-radius`**: Sets the inner border radius for the accordion buttons.
- **`--#{ $prefix }accordion-btn-padding-x`**: Defines the horizontal padding for the accordion buttons.
- **`--#{ $prefix }accordion-btn-padding-y`**: Defines the vertical padding for the accordion buttons.
- **`--#{ $prefix }accordion-btn-color`**: Sets the text color of the accordion buttons.
- **`--#{ $prefix }accordion-btn-bg`**: Sets the background color of the accordion buttons.
- **`--#{ $prefix }accordion-btn-icon`**: Defines the icon used in the accordion button.
- **`--#{ $prefix }accordion-btn-icon-width`**: Sets the width of the accordion button icon.
- **`--#{ $prefix }accordion-btn-icon-transform`**: Defines the transform property for the accordion button icon.
- **`--#{ $prefix }accordion-btn-icon-transition`**: Sets the transition effect for the accordion button icon.
- **`--#{ $prefix }accordion-btn-active-icon`**: Defines the icon used in the accordion button when active.
- **`--#{ $prefix }accordion-btn-focus-box-shadow`**: Sets the box shadow for the accordion button when focused.
- **`--#{ $prefix }accordion-body-padding-x`**: Defines the horizontal padding for the accordion body.
- **`--#{ $prefix }accordion-body-padding-y`**: Defines the vertical padding for the accordion body.
- **`--#{ $prefix }accordion-active-color`**: Sets the text color for the active accordion button.
- **`--#{ $prefix }accordion-active-bg`**: Sets the background color for the active accordion button.

## Accordion Button Styles

The `.bt-accordion-button` class styles the button used to toggle the accordion panel.

- The button is positioned relative, displayed as a flex container, and aligns items to the center.
- The button takes up 100% width, with padding defined by the CSS variables.
- It has a default background color and text color, with a border radius of 0 and a transition effect applied.
- When the button is not collapsed (active), the color and background color are changed to reflect the active state, and the icon is transformed.
- The button includes an icon that is displayed on the right, with its size and appearance controlled by the defined CSS variables.
- Additional hover and focus states are also defined.

## Accordion Header and Item Styles

The `.bt-accordion-header` and `.bt-accordion-item` classes define the styles for the accordion header and individual accordion items.

- The header has no bottom margin, while each accordion item inherits the accordion's color, background color, and border properties.
- The first and last accordion items have specific border-radius settings to ensure proper styling.
- The `.bt-accordion-body` class controls the padding inside the accordion body.

## Flush Accordion Styles

The `.bt-accordion-flush` class removes borders and border-radius for accordion items to ensure they are displayed edge-to-edge.

## Dark Mode Support

If dark mode is enabled, specific styles are applied to the accordion buttons to adjust the icon based on the dark mode settings.
