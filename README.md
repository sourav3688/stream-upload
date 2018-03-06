# `Hamburger` 

This project is an application skeleton for a typical [Angular 2][angularjs] web app. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

The Hamburger contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

This projects contents
* Implementation of a minimalistic online hamburger ordering website without backend support.
* The data of the list of hamburgers are attached as `data.json`.
* You must be able to choose one or more hamburgers from your ordering webpage. When you choose the items of the burger, the list the order summary should update in the right side of the screen dynamically as you select/deselect and change the quantities of the items.
* There is a button to confirm the order.
* After you click on the button to confirm the order, the screen will display "Order successful".


## Getting Started

To get you started you can simply clone the `hamburger` repository and install the dependencies:

### Prerequisites

You need git to clone the `hamburger` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `hamburger`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `hamburger`

Clone the `hamburger` repository using git:

```
git clone https://github.com/sourav3688/hamburger.git
cd hamburger
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].

We have preconfigured `npm` to automatically install `node_module` so you can simply do:

```
npm install
```

After installing the node_modules you need to create the build by command below.

```
npm run prod
```


After that, you should find out that you have a new folders in your project.

* `node_modules` - contains the npm packages for the tools we need


### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:3000`][local-app-url].


## Contact

For more information on Angular 2 please check out [angularjs.io][angularjs].


[angularjs]: https://angular.io/
[bower]: http://bower.io/
[git]: https://git-scm.com/
[http-server]: https://github.com/indexzero/http-server
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[local-app-url]: http://localhost:8000/index.html
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
[travis-docs]: https://docs.travis-ci.com/user/getting-started
