---
id: router
title: Router
sidebar_label: Router
---

Routers are used to replace a component on a route placeholder, without refreshing the page.

Example:

app-component.js:

```javascript
import Creamie from '@creamie/core';
import AppConfig from './app-config.js';
import Router from '@creamie/core/router.js';
import Home from './home.js';
import Tab from './tab.js';

class App extends Creamie {

    constructor() {
        super(AppConfig);
        let router = new Router('route-app', {
            '/home' : Home,
            '/tab/{tabId}' : Tab
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

index.html:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>App</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script module='type' src='./App.js'></script>
</head>
<body>
    <a route-to="/home">Home</a>
    <a route-to="/tab/{tabId}">Tab</a>
    <route-app></route-app>
</body>
</html>
```

When this example is implemented, the web page would have two hyperlinks—Home and Tab. Clicking on those would not redirect the user to a new paage, but load that component in the existing page—thereby increasing your web app's speed and efficiency.
