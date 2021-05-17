---
id: directives
title: Directives
sidebar_label: Directives
---

## How remove/add DOM through binder scope?

`if` directive will remove/add HTMLElement that can be accessed via binder scopes.

Example:

Setup 'if' attribute with new binder scope property in `*-component.html`

```html {3} title="./src/app/app-component.html
<div>
  <div>Title - Good old title</div>
  <div if="showDescription">Show this description</div>
  <button e="click:show">show</button>
  <button e="click:hide">hide</button>
</div>
```

Just set `true`/`false` to binder scope property in your `*-component.js`

```javascript {10,13} title="./src/app/app-component.js
import Creamie from "@creamie/core";
import AppConfig from "./app-config.js";

class App extends Creamie {
  constructor() {
    super(AppConfig);
    let _self = this;
    this.events.init({
      hide: () => {
        _self.data.showDescription = false;
      },
      show: () => {
        _self.data.showDescription = true;
      },
    });
  }
}

window.customElements.define(AppConfig.tag, App);
```

## How to display list of data to DOM?

`loop` directive will render Array of objects to the DOM automatically once you assign, add, remove or modify array on binder scope with array property.

Example:

Setup `loop` attribute with new binder scope property and set `el` attributes with scopes to its child HTMLElement whichever you need in `*-component.html`

```html {4-9}
<div>
  <div>My Items</div>
  <div>
    <div loop="items">
      <div el="id"></div>
      <div el="name"></div>
      <div el="price"></div>
      <div el="quantity"></div>
    </div>
  </div>
</div>
```

- Render whole array of objects by just assign the array to binder scope property
- Add, remove or modify array of object will reflect automatically towards binded DOM. We can use any array methods which modified object.
- Basically these methods `pop, push, reverse, shift, unshift, splice, sort` will work out.

> Note: Before using array methods on binder scope assign with empty/array of object to initiate functionality.

```javascript {8-35} title="./src/app/app-component.js
import Creamie from "@creamie/core";
import AppConfig from "./app-config.js";

class App extends Creamie {
  constructor() {
    super(AppConfig);
    // Rendering whole array
    this.data.items = [
      {
        id: "43234k23920",
        name: "Milk",
        price: "1$",
        quantity: "1L",
      },
      {
        id: "43234k23921",
        name: "Almonds",
        price: "3$",
        quantity: "100g",
      },
      {
        id: "43234k23922",
        name: "Broccoli",
        price: "2$",
        quantity: "500g",
      },
    ];

    // Pushing a single object
    this.data.items.push({
      id: "43234k23920",
      name: "Milk",
      price: "1$",
      quantity: "1L",
    });
  }
}

window.customElements.define(AppConfig.tag, App);
```
