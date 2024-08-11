import{_ as s,c as a,o as n,a as t}from"./app-Cm3qpj-w.js";const e={},p=t(`<h1 id="progress" tabindex="-1"><a class="header-anchor" href="#progress"><span>Progress</span></a></h1><p>This documentation explains the SCSS structure for creating customizable progress bars. It includes details about SCSS variables, mixins, keyframes, and CSS classes that can be used to style progress components effectively.</p><h2 id="keyframes" tabindex="-1"><a class="header-anchor" href="#keyframes"><span>Keyframes</span></a></h2><h3 id="keyframes-progress-bar-stripes" tabindex="-1"><a class="header-anchor" href="#keyframes-progress-bar-stripes"><span><code>@keyframes progress-bar-stripes</code></span></a></h3><p>A keyframe animation for creating a striped effect on progress bars.</p><ul><li><strong>Usage:</strong> This animation is only included if transitions are enabled (<code>$enable-transitions: true</code>).<div class="language-scss line-numbers-mode" data-highlighter="prismjs" data-ext="scss" data-title="scss"><pre><code><span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> progress-bar-stripes</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">0% </span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-position-x</span><span class="token punctuation">:</span> <span class="token variable">$progress-height</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="scss-variables" tabindex="-1"><a class="header-anchor" href="#scss-variables"><span>SCSS Variables</span></a></h2><h3 id="progress-css-variables" tabindex="-1"><a class="header-anchor" href="#progress-css-variables"><span>Progress CSS Variables</span></a></h3><p>These variables control the appearance and behavior of progress components.</p><ul><li><code>--#{$prefix}progress-height</code>: Height of the progress bar.</li><li><code>--#{$prefix}progress-font-size</code>: Font size for text within the progress bar.</li><li><code>--#{$prefix}progress-bg</code>: Background color of the progress bar container.</li><li><code>--#{$prefix}progress-border-radius</code>: Border radius of the progress bar.</li><li><code>--#{$prefix}progress-box-shadow</code>: Box shadow applied to the progress bar container.</li><li><code>--#{$prefix}progress-bar-color</code>: Text color within the progress bar.</li><li><code>--#{$prefix}progress-bar-bg</code>: Background color of the progress bar.</li><li><code>--#{$prefix}progress-bar-transition</code>: Transition property for smooth animations on the progress bar.</li></ul><h2 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins"><span>Mixins</span></a></h2><h3 id="rfs-value-var" tabindex="-1"><a class="header-anchor" href="#rfs-value-var"><span><code>rfs($value, $var)</code></span></a></h3><p>Applies a responsive font-size (RFS) to the specified variable.</p><h3 id="border-radius-radius" tabindex="-1"><a class="header-anchor" href="#border-radius-radius"><span><code>border-radius($radius)</code></span></a></h3><p>Sets the border-radius for elements.</p><h3 id="box-shadow-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow-shadow"><span><code>box-shadow($shadow)</code></span></a></h3><p>Applies a box-shadow to elements.</p><h3 id="transition-properties" tabindex="-1"><a class="header-anchor" href="#transition-properties"><span><code>transition($properties)</code></span></a></h3><p>Sets transition properties for smooth animations and state changes.</p><h3 id="gradient-striped" tabindex="-1"><a class="header-anchor" href="#gradient-striped"><span><code>gradient-striped()</code></span></a></h3><p>Applies a striped background pattern to elements.</p><h2 id="css-classes" tabindex="-1"><a class="header-anchor" href="#css-classes"><span>CSS Classes</span></a></h2><h3 id="bt-progress" tabindex="-1"><a class="header-anchor" href="#bt-progress"><span><code>.bt-progress</code></span></a></h3><p>The primary class for styling the progress bar container.</p><ul><li><p><strong>Properties:</strong></p><ul><li><code>display: flex;</code></li><li><code>height: var(--#{$prefix}progress-height);</code></li><li><code>overflow: hidden;</code></li><li><code>background-color: var(--#{$prefix}progress-bg);</code></li><li>Includes border-radius and box-shadow styling.</li></ul></li><li><p><strong>Usage:</strong></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token comment">&lt;!-- Progress bar items --&gt;</span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="bt-progress-stacked" tabindex="-1"><a class="header-anchor" href="#bt-progress-stacked"><span><code>.bt-progress-stacked</code></span></a></h3><p>A wrapper class for creating stacked progress bars.</p><ul><li><p><strong>Properties:</strong></p><ul><li>Ensures overflow is visible to manage stacked elements.</li></ul></li><li><p><strong>Usage:</strong></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-stacked<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>60%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>30%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="bt-progress-bar" tabindex="-1"><a class="header-anchor" href="#bt-progress-bar"><span><code>.bt-progress-bar</code></span></a></h3><p>Defines the style for the individual progress bar within the container.</p><ul><li><p><strong>Properties:</strong></p><ul><li><code>display: flex;</code></li><li><code>flex-direction: column;</code></li><li><code>justify-content: center;</code></li><li><code>color: var(--#{$prefix}progress-bar-color);</code></li><li><code>background-color: var(--#{$prefix}progress-bar-bg);</code></li><li>Includes transition properties for smooth updates to the bar&#39;s width or other animated properties.</li></ul></li><li><p><strong>Usage:</strong></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  75%</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="bt-progress-bar-striped" tabindex="-1"><a class="header-anchor" href="#bt-progress-bar-striped"><span><code>.bt-progress-bar-striped</code></span></a></h3><p>Adds a striped pattern to the progress bar.</p><ul><li><p><strong>Properties:</strong></p><ul><li>Uses a gradient background to create stripes.</li><li>Background size is set to match the progress bar height.</li></ul></li><li><p><strong>Usage:</strong></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar bt-progress-bar-striped<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  50%</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="bt-progress-bar-animated" tabindex="-1"><a class="header-anchor" href="#bt-progress-bar-animated"><span><code>.bt-progress-bar-animated</code></span></a></h3><p>Adds an animated effect to the striped progress bar.</p><ul><li><p><strong>Properties:</strong></p><ul><li>Applies the <code>progress-bar-stripes</code> animation to create a moving striped effect.</li><li>Disables animation when the user prefers reduced motion (<code>prefers-reduced-motion: reduce</code>).</li></ul></li><li><p><strong>Usage:</strong></p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar bt-progress-bar-striped bt-progress-bar-animated<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  50%</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="example-usage" tabindex="-1"><a class="header-anchor" href="#example-usage"><span>Example Usage</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 25%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>25%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress bt-progress-stacked<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>60%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar bt-progress-bar-striped<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 30%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>30%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bt-progress-bar bt-progress-bar-striped bt-progress-bar-animated<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>10%<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),l=[p];function o(r,i){return n(),a("div",null,l)}const u=s(e,[["render",o],["__file","progress.html.vue"]]),d=JSON.parse('{"path":"/components/progress.html","title":"Progress","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Keyframes","slug":"keyframes","link":"#keyframes","children":[{"level":3,"title":"@keyframes progress-bar-stripes","slug":"keyframes-progress-bar-stripes","link":"#keyframes-progress-bar-stripes","children":[]}]},{"level":2,"title":"SCSS Variables","slug":"scss-variables","link":"#scss-variables","children":[{"level":3,"title":"Progress CSS Variables","slug":"progress-css-variables","link":"#progress-css-variables","children":[]}]},{"level":2,"title":"Mixins","slug":"mixins","link":"#mixins","children":[{"level":3,"title":"rfs($value, $var)","slug":"rfs-value-var","link":"#rfs-value-var","children":[]},{"level":3,"title":"border-radius($radius)","slug":"border-radius-radius","link":"#border-radius-radius","children":[]},{"level":3,"title":"box-shadow($shadow)","slug":"box-shadow-shadow","link":"#box-shadow-shadow","children":[]},{"level":3,"title":"transition($properties)","slug":"transition-properties","link":"#transition-properties","children":[]},{"level":3,"title":"gradient-striped()","slug":"gradient-striped","link":"#gradient-striped","children":[]}]},{"level":2,"title":"CSS Classes","slug":"css-classes","link":"#css-classes","children":[{"level":3,"title":".bt-progress","slug":"bt-progress","link":"#bt-progress","children":[]},{"level":3,"title":".bt-progress-stacked","slug":"bt-progress-stacked","link":"#bt-progress-stacked","children":[]},{"level":3,"title":".bt-progress-bar","slug":"bt-progress-bar","link":"#bt-progress-bar","children":[]},{"level":3,"title":".bt-progress-bar-striped","slug":"bt-progress-bar-striped","link":"#bt-progress-bar-striped","children":[]},{"level":3,"title":".bt-progress-bar-animated","slug":"bt-progress-bar-animated","link":"#bt-progress-bar-animated","children":[]},{"level":3,"title":"Example Usage","slug":"example-usage","link":"#example-usage","children":[]}]}],"git":{"updatedTime":1723025168000,"contributors":[{"name":"Ehsan","email":"ehsan.k93@gmail.com","commits":1}]},"filePathRelative":"components/progress.md"}');export{u as comp,d as data};