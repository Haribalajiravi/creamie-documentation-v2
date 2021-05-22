---
id: binder
title: Binder
sidebar_label: Binder
---

## Basic Binder Usage

Binder syncs the data between an HTMLElement and an Object.

Example:

Enter the following code in `app-component.html`:

```html {1-2} title="./src/app/app-component.html"
<input type="text" data="name" placeholder="Type anything" />
<div data="name">Previous data!</div>
<button id="change">Change</button>
```

Now enter this in `app-component.js`:

```javascript {9} title="./src/app/app-component.js"
import Creamie from "@creamie/core";
import AppConfig from "./appConfig.js";

class App extends Creamie {
  constructor() {
    super(AppConfig);
    let _this = this;
    change.onclick = function () {
      _this.data.name = "Data changed!";
    };
  }

  /**
   * create your methods below
   */
}

window.customElements.define(AppConfig.tag, App);
```

As the `<input>` and `div` have the same `data` attribute, they are synced. Any changes made in the input field will be reflected in the div section. Furthermore, the content of the `<div>` section can be retrieved and used anywhere by using `this.data.name` in the component's JS file.

## Binder Plugins

Binder Plugin allows you to write your own custom plugins.

> Before creating your own plugin, read below workflow of binder to have a perfect understanding of how it works.

### The Basic workflow of binder

Binder has basically getter and setter method.

- Getter method is always used to listen for user input in any form of HTMLElement and push those data to a respective object.
- Setter method is always used to set the data of object towards any HTMLElement. If a value is set to an object key, those values will reflect the HTMLElement.

### How to write custom binder plugins?

You can write getter and setter methods in '< component >-config.js'.

Getter and Setter example:

```javascript {21-37,45-54,62-72} title="./src/app/app-config.js"
export default {
  template: `example-component.html`,
  style: `example-component.css`,
  tag: "example-component",
  isShadowDom: false,
  shadowMode: "open",
  binder: "data",
  boot: Boot,

  /**
   * 'getterMethods' value as Array of methods.
   * You can write upto N number of methods.
   * You'll be availed with a object params which has corresponding element, property and binded object.
   * 'cache' is reference object to set any extra data to get on setterMethods
   * 'allCache' is a object which contains all the extra data from any plugins
   * Method should return a object with condition key with boolean as value & method key with method as value.
   * 'condition' : On which condition 'method' should execute
   * 'method' : method should execute once the element loads. So, better keep listeners here.
   *
   */
  getterMethods: [
    ({ element, property, data, cache, allCache }) => {
      return {
        condition: element.type && element.type == "checkbox" ? true : false,
        method: () => {
          let eventController = () => {
            data[property] = element.checked;
          };
          element.addEventListener("click", eventController, true);
          allCache[property] = {
            event: "click",
            method: eventController,
          };
        },
      };
    },
  ],
  /**
   * 'setterMethods' value as Array of methods.
   * You can write upto N number of methods.
   * You'll be availed with a object params which has corresponding element, newvalue of object, property and value before assigned
   * 'condition' : On which condition 'method' should execute
   * 'method' : method should set the newValue towards HTMLElement.
   */
  setterMethods: [
    ({ element, currentValue, property, oldValue }) => {
      return {
        condition: element.type && element.type == "checkbox" ? true : false,
        method: () => {
          element.checked = JSON.parse(currentValue);
        },
      };
    },
  ],
  /**
   * 'destroyMethods' value as Array of methods.
   * You can write upto N number of methods.
   * You'll be availed with a object params which has corresponding element, data as scopes, property and allCache as dataCache
   * 'condition' : On which condition 'method' should execute
   * 'method' : method should remove the eventListeners
   */
  destroyMethods: [
    ({ element, scopes, property, dataCache }) => {
      return {
        condition: element.type && element.type == "select-one" ? true : false,
        method: () => {
          let cacheData = dataCache[property];
          element.removeEventListener(cacheData.event, cacheData.method);
        },
      };
    },
  ],
};
```

### Binder priorities

There is a priority to executing all plugins. Plugin which matches at first will executes and the rest won't.

For example,

```javascript {6-11} title="./src/app/app-config.js

export default {
    getterMethods: [
        /**
         * Below method will first check condition and if matched 'method' will execute
         */
        () => {
            return {
                condition: true, // condition to execute methods,
                method: () => {} // method to be executed when the above condition matched
            }
        },
        /**
         * If above method matched, operation will break there itself. Else below methods will continue
         */
        () => {},
        ...
        ...
    ]
}

```

### Exclude plugins

It is possible exclude default plugins and write your own.

#### Default Plugins

- [textfield (priority 1)](/docs/defaultplugins#textfield-priority-1)
- [select (priority 2)](/docs/defaultplugins#select-priority-2)

## How to exclude default plugins?

Import default plugins and add it in 'excludePlugins' array.

```javascript {5} title="./src/app/app-config.js
import TextField from "@creamie/core/plugins/textfield";
import Select from "@creamie/core/plugins/select";

export default {
  excludePlugins: [TextField, Select],
};
```
