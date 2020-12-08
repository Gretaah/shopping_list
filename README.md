# Shopping List

<br/>

The goal of this site is to provide a basic shopping list, a map and information about the current weather to help you prepare for your shopping.

<br/>

## UX

<br/>

### User Stories

<br/>

#### User Goals 

<br/>

As a user, I want

<br/>

* to create a simple shopping list.

* to be able to delete items from the list.

* to be able to view the current weather.

* to be able to locate a nearby grocery store.

<br/>

As a site owner, I want

<br/>

* to provide a bacis shopping list.

* the user to be able to delete items from the list.

* the site to have a clean one page design. 

* to use the openweathermap api to display the current weather.

* to use google maps and places api to show nearby grocery stores to the users.

<br/>

## User Requirements and Expectations

<br/>

### Requirements

<br/>

* A clean and simple one page design. 

* Mobile friendly design.

* The site should be easy to use.

<br/>

### Expectations

<br/>

* The shoppig list should be very basic and easy to use. 

* The user should be able to delete items from the list.

* Current time and weather data should be displayed.

* The site should have a simple to understand one page design.

<br/>

## Features

<br/>

* Shopping list.

* Current time and weather data.

* Map that displays nearby grocery stores.

<br/>

<br/>

## Design Choices 

<br/>

At first, I began writing the code for this page with the desktop layout, but later decided to create the divs to be similar to how a mobile app would look to make it easy to scale down to a mobile layout. 

I think this was a good idea because I believe that the site will be used mostly on the mobile layout.

I decided to start from a desktop layout because it felt more natural after looking at the wireframes I had drawn.

I used [coolors.co](https://coolors.co/) to pick what colours to pick for my page.

<br/>

## Wireframes

<br/>

[Mobile wireframe](https://github.com/Gretaah/shopping_list/blob/main/assets/wireframes/mobile.png)

<br/>

[Desktop wireframe](https://github.com/Gretaah/shopping_list/blob/main/assets/wireframes/desktop.png)

<br/>

## Technologies Used

<br/>

### Languages

<br/>

* [HTML](https://en.wikipedia.org/wiki/HTML)

* [CSS](https://en.wikipedia.org/wiki/CSS)

* [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

<br/>

### Tools & Libraries

<br/>

* [jQuery](https://en.wikipedia.org/wiki/JQuery)

* [Bootstrap](https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework))

* [Git](https://git-scm.com/)

* [Font-Awesome](https://fontawesome.com/)

* [Google Fonts](https://fonts.google.com/)

<br/>

## Testing

<br/>

### Validation

<br/>

I put my html and css files trough an online validator and received some errors in my html file: 

<br/>

* The validator told me that my JavaScript links had the type attribute that is unnecessary for javascript resources, so I removed them.

* I also had a duplicate id on my submit buttons which I fixed by changing it to a class. 

* It also advised me to add the lang attribute to my html tag so I fixed this as well. 

<br/>

### Responsiveness

<br/>

I tested the responsiveness of the page by using google developer tools, and went through every size and fixed the problems with media queries.
 
<br/>

### Input fields 

<br/>

I manually tested my input fields to see if there was any errors and realized that the input for the weather accepted numbers, so I changed it to only accept letters.

<br/>

## Deployment

<br/>

### I created this site with vscode and git and pushed it to github where I published the site.

<br/>

I made the following steps in deploying my site:

<br/>

* Pushed my commits from git to github.

* Logged in to my github account.

* Selected my repositories.

* Navigated to shopping-list.

* Clicked on settings.

* Scrolled down to where I can do the github pages settings.

* Selected the master branch from the dropdown menu.

* Clicked on save.

<br/>

I also deployed the site to [my own domain](https://tommybratt.se/)  by simply loggin in to the ftp account connected to it and transfared the files from my disk.


<br/>

## Credits

<br/>

### Content

<br/>

I got the weather icons from [Rick Ellis GitHub](https://github.com/rickellis/SVG-Weather-Icons) and I would like to thank him for making them available for use.

<br/>

### Acknowledgements

<br/>

I have spent countless hours on YouTube, Stack Overflow and Google researching how to create this page. It would not have been possible for me to write my own code without first getting inspired from how other people who have made similar projects.













