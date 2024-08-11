import{_ as s,c as n,o as e,a}from"./app-Cm3qpj-w.js";const i={},t=a(`<h1 id="lists-scss-documentation" tabindex="-1"><a class="header-anchor" href="#lists-scss-documentation"><span><code>lists.scss</code> Documentation</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>The <code>lists.scss</code> file contains mixins for styling lists. These mixins are useful for customizing the appearance of list elements, including removing default styles and padding.</p><h2 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins"><span>Mixins</span></a></h2><h3 id="list-unstyled" tabindex="-1"><a class="header-anchor" href="#list-unstyled"><span><code>list-unstyled</code></span></a></h3><p>Removes default browser padding and list-style from list items while keeping them block-level.</p><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h4><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token selector">list-unstyled </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding-left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Usage Example:</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">ul </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">list-unstyled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This mixin is typically used to create clean, styled lists without default bullet points or indentation. It is commonly used in navigation menus, list groups, and other similar components where the default list styling is not desired.</p>`,11),l=[t];function c(o,p){return e(),n("div",null,l)}const r=s(i,[["render",c],["__file","lists.html.vue"]]),u=JSON.parse('{"path":"/mixins/lists.html","title":"lists.scss Documentation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Mixins","slug":"mixins","link":"#mixins","children":[{"level":3,"title":"list-unstyled","slug":"list-unstyled","link":"#list-unstyled","children":[]}]}],"git":{"updatedTime":1723029969000,"contributors":[{"name":"Ehsan","email":"ehsan.k93@gmail.com","commits":1}]},"filePathRelative":"mixins/lists.md"}');export{r as comp,u as data};
