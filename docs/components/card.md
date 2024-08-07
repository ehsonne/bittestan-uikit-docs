
### **Variables and CSS Custom Properties**
   - The code uses SCSS variables (like `$card-spacer-y`, `$card-bg`, etc.) to define various styles for the card component.
   - It also utilizes CSS custom properties (CSS variables) like `--#{prefix}card-bg`, where the prefix is dynamically set, allowing for flexibility in naming conventions and themes.

### **Base Card Styles**
   - **`.bt-card`**: This is the main container for the card component. It uses flexbox for layout and includes properties for background color, border, box shadow, and border-radius. Nested rules handle specific styles for elements like headers and lists within the card.
   - **`.bt-card-body`**: This defines the styling for the main content area of the card, including padding and text color.
   - **`.bt-card-title` and `.bt-card-subtitle`**: These classes manage the styling of card titles and subtitles, setting margins and colors.

### **Text and Links**
   - **`.bt-card-link`**: This styles links within the card, managing hover effects and spacing between multiple links.

### **Card Sections (Header and Footer)**
   - **`.bt-card-header` and `.bt-card-footer`**: These classes style the top and bottom sections of the card, often used for titles or supplementary information. They include padding, background colors, and border settings, with specific rules for rounded corners if the card is the first or last child in a group.

### **Navigation Tabs and Pills in Header**
   - **`.bt-card-header-tabs` and `.bt-card-header-pills`**: These classes style navigational elements like tabs and pills when used within a card header, handling margin adjustments and active states.

### **Card Images**
   - **`.bt-card-img-overlay`**: This is used for overlaying content on card images, positioning it absolutely within the card.
   - **`.bt-card-img`, `.bt-card-img-top`, `.bt-card-img-bottom`**: These handle the styling of images within the card, ensuring they fit correctly and apply appropriate border-radius settings.

### **Card Groups**
   - **`.bt-card-group`**: This class is for grouping multiple card components together, particularly useful in responsive layouts. It uses flexbox to handle the layout and removes rounded corners between adjacent cards to create a cohesive group appearance.

### **Media Queries**
   - Media queries are used within the `.bt-card-group` class to adjust the card layout for larger screens, ensuring cards in a group are displayed in a row rather than stacked.

