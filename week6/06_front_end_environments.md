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

<img src="images/environment.png" alt="Drawing" style="width: 50%;"/>

HTML, standing for [HyperText Markup Language](https://en.wikipedia.org/wiki/HTML), organizes the **content**
of your page by creating elements in which your page materials are contained.

### Organize your Directory

The directory in which you keep your website materials should be organized in the following manner.

When a browser requests your page, your server will return the index.html file in the root-directory. The index.html is your 'root'... or 'home'... page.

<img src="http://duspviz.mit.edu/wp-content/uploads/2015/01/file-structure.png" alt="Drawing"/>

### HTML: The Core Concepts

All HTML documents start with the following line of code:

```xml
<!DOCTYPE html>
```

Elements of the page are organized by tags. HTML tags are keywords surrounded by angled brackets. This tag states for the browser that the rest of your file will be written in HTML. The rest of our document will follow a very simple rule, no matter how complex the code. When you write a tag (aka start tag), you will need a second tag that declares the end of that part of the document (aka end tag). Content goes between the start and end tags. A start tag looks like and an end tag has a dash in front of it .


```xml
<tag>...</tag>
```

Not all tags contain content, for those that don't, the syntax is:

```xml
<tag />
```

Comments


```xml
<!DOCTYPE html>
<html>
	<head>
		<title>Hello World</title>
	</head>
	<body>
		<!-- This is a comment. -->
		<p>Hello World</p>
	</body>
</html>
```

#### i. Add Text

#### ii. Add a Link

#### iii. Add an Image

### Push to Github

Finally, when done with your edits. Push your site to Github