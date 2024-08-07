# Button Group Component

The `button-group` component allows multiple buttons to be grouped together for a unified appearance. It provides a way to organize related buttons and dropdowns, ensuring consistent spacing, sizing, and alignment.

## Base Styles

The `.bt-btn-group` and `.bt-btn-group-vertical` classes are used to create horizontal and vertical button groups, respectively.

### Horizontal Button Group

The `.bt-btn-group` class makes the container behave like a group of buttons.

- **Positioning and Display**: The group is positioned relative and displayed as an inline-flex container.
- **Button Flexibility**: Buttons inside the group are flexible and take up equal space within the group.
- **Z-Index Management**: Buttons that are hovered, focused, or active are brought to the front to properly overlay borders.

```scss
.bt-btn-group {
  position: relative;
  display: inline-flex;
  vertical-align: middle;

  > .bt-btn {
    position: relative;
    flex: 1 1 auto;
  }

  > .bt-btn-check:checked + .bt-btn,
  > .bt-btn-check:focus + .bt-btn,
  > .bt-btn:hover,
  > .bt-btn:focus,
  > .bt-btn:active,
  > .bt-btn.active {
    z-index: 1;
  }
}
```

# Button Group Component

The `button-group` component is used to group multiple buttons together, allowing them to act as a single UI element. This SCSS file defines the necessary styles for button groups, including toolbar groupings, split button dropdowns, and vertical button groups.

## Button Toolbar

The `.bt-btn-toolbar` class is used to group multiple button groups together into a toolbar. It sets the `display` to `flex`, wraps items as needed, and aligns them to the start.

```scss
.bt-btn-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  .bt-input-group {
    width: auto;
  }
}
```

# Button Group Component

The `.bt-btn-group` class is used to group buttons together, providing consistent styling and ensuring that the buttons are displayed as a single cohesive unit.

## Features and Usage

### Border Radius

The button group uses the `border-radius` mixin to ensure that the entire group has consistent rounded corners:

```scss
.bt-btn-group {
  @include border-radius($btn-border-radius);
}
```


