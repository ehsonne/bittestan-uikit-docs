# Badge Component

The `badge` component is used to display small counts, labels, or status indicators. It requires contextual or color modifier classes to set the `color` and `background-color` properties.

## Base Styles

The `.bt-badge` class is the main class used for badges. It defines the necessary CSS custom properties (variables) and styling to create a badge.

### CSS Variables

- **`--#{ $prefix }badge-padding-x`**: Sets the horizontal padding inside the badge.
- **`--#{ $prefix }badge-padding-y`**: Sets the vertical padding inside the badge.
- **`--#{ $prefix }badge-font-size`**: Controls the font size of the badge, utilizing the `rfs` mixin for responsive scaling.
- **`--#{ $prefix }badge-font-weight`**: Defines the font weight of the badge text.
- **`--#{ $prefix }badge-color`**: Sets the text color of the badge.
- **`--#{ $prefix }badge-border-radius`**: Defines the border radius of the badge.

### Badge Styles

The `.bt-badge` class has several key style properties:

- **Display**: The badge is displayed as an inline-block element, ensuring it can be placed alongside other inline elements.
- **Padding**: The padding is set based on the CSS variables for consistent spacing.
- **Font Size and Weight**: The badge uses a responsive font size defined by the `rfs` mixin and a font weight controlled by the CSS variable.
- **Line Height**: The line height is set to 1 for a compact appearance.
- **Text Alignment**: The text inside the badge is centered, and the badge handles long text with no wrapping (`white-space: nowrap`).
- **Vertical Alignment**: The badge is vertically aligned to the baseline.
- **Border Radius**: The badge has rounded corners, using the `border-radius` mixin.
- **Gradient Background**: The badge uses a gradient background, applied through the `gradient-bg` mixin.

### Empty Badge Handling

Badges that contain no content automatically collapse and are hidden from view.

```scss
// Empty badges collapse automatically
&:empty {
  display: none;
}
