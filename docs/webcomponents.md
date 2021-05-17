---
id: webcomponents
title: Web Components
sidebar_label: Web components
---

Creamie uses the Web Components standard to create custom elements for [callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

Custom elements can combine the HTML, CSS, and JS code required for a function, into a single HTML element. This helps you reuse code, maintain consistency, and save your time & effort.

For example, assume your project needs a `Next` CTA in every page. These CTAs will probably have CSS styling to put them in a box with 10px height and 30px width, a 3px border, and `#e31b1b` background colour; JS code functions for hover and onclick actions; and HTML code to bring these all together.

Rather than coding all of this in every page, you could [create a component](https://creamie.now.sh/docs/component) for the Next CTA and call it whenever you want.

```html {16} title="./src/index.html"
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Creamie App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://fonts.googleapis.com/css?family=Lobster|Overpass&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <!-- Your page's HTML code -->
    <next-component></next-component>
  </body>
</html>
```

Here's how the `config.js` and `component.js` files will look for a new component:

```javascript title="./src/newcomp/newcomp-config.js"
import Boot from "./newcomp-boot.js";

export default {
  template: `<COMPONENT_NAME>-component.html`,
  style: `<COMPONENT_NAME>-component.css`,
  tag: "<COMPONENT_NAME>-component",
  isShadowDom: false,
  shadowMode: "open",
  binder: "data",
  boot: Boot,
};
```

```javascript title="./src/newcomp/newcomp-component.js"
import Creamie from "@creamie/core";
import AppConfig from "./<COMPONENT_NAME>-config";

export default class Newcomp extends Creamie {
  constructor() {
    super(AppConfig);
    console.log("App constructor!");
  }

  connectedCallback() {
    console.log("connected!");
  }
}

window.customElements.define(AppConfig.tag, App);
```
