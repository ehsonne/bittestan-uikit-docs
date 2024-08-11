import{_ as a,c as n,o as s,a as e}from"./app-Cm3qpj-w.js";const t={},p=e(`<h1 id="table-variants-scss-documentation" tabindex="-1"><a class="header-anchor" href="#table-variants-scss-documentation"><span><code>table-variants.scss</code> Documentation</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>The <code>table-variants.scss</code> file contains a mixin for defining different table styles based on their state. This mixin helps in creating consistent styling for tables with various states such as default, striped, active, and hover.</p><h2 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins"><span>Mixins</span></a></h2><h3 id="table-variant" tabindex="-1"><a class="header-anchor" href="#table-variant"><span><code>table-variant</code></span></a></h3><p>Generates table styles for a specified state, including color and background variations. Useful for creating tables with different appearances based on their context or state.</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters</span></a></h4><ul><li><strong><code>$state</code></strong>: The state of the table (e.g., <code>primary</code>, <code>secondary</code>). This will be used to create class names like <code>.table-primary</code>.</li><li><strong><code>$background</code></strong>: The background color to be applied to the table.</li></ul><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h4><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token function">table-variant</span><span class="token punctuation">(</span><span class="token variable">$state</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">.table-<span class="token variable">#{$state}</span> </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span> <span class="token function">color-contrast</span><span class="token punctuation">(</span><span class="token function">opaque</span><span class="token punctuation">(</span><span class="token variable">$body-bg</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property"><span class="token variable">$hover-bg</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">,</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$table-hover-bg-factor</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property"><span class="token variable">$striped-bg</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">,</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$table-striped-bg-factor</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property"><span class="token variable">$active-bg</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">,</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$table-active-bg-factor</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property"><span class="token variable">$table-border-color</span></span><span class="token punctuation">:</span> <span class="token function">mix</span><span class="token punctuation">(</span><span class="token variable">$color</span><span class="token punctuation">,</span> <span class="token variable">$background</span><span class="token punctuation">,</span> <span class="token function">percentage</span><span class="token punctuation">(</span><span class="token variable">$table-border-factor</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-color</span><span class="token punctuation">:</span> <span class="token variable">#{$color}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-bg</span><span class="token punctuation">:</span> <span class="token variable">#{$background}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-border-color</span><span class="token punctuation">:</span> <span class="token variable">#{$table-border-color}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-striped-bg</span><span class="token punctuation">:</span> <span class="token variable">#{$striped-bg}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-striped-color</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">color-contrast</span><span class="token punctuation">(</span><span class="token variable">$striped-bg</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-active-bg</span><span class="token punctuation">:</span> <span class="token variable">#{$active-bg}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-active-color</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">color-contrast</span><span class="token punctuation">(</span><span class="token variable">$active-bg</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-hover-bg</span><span class="token punctuation">:</span> <span class="token variable">#{$hover-bg}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">--<span class="token variable">#{$prefix}</span>table-hover-color</span><span class="token punctuation">:</span> #<span class="token punctuation">{</span><span class="token function">color-contrast</span><span class="token punctuation">(</span><span class="token variable">$hover-bg</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--<span class="token variable">#{$prefix}</span>table-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--<span class="token variable">#{$prefix}</span>table-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Usage Example:</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">.table-primary </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">table-variant</span><span class="token punctuation">(</span>primary<span class="token punctuation">,</span> #f0f8ff<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.table-secondary </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">table-variant</span><span class="token punctuation">(</span>secondary<span class="token punctuation">,</span> #e9ecef<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This mixin ensures that table elements are styled consistently based on their state, with appropriate background colors, border colors, and hover effects. Adjust the parameters as needed to match the desired appearance and functionality for different table variants.</p>`,13),c=[p];function l(o,i){return s(),n("div",null,c)}const u=a(t,[["render",l],["__file","table-variants.html.vue"]]),k=JSON.parse('{"path":"/mixins/table-variants.html","title":"table-variants.scss Documentation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Mixins","slug":"mixins","link":"#mixins","children":[{"level":3,"title":"table-variant","slug":"table-variant","link":"#table-variant","children":[]}]}],"git":{"updatedTime":1723029969000,"contributors":[{"name":"Ehsan","email":"ehsan.k93@gmail.com","commits":1}]},"filePathRelative":"mixins/table-variants.md"}');export{u as comp,k as data};