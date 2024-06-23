# high-agency-builder-website

I want a website like example below but for Anton Osika

Hey, I am Anton Osika, a high-agency first-principles builder.

I like talking to other who are high on openness and share ambitions and passion.

Headings I want:

# Beliefs
[short phrase about "this is a selection of my beliefs over time"]

2024
* Soon Agents will work, everything else is a footnote
* 

2023
June
* There is a big opportunity to create value, and reduce risk, by focusing on evals for agents and LLMs

March
* LLMs can take actions, let's make them into "agents'

February
* AI will make price of software go to zero

2022
* AGI is here soon, let's load up on semiconductor stocks

2019
* Tesla stock is crazy cheap for only being such a strong luxury brand (+ has much more potential)

2016
* Long term future, we will live in a compute economy, let's long NVIDIA.

2014
* Ethereum might be big, let's buy 15k as a 2x arbitrage from Mircea Eliade

[the bullets link to pages] 

# Interests
* Future of humanity
* Best practices for building products
* Science+Engineering-mindset to design mechanisms for a maximally positive-sum society

# Things I made
* Stockholm AI, used to be a technically focused group with the best AI people in Stockholm
* AlphaGo Zero re-implementation
* Sana Labs (I just helped here, mainly with great talent after me!)
* SotA 
* Depict.ai, YC startup
* gpt-engineer, one of the first concepts for LLM doing autonomous coding


