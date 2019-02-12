# chayns® CSS API

In this section you will find general information about the chayns CSS API. For more detailed information take a look at the [Wiki](https://github.com/TobitSoftware/chayns-css/wiki).

## Getting started

### Usage

If you want to use the chayns API in your own tapp, we suggest using the code below.

```HTML
<!-- To get started, load the chayns API styles and JavaScript from the CDN -->

<!-- css styles -->
<link rel="stylesheet" href="https://api.chayns.net/css/v4.0/">

<!-- js api -->
<script src="https://api.chayns-static.space/js/v4.0/chayns.min.js"></script>
```

### Debugging

To work on the chayns CSS API, you need to install the dependencies:

``
npm i
``

Once the dependencies have been installed successfully, you can add your ssl certificate files in webpack/ssl.
If you don't have one, the dev server will be started without https. 
To use chayns with a non-https tapp, you have to add the url parameter `nrd=1`.

Then, you can start the dev-server:

``
npm start
``

The dev page will be available at port 9000.
