---
id: contribution
title: Contribution
sidebar_label: Contribution
---

Creamie is currently developing at a good pace. Contributors are welcome to collaborate. Before, knocking on the door just go through the standard [Contributing Open Source Guides](https://opensource.guide/how-to-contribute/). Read the [Code of conduct](/docs/code_of_conduct) to understand what actions you can and you cannot.

## Development

Creamie using [github](https://github.com/) for source code management. Make sure to install [Git CLI](https://git-scm.com/downloads).

Once it is done, [Fork](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) the below repository and create your branch from master.

### [@creamie/core](https://github.com/Haribalajiravi/creamie)

```bash
git clone https://github.com/Haribalajiravi/creamie.git
cd creamie
git fork
```

### [@creamie/cli](https://github.com/Haribalajiravi/creamie-cli)

```bash
git clone https://github.com/Haribalajiravi/creamie-cli.git
cd creamie
git fork
```

### [@creamie/watcher](https://github.com/Haribalajiravi/creamie-watcher)

```bash
git clone https://github.com/Haribalajiravi/creamie-watcher.git
cd creamie
git fork
```

## Working on code

### Style guide

We are following [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to maintain a neat code that will match developer standards.

If you are not a VS code eslint/prettier extension fan. Just use `npm run lint` to detect the status of code styling. Most probably when you are committing your code [Husky](https://github.com/typicode/husky) will run linting and auto test cases.

### TDD - Test Driven Development

New features or issues make sure you have a written test case that should meet all your workflow conditions.

Test frameworks:

- [testcafe](https://devexpress.github.io/testcafe/) for [@creamie/core](https://github.com/Haribalajiravi/creamie)
- [mocha](https://mochajs.org/) for [@creamie/cli](https://github.com/Haribalajiravi/creamie-cli) and [@creamie/watcher](https://github.com/Haribalajiravi/creamie-watcher)

Even though you have not run your tests on a local machine. While committing it will run a test and then allow you o push.
After pushing into the codebase. Github webhooks will pass a request to run all the test cases on [Travis CI](https://travis-ci.org/github/Haribalajiravi/creamie) where you can check the status. Also, we can view the status as a green label if it passed.

### Conventional Commits

A set of rules on committing message style will make you a good contributor.

Commit message will be structured as below:

```bash
<type>[optional scope]: <message>
```

Type: chore, docs, feat, fix, refactor, style, or test.
Message: use lowercase always

```bash
feat: (new feature for the user, not a new feature for build script)
fix: (bug fix for the user, not a fix to a build script)
docs: (changes to the documentation)
style: (formatting, missing semi colons, etc; no production code change)
refactor: (refactoring production code, eg. renaming a variable)
test: (adding missing tests, refactoring tests; no production code change)
chore: (updating grunt tasks etc; no production code change)
```

Example:

```bash
feat: passing payload on router transition
```

Go through [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary) for a detailed summary.

## Setting up local npm package

This operation will take place while you are including a new change on the package. Once you started development make sure the package you are developing should be synced to your 'Test' application.

[How to sync local npm package?](https://docs.npmjs.com/cli/link.html)

### How can we sync local package to our test application ?

Goto the package folder hit the below command. The Below command will create a local package into your machine.

```bash
npm link
```

Now you should include your local package in your test project.

```bash
npm link @creamie/core
```

So your setup is complete. While you are doing any changes in your local package will automatically sync to your `node_modules`.

## Pull request

Once you have done your development on your branch. Just raise a [pull request](https://docs.github.com/en/enterprise/2.16/user/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Pull requests should be against the `master` branch always.

:::note
Each PR should have a single feature/issue. If you have multiple changes make separate PRs for each change.
:::

### Joining discord channels (Development purpose only)

If you are looking for any clarification/help just ping us in below respective channels.

- [@creamie/core](https://discord.gg/C6eDy3j)
- [@creamie/cli](https://discord.gg/E9GNdMd)
- [@creamie/watcher](https://discord.gg/FsnCWZE)

Start developing. CHEERS!
