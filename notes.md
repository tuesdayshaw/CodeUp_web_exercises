# Notes

## Vocabulary

* CDN -> Content Delivery Network
* cache ->
* markdown -> is a language similar to html, it is used to describe the structure of a document. the advantage is its syntax is shorter.
* prompt -> the text before the cursor on a terminal
* quirks mode ->


## Terminal Commands

* pwd -> print working directory
* cd -> change directory
* cd ~ -> change to home directory
* whoami -> tells the user name
* mv <origin> <target> -> move directory or file
* man <command> -> manual for any terminal command

##Character Sets

* repertoire -> the set of nurmeric representations of characters
* glyphs -> visual representation of a character
* character set -> numeric range use to represent characters (code points)
* ASCII  -> 0 to 255. 0 or 1 -> groups of 8 -> bytes
* UNICODE -> supports a wider range of characters


## Git

VCS -> Versioning Control System

Snapshot -> Commits

Your name, your email, the date, message, identifier(hash),

Repository -> folder, your code + git information (history of your code)

Github 

Remote -> a remote git repository

git init -> terminal command to initialize a git repository

git status -> (terminal) outputs current state of your repository

git add notes.md -> adding "notes.md" or <file_name> from repository

git add . -> adds (almost) everything

git add -A -> adds everything

(if you add a file and then make changes, you must <git_add> again to save changes)

git commit -m -> "message here."  Commit some changes

git log -> history
git log --oneline  -> cleaner history 

git remote add origin "url given" ->

git push origin master -> to send changes to github

VCS -> Git -> Pull -> to get the new changes 

.gitignore 

.idea

*.iml          # any file with .iml extension

**/.DS_Store   # any location

## HTML Elements

* block elements -> br, p, div, 
* inline elements -> em, strong, span,
* void elements -> br, hr, 

*elements can have attributes. attributes describe properties for that element.
 
 -required:
 
    -img -> src
    -meta -> charset
  
 -optional:
 
    id, class, 
    
 An HTML element can be either:
 
 -They are related to the standard:
    
    -Valid
    -Invalid
 
 -They are related to the syntax:
    
    -Well-formed
    -Mal-formed

The value of some attributes is optional, for instance disabled in input.
The quotes are also optional unless the value has a space.

## Server Paths
The root folder of a server usually is not he same root folder as the machine.
For our projects the root of the server is our directory where the HTML pages are. This folder is called the **public directory**


## Paths

* Absolute paths: starts with a / (looks for file from root)
* Relative paths: (looks for file from current file)

## Protocols

* HTTP - Hyper Text Transfer Protocol
* HTTP messages (header and body)
    -request -> client side -> browser
    -response -> server side -> web server 
* HTTP verbs (methods)
    -GET -> read -> download
    -POST -> write -> sending data
    
* QueryString -> key-value pair
    -"?search_query=javascript"
    -attribute in html
    -GET parameters in query strings
    
    
## CSS

* 3 different ways to style an HTML
* Inline Styles
* Embedded Styles
* External Stylesheets

#Selectors

* Element
* ID
* Class

** Specificity: prioritize the rules based on the different types of selectors. ID, then Class, then Element.

#Pseudo-classes

The represent the state of an element. Ex: 
*:link
*:hover
*:visited
*:active

#Properties

* Text
* Font
* Background
* List

#Box Model

* Everything is a box on a page
* Space -> Size
    * width, padding, border -> size
    * total width = width + padding + border
    * total height = height + padding + border
* Margin    
    