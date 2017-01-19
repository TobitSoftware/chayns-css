# chayns® styles
Here you can find a getting started and a [wiki](https://github.com/TobitSoftware/chayns-css/wiki) of chayns® styles.

Before you start using our API, we recommend you to start with some preparations. The following will help you to set up your index.html in a proper way and allow you an easy start.
* Include the .css file at the end of your head tag. This allows you to use the styles that are used in our Tapps and provides you with a uniform design on all devices. 
* Include the .js file at the end of your body tag. This script is required for some style ( e.g. accordion ) and offers some useful functions in addition.
* Include the Meta-Tags at the start of your head tag. The viewport meta-tag is responsible for the sizing of your Tapp. It automatically resizes it to your viewport size and guarantees a perfect integration into your app/website.

```HTML
<!DOCTYPE html>
<html>
 <head>
  <!--Add Meta-Tags for scaling etc.-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1, maximum-scale=1"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta charset="utf-8">

  <title>Tapp</title>

  <!--Load the chayns styles-->
  <link rel="stylesheet" href="https://chayns-res.tobit.com/API/V3.1/css/chayns.min.css">
 </head>
 <body>
 
 <div class="tapp">
 
   <div class="tapp__intro">
   </div>
 
   <div class="tapp__content">
   </div>
 
 </div>

  <!--Load the js chayns API-->
  <script src="https://chayns-res.tobit.com/API/V3.1/js/chayns.min.js"></script>
 </body>
</html>
```

If you are looking for a uniform design similar to our usual tapps, you can use the class structure set up in the code snippet.<br><br>
<b>class="tapp"</b><br>
The tapp class adds margin and padding to the surroundings. It is designed to ensure a good looking design on both mobile and pc. This class also serves as a container for the intro and content.

<b>class="tapp__intro"</b><br>
Every tapp starts with a headline and an intro text, that either describes the tapp or contains the actual content.

<b>class="tapp__content"</b><br>
If your tapp has an intro, you should keep your content in this class and seperate it from the intro text.
