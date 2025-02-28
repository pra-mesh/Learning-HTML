# HTML

HTML is about structure
Every HTML document should have a DOCTYPE declaration and html element.
Hyper Text Markup Language
HTML elements have an opening and closing tag with content in between.
some element link does not need closing tag but instead can be used with self closing tag.

Example:

```html
<h1>This is the main heading</h1>
```

## Void elements

Elements that do not need closing tags are called void elements. eg: img, input

## Comments

A comment in HTML starts with \<!-- and end with -->/

## identifier id

It used to provide any element with unique identifer defined using id attraibutes and access using # tag.

## class

class is a attribute of any element used to apply styles to one or more elements. we can apply multiple class by separationt them with spaces.
Use the class selector (.) followed by the class name in your CSS to define styles.

## HTML elements

### Head elements \<head>

The \<head> element is a container for metadata (data about data) and is placed between the \<html> tag and the \<body> tag. HTML metadata is data about the HTML document. Metadata is not displayed. Metadata typically defines the document title, character set, styles, scripts, and other meta information.

### Title elements \<title>

The title element is required element that resides inside a head element, and it defines the title of the document.

### Style Element \<style>

The \<style> element is used to define style information for a single HTML page.

### Link elements \<link>

The \<link> element defines the relationship between the current document and an external resource. The \<link> tag is most often used to link to external style sheets.

### Meta element \<meta>

The \<meta> element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.
Example

```html
<meta charset="UTF-8" />
<meta name="author" content="John Doe" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### Script element \<script>

The \<script> element is used to define client-side JavaScripts.

### Base Element

In HTML, the \<base> element is used to specify the base URL for all relative URLs in a document. It can be placed inside the \<head> section and can have two attributes: href and target

```html
<base href="https://www.example.com" target="_blank" />
```

### Body elements \<body>

It major elements of a webpage that holds all contents of the page that are going to be displayed on a web page.

### Main \<main>

HTML5 has some elements that identify different content areas. These elements make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility. The main element is used to represent the main content of the body of an HTML document.

### Section \<section>

Section tag defines a section in a document.

### Heading elements \<h1…6>

The h1 through h6 heading elements are used to signify the importance of content below them. The lower the number, the higher the importance, so h2 elements have less importance than h1 elements.

### Paragraph \<p>

The p element is used to create a paragraph of text on websites. Helps to create seperation and grouping of paragraph.

### div \<div>

It is a block level container or grouping element used for seperation. Generally used to create layout structres on a html

### span \<span>

It is a inline container used to wrap small portions of text or other inline element.

### Image \<img>

You can add images to your website by using the img element. Image is a void element. Some of the browser may not
support css height and width we may specify using width and height attributes. _src_ attribute is used to load resources.
_alt_ used to provide alternative text for screen readers or when the image fails to load.

### anchor \<a>

This tag is used to create hyperlinks, allowing users to navigate. Its attributes are href, target and title.
target values are : \_self,\_blank,\_parent, \_top. we can also navigate to identifier through a achor tag.

### List

It used to create lists of items.
Types:

1. Unorder List (\<ul>)
   An undordered list is alist of items where each item is marked with bulllet point.
2. Order List (\<ol>)
   An ordered list is a list of items where each item is numbered.
3. Definition List (\<dl>)
   A definition list is a list of terms and thier corresponding defination
   Eg:

   ```HTML
   <dl>
     <dt>HTML</dt>
     <dd>Hyper Text Markup Language</dd>
     <dt>CSS</dt>
     <dd>Cascading Style Sheet</dd>
   </dl>
   ```

### table

It ia grid of rows and column used to display data
eg:

```HTML
   <table>
      <caption>This needs to be first element of table if exists</caption>
      <thead>
         <tr>
            <th> </th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <th></th>
            <td></td>
         </tr>
      </tbody>
      <tfoot>
      </tfoot>
```

### Form

It is used to collect/capture data from users. Action attribute is used to send data to a page. Method is way of sending data
the attribute has two options to get and post using get sends the data as command in url making it anyone can read it where as
post sendsas body of a request making it more secure and is not display anywhere mostly.
syntax:

```HTML
<form action="" method="post">
 <label>First Name</label> <br />
 <input type="text" id = "firstName" name = "firstName" required>
</form>

```

### Meta

It is an element to include metadata like favicon,viewports, links and stylesheet and manymore.
 \<meta charset="UTF-8" /> this is an example of meta data that tells to encode characters of the page
\<meta name="viewport" content="width=device-width, initial-scale=1.0" />  this will help to style a page to look similar on mobile as it does on a desktop or laptop.

## Web Accessibility

To make web more web accessble.

- Help out screen reader
- Easy navigation
- Color management

### HTML Semantic

Use proper element to describes items on the page is HTML Sementics it is crucial part for web accessibility.
It is used to describe what elements is used for. Use correct type of required elements. Eg don't make div as link and soon.

### Search Engine Optimization

Optimize a site so that search engines can more easily find the information.

### Sections for web Accessibility

```Html
    <header>
       <!--logos, navigation,search bar and many more -->
    </header>
    <main>

    </main>
    <footer>

    </footer>
```

### Screen reader and SEO navigation

It uses html elements like \<header>, \<main>, \<section>, \<article>, \<time>, \<footer> and many more.

## Absolute path vs relative path

An absolute path specifies the complete url or file path from the root directory of the website or file system.
It is used when you want to link to a resource that is located on a different server or to enesure the link remains consistent

An relative path specifies the location of a file or resources relative to the current document's location.
It does not include the domain name and relies on the structure of the directory.
