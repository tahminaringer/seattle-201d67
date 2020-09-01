# Class 02: Basics of HTML, CSS, JS

## Fundamentals

- all of these are browser friendly, and are sort of expected when running software in a web browser.

### HTML

- Hyper Text Markup Language.
  - replicating a newspaper on a screen.
  - HTML with no CSS, should hipefully by default look a little like a newspaper.
- Organizing content, providing structure.
- HTML tags: include an openning and a closing tag.
  - tag vs an element
    - The tag refers to the name of content, usualy the things between the angle brackets
    - The element is what shows up in the browser.
- HTML attributes:
  - modify the contents of a tag.
  - href / src: require a url to an exteran file.
  - id / class: use strings to identify / group elements together.
    - Ids should only be applied to "one" element.
    - Classes should be used to group like elements together.
  - (no spaces please, spaces are like periods ;)) 

`index.html`

```html

<head>
  <!-- This tag has 2 attributes: href and rel -->
  <link href="style1.css" rel="stylesheet"></link>
  <link href="style2.css" rel="stylesheet"></link>
</head>

<!-- An is of 'site-title' applied to our level heading -->
<h1 id="site-title">Our headings by importance</h1>

<p>Our paragraphs</p>

<ul>
  <li class="items">
  An unordered list item
  </li>
</ul>

<ol>
  <li class="items">
  An ordered list item
  </li>
</ol>

<!-- This tag requires a src attribute -->
<script src=""></script>
```

### CSS

- we use "selectors" to apply styling specifications to our elements.
- selectors can select elements using many different methods.
  - by tag name: `p {}` `h1 {}` `ul {}`
  - by id / class:
    - id: `#id-name {}`
    - class: `.class-name {}`
  - css properties: all the things we want to style our elements with.
    - syntax: `property-name: property-value;`
- What about using the style attribute?
  - The values still must follow the syntax for CSS properties.
  - `<p style="color: red; background-color: blue;"> Here be content </p> `
- linking using a link element.
  - href attribute that points to a location of a css file.
  - If our link is pointing to CSS, we must specify that the relation is a stylesheet.
    - `<link href="some-styles.css" rel="stylesheet"/>`
    - This typically goes in the head element (meta data)
    - for selectors that conflict: the last thing read at the bottom of the stylesheet will be used.

style.css

```css

/* selector */
h1 {
  /* properties */
  color: red;
  background-color: yellow;
}

#site-title {

}

.item {

}

```

### Javascript

- Types of data that javascript can handle.
  1. string : sequence of natural language characters
     1. 'here is a string'
  2. number : quantitative value represented via symbol
     1. 0
     2. 1234
     3. 12345.10
     4. 0.0004
  3. boolean : a binary true vs false
     1. true
     2. false
  4. null
  5. undefined

- conditional logic
  - operations / js statements that will be exectuted based upon a condition.
    - run statement in a specified code block whether something is true or false ( truthy / falsey )

```js
// basic condition logic
if (some condition) {
  // execute these statements
} /* if we need an inverse operation */ else {
  // execute some other statements
}

// we can also use else if

if (true) {
  console.log(true);
} else if (null) {
  console.log(null);
} else {
  console.log('something else');
}

// Switch statements
// conditional logic that can only use one value, but have many different conditions

var user = 'Jacob';

switch (user) {
  // when these catch, all other statements below will run, unless you add a 'break'
  case 'Jacob':
    console.log('Jacob is the user');
    break;
  case 'Chance':
    console.log('Oh, its chance');
    break;
  case 'Skyler':
    console.log('its skyler');
    break;
  default:
    console.log('this is our default case');
}

- logical operators

// logical &&
if (true && false) {

} else {
  console.log('our statment is falsey');
}

// logical OR
if (true || false) {
  console.log('our statement is truthy');
} else {

}

// logical negation
if (true != false) {
  console.log('we are not false');
}

if (!false) {
 console.log('we flipped our boolean');
}

```

- short circuit value:

```js

var string = false && true;

```
