# Selenium Tests in the Real World

## General Setup

1. `npm init` to create a project.
2. Download the [`chromedriver`](https://chromedriver.chromium.org/downloads) and add the filepath to your system `PATH`.
3. I am not sure if this is required or an alternative to step 2, but `npm install --save chromedriver`.

## Pure Selenium

The example using pure Selenium is `index.js`.

### Install

```
npm install --save selenium-webdriver
```

### Run

```
node file-name.js
```

or

```
npm test
```

## Mocha

This one was difficult to get working.  Everything I read online says I must install it globally, but it doesn't seem to do anything unless I install it locally.

The example file is `mocha-test.js`.

### Install

```
npm install -g mocha
npm install --save mocha
```

### Run

```
./node_modules/mocha/bin/mocha mocha-test.js
```

or

```
npm run mocha-test
```

## Cucumber

I haven't tried this yet.

## Links

* [npm page for selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver)
* [walkthough with outdated code](https://simpleprogrammer.com/selenium-with-node-js/)
* [cucumber with selenium](https://www.lambdatest.com/blog/cucumberjs-tutorial-selenium/)
* [getting started with mocha](https://mochajs.org/#getting-started)
* [selenium API documentation](https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/)