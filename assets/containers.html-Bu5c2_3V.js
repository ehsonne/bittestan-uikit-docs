import{_ as n,c as s,o as a,a as e}from"./app-Cm3qpj-w.js";const t={},i=e(`<h1 id="containers-scss-documentation" tabindex="-1"><a class="header-anchor" href="#containers-scss-documentation"><span><code>containers.scss</code> Documentation</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>The <code>containers.scss</code> file provides a mixin for creating responsive containers with customizable gutters. Containers are used to center and pad content within the viewport.</p><h2 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins"><span>Mixins</span></a></h2><h3 id="make-container-gutter-container-padding-x" tabindex="-1"><a class="header-anchor" href="#make-container-gutter-container-padding-x"><span><code>make-container($gutter: $container-padding-x)</code></span></a></h3><p>Creates a responsive container with customizable gutter widths.</p><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h4><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token function">make-container</span><span class="token punctuation">(</span><span class="token property"><span class="token variable">$gutter</span></span><span class="token punctuation">:</span> <span class="token variable">$container-padding-x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">--<span class="token variable">#{$prefix}</span>gutter-x</span><span class="token punctuation">:</span> <span class="token variable">#{$gutter}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">--<span class="token variable">#{$prefix}</span>gutter-y</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">padding-right</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--<span class="token variable">#{$prefix}</span>gutter-x<span class="token punctuation">)</span> <span class="token operator">*</span> .5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// stylelint-disable-line function-disallowed-list</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--<span class="token variable">#{$prefix}</span>gutter-x<span class="token punctuation">)</span> <span class="token operator">*</span> .5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// stylelint-disable-line function-disallowed-list</span></span>
<span class="line">  <span class="token property">margin-right</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p><ul><li><code>$gutter</code>: The horizontal padding (gutter) for the container. Defaults to <code>$container-padding-x</code>.</li></ul><p><strong>Usage Examples:</strong></p><ol><li><p><strong>Creating a Default Container:</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">.container </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> make-container<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will create a container with default gutter values specified by <code>$container-padding-x</code>.</p></li><li><p><strong>Creating a Container with Custom Gutter:</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">.container-custom </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">make-container</span><span class="token punctuation">(</span>1rem<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will create a container with a horizontal gutter of <code>1rem</code>.</p></li></ol><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>The mixin sets the <code>padding-right</code> and <code>padding-left</code> to half of the specified gutter value to center the content within the container.</li><li>The container&#39;s width is set to <code>100%</code> and margins are set to <code>auto</code> to ensure it is centered horizontally.</li><li>Ensure that the <code>$prefix</code> variable is defined in your project to apply the appropriate CSS variable names.</li></ul>`,14),p=[i];function c(o,l){return a(),s("div",null,p)}const d=n(t,[["render",c],["__file","containers.html.vue"]]),u=JSON.parse('{"path":"/mixins/containers.html","title":"containers.scss Documentation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Mixins","slug":"mixins","link":"#mixins","children":[{"level":3,"title":"make-container($gutter: $container-padding-x)","slug":"make-container-gutter-container-padding-x","link":"#make-container-gutter-container-padding-x","children":[]}]},{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]}],"git":{"updatedTime":1723029969000,"contributors":[{"name":"Ehsan","email":"ehsan.k93@gmail.com","commits":1}]},"filePathRelative":"mixins/containers.md"}');export{d as comp,u as data};
