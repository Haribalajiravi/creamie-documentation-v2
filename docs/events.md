---
id: events
title: Events
sidebar_label: Events
---

Events are custom functions that can be called whenever the user performs an action. Consider the following example. The event `e` is configured to send an alert saying "Execute method fired!"

And in the HTML, the event is associated with the `click` function of the button. So whenever the button is clicked, an alert "Execute method fired!" will be sent.

Example:

app-component.js:

```javascript
import Creamie from '@creamie/core';
import  AppConfig  from  './app-config.js';

class App extends Creamie {

    constructor() {
        super(AppConfig);
        this.events.init({
            execute: function (e) {
                console.log(this, e);
                alert('Execute method fired!');
            }
        });
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
    <button e="click:execute"></button>
</body>
</html>
```
