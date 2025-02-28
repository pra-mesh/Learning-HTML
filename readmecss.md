# CSS (Cascading Style Sheets)

CSS is the language used to style an HTML document.
It describes how HTML elements should be displayed on the screen.

## Integrating css to a html page

1. Inline
2. Internal
3. External.

### Inline CSS

When css is directly applyed to an individual element using a style attribute. It will override any internal or external css.
Eg:

```Html
<p style="font-size:50px; font-style:italic">
```

### Internal CSS

Internal or Embedded CSS is defined within the HTML documents's with \<style> element. The style element lies within a head section.
eg:

```HTML
<head>
    <style>
        .main {
            text-align: center;
        }
    </style>
</head>
```

### External CSS

External CSS contains separate CSS files that contain only style properties. It will help to aplly style across a web page.
It is linked to HTML document using a link tag.

```HTML
<head>
    <link rel="stylesheet" href="style.css">
```

```CSS
body {
     background-color: powderblue;
}
```

## Implementing CSS to element

### Element Speicifc styling

You can add style to and element by specifying it which is called type selector.
We can use a comma(,) seperator to add a new type selcetor for each one to the exisiting style.

```css
element {
  property: value;
}
```

### id selector

Id selector target specific element with the id attribute. An id selector is defined by placing the hash symbol (#) directly in fornt of he element's id vlaue.

```css
#id {
  property: value;
  property: value;
}
```

### claass selector

It is define with name with dot directly infront of it. An attribute called class is used pass the class style to the element an single element can have multiple class.

```css
.class {
  property: value;
  property: value;
}
```

- We can use a comma(,) seperator to add a new type selcetor for each one to the exisiting style.
