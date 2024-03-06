
![illustration](https://github.com/Jacques16/AutoMark/blob/main/logo/uxi.png)

# AutoMark Documentation

## Introduction

Welcome to the AutoMark documentation, an innovative JavaScript framework for building user interfaces using pure JavaScript.

## How to integrate AutoMark into your project

To use AutoMark in your project, follow these simple steps:

1. Download the `automark.js` file from the AutoMark GitHub repository.
2. Integrate it into your HTML page by adding the following `<script>` tag in the `<head>` section or at the end of your HTML file:

```html
<script src="https://github.com/Jacques16/AutoMark/blob/c6de0804d452c6d1cc3053f295e397f5b8577b0b/res/AutoMark.min.js"></script> 
```

## How to instantiate AutoMark 

Once you've integrated `automark.js` into your HTML page, you can instantiate Automark using this following syntax :

```javascript 
const app = new AutoMark({
 //Define your AutoMark configuration here
 name: " ... ",
 data: { ... },
 frames: { ... }
});
```


- **name**: The result generated by AutoMark will be inserted into a special HTML element `<view-marker>` whose name attribute value is equal to the name variable's value. 
- **el**: You can use this instead of `name`. Example: `el: "#mydiv"`.
- **frames**: This is where we model our HTML structure.
- **methods** : This is where functions are stored. They can be invoked anywhere as text, such as `onclick: "{{ myMethod() }}"`.
- **data**: This is where all our variables are stored. They can be invoked as text and are continuously updated, e.g., `h1: "{{ myVariable }}"`.


## Example of page structuring with AutoMark

Here's a very basic example of page structuring using AutoMark. Imagine you want to create a page with a title and a paragraph:

```html
<!-- HTML ELEMENT WILL BE GENERED HERE --->
<view-marker name="test"></view-marker>
```

```javascript 
const app = new AutoMark({
  // The result will be generated in the 'view-marker' element with the 'name' attribute value 'test'
  name: "test",
  
  // Here's a simple example of modeling basic HTML in pure JavaScript
  frames: {
    h1: "Page Title",
    p: "Page Content"
  }
});

```
The generated HTML code will be:
```html
<h1> Titre de la page </h1>
<p> Contenu de la page </p>
 ```

## COMPONENTS
Here's an example of using components. 

```javascript 
function component(title, paragraph) {
 return {
   h1: title,
   p: paragraph 
 }
}

const app = new AutoMark({
 frames: {
  // 'header' will be the ID of this DIV
  divHeader: component("Title 1", "🐯"),
  // 'footer' will be the ID of this DIV
  divFooter: component("Title 2", "🐺")
 }
});

```

## Event
Both examples demonstrate event handling in AutoMark, but they use slightly different approaches. Here's a breakdown of each:

1. **Inline Event Handling:**
```javascript
const app = new AutoMark({
 name: "test",
 frames: {
  h1: "Event handling",
  button: {
   innerHTML: "click me",
   onclick: function () {
    alert(this.frames.h1)
   }
  }
 }
})
```
In this approach, the event handler function is defined inline within the configuration object. When the button is clicked, it triggers the `onclick` function, which accesses the `h1` frame within the same configuration object and displays its value in an alert.

2. **Using Methods:**
```javascript
const app = new AutoMark({
 name: "test",
 frames: {
  h1: "Event handling",
  button: {
   innerHTML: "click me",
   onclick: "{{ MyFunctionName }}"
  }
 },
 methods: {
  MyFunctionName () {
   return alert(this.frames.h1)
  }
 }
})
```
In this approach, the event handler is defined as a method named `MyFunctionName` in the `methods` section of the AutoMark configuration. The button's `onclick` attribute is set to `"{{ MyFunctionName }}"`, indicating that it should call this method when clicked. The method then accesses the `h1` frame within the `frames` object and displays its value in an alert.

Both approaches achieve the same result, but using methods allows for better organization and reusability of event handling logic, especially when dealing with more complex scenarios or multiple event handlers.

## XMODEL

With `xmodel`, you're essentially binding the properties of an element to a specific data model. In this example, the `h1` element inside `divHeader` is bound to the `header` data model. So, when you click the button, it updates the `h1` value of the `header` model, which automatically reflects the change in the rendered content.

```javascript
const app = new AutoMark({
 name: "test",
 frames: {
  divHeader: {
   h1: "this is the HEADER",
   xmodel: "header" // Define a model named 'header' for this element
  },
  button: {
   onclick () {
    // Update the 'h1' value of the 'header' model
    this.header.h1 = "now this is the FOOTER"
   }
  }
 }
})
```

## DATA 
Store all your variables in Data and use ``{{ variable }}`` to access it anywhere. Note that the variables are very dynamic are continuously updated.

```javascript 
const app = new AutoMark({
  // Specify the name of the AutoMark instance
  name: "test",
  // Define the data structure containing dynamic values
  data: {
    header: {
      h1: "Uxia.js",
    },
    text: {
      p: "Happiness makes up in height what it lacks in length.", 
      btn: {
        change: "Change the title", 
      },
    },
  },
  // Define the structure of HTML elements
  frames: {
    // Define the heading content dynamically using data from 'header'
    h1: "{{ header.h1 }}",
    // Define the paragraph content dynamically using data from 'text'
    p: "{{ text.p }}",
    // Define the button content dynamically using data from 'text'
    button: {
      // Define the text content of the button dynamically using data from 'text'
      textContent: "{{ text.btn.change }}",
      // Define the onclick event handler for the button
      onclick() {
        // Change the paragraph text to the heading text when the button is clicked
        return this.text.p = this.header.h1;
      },
    },
  },
});


```
## Style && Class

To define a class or style, here are some methods according to your needs

- **``addClass:``** Used to add a new class to an element. It will create a class attribute if not already defined. It works in the same way as ``classList``.
- **``addStyle:``** Used to add a new style to an element. It will create a style attribute if not already defined.
- **``className:``** Used to define a class. If the class already exists, the values will be overwritten.
- **``style:``** Used to define a style. If the style already exists, the values will be overwritten.


```javascript 
new AutoMark({
name: "test",
 frames: {
  //Method 1
  divHeader: {
   className: "header",
   addStyle: "display: none",
   span: "🤠"
  },
  //Method 2
  "divFooter.className": "footer",
  "divFooter.addStyle": "display: none",
  "divFooter.span": "😎"
 }
})
```


However, if you want to create an attribute, custom or not, you just have to put its value in an array.

```
myAttribute: ["info"]
```
## Router
Automark integrates the [Page.js](http://visionmedia.github.com/page.js) library for route management because it is lightweight, offers extensive possibilities, and is easy to use. Visit the Page.js [documentation](https://github.com/visionmedia/page.js.git) if needed.

```html
<head></head>
<body>
<div id="#app"></div>
</body>
<script src="http://visionmedia.github.com/page.js"></script>
<script src="https://github.com/Jacques16/AutoMark/blob/c6de0804d452c6d1cc3053f295e397f5b8577b0b/res/AutoMark.min.js"></script>
```


Please ensure that page.js is properly integrated into your page. Here's what you need to know to use the page.js routing system from AutoMark:

- **``page:``** As soon as this key is detected in the parameters, and the `page.js` library is detected in the document, page.js is executed.
- **``routes:``** Used to define the main route parameters, it must be an array containing an object: ``path`` is the path, ``temp`` is the element to load, and ``name`` is the route name.
- **``view:``** Used to define the address in frames where the route should be loaded.

To open and launch your route, use the ``page(path)`` function provided for this purpose.

To define the templates ``temp``, please ensure they are wrapped in a parent DIV element.

**Note:** The parameters returned by page.js are accessible from ``this.$page.params``.


```javascript 
var Home = {
 divHome: {
  h1: "Welcome to Home page!",
  'input.placeholder': ['text'],
  p: "1. some text generated by AM"
 }
}

var Profile = {
 divProfile: {
  h1: "Welcome to {{ $page.params.userid }}! {{ $page.params.age }} years old",
   'input.placeholder': ['some text...'],
   p: "2. some text generated by AM"
 }
}
```


Now define ``page`` in parameters.

```javascript
// Instantiate AutoMark with specified configurations
var app = new AutoMark({
  // Specify the element where AutoMark will be mounted
  el: "#app",
  // If 'page' is defined in the parameters, 'page.js' is initialized
  page: {
    // Define the routing parameters
    "routes": [
      { path: '/home', temp: Home, name: "homePage" }, // Define the route for the home page
      { path: '/profile/:userid/:age', temp: Profile, name: "profilePage" }, // Define the route for the profile page with dynamic parameters (:userid and :age)
      { path: '/setting', temp: Setting, name: 'settingName' } // Define the route for the setting page
    ],
    // Define the target address to generate the result
    view: "divViewRooter",
  },
  // Define the structure of HTML elements
  frames: {
    // Define where the routes will be inserted
    divViewRooter: { },
    // Define the content of the main DIV
    div: {
      h1: "How to use page.js with AM", // Define the heading content
      p: "Let's learn the tutorial", // Define the paragraph content
      button: {
        0: {
          textContent: "Load home page", // Define the text content of the first button
          onclick: function() {
            // Load the home page by accessing '/home'
            page("/home");
          }
        },
        1: {
          textContent: "Load Profile page", // Define the text content of the second button
          onclick: function () {
            // Load the profile page with predefined user ID and age parameters
            page("/profile/lyard/21");
          }
        },
        2: {
          textContent: "Change routes elements", // Define the text content of the third button
          onclick: function () {
            // Load the setting page by accessing '/setting'
            page("/setting");
          }
        }
      }
    }
  }
});


```


___

Here's a more advanced example using a shortcut `"header.div.p": "🐔"`


```javascript
// Function to change the content of the paragraph element ('div.p')
function changeP() {
  // Access the entire 'frames' structure from the root with 'this'.
  // Update the content of 'div.p' to "Just be yourself!"
  this.frames['div.p'] = "Just be yourself!";
}

// Instantiate AutoMark with specified configurations
const app = new AutoMark({
  // Specify the name of the AutoMark instance
  name: "test",
  // Define the structure of the HTML elements
  frames: {
    // Define the content of the heading element ('div.h1')
    "div.h1": "AutoMark", 
    // Define the content of the paragraph element ('div.p')
    "div.p": "Be the light in the dark!",
    // Define the content and behavior of buttons within a DIV
    "div.button": {
      // Create multiple buttons in this DIV by enumerating them
      0: {
        // Set the inner HTML content of the button
        innerHTML: "Change p",
        // Define the onclick event to call the 'changeP' function
        onclick: changeP
      },
      1: {
        // Set the inner HTML content of another button
        innerHTML: "Change h1",
        // Define the onclick event to call the 'changeH1' function in 'methods'
        onclick: "{{ changeH1() }}"
      }
    }
  },
  // Define custom methods for handling events or actions
  methods: {
    // Method to change the content of the heading element ('div.h1')
    changeH1: function () {
      // Update the content of 'div.h1' to "H1 changed"
      this.frames["div.h1"] = "H1 changed";
    }
  }
});



```


These examples illustrate the simplicity and power of AutoMark for generating HTML content from pure JavaScript.
________
That concludes the AutoMark documentation. We hope you find this framework useful for your web development projects. If you have any questions or feedback, feel free to contact us on GitHub.