```markdown
# Button Group Component

The `.bt-btn-group` class is used to group buttons together, providing consistent styling and ensuring that the buttons are displayed as a single cohesive unit.

## Features and Usage

### Border Radius

The button group uses the `border-radius` mixin to ensure that the entire group has consistent rounded corners:

```scss
.bt-btn-group {
  @include border-radius($btn-border-radius);
}
```

### Preventing Double Borders

To prevent double borders from appearing between adjacent buttons within a button group, negative margins are applied:

```scss
// Prevent double borders when buttons are next to each other
> :not(.bt-btn-check:first-child)+.bt-btn,
>.bt-btn-group:not(:first-child) {
  margin-left: calc(#{$btn-border-width} * -1); // stylelint-disable-line function-disallowed-list
}
```

- **Explanation**: This rule targets any button that isn't the first child in the group and adjusts its left margin to ensure there's no overlap or double border appearance between buttons.

### Resetting Rounded Corners

To create a seamless connection between buttons, the rounded corners on certain sides are removed, except for the last button in the group:

```scss
// Reset rounded corners
>.bt-btn:not(:last-child):not(.bt-dropdown-toggle),
>.bt-btn.bt-dropdown-toggle-split:first-child,
>.bt-btn-group:not(:last-child)>.bt-btn {
  @include border-end-radius(0);
}
```

- **Explanation**: This rule resets the border radius on the right side (or end) of buttons that are not the last in the group. It ensures that the buttons appear as a continuous element, rather than individually styled components.

### Adjusting Left Radius

In specific scenarios, the left border radius of the buttons is set to zero to maintain a connected appearance:

```scss
// The left radius should be 0 if the button is:
// - the "third or more" child
// - the second child and the previous element isn't `.bt-btn-check` (making it the first child visually)
// - part of a btn-group which isn't the first child
>.bt-btn:nth-child(n + 3),
> :not(.bt-btn-check)+.bt-btn,
>.bt-btn-group:not(:first-child)>.bt-btn {
  @include border-start-radius(0);
}
```

- **Explanation**: This rule applies when:
  - The button is the third or a later child in the group.
  - The button is the second child but is visually the first due to preceding elements that are not `.bt-btn-check`.
  - The button is part of a button group that is not the first child in a nested button group.


```markdown
# Button Group Sizing and Dropdowns

This section covers the styles and functionalities related to different button group sizes, split button dropdowns, and vertical button groups.

## Sizing

### Small and Large Button Groups

The `.bt-btn-group-sm` and `.bt-btn-group-lg` classes are used to create button groups with smaller or larger button sizes. These classes extend the base button sizes:

```scss
.bt-btn-group-sm>.bt-btn {
  @extend .bt-btn-sm;
}

.bt-btn-group-lg>.bt-btn {
  @extend .bt-btn-lg;
}
```

- **Explanation**: The `@extend` directive is used to inherit styles from the `.bt-btn-sm` and `.bt-btn-lg` classes, ensuring that buttons within the group adopt the appropriate small or large sizes.

## Split Button Dropdowns

The `.bt-dropdown-toggle-split` class styles the split button dropdowns, which separate the main button action from the dropdown toggle. This class modifies padding and handles margin adjustments for different dropdown directions:

```scss
.bt-dropdown-toggle-split {
  padding-right: $btn-padding-x * .75;
  padding-left: $btn-padding-x * .75;

  &::after,
  .bt-dropup &::after,
  .bt-dropend &::after {
    margin-left: 0;
  }

  .bt-dropstart &::before {
    margin-right: 0;
  }
}
```

**Explanation**: This rule ensures that the split button dropdowns are styled consistently, regardless of their placement (dropup, dropend, or dropstart). The padding is reduced to differentiate the toggle from the main button.

### Adjusting Split Button Sizing

When using split buttons in small or large button groups, the padding is adjusted accordingly:

```scss
.bt-btn-sm+.bt-dropdown-toggle-split {
  padding-right: $btn-padding-x-sm * .75;
  padding-left: $btn-padding-x-sm * .75;
}

.bt-btn-lg+.bt-dropdown-toggle-split {
  padding-right: $btn-padding-x-lg * .75;
  padding-left: $btn-padding-x-lg * .75;
}
```

**Explanation**: These rules ensure that the split buttons in small or large button groups have padding that matches the size of the button group.

### Clickable Button for Toggling the Menu

The `.bt-btn-group.show .bt-dropdown-toggle` class styles the button used to toggle dropdown menus, adding an inset shadow to indicate the button is active:

```scss
.bt-btn-group.show .bt-dropdown-toggle {
  @include box-shadow($btn-active-box-shadow);

  &.bt-btn-link {
    @include box-shadow(none);
  }
}
```

**Explanation**: This rule adds an active state shadow to the dropdown toggle button. For buttons with the `.bt-btn-link` class, the shadow is removed since these buttons have a different styling intention.

## Vertical Button Groups

The `.bt-btn-group-vertical` class creates vertical button groups, where buttons are stacked vertically rather than aligned horizontally:

```scss
.bt-btn-group-vertical {
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  >.bt-btn,
  >.bt-btn-group {
    width: 100%;
  }
}
```

**Explanation**: This rule changes the flex direction to column, aligning the buttons vertically with full-width styles.

### Managing Margins and Borders in Vertical Groups

To maintain a clean appearance, negative margins and border radius adjustments are applied to buttons in vertical groups:

```scss
>.bt-btn:not(:first-child),
>.bt-btn-group:not(:first-child) {
  margin-top: calc(#{$btn-border-width} * -1);
}

// Reset rounded corners
>.bt-btn:not(:last-child):not(.bt-dropdown-toggle),
>.bt-btn-group:not(:last-child)>.bt-btn {
  @include border-bottom-radius(0);
}
```

**Explanation**: The negative margin ensures that there's no gap between stacked buttons. Rounded corners are reset for all but the last button in the vertical group.

### Top Radius Adjustments

Similar to horizontal groups, vertical groups adjust the top border radius under certain conditions:

```scss
>.bt-btn:nth-child(n + 3),
> :not(.bt-btn-check)+.bt-btn,
>.bt-btn-group:not(:first-child)>.bt-btn {
  @include border-top-radius(0);
}
```

**Explanation**: These rules ensure that the first button has the appropriate border-radius, and subsequent buttons are adjusted for a seamless appearance.

## Summary

This documentation covers the various ways to style and manage button groups, including sizing, split button dropdowns, and vertical alignment. By using these SCSS rules, you can create flexible and responsive button groups tailored to your application's needs.
