#### **Dropdown Wrapper and Toggle**
   - **`.bt-dropup`, `.bt-dropend`, `.bt-dropdown`, `.bt-dropstart`, `.bt-dropup-center`, `.bt-dropdown-center`**:
     - These classes set the position of the dropdown container relative to its parent, allowing for different dropdown directions (up, down, left, right, centered).
   - **`.bt-dropdown-toggle`**:
     - This class is used for the element that triggers the dropdown. It includes a caret icon by default, which is generated using the `caret()` mixin.

#### **Dropdown Menu Styling**
   - **`.bt-dropdown-menu`**:
     - This class handles the styling for the dropdown menu itself.
     - It uses CSS custom properties (variables) for various attributes like padding, border-radius, box-shadow, and colors, making it highly customizable.
     - The `rfs()` mixin is used to make the font size responsive.
     - The dropdown is positioned absolutely and initially hidden (`display: none`), but it becomes visible (`display: block`) when the dropdown is activated.
   - **Popper.js Integration**:
     - The `[data-bs-popper]` attribute is used for positioning the dropdown using Popper.js, ensuring the dropdown is correctly aligned with the toggle element.

#### **Responsive Breakpoints**
   - The SCSS includes media queries that adjust the positioning of dropdown menus based on different screen sizes or breakpoints.
   - It defines `.bt-dropdown-menu-start` and `.bt-dropdown-menu-end` classes that adjust the positioning to align the dropdown menu to the start (left) or end (right) based on the screen width.

#### **Dropdown Directions**
   - **`.bt-dropup`, `.bt-dropend`, `.bt-dropstart`**:
     - These classes adjust the dropdown menu's position relative to the toggle, making the menu appear above, to the right, or to the left of the toggle, respectively.
     - The caret direction is also adjusted using the `caret()` mixin, which changes the visual indicator of the dropdown’s direction.

#### **Dropdown Divider and Items**
   - **`.bt-dropdown-divider`**:
     - This class styles dividers within the dropdown menu, which are used to separate groups of items. It uses a solid border with customizable opacity and margin.
   - **`.bt-dropdown-item`**:
     - This class styles individual items in the dropdown, including links and buttons.
     - It handles padding, text alignment, color, and background, and includes hover, active, and disabled states with appropriate styles.
   - **`.bt-dropdown-header`** and **`.bt-dropdown-item-text`**:
     - These classes style headers and text items within the dropdown menu, providing additional structure and content within the dropdown.

#### **Dark Mode Support**
   - **`.bt-dropdown-menu-dark`**:
     - This class provides an alternative dark-themed dropdown menu.
     - It overrides the default variables with darker colors for the background, text, borders, and interactive states, ensuring the dropdown is visually consistent with dark UI themes.
