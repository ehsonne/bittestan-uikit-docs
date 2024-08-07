import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    sidebar: [
      {
        text: 'Introduction',
        link: '/',
      },
      {
        text: 'Components',
        collapsible: true,
        children: [
          { text: 'Accordion', link: '/components/accordion.md' },
          { text: 'Badge', link: '/components/badge.md' },
          { text: 'Button Group', link: '/components/button-group.md' },
          { text: 'Buttons', link: '/components/buttons.md' },
          { text: 'Card', link: '/components/card.md' },
          { text: 'Containers', link: '/components/containers.md' },
          { text: 'Dropdown', link: '/components/dropdown.md' },
          { text: 'Grid', link: '/components/grid.md' },
          { text: 'Navbar', link: '/components/navbar.md' },
          { text: 'Pagination', link: '/components/pagination.md' },
          { text: 'Progress', link: '/components/progress.md' },
          { text: 'Tables', link: '/components/tables.md' },
          { text: 'Toasts', link: '/components/toasts.md' },
        ]
      },
      {
        text: 'Forms',
        collapsible: true,
        children: [
          { text: 'Floating Labels', link: '/forms/floating-labels.md' },
          { text: 'Form Check', link: '/forms/form-check.md' },
          { text: 'Form Control', link: '/forms/form-control.md' },
          { text: 'Form Range', link: '/forms/form-range.md' },
          { text: 'Form Select', link: '/forms/form-select.md' },
          { text: 'Form Text', link: '/forms/form-text.md' },
          { text: 'Input Group', link: '/forms/input-group.md' },
          { text: 'Labels', link: '/forms/labels.md' },
        ]
      },
      {
        text: 'Helpers',
        collapsible: true,
        children: [
          { text: 'Color Background', link: '/helpers/color-bg.md' },
          { text: 'Colored Links', link: '/helpers/colored-links.md' },
        ]
      },
      {
        text: 'Mixins',
        collapsible: true,
        children: [
          { text: 'Border Radius', link: '/mixins/border-radius.md' },
          { text: 'Box Shadow', link: '/mixins/box-shadow.md' },
          { text: 'Breakpoints', link: '/mixins/breakpoints.md' },
          { text: 'Buttons', link: '/mixins/buttons.md' },
          { text: 'Caret', link: '/mixins/caret.md' },
          { text: 'Color Mode', link: '/mixins/color-mode.md' },
          { text: 'Color Scheme', link: '/mixins/color-scheme.md' },
          { text: 'Containers', link: '/mixins/containers.md' },
          { text: 'Deprecate', link: '/mixins/deprecate.md' },
          { text: 'Forms', link: '/mixins/forms.md' },
          { text: 'Gradients', link: '/mixins/gradients.md' },
          { text: 'Grid', link: '/mixins/grid.md' },
          { text: 'Lists', link: '/mixins/lists.md' },
          { text: 'Pagination', link: '/mixins/pagination.md' },
          { text: 'Table Variants', link: '/mixins/table-variants.md' },
          { text: 'Transition', link: '/mixins/transition.md' },
          { text: 'Utilities', link: '/mixins/utilities.md' },
        ]
      },
      {
        text: 'Vendor',
        collapsible: true,
        children: [
          { text: 'RFS', link: '/vendor/rfs.md' },
        ]
      },
      {
        text: 'Styles',
        collapsible: true,
        children: [
          { text: 'Functions', link: '/styles/_functions.md' },
          { text: 'Maps', link: '/styles/_maps.md' },
          { text: 'Root', link: '/styles/_root.md' },
        ]
      },
    ]
  }),
})