Something like this for inspiration:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Anthony Fu</title>
    <script>
      !function () {
        var e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
          t = localStorage.getItem("vueuse-color-scheme") || "auto";
        ("dark" === t || e && "light" !== t) && document.documentElement.classList.toggle("dark", !0);
      }();
    </script>
    <style>
      *,
      :before,
      :after {
        box-sizing: border-box;
      }

      html,
      :host {
        line-height: 1.5;
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
      }

      body {
        margin: 0;
        line-height: inherit;
      }

      .prose {
        color: var(--fg);
        max-width: 65ch;
        font-size: 1rem;
        line-height: 1.75;
      }

      .prose a {
        color: var(--fg-deeper);
        text-decoration: none;
        font-weight: 500;
      }

      .prose strong {
        color: var(--fg-deep);
        font-weight: 600;
      }

      .prose code {
        color: var(--fg-deep);
        font-weight: 600;
        font-size: 0.875em;
      }

      .prose pre {
        color: #e5e7eb;
        overflow-x: auto;
        font-size: 0.875em;
        line-height: 1.7142857;
        margin-top: 1.7142857em;
        margin-bottom: 1.7142857em;
        border-radius: 0.375rem;
        padding: 0.8571429em 1.1428571em;
      }

      .prose pre code {
        background-color: transparent;
        border-width: 0;
        border-radius: 0;
        padding: 0;
        font-weight: 400;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
      }

      .prose ul,
      .prose ol {
        margin-top: 1.25em;
        margin-bottom: 1.25em;
        list-style-type: none;
      }

      .prose li {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
      }

      .prose img {
        margin-top: 2em;
        margin-bottom: 2em;
        width: 100%;
      }

      .prose p > img {
        width: 100%;
        border-radius: 0.5rem;
        box-shadow: var(--un-shadow-inset) 0 1px 3px 0 var(--un-shadow-color, rgb(0 0 0 / 0.1)),
          var(--un-shadow-inset) 0 1px 2px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1));
        transform: scale(1.05);
        margin: 2.6em 0;
      }

      .prose {
        --fg-light: #888;
        --fg: #555;
        --fg-deep: #222;
        --fg-deeper: #000;
      }

      .prose a {
        font-weight: inherit;
        text-decoration: none;
        border-bottom: 1px solid rgba(125, 125, 125, 0.3);
        transition: border 0.3s ease-in-out;
      }

      .prose a:hover {
        border-bottom: 1px solid var(--fg);
      }

      .prose a code {
        color: inherit;
      }

      .prose hr {
        width: 50px;
        margin: 2em auto;
      }

      html.dark .prose {
        --fg-light: #888;
        --fg: #bbb;
        --fg-deep: #ddd;
        --fg-deeper: #fff;
      }

      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.2s ease;
      }

      .fade-enter-from,
      .fade-leave-to {
        opacity: 0;
      }

      .flex,
      [flex=""],
      [flex~="~"] {
        display: flex;
      }

      .container {
        width: 100%;
      }

      @media (min-width: 640px) {
        .container {
          max-width: 640px;
        }
      }

      .mt-10 {
        margin-top: 2.5rem;
      }

      .mb-6 {
        margin-bottom: 1.5rem;
      }

      .text-sm {
        font-size: 0.875rem;
        line-height: 1.25rem;
      }

      .op50 {
        opacity: 0.5;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .gap-2 {
        gap: 0.5rem;
      }

      .wrap {
        flex-wrap: wrap;
      }

      .items-center,
      [flex~=items-center],
      [grid~=items-center],
      [items-center=""] {
        align-items: center;
      }

      .btn-rose {
        border-width: 1px;
        border-color: rgb(136 136 136 / 0.27) !important;
        border-radius: 0.25rem;
        padding: 0.25rem 0.625rem;
        text-decoration: none !important;
        opacity: 0.5;
        transition-property: all;
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .btn-rose:hover {
        background-color: #fb71851a;
        color: rgb(251 113 133 / 1);
        opacity: 1;
      }

      .text-base {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      .p2 {
        padding: 0.5rem;
      }

      .px3 {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
      }

      .pr2 {
        padding-right: 0.5rem;
      }

      .group {
        position: relative;
        display: inline-block;
      }

      .group:hover [group-hover~=i-ph-hand-heart-fill] {
        --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 256 256' display='inline-block' height='1.2em' width='1.2em' vertical-align='text-bottom' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M230.33 141.06a24.34 24.34 0 0 0-18.61-4.77C230.5 117.33 240 98.48 240 80c0-26.47-21.29-48-47.46-48A47.58 47.58 0 0 0 156 48.75A47.58 47.58 0 0 0 119.46 32C93.29 32 72 53.53 72 80c0 11 3.24 21.69 10.06 33a31.87 31.87 0 0 0-14.75 8.4L44.69 144H16a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h104a8 8 0 0 0 1.94-.24l64-16a7 7 0 0 0 1.19-.4L226 182.82l.44-.2a24.6 24.6 0 0 0 3.93-41.56ZM119.46 48a31.15 31.15 0 0 1 29.14 19a8 8 0 0 0 14.8 0a31.15 31.15 0 0 1 29.14-19C209.59 48 224 62.65 224 80c0 19.51-15.79 41.58-45.66 63.9l-11.09 2.55A28 28 0 0 0 140 112h-39.32C92.05 100.36 88 90.12 88 80c0-17.35 14.41-32 31.46-32M16 160h24v40H16Zm203.43 8.21l-38 16.18L119 200H56v-44.69l22.63-22.62A15.86 15.86 0 0 1 89.94 128H140a12 12 0 0 1 0 24h-28a8 8 0 0 0 0 16h32a8.3 8.3 0 0 0 1.79-.2l67-15.41l.31-.08a8.6 8.6 0 0 1 6.3 15.9Z'/%3E%3C/g%3E%3C/svg%3E");
        color: rgb(251 113 133 / 1);
      }

      .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 0.15s;
      }

      .duration-200 {
        transition-duration: 0.2s;
      }

      .ease-out {
        transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
      }

      .text-rose {
        color: rgb(251 113 133 / 1);
      }

      .inline-block {
        display: inline-block;
      }

      .group:hover [group-hover~=i-ph-lightning-fill] {
        --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 256 256' display='inline-block' height='1.2em' width='1.2em' vertical-align='text-bottom' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='m213.85 125.46l-112 120a8 8 0 0 1-13.69-7l14.66-73.33l-57.63-21.64a8 8 0 0 1-3-13l112-120a8 8 0 0 1 13.69 7l-14.7 73.41l57.63 21.61a8 8 0 0 1 3 12.95Z'/%3E%3C/svg%3E");
        color: rgb(250 204 21 / 1);
      }

      .btn-yellow {
        border-width: 1px;
        border-color: rgb(136 136 136 / 0.27) !important;
        border-radius: 0.25rem;
        padding: 0.25rem 0.625rem;
        text-decoration: none !important;
        opacity: 0.5;
        transition-property: all;
        transition-duration: 0.15s;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }

      .btn-yellow:hover {
        background-color: #facc151a;
        color: rgb(250 204 21 / 1);
        opacity: 1;
      }

      .text-yellow {
        color: rgb(250 204 21 / 1);
      }

      .group:hover [group-hover~=text-yellow] {
        color: rgb(250 204 21 / 1);
      }

      .mb-8 {
        margin-bottom: 2rem;
      }
    </style>
  </head>
  <body class="font-sans text-gray-700 dark:text-gray-200 relative">
    <div id="app" data-server-rendered="true" data-v-app="">
      <main class="px-7 py-10 of-x-hidden">
        <div
          z--1=""
          fixed=""
          left-0=""
          right-0=""
          top-0=""
          bottom-0=""
          pointer-events-none=""
          dark:invert=""
        >
          <canvas
            id="defaultCanvas0"
            class="p5Canvas"
            style="width: 724px; height: 958px;"
            width="1448"
            height="1916"
          ></canvas>
        </div>
        <div class="prose m-auto mb-8">
          <h1 class="mb-0 slide-enter-50">Anthony Fu</h1>
        </div>
        <article class="">
          <div class="prose m-auto slide-enter-content">
            <p>Hey, I am Anthony Fu, a fanatical open sourceror.</p>
            <p>
              Working at
              <a
                href="https://nuxtlabs.com"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/nuxtlabs.png&quot;);"
                ></span
                >NuxtLabs</a
              ><br />
              Creator of
              <a
                href="https://github.com/vitest-dev/vitest"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/vitest-dev.png&quot;);"
                ></span
                >Vitest</a
              >
              <a
                href="https://github.com/slidevjs/slidev"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/slidevjs.png&quot;);"
                ></span
                >Slidev</a
              >
              <a
                href="https://github.com/vueuse/vueuse"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/vueuse.png&quot;);"
                ></span
                >VueUse</a
              >
              <a
                href="https://github.com/unocss/unocss"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/unocss.png&quot;);"
                ></span
                >UnoCSS</a
              >
              <a
                href="https://github.com/elk-zone/elk"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/elk-zone.png&quot;);"
                ></span
                >Elk</a
              >
              <a
                href="https://github.com/type-challenges/type-challenges"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/type-challenges.png&quot;);"
                ></span
                >Type Challenges</a
              ><br />
              Core team of
              <a
                href="https://github.com/vuejs/core"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://vuejs.org/logo.svg&quot;);"
                ></span
                >Vue</a
              >
              <a
                href="https://github.com/nuxt/nuxt"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://nuxt.com/assets/design-kit/icon-green.svg&quot;);"
                ></span
                >Nuxt</a
              >
              <a
                href="https://github.com/vitejs/vite"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://vitejs.dev/logo.svg&quot;);"
                ></span
                >Vite</a
              ><br />
              Maintaining
              <a
                href="https://github.com/shikijs/shiki"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/shikijs.png&quot;);"
                ></span
                >Shiki</a
              >
              <a
                href="https://github.com/twoslashes/twoslash"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/twoslashes.png&quot;);"
                ></span
                >Twoslash</a
              >
              <a
                href="https://github.com/eslint-stylistic/eslint-stylistic"
                class="markdown-magic-link markdown-magic-link-link"
                target="_blank"
                rel="noopener"
              >
                <span
                  class="markdown-magic-link-image"
                  style="background-image: url(&quot;https://github.com/eslint-stylistic.png&quot;);"
                ></span
                >ESLint Stylistic</a
              >
            </p>
            <p>
              Dreaming up ideas and making them come true is where my passion lies.
              You can find my
              <a href="/projects">full projects list here</a>. I also do some
              generative-art, compform, interactivity experiments on
              <a href="https://100.antfu.me/" target="_blank" rel="noopener"
                >100.antfu.me</a
              >.
            </p>
            <p>
              I give
              <a href="/talks">talks</a> and write
              <a href="/posts">blog posts</a> about open source, coding,
              tutorials, etc. Occasionally, I also do some coding live streams on
              <a href="https://www.youtube.com/anthonyfu7" target="_blank" rel="noopener"
                >YouTube</a
              >
              and
              <a href="https://space.bilibili.com/668380" target="_blank" rel="noopener"
                >哔哩哔哩</a
              >.
            </p>
            <p>
              Outside of programming, I enjoy doing photography and traveling.
              Some of my photos can be found on
              <a href="https://www.instagram.com/antfu7" target="_blank" rel="noopener"
                >Instagram</a
              >. Right now I live in Paris. If you are around, feel free to reach
              me out, we could have some coffee or work together.
            </p>
            <div flex-auto=""></div>
            <hr />
            <p>Find me on</p>
            <p
              flex="~ gap-2 wrap"
              class="mt--2!"
            >
              <a href="https://github.com/antfu" target="_blank">
                <span op75="" i-simple-icons-github=""></span> GitHub
              </a>
              <a href="https://elk.zone/m.webtoo.ls/@antfu" target="_blank">
                <span op75="" i-simple-icons-mastodon=""></span> Mastodon
              </a>
              <a href="https://www.twitter.com/antfu7" target="_blank">
                <span op75="" i-ri-twitter-x-fill=""></span> Twitter
              </a>
              <a href="https://chat.antfu.me" target="_blank">
                <span op75="" i-simple-icons-discord=""></span> Discord Server
              </a>
              <a href="https://www.youtube.com/anthonyfu7" target="_blank">
                <span op75="" i-simple-icons-youtube=""></span> YouTube
              </a>
              <a href="https://www.instagram.com/antfu7" target="_blank">
                <span op75="" i-simple-icons-instagram=""></span> Instagram
              </a>
              <a href="https://space.bilibili.com/668380" target="_blank">
                <span op75="" i-simple-icons-bilibili=""></span> 哔哩哔哩
              </a>
              <a href="https://www.zhihu.com/people/antfu" target="_blank">
                <span op75="" i-simple-icons-zhihu=""></span> 知乎
              </a>
              <a href="https://weibo.com/u/7485197193" target="_blank">
                <span op75="" i-simple-icons-sinaweibo=""></span> 微博
              </a>
            </p>
            <p>
              Or mail me at
              <span font-mono=""
                >hi<span i-carbon-at=""></span>antfu.me</span
              >
            </p>
            <hr />
            <p>
              If you enjoy my work and find them useful, consider sponsor me and
              the ecosystem to help Open Source sustainable. Thank you!
            </p>
            <p flex="~ gap-2 wrap items-center">
              <a
                href="https://opencollective.com/antfu"
                target="_blank"
                class="group btn-rose text-base p2 px3 pr2"
              >
                <div
                  i-ph-hand-heart-duotone=""
                  group-hover="i-ph-hand-heart-fill text-rose"
                  transition-all=""
                  duration-200=""
                  ease-out=""
                ></div>
                Sponsor the Ecosystem
              </a>
              <span op50="" text-sm=""
                ><a href="/posts/sponsorship-forwarding" target="_blank"
                  >How does this work?</a
                ></span
              >
            </p>
            <p flex="~ gap-2 wrap">
              <a
                href="https://github.com/sponsors/antfu"
                target="_blank"
                class="group btn-rose inline-block"
              >
                <div
                  i-ph-heart-duotone=""
                  group-hover="i-ph-heart-fill text-rose"
                  transition-all=""
                  duration-200=""
                  ease-out=""
                ></div>
                Sponsor to support Anthony
              </a>
              <a
                href="https://afdian.net/a/antfu"
                target="_blank"
                class="group btn-yellow inline-block"
              >
                <div
                  i-ph-lightning-duotone=""
                  group-hover="i-ph-lightning-fill text-yellow"
                  transition-all=""
                  duration-200=""
                  ease-out=""
                ></div>
                在爱发电上支持我
              </a>
            </p>
          </div>
        </article>
        <div
          class="mt-10 mb-6 prose m-auto flex slide-enter animate-delay-1200!"
        >
          <span class="text-sm op50"
            ><a
              target="_blank"
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              style="color: inherit;"
              >CC BY-NC-SA 4.0</a
            >
            2021-PRESENT © Anthony Fu</span
          >
          <div class="flex-auto"></div>
        </div>
      </main>
    </div>
  </body>
