---
id: events
title: Events
sidebar_label: Events
---

Initiating multiple event checkpoints on a single event handler with different variants of events can be achieved. To use this, just make some checkpoints specifying `e` as element attribute followed by {Event}:{ActionCheckPointHandler}.

In the below snippet, the event is associated with the `click` function of the button. We can also, stop event bubbling on nested events just by using `e.stopPropagation()` inside action handler.

Example:

```html {1,2} title="./src/app/app-component.html"
<button e="click:execute"></button>
<select e="change:getSwitch">
  <option value="On">1</option>
  <option value="Off">0</option>
</select>
```

```javascript {7-15} title="./src/app/app-component.js"
import Creamie from "@creamie/core";
import AppConfig from "./app-config.js";

class App extends Creamie {
  constructor() {
    super(AppConfig);
    this.events.init({
      execute: function (target, e) {
        console.log(target, e, "Execute method fired!");
      },
      getSwitch: (target) => {
        // Result will be On/Off
        console.log(target.value);
      },
    });
  }

  /**
   * create your methods below
   */
}

window.customElements.define(AppConfig.tag, App);
```
