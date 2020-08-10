---
id: defaultplugins
title: Default plugins
sidebar_label: Default plugins
---

## Textfield (priority 1)

This plugin is applicable for below Elements as default.

### Textfield plugin usage

```html
<input type="text" data="example1">
<textarea data="example2"></textarea>

<div>
    <span>data.example1: </span>
    <span data="example1"></span>
</div>

<div>
    <span>data.example2: </span>
    <span data="example2"></span>
</div>
```

Above example reference can be used as below :

```javascript
import Creamie from '@creamie/core';
import AppConfig from './app-config';

export default class App extends Creamie {
    constructor() {
        super(AppConfig);
        console.log("App constructor!");
        console.log('example1 binder key: ', this.data.example1);
        console.log('example2 binder key: ', this.data.example2);
    }

    connectedCallback() {
        console.log('connected!');
    }
}

window.customElements.define(AppConfig.tag, App);
```

### Textfield plugin internal condition
```javascript
// Below is the condition for getter and setter methods
let condition = (element.type && (element.type === 'text' || element.type === 'textarea')) ? true : false;
```


## Select (priority 2)

This plugin is applicable for below Elements as default.

### Select plugin usage

```html
<select data="selectValue">
<option value="India">India</option>
<option value="US">US</option>
<option value="UK">UK</option>
<option value="China">China</option>
<option value="SA">SA</option>
</select>

<div>
    <span>data.selectValue: </span>
    <span data="selectValue"></span>
</div>

```

Above example reference can be used as below :

```javascript
import Creamie from '@creamie/core';
import AppConfig from './app-config';

export default class App extends Creamie {
    constructor() {
        super(AppConfig);
        console.log("App constructor!");
        console.log('selectValue binder key: ', this.data.selectValue);
    }

    connectedCallback() {
        console.log('connected!');
    }
}

window.customElements.define(AppConfig.tag, App);
```

### Select plugin internal condition
```javascript
// Below is the condition for getter and setter methods
let condition = (element.type && element.type == 'select-one') ? true : false;
```