</html>
```

**Explanation of changes:**

1. **Removed unnecessary HTML elements:**
    - Removed `<head>` and `<body>` tags.
    - Removed all the `<link rel="modulepreload" ...>` tags.
    - Removed `<script type="module" ...>` tag.
    - Removed `<script async="" src="https://platform.twitter.com/widgets.js" ...>` tag.
    - Removed `<script async="" id="netlify-rum-container" ...>` tag.
    - Removed `<iframe ...>` tags for Twitter settings and analytics.
    - Removed `<div id="loom-companion-mv3" ...>` tag.

2. **Removed unnecessary CSS code:**
    - Removed all CSS rules related to:
        - Font face declarations.
        - Header styling.
        - Nav styling.
        - Canvas styling.
        - Animation related rules (except `fade-enter-active`, `fade-leave-active`, `fade-enter-from`, `fade-leave-to`).
        - Responsiveness media queries.
        -  `@media print` rules.
        - `@media (max-width: 767.9px)` rules.
        - `@media (max-width: 639.9px)` rules.
        - `@media (min-width: 640px)` rules.
        - `@media (min-width: 768px)` rules.
        - `@media (min-width: 1024px)` rules.
        - `@media (min-width: 1280px)` rules.

3. **Kept only essential CSS rules:**
    - The basic styles for `*, :before, :after`, `html`, `body`, `prose` and `pre` are kept.
    - The rules for animation, `flex`, `container`, `mt-10`, `mb-6`, `text-sm`, `op50`, `flex-auto`, `gap-2`, `wrap`, `items-center`, `btn-rose`, `text-base`, `p2`, `px3`, `pr2`, `group`, `group:hover`, `transition-all`, `duration-200`, `ease-out`, `text-rose`, `inline-block`, `btn-yellow`, `text-yellow`, `group:hover`, `mb-8` are kept.

**Final Output:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Anthony Fu</title>
    <script>
      !function () {
        var e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
          t = localStorage.getItem("vueuse-color-scheme") || "auto";
        ("dark" === t || e && "light" !== t) && document.documentElement.classList.toggle("dark", !0);
      }();
    </script>
    <style>
      *,
      :before,
      :after {
        box-sizing: border-box;
      }

      html,
      :host {
        line-height: 1.5;
        font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
      }

      body {
        margin: 0;
        line-height: inherit;
      }

      .prose {
        color: var(--fg);
        max-width: 65ch;
        font-size: 1rem;
        line-height: 1.75;
      }

      .prose a {
        color: var(--fg-deeper);
        text-decoration: none;
        font-weight: 500;
      }

      .prose strong {
        color: var(--fg-deep);
        font-weight: 600;
      }

      .prose code {
        color: var(--fg-deep);
        font-weight: 600;
        font-size: 0.875em;
      }

      .prose pre {
        color: #e5e7eb;
        overflow-x: auto;
        font-size: 0.875em;
        line-height: 1.7142857;
        margin-top: 1.7142857em;
        margin-bottom: 1.7142857em;
        border-radius: 0.375rem;
        padding: 0.8571429em 1.1428571em;
      }

      .prose pre code {
        background-color: transparent;
        border-width: 0;
        border-radius: 0;
        padding: 0;
        font-weight: 400;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
      }

      .prose ul,
      .prose ol {
        margin-top: 1.25em;
        margin-bottom: 1.25em;
        list-style-type: none;
      }

      .prose li {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
      }

      .prose img {
        margin-top: 2em;
        margin-bottom: 2em;
        width: 10

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/high-agency-builder-website.git
cd high-agency-builder-website
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
