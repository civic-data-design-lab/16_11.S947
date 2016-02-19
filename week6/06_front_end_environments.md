# Front End Environments
## HTML/CSS/JavaScript: An Overview

All the files you will want to use today are provided in the Week 6
folder of the class repo.

In the following steps, we create a blank document, fill it with HTML
code, save it as **index.html**, and view results in our browser. We
will hit on the concepts of HTML, style the page with CSS, and

#### Getting Started

We will work in our github.io pages today, updating and building from
the work we completed in Week 1. Push your files your Github site to
publish your page. If you need a refresher, revisit Week 1 at:

[Week 1 - Intro to Git and Github](https://github.com/civic-data-design-lab/16_11.S947/blob/master/week1/Part1_IntroGitAndGithub.ipynb)

*How is everything related?*

<img src="images/environment.png" alt="Drawing" style="text-align: center; width: 75%;"/>

HTML, standing for [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML), organizes the **content**
of your page by creating elements in which your page materials are contained.

### Organize your Directory

The directory in which you keep your website materials should be organized in the following manner.

When a browser requests your page, your server will return the index.html file in the root-directory. The index.html is your 'root'... or 'home'... page.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/01/file-structure.png" alt="Drawing"/>

### Start up a Web Server

To work with our website, we need our computer to act like a webserver, allowing it to access files online. There are many tools for doing this, and one is built right into python. Use the Terminal to change into the directory in which your website files reside. Once there, type the following to start a simple Python server.

```xml
$ python -m SimpleHTTPServer 8080
```

Now open a browser and access your site at: **http://localhost:8080**

Modify and change folders in web folder, save and then refresh your page. Your page will appear as it would if it were live on the internet, except only visible to you locally. For more on this [click here](http://duspviz.mit.edu/tutorials/localhost-servers/).

### HTML: The Core Concepts

All HTML documents start with the following line of code:

```xml
<!DOCTYPE html>
```

Elements of the page are organized by tags. HTML tags are keywords surrounded by angled brackets. This tag states for the browser that the rest of your file will be written in HTML. The rest of our document will follow a very simple rule, no matter how complex the code. When you write a tag (aka start tag), you will need a second tag that declares the end of that part of the document (aka end tag). **Content goes between the start and end tags**.


```xml
<tag>...</tag>
```

Tags without content are called **void elements**.

```xml
<tag />
```

Comments look like the following. They are used to write human-readable notes in your code, but are ignored by the browser.

```xml
<!-- ... -->
```

A basic page, all together, will look like this. This will look awfully similar to week 1. Copy and paste this into a blank text document, and save it in your **github.io** repository as *hello-world.html*.

```xml
<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8"> 
    	<title>Hello World</title>
	</head>
	<body>
		<!-- This is a comment -->
		<h1>Hello World</h1>
		<div id="main">
			...
		</div>
	</body>
</html>
```

### The DOM: Document Object Model

The [Document Object Model](https://www.w3.org/DOM/) represents the hierarchy of elements in our page. This is modeled using something commonly called the **DOM Tree**, and it consists of our HTML elements.

*The DOM Tree*

<img src="images/dom.png" alt="DOM" style="width: 50%;"/>

#### Common Tags

**Head** and **Body** elements are large containers.

```xml
<!-- HEAD element containing meta information, style, and links -->
<head>
	...
</head>
<!-- BODY element containing all document content elements -->
<body>
	...
</body>
```

**Links, Images** and **Paragraphs**

```xml
<!-- LINKS. A is used to define a hyperlink -->
<a href="http://somesite.www">...</a>
<!-- IMAGE tag to define a link to an image in your document -->
<img />
<!-- PARAGRAPH tag for large blocks of body text -->
<p>...</p>
<!-- SPAN is for groups of inline elements -->
<span>...</span>
```

**Lists**
```xml
<!-- UL defines an unordered list -->
<ul>
	<li>...</li> <!-- line in list -->
</ul>
<!-- OL defines an ordered list -->
<ol>
	<li>...</li> <!-- line in list -->
</ol>
```

#### DIV Tags

Perhaps the most common tag, the **div** tag defines a division or section of an HTML page. One page can contain many **div** elements, and one **div** element can contain many nested elements. The div tag is an element of HTML that allows you to group content into containers (or divisions) you can organize and style on your web page, and divs play nicely with CSS (Cascading Style Sheets). CSS is a style sheet language used for describing the look and formatting of an HTML page, we will introduce it in the next step.

```xml
<div id="main">
	<!-- Content goes here -->
	...
</div>
```

#### Tag Attributes, Classes, and IDs

Tags are specified and defined using attributes, classes, and IDs. These attributes, classes, and IDs allow you to identify specific elements, modify individual elements and groups of elements, and set the characteristics of the elements.

- *Attributes* define properties of the elements. Elements can have multiple attributes. For example, if the element is a link, where does the link take you.

- *Classes* identify a group of elements that operate similarly or work in the same fashion. For example, a button.

- *IDs* identify unique features and allow for and operations to be performed on that unique feature. In each document, each ID should be unique.

*For Example:*

```xml
<a href="http://www.github.com" class="button" id="unique">...</tag>
```

*or*


```xml
<div style="background-color:#0000FF" class="header" id="main">...</div>
```
===

### Modify your Document

Let's get into the document a bit.

#### i. Add Text

Our HTML document is looking bare, we need to add content. We can start by modifying the heading that welcomes visitors to our site and add a couple paragraph elements.

Modify the HTML code on the page to include the following. Add some paragraph **p** elements within the **div** element of your page.

```xml
<p id="foo">This is my first paragraph.</p>
<p id="bar">This is my second paragraph.</p>
```

The h1 tag signifies a heading, this is a bolded style of text that vary in size ranging from h1 to h6. The p tag signifies a paragraph that can contain large blocks of text. 

#### ii. Add a Link

Adding a link to your site is simple. To add a link, we use the a tag. The a tag defines a hyperlink that can be used to link from one page to another. HTML tags can have attributes. Attributes define and provide additional information about an element. To create a hyperlink, we use the href attribute of the a tag. The following line contains a link to the DUSP home page, and illustrates how you would set up a link. You can place links separate from your paragraphs, or place them within. Write the following line of code at the end your second paragraph, just before the p end tag.

```xml
<a href="http://dusp.mit.edu">Take me to DUSP.</a>
```

*Can you add a link that takes you to Google Maps?*

#### iii. Add an Image

Adding an image is just as easy as adding a hyperlink, although a bit different. An image is not stored on your webpage, but it sits on your server, just like your other files. When you display an image in an html file, you are linking to the image. The HTML tells the browser to locate and display it. Therefore, we will follow a multiple step process.

* Create a folder named <strong>images</strong> in your special folder. <em>You only need to do this once, you can place all subsequent images here.</em>
* Copy and paste <strong>cat.png</strong> from the downloaded materials into the <strong>images</strong> folder you just created.
* Use the <strong>img</strong> tag to link to that image in your <strong>index.html</strong>

Your file structure, once the <strong>images</strong> folder is created and you have copied <strong>cat.png</strong>. In other words, the image is now being served.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/01/file-structure-images1.png" alt="file-structure-images" width="134" height="130" class="aligncenter size-full wp-image-1503" />

Now we can add the image to our index.html. The following line of code uses the img tag, and then links to our image. We will use the <strong>src</strong> attribute to name the source of the image. The image is coming from our own server, we don't need to go externally to get it, so we can put the name of the folder and image as our image address.

Copy and paste this following line in between the <strong>body</strong> tags in your <strong>index.html</strong>, after your last paragraph.

*Can you add another image, perhaps one showing Riyadh?*

#### Our Code

At present, your document will look something like the following.

```xml
<!DOCTYPE html>
<html lang="en">
	<head>
    	<meta charset="utf-8"> 
    	<title>Hello World</title>
	</head>
	<body>
		<!-- This is a comment -->
		<h1>Hello World</h1>
		<div id="main">
			<p id="foo">This is my first paragraph.</p>
			<p id="bar">This is my second paragraph. <a href="http://dusp.mit.edu">Take me to DUSP.</a></p>
			<img src="images/cat.jpg"/>
		</div>
	</body>
</html>
```

Our page, with this code, contains a bit more content now.

<img src="images/simple_page.png" alt="page" />

*What does our DOM Tree look like at this point?*

===

### CSS: The Core Concepts

#### Cascading Style Sheets

Cascading Style Sheets (CSS) is a styling language used for describing the look and formatting of an HTML page. It uses the DOM and styles 'cascade' from higher elements in the DOM tree to elements further down.

We are going to be using CSS3, which is the third iteration of the CSS styling language. CSS is a very useful styling system, and allows you to style items on your page according to a number of methods based on the element it falls within (ie div, body, p, etc), the id of the element, or the class of the element.

#### Why Cascading?

The language 'cascades' in the effect that if you style an element, any nested elements will get the same styling unless you specify otherwise. For example, if you set the font for your body element, a p (paragraph) will also be set to the same font, unless you specify specifically in the CSS that you want that p to have another font. This is a useful method in that is minimizes the code you need to write and forces you to be careful with your page organization.

#### Link a CSS File to your Site

CSS can be added to style your website in one of a few ways. You can apply CSS to individual elements, embed it within your HTML document, or create a separate CSS file and link it to your HTML doc. In your file, add the following link in **head** section of your document.

```xml
<link href="css/main.css" rel="stylesheet" />
```

Save your document, and refresh your page. Everything should center. This is because we applied CSS code to our document by linking to our style file.

In the materials for this week, locate the file 'main.css'. This is our stylesheet. We can name it anything really, as long as it has the CSS file type. Open this in your text editor to view the contents. It is a very simple bit of CSS that tells everything in the **body** element to center in the page.

```css
body {
	text-align: center;
}
```

All content in the **body** tag are now in the center of the page.

#### Basic Syntax

Basic CSS syntax looks like the following.

```css
[selector] {
	[property]: [value];
}
```

Selectors are page elements, and can be tags, ids, titles, classes, etc. For example, if we want to style everything that falls in the **body** tag, we use the **body** selector as above.

Selectors can be specified **by element:**

```css
p {
	font-size: 12;
}
```

**By class:**

```css
.main {
	font-size: 12;
}
```

**By ID:**

```css
#main {
	font-size: 12;
}
```

#### Inheritance and Order of Operations

CSS follows the DOM model, with styles applied to elements higher in the DOM applied to those that are descendents. If selectors are defined in multiple locations in your CSS, which one gets precedence?

<img src="images/dom.png" alt="DOM"/>

There are two general rules of thumb.

* CSS defined last in your document will supersede CSS set on a selector earlier in your document.
* The more specific selector will override the less specific selector. For example, a style set on the body selector will be overridden by a style set on an element within the body, such as one by ID.


#### Properties and Values

There are hundreds of properties you can set using CSS. Some of these include font, color, location on page, opacity, size, etc. An extensive list can be found in CSS reference documents. Two prominent references are by W3Schools and Mozilla, check them out for further reading.

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" title="Mozilla CSS Reference" target="_blank">Mozilla CSS Reference</a></li>
<li><a href="http://www.w3schools.com/cssref/default.asp" title="w3Schools CSS Reference" target="_blank">W3Schools CSS Reference</a></li>
</ul>


#### *Style Font and Type Size*

To change the font for all of our document, we change it on the highest level we can by signifying we want to style everything within the html tag. This can be accomplished by adding the following selector and properties to the stylesheet.

```css
html {
  font-family: Georgia, Times, serif;
  font-size: 24px;
  line-height: 32px;
}
```

Font family prioritizes a list of font names for the selected element. Line height specifies the minimal height of line boxes within the element.

#### *Change Background Color*

Adjust the color of an element using background color.

```css
p {
  background-color: #dddddd;
}
```

Colors can specified using hex, RGB, or a set of [preset supported color names](http://www.w3schools.com/colors/colors_names.asp).

#### *Pseudo-Classes and Changing Link Color*

Change link colors using the following.

```css
a {
  color: orange;
}
```

In CSS, elements have what are called [Pseudo-Classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes). Pseudo-classes are keywords added to selectors that specifies a special state of the element to be selected. We signify a pseudo-class using a **:**. For example, one pseudo-class is hover, and it signifies what happens you hover over an element. This can be used to change the color a link turns when you hover over it.

```css
a:hover {
  color: orange;
}
```

#### The Box Model: Size and Positioning

Every element in your document is represented by a box. These boxes allow you to set properties such as margins around items. 

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/01/padding-width.png" alt="DOM"/>

* **Padding** - The content is surrounded by the padding area, exists between the content and the border.

* **Border** - Every box has a border that exists on the outer edge of the padding area.

* **Margin** - Margin defines the distance between the element and neighboring elements. Margin never has color.

* **Dimensions** - Controls the height and width of the elements.

You can also adjust the margins, padding, and border individually on each side of the element. And example element, along with its styling, is below. Add this to your CSS stylesheet and save to see how it changes our basic webpage.

```css
p {
    background-color: #dddddd;
    padding: 20px;
    width: 320px;
    height: 40px;
    margin-right: 10px;
}
```

#### Positioning

Positioning your element

* **Relative** - Position according to normal document flow, then shift using positioning properties such as *top* or *left*.

* **Absolute** - Take out of normal flow, and manually position against the containing element.

* **Fixed** - Take out of normal flow and manually position against the browser window.

Another available property is called is **float**. Float can be used to wrap text around images.

CSS is the way you style your page, learn more by referring to the references, or playing around in a sandbox such as [CSS Desk](http://www.cssdesk.com/).

===

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

Now, we are programming. Typical JavaScript syntax:

**Variable**

var

**Object**

**Method/Function**

#### The In-browser JavaScript Console

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

```js
var name = "Michael";
var selection = "a";
console.log(name);
console.log(selection);
console.log(name + selection); // string concatenation
```

##### Number

```js
var count = 25;
var cost = 1.51;
```

##### Boolean

```js
var found = true;
var lost = false;
```

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
var myFunction = function(){};
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

===

### Website Frameworks

Often, to do all of this, you don't need to reinvent the wheel. Frameworks have been created that help website developers with layout, CSS, elements, and JavaScript interactions.

For a crash course in Bootstrap, a highly used and robust framework, please visit the following tutorial.

[Bootstrap Templates](http://duspviz.mit.edu/web-map-workshop/bootstrap-templates/)


====
### Push to Github

Finally, when done with your edits. Commit yourPush your site to Github