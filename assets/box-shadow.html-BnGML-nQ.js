import{_ as s,c as n,o as a,a as e}from"./app-Cm3qpj-w.js";const l={},p=e(`<h1 id="box-shadow-scss-documentation" tabindex="-1"><a class="header-anchor" href="#box-shadow-scss-documentation"><span><code>box-shadow.scss</code> Documentation</span></a></h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>The <code>box-shadow.scss</code> file provides a mixin for applying CSS box-shadow styles to elements. The mixin supports multiple shadow values and includes validation to ensure correct usage of the <code>none</code> keyword.</p><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin"><span>Mixin</span></a></h2><h3 id="box-shadow-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow-shadow"><span><code>box-shadow($shadow...)</code></span></a></h3><p>Applies one or more box-shadow effects to an element.</p><h4 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h4><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token keyword">@mixin</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span><span class="token variable">$shadow</span>...<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$enable-shadows</span> </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property"><span class="token variable">$result</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$value</span> in <span class="token variable">$shadow</span> </span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">@if</span> <span class="token selector"><span class="token variable">$value</span> != null </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token property"><span class="token variable">$result</span></span><span class="token punctuation">:</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">,</span> <span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token string">&quot;comma&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">@if</span> <span class="token variable">$value</span> <span class="token operator">==</span> none <span class="token operator">and</span> <span class="token function">length</span><span class="token punctuation">(</span><span class="token variable">$shadow</span><span class="token punctuation">)</span> <span class="token selector">&gt; 1 </span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">@warn</span> <span class="token string">&quot;The keyword &#39;none&#39; must be used as a single argument.&quot;</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">@if</span> <span class="token punctuation">(</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token variable">$result</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> 0<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token variable">$result</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Parameters:</strong></p><ul><li><code>$shadow...</code>: A variable list of box-shadow values. Can include values like <code>0px 4px 8px rgba(0, 0, 0, 0.3)</code>, <code>inset 0px 2px 4px rgba(0, 0, 0, 0.1)</code>, or the keyword <code>none</code>.</li></ul><p><strong>Behavior:</strong></p><ul><li>If <code>$enable-shadows</code> is <code>true</code>, the mixin applies the provided box-shadow values to the <code>box-shadow</code> property.</li><li>The mixin supports multiple shadow values, separated by commas.</li><li>The <code>none</code> keyword should be used as a single argument; using it in conjunction with other shadow values will produce a warning.</li></ul><p><strong>Example</strong></p><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">.element </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span></span>
<span class="line">    0px 4px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    inset 0px 2px 4px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.card </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span></span>
<span class="line">    none</span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Warnings:</strong></p><ul><li><p>Using <code>none</code> in combination with other shadow values will generate a warning:</p><div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre><code><span class="line">The keyword &#39;none&#39; must be used as a single argument.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><h2 id="variables" tabindex="-1"><a class="header-anchor" href="#variables"><span>Variables</span></a></h2><ul><li><code>$enable-shadows</code>: Boolean variable that determines whether box-shadow styles should be applied.</li></ul><h2 id="customization" tabindex="-1"><a class="header-anchor" href="#customization"><span>Customization</span></a></h2><ul><li><strong>Enable Shadows</strong>: Set <code>$enable-shadows</code> to <code>true</code> or <code>false</code> to control whether shadows are applied.</li><li><strong>Shadow Values</strong>: Customize the <code>$shadow</code> values as needed for different shadow effects.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token selector">.card </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span></span>
<span class="line">    0px 4px 8px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    0px 0px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.notification </span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">@include</span> <span class="token function">box-shadow</span><span class="token punctuation">(</span></span>
<span class="line">    none</span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>Ensure <code>$enable-shadows</code> is set to <code>true</code> in order to see the effects of the box-shadow mixin.</li><li>Avoid mixing the <code>none</code> keyword with other shadow values to prevent warnings.</li></ul>`,24),t=[p];function i(o,c){return a(),n("div",null,t)}const u=s(l,[["render",i],["__file","box-shadow.html.vue"]]),r=JSON.parse('{"path":"/mixins/box-shadow.html","title":"box-shadow.scss Documentation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Mixin","slug":"mixin","link":"#mixin","children":[{"level":3,"title":"box-shadow($shadow...)","slug":"box-shadow-shadow","link":"#box-shadow-shadow","children":[]}]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":2,"title":"Customization","slug":"customization","link":"#customization","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]}],"git":{"updatedTime":1723029969000,"contributors":[{"name":"Ehsan","email":"ehsan.k93@gmail.com","commits":1}]},"filePathRelative":"mixins/box-shadow.md"}');export{u as comp,r as data};
