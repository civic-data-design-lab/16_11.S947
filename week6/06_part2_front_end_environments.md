# Front End Environments
## HTML/CSS/JavaScript: An Overview

All the files you will want to use today are provided in the Week 6
folder of the class repo. The files for the website are in 'website'.

This is a continuation of [Front End Environments Part 1: HTML and CSS](https://github.com/civic-data-design-lab/16_11.S947/blob/master/week6/06_part1_front_end_environments.md).

### JavaScript: The Core Concepts

In the website ecosystem, the next component is the behavior. How do we take these styled elements and interact with them in a manner in which we can load data, dynamically populate elements, and create animations and interactions. This is where JavaScript comes in.

<img src="images/environment.png" alt="Drawing" style="text-align: center; width: 75%;"/>

#### What is JavaScript?

JavaScript is a web programming language that manipulates and controls the behavior of web pages by interacting with the various elements on the page and loading data. It, along with HTML and CSS, forms the foundation of modern web browsers and the internet. JavaScript is considered, unofficially, to be the most popular programming language in the world. Many web site templates, such as Bootstrap, are in JavaScript, and it is the programming language that most of the major mapping and data visualization libraries, including Leaflet and D3 that we are using in this course, are implemented in.

One of the major concepts in web development is that of **server-side** versus **client-side**. The server is the location on the web that *serves* your website to the rest of the world, the client is the computer that is accessing that website, requesting information from the server. JavaScript can be both, but is primarily a client-side language, working on your client computer. In the manner we are using it, JavaScript is a scripting language that will operate in two fundamental ways. The first is executing scripts and tasks when the web page is loaded (i.e. load a dataset on page open), and the second is executing scripts and tasks after the web page visitor tells it to (i.e. clicking a button) or another task is completed (i.e. a menu is closed). When the script executes, it can manipulate the content of the page, change how it is being viewed through the browser, give information to a server, or tell the browser to go back to the server and get new information. Often, however, the instructions given by the script can be followed without additional communication with the server.

JavaScript, in a manner similar to CSS, interacts with HTML elements using the DOM.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/02/dom_model.jpg" alt="Drawing" style="text-align: center; width: 75%;"/>

When you are working with D3, some of your main goals will be to:

* Create Elements
* Load and Bind Data
* Modify Element Properties
* Write Functions
* Listen for User Interaction

#### Link a JavaScript Document to your Site

CSS can be added to style your website in one of a few ways. You can apply CSS to individual elements, embed it within your HTML document, or create a separate CSS file and link it to your HTML doc. In your file, add the following link in **head** section of your document.

JavaScript can be added to your website by either typing in script between two **script** tags, or by linking a JavaScript file your site. In your file, at the bottom of the **body** section, add the following code snip. This will read all code found in the *main.js* file that is in the **js** folder.

```xml
<script src="js/main.js"></script>
```

In the body of your HTML document, above the script. Add a button using the following. When clicked, this button will run the function named **helloworld()** in our main.js JavaScript file, and change the content of the paragraph elements with *id="foo"*.

```xml
<button type="button" onclick="helloworld()">Click Me!</button>
```

Now, we are programming! Let's learn JavaScript!

#### JavaScript Consoles

Try out all of the examples today using [REPL.IT](https://repl.it/), an online sandbox for testing out JavaScript.

*The In-browser JavaScript Console*

JavaScript is the language of the modern web browser. Modern web browsers have JavaScript consoles built that we can explore the basics of the language with. Open up our browser, navigate to a page, and open the browser JavaScript console and do some basic coding to show some of the principles. If you are using Chrome or Firefox, there are integrated JavaScript consoles that allow you to input and explore JavaScript. Use **CTRL+SHIFT+K** (Windows)/**CMD+OPTION+K** (Mac) for Firefox, and **CTRL+SHIFT+J** (Windows)/**CMD+OPTION+J** (Mac) for Chrome. In the following steps we will introduce some concepts, try them using the console, and look for how the concepts manifest in our web map code.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/02/browser-jsconsole.png" alt="Drawing"/>

In your JavaScript code, if you ever want to log something to the console, use:

```js
console.log([object]);

// for example
console.log("Hello world");

// or
var hello = "Hello world"
console.log(hello)
```

#### Introducing Objects: The Foundation of JavaScript

Objects are the kings of JavaScript and almost everything you work with in JavaScript is an object. Objects are elements of JavaScript that have properties and values. To illustrate this, I will reference a nice example from W3schools, in real life, a car is an **object**. This car has **properties** like weight and color that are set to certain **values**, and it has **methods**, like start and stop.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/02/js_object.png" alt="Drawing"/>

You will commonly be accessing objects within objects. Typical syntax might look like the following.

```js
[object1].[object2].[method]

// ie when working with Leaflet
L.tileLayer().addTo(map);

// ie when working with D3
d3.select("body").append("svg");

// properties and methods
var car = {
    make:"Ford",
    model: "Mustang",
    year: 2013,
    color: "Red"
    start: function(){
    	console.log("Car started!");
    }
};
```

Our page elements from our HTML webpage document can be referenced through JavaScript. Using JavaScript, we can change the properties of these elements and tell them to do things, like change color, or disappear. Imagine in our car example, to create a Ferrari and tell it to be red, we can create a car **div** with **id="myFerrari"**, then make it red by setting the **color** method **(myFerrari.color = "red")**.

Object properties, and objects themselves, can be stored stored and accessed for later use using variables.

#### Variables

Variables are containers that hold data values, simple or complex, that can be referred to later in your code, much like algebra. For example, in order to fully instantiate the Leaflet map object, we have to use our script to create an object that will hold the Leaflet map object. The map object creates a map, but to put in our page, we need to create another object that will contain the map that is created. To do this, we use a [variable](http://www.w3schools.com/js/js_variables.asp).

The following are examples of variables. Plug these into your JavaScript console one by one, hitting enter after each. Note the semicolon. All individual lines in JavaScript must end with a semicolon.

```js
var x = 5;
var y = 6;
var z = x + y;
```
In your JavaScript console, to see a current value of a variable, type it and hit enter, it will return the current value.


```js
z;
// will return
11
```

#### Data Types

These variable values fall into two different data types, primitive and reference. Data in JavaScript are objects that represent values or other objects. Primitive data types must be of a specific type, where Reference data types can be thought of a references to other objects in your document.

Primitive Data Types

* **Boolean:** true or false
* **Number:** Any integer or floating-point value
* **String:** Text characters that are delimited by quotes
* **Null:** Variable set to have the value of null
* **Undefined:** Variable declared, but set to have no value

Examples of JavaScript data, and what can be stored as a variable and referred to later are shown below. Variables can contain many different data types, including strings, numbers, and even entire objects, arrays, and functions. To familiarize yourself with data in JavaScript, try some of the following in your browser JavaScript console.

#### Primitive Data Types

##### String

Strings are text characters. They can be concatenated by using **+**.

```js
var name = "Michael";
var selection = "a";
console.log(name);
console.log(selection);
console.log(name + selection); // string concatenation
```

##### Number

Number types can hold integers and decimals.

```js
var count = 25;
var cost = 1.51;

count + cost
```

##### Boolean

Boolean values are either **true** or **false**. They are good for evaluation and flow control. Boolean values are the result of **comparison operators**.

```js
var found = true;
var lost = false;

9 >= 10 // returns false
11 > 10 // returns true
```

Boolean values can be applied to logical operators.

* **&&** - AND operator. True only if both values are true.
* **||** - OR operator. True if one or both values are true.
* **!** - NOT operator. True if statement is false.

##### Null
NULL objects can be created if you need an object, but you dont have anything to put in it yet you can populate it at a later point

```js
var object = null;
```

##### Undefined
Undefined creates the variable so it exists in the DOM, but does not give it any definition. You can define it (populate it) at a later point.

```js
var flag = undefined;
var ref;
```

#### Reference Data Types

##### Array

```js
var array = []; //empty array
var array1 = [ 1, 3, 5 ]; //populated array
```

You can access array elements much like in Python. Note the first position is 0.

```js
array1[];
[1, 3, 5]
array1[0];
[1]
array1[1];
3
```

##### Object Literal

Object Literal data type is a comma separated list of name value pairs. Kind of like a **dict** in Python.

```js
var workshop = {
    name: "Web Map Workshop",
    year: 2015
};

console.log(workshop.name);
```
##### Function

You can place functions within variables.

```js
var myFunction = function(argument){
	// function code goes here
};
```

#### Variable Scope

How long do variables last when you declare them? There are two main types of variables, global variables and local variables. Variables declared within a function are **Local** to that function. Values held within a local variable will not be usable after the function ends. Variables declared outside a function are **Global**, and can be used anywhere on the webpage.

##### Local Variable

```js
// code that sits here can not use carName
function myFunction() {
    var carName = "Volvo";
    // code here can use carName
}
```

##### Global Variable

```js
var carName = " Volvo";
// code here can use carName
function myFunction() {
    // code here can use carName
}
```

#### More on Methods

Methods are the options and actions that can be performed on objects. Using the car as an object analogy, the methods might be start, drive, brake, and stop. These are actions the car can perform. In other words, write a function that defines how to start the car. In JavaScript, to start the car, access the start method by using **car.start()**. Likewise, write one for brake. Access the brake method by using **car.brake()**.

#### Properties and Values

Properties are the values associated with a JavaScript object. Let's use the car example again, for the object car, say it has the properties of make, model, weight, and color. Each of these can be set to a value.

```js
var car = {
    make:"Ford",
    model: "Mustang",
    year: 2013,
    color: "Red"
};
```

This creates an object called car, then sets the properties of car to be a Red 2013 Ford Mustang. To access this property, we would type the object name and property **(objectName.property)**, for example, **car.make = "Ford"**.

If we wanted to change the color, we would access it through this method. For example, overwrite the color property currently set to "Red" by changing it to "Blue" by using the following.

```js
> car.color;
"Red"
> car.color = "Blue";
>
> car.color;
"Blue"
```

[Read more about objects and properties](http://www.w3schools.com/js/js_properties.asp)

#### Flow Control

Statements in your document will run top to bottom, but you can control this using conditionals and loops.

* **Conditionals** are *if...else* statements.
* **Loops** are *while* or *for* statements.

##### Conditionals

Run pieces of code if an expression produces a boolean value. Your code can 'diverge' and run different paths.

Conditionals run if true, skip if false.

```js
> var number = 100;
> 
> if(number == 100){
	console.log("True")
	} else {
	console.log("False")
	};
True
> 
> if(number == 99){
	console.log("True")
	} else {
	console.log("False")
	};
False
```

If statements can be used to check if elements on in your page, or if properties are set to certain values. For example, you can toggle layers on and off in a web map by using an if statement to see if the layers is visible. If visible is true, hide the layer, and vice versa. 

Conditionals are powerful! You can use multiple else statements to explore multiple options.

```js
var number = 100;

if(number == 100){
	console.log("Number is 100");
} else if(number < 100){
	console.log("Number is less than 100.");
} else if(number > 100){
	console.log("Number is greater than 100.");
};
```

##### Loops

Loops go through a piece of code a set number of times.

**For Loop**

A basic for loop will use the following syntax. Note the first argument is an index for the the start value, the second is a conditional for the index stating where the loop will stop when the value is false, and the last is the increment of the loop. Note the syntax, <strong>i++</strong> will increase i by 1 every single time the loop circles. The code in the middle is what will run.

```js
for(var i=0; i<1000, i++){
	// code here will run 1000 times, then move on to the next
}
```

You can also use for loops to loop through arrays and datasets.

```js
// iterate through a dataset, logging values to the console
for(var i in data){
    // run this on each value in data
}
```

**While Loop**

Similar to the for loop, the while loop

```js
var counter = 0;
while(counter < 1000){
	// code here will run
	counter += 1 // adds 1 to counter each time, will stop at 1000
}
```

Loops that don't end are called infinite loops, and they will crash your program!

#### Functions

Just like Python, functions are pieces of code that can run when called upon. They must be defined, and can take arguments that set properties of the function.

```js
var a = 4;
var b = 5;

var multiply = function(a,b){
	return a*b;
}

mutiply(a,b) // run function
20 // return value
```

Functions can be stored as variables and referred to later! Or even stored within objects, and referred to later.

```js
var newCar = {
	make: "Subaru",
	model: "Forrester",
	color: "Blue",
	start: function(){
		console.log("Vroom!"); // can hold block of code to run!
	}
}

// view the data values
console.log(newCar);
console.log(newCar.make);

// or start the car
newCar.start();
```

#### JSON: JavaScript Object Notation

Data can be stored in something called JSON, which is a JavaScript element. A JSON is structured as follows:

```js
// set employee directory dataset
var directory = {"employees":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}

console.log(directory.employees)
console.log(directory.employees[1]);
console.log(directory.employees[1].firstName);
```

A GeoJSON is a Geographic JSON element, and contains geometry!

```js
var dataset = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [125.6, 10.1]
  },
  "properties": {
    "name": "Dinagat Islands"
  }
}

console.log(dataset);
console.log(dataset.type);
console.log(dataset.geometry.coordinates);
console.log(dataset.properties);
```

#### Iterate a JSON - Putting this Together

Given that you can access data elements in arrays, you can see then how parsing and accessing various elements of your JSON is easy. Can you iterate through the directory array?

Try the following block of code in your console:

```js
// employee directory dataset
var directory = {"employees":[
    {"firstName":"John", "lastName":"Doe"}, 
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
]}

// create array of employee names
var data = directory.employees;
console.log(data);

// iterate through the array, logging values to the console
for(var i in data){
    fName = data[i].firstName;
    lName = data[i].lastName;
    // do something with each value of the array
    console.log(fName);
    console.log(lName);
}
```

Note the differences with Python.

#### Accessing Elements of your Page

Accessing elements of your page in JavaScript is easy because JavaScript can read the DOM, then adjust properties such as style, content, images, links, and alot more. One method you can use to get into the document is call the document object. Type this into your console and see that you can view the entire page.

```js
document;
```

Try <strong>document.body</strong> to see elements within the document body.

##### Access elements by ID, class, or  and make changes to properties

You can access elements by DOM selectors. Use the [W3 HTML DOM Elements](http://www.w3schools.com/js/js_htmldom_elements.asp) reference to learn more about searching through the page. 

```js
// Access element by element ID
document.getElementById("foo");

// Access element by class name
document.getElementByClassName("class-name")';
```

#### Event Listeners

Often, when working with JavaScript, you are interacting with a page. Using JavaScript, you can make element perform functions when something happens to them. This is called an event. Event listeners can be added to elements and will run functions when an event, such as a click, hover, or other user interaction occurs on that element. Example syntax, enabling a change on an element named <strong>foo</strong> by creating an event listener in JavaScript is as follows.

```js
// listen for a click on 'foo'
// when click occurs, run function called displayDate
document.getElementById("foo").addEventListener("click", displayDate);

// displayDate function
function displayDate() {
    document.getElementById("foo").innerHTML = Date();
}
```

This is something you can simplify using the jQuery library!

#### Working with Libraries

Unless you want to become a hardcore JavaScript master, most often, you will be working with a library that is already written. A library is a collection of pre-written JavaScript with allows for easier development of JavaScript based applications. Libraries are packages of code that when loaded into your document allow access to the objects of that code. In this class, we are primarily going to be using three JavaScript libraries: **jQuery**, **Leaflet**, and **D3**.

What are these used for?

**jQuery** is great for adding user interaction and making calls to other websites, for example, you can easily use it to load data. [Visit the jQuery homepage](http://jquery.com/).

Adding jQuery to your webpage is done by including the following line of code at the bottom of your body section. Please put this in your page.

```xml
<script src="//code.jquery.com/jquery-1.12.0.min.js"></script>
```

**Leaflet** is an easy to use mapping library that makes nice slippy maps for displaying data.

**D3** stands for Data Driven Documents, and is a library designed for visualizing data and making beautiful interactive graphics. D3 uses JavaScript to **bind** data values to page elements and changes properties of those elements accordingly. Very powerful. We will do this next week!

For now... let's use the Leaflet library to create a web-powered map.

#### Let's Make a Leaflet Map

[Leaflet](http://leafletjs.com/) is a library designed for making web-powered maps using JavaScript. The library contains many objects that help with designing maps. The main method of the library is to take a **div** element and turn it into a [slippy map](http://wiki.openstreetmap.org/wiki/Slippy_Map). You can then use other methods of the library to add data layers, user interaction, and styling. In this exercise, we are going to set up a very simple map on our page to show the use of JavaScript.

The API documentation is here for your reference.

[Leaflet API Reference](http://leafletjs.com/reference.html)

#### 1. Add the Library

To add the Leaflet library to your page, you need to add both the script and stylesheets to your document. In your document, add the following. This will add the main Leaflet CSS stylesheet and JavaScript library to our document so we can use the styles and methods.

Put the Leaflet CSS file in the head section. (Note: Put this *above* the main.css link in your stylesheet. CSS runs in order down your page, this will let you write styles that can *supersede* the Leaflet CSS.) 


```xml
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.css" />
```

Put the Leaflet JavaScript file at the bottom of the body section, right after where you put the call to jQuery.

```xml
<script src="http://cdn.leafletjs.com/leaflet/v0.7.7/leaflet.js"></script>
```

#### 2. Create a DIV element for the map

In your page, create a **div** element that will hold our map. Name it with **id="map"**.

```xml
<div id="map" style="width: 150px; height:180px;"></div>
```

This *div* element will hold the map we define in our script.

#### 3. Initialize your Map

To initialize your map, you need to create a JavaScript variable named map that uses the **map** object of the Leaflet library. Here you can set the initial latitude and longitude, along with the zoom level and few other properties.

After that, set up a tile layer as a variable that you can add to the map element as a basemap. Without the tile layer, you will not see anything in your map. After you create the tile layer using the L.tileLayer object, add it to the map using the addTo method. Your code will look like the following.

```js
var map = L.map('map').setView([24.714171, 46.676795], 13); // create the map element

var OSM_Tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

OSM_Tiles.addTo(map);
```

Save and refresh your page. You should see a Leaflet slippy map!

#### 4. Add some data

Leaflet is designed natively to work with JSON objects. Specifically, it will load GeoJSON objects and display the geometry and properties. This is a very nice feature, because using JavaScript, you can access all of the features of the JSON displayed in Leaflet in other parts of your code. If you want to add non-JSON data, see the options available on the [Leaflet Data Formats Plugins](http://leafletjs.com/plugins.html#overlay-data-formats).

##### Add GeoJSON

Adding GeoJSON to your map requires you to load the file, loop through it for data features, and then add those features to the <em>map</em> element in your document. GeoJSON files can contain points, lines, or polygons. In your materials, locate <strong>riyadh_taz.geojson</strong>. This is a GeoJSON file of the TAZ polygons in Riyadh. Add this to your map using the following bits of JavaScript, jQuery, and Leaflet.

```js
// load GeoJSON from an external file
$.getJSON("data/riyadh_taz.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data).addTo(map);
});
```

Notice in the above code, we loaded the JSON, then within the JSON load function, we used the [L.geoJson](http://leafletjs.com/reference.html#geojson) object to add the data elements we loaded to the map. Within this function, you can perform various operations for the data. For example, if we want to add a popup, use the <em>onEachFeature</em> option of the L.geoJson object. This loops through each feature and can add a popup. Replace the code above with the following to implement this. Another option you will use frequently is [Point to Layer](http://leafletjs.com/reference.html#geojson-pointtolayer). This lets you replace the default markers with custom markers.

```js
// load GeoJSON from an external file
$.getJSON("data/riyadh_taz.geojson",function(data){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data,{
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.TAZ); // find the TAZ value in the dataset
        }
    }).addTo(map);
});
```

This will create a popup that will let us click on each feature and see the number of the TAZ. Another option you will use frequently is [Point to Layer](http://leafletjs.com/reference.html#geojson-pointtolayer). This lets you replace the default markers with custom markers.

##### Add a CSV

To add a CSV, you need to use a plugin for Leaflet called [Omnivore](https://github.com/mapbox/leaflet-omnivore). Omnivore is a JavaScript library that loads CSV, TSV, and other data sources in to your Leaflet map.

To add Omnivore to your map use the following code. Put it after the call to the Leaflet JS file.

```js
<script src='//api.tiles.mapbox.com/mapbox.js/plugins/leaflet-omnivore/v0.3.1/leaflet-omnivore.min.js'></script>
```

To add a CSV to your map, use the CSV method of the Omnivore library. **a.csv** should be the path to and name of your CSV.

```js
omnivore.csv('a.csv').addTo(map);
```

Save and refresh your page.

#### Other Leaflet Plugins

Leaflet has many additional plugins other than those that deal with data that can help you do your work. Find them in a central repository on the Leaflet page.

[Leaflet Plugins](http://leafletjs.com/plugins.html)

#### Web Map Workshop

If you want to learn more, and dig into Leaflet further. We have a full course on mapping with Leaflet on the DUSPviz website. You can find it at the following address! Here are some good sites.

[DUSPVIZ](http://duspviz.mit.edu/web-map-workshop/)

[LeafletJS Examples](http://leafletjs.com/examples.html)

[Making a Leaflet Choropleth Map](http://leafletjs.com/examples/choropleth.html)

[Leaflet Proportional Symbol Map Example](http://bl.ocks.org/rgdonohue/bb2fdafab5ee7532df52)

### Website Frameworks

Often, to do all of this, you don't need to reinvent the wheel. Frameworks have been created that help website developers with layout, CSS, elements, and JavaScript interactions.

For a crash course in Bootstrap, a highly used and robust framework, please visit the following tutorial.

[Bootstrap Templates](http://duspviz.mit.edu/web-map-workshop/bootstrap-templates/)

USE TEMPLATES! They will make your life so much easier!

====
### Publish your Site! Push to Github

Finally, when done with your edits. Commit your site to your Github.

===

### Problem Set

Customize your Website and add a Leaflet map.