# `deprecate.scss` Documentation

## Overview

The `deprecate.scss` file provides a mixin for marking other mixins or functions as deprecated. This helps manage and communicate the deprecation of features in your Sass codebase. The mixin generates warnings when deprecated features are used, helping developers transition to newer implementations.

## Mixins

### `deprecate($name, $deprecate-version, $remove-version, $ignore-warning: false)`

Marks a mixin or function as deprecated and optionally suppresses the warning.

#### Usage

```scss
@mixin deprecate($name, $deprecate-version, $remove-version, $ignore-warning: false) {
  @if ($enable-deprecation-messages != false and $ignore-warning != true) {
    @warn "#{$name} has been deprecated as of #{$deprecate-version}. It will be removed entirely in #{$remove-version}.";
  }
}
```

**Parameters:**

- `$name`: The name of the deprecated mixin or function.
- `$deprecate-version`: The version in which the mixin or function was deprecated.
- `$remove-version`: The version in which the mixin or function will be removed.
- `$ignore-warning`: Optional boolean flag to suppress the warning. Defaults to `false`.

**Usage Examples:**

1. **Deprecating a Mixin with Warning:**

   ```scss
   @mixin old-mixin {
     @include deprecate("old-mixin", "1.0.0", "2.0.0");
     // old mixin implementation
   }
   ```

   This will output a warning if `old-mixin` is used, indicating that it is deprecated as of version `1.0.0` and will be removed in version `2.0.0`.

2. **Suppressing the Warning for Deprecated Mixin:**

   ```scss
   @mixin old-mixin {
     @include deprecate("old-mixin", "1.0.0", "2.0.0", true);
     // old mixin implementation
   }
   ```

   This will not output a warning even if `old-mixin` is used, allowing you to suppress deprecation messages when needed.

## Notes

- Ensure that the global variable `$enable-deprecation-messages` is set to `true` to enable deprecation warnings.
- Use the `$ignore-warning` parameter to suppress warnings for mixins or functions that are still in use but will eventually be removed.
- This mixin is particularly useful for managing legacy code and guiding developers towards updated implementations.
