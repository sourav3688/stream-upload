# `Chunk upload or stream upload sample!!` 

This project contain sample code for uploading large files using javascript and node. We can upload any size of file by this way. 

This sample selected files are reads as binary data and devided into chunks of 1 MB and the create a upload stream, if a file size is 35 MB then 35 request will sent to server with 1MB chunk in each request.

In server side we receve the upload stream and combine the chunks into one file.


## Getting Started

To get you started you can simply clone the `stream-upload` repository and install the dependencies:

### Prerequisites

You need git to clone the `stream-upload` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test `stream-upload`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `stream-upload`

Clone the `stream-upload` repository using git:

```
git clone https://github.com/sourav3688/stream-upload.git
cd stream-upload
```

### Install Dependencies

We have preconfigured `npm` to automatically install `node_module` so you can simply do:

```
npm install
```

After that, you should find out that you have a new folders in your project.

* `node_modules` - contains the npm packages for the tools we need


### Run the Application

We have preconfigured the project. The simplest way to start this server is:

```
npm start
```

Now browse to the app at [`localhost:3000`][local-app-url].


[git]: https://git-scm.com/
[local-app-url]: http://localhost:3000
[node]: https://nodejs.org/
[npm]: https://www.npmjs.org/
