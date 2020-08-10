---
id: component
title: Create web component in the CLI
sidebar_label: Create web component in the CLI
---

Web components allow you to create reusable custom HTML elements by combining HTML, CSS, and JS code. A web component consists of five different files:
1. A HTML file
2. A CSS file
3. A JS file
4. A `config.js` file
5. A `boot.js` file

> When creating a project, a component named `app` is created by default. In your [project's folder structure](https://creamie.now.sh/docs/projectgeneration#folder-structure), you might have noticed a folder named `app`, with the files `app-component.html`, `app-component.css`, `app-component.js`, `config.js`, and `boot.js`.

## Create a component

```sh
creamie component <COMPONENT_NAME>
```

Running this command will create a folder named `<COMPONENT_NAME>` containing the appropriate files in the `src/` folder.

### Example

```sh
creamie component home

# console output
./src/home/home-component.css created!
./src/home/home-component.html created!
./src/home/home-component.js created!
./src/home/home-config.js created!
index.js modified!
./home/home-component imported!
```

[Learn how to use the web component.](https://creamie.now.sh/docs/webcomponents)

## Overwrite a component

```sh
creamie component <COMPONENT_NAME> -r
```

Running this command will replace an existing component with a brand new one. All changes made to the five files present inside the `<COMPONENT_NAME>` folder will be reset.

### Example

```sh
creamie component home -r

# console output
./src/home/home-component.css replaced!
index.js modified!
./home/home-component imported!
./src/home/home-config.js replaced!
./src/home/home-component.js replaced!
./src/home/home-component.html replaced!
```
