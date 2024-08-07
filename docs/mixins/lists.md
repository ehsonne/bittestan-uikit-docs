# `lists.scss` Documentation

## Overview

The `lists.scss` file contains mixins for styling lists. These mixins are useful for customizing the appearance of list elements, including removing default styles and padding.

## Mixins

### `list-unstyled`

Removes default browser padding and list-style from list items while keeping them block-level.

#### Usage

```scss
@mixin list-unstyled {
  padding-left: 0;
  list-style: none;
}
```

**Usage Example:**

```scss
ul {
  @include list-unstyled();
}
```

This mixin is typically used to create clean, styled lists without default bullet points or indentation. It is commonly used in navigation menus, list groups, and other similar components where the default list styling is not desired.