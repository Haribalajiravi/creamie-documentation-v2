---
id: router
title: Router
sidebar_label: Router
---

Routers are used to replace a component on a route placeholder, without refreshing the page.

Example:

```html title="./src/app/app-component.html"
<a route-to="/home">Home</a>
<a route-to="/tab/{tabId}">Tab</a>
<route-app></route-app>
```

```javascript title="./src/app/app-component.js"
import Creamie from "@creamie/core";
import AppConfig from "./app-config.js";
import Router from "@creamie/core/router.js";
import Home from "./home.js";
import Tab from "./tab.js";

class App extends Creamie {
  constructor() {
    super(AppConfig);
    let router = new Router("route-app", {
      "/home": Home,
      "/tab/{tabId}": Tab,
    });
    router.init();
    // To route in js
    // router.navigateTo('/tab');
    // we can acces tabId param like below
    // console.log(router.params.tabId);
  }

  /**
   * create your methods below
   */
}

window.customElements.define(AppConfig.tag, App);
```

When this example is implemented, the web page would have two hyperlinks—Home and Tab. Clicking on those would not redirect the user to a new paage, but load that component in the existing page—thereby increasing your web app's speed and efficiency.
