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

I put my files trough an online validator and received some errors in my html file: 

<br/>

* The validator told me that my JavaScript links had the type attribute that is unnecessary for javascript resources, so I removed them.

* I also had a duplicate id on my submit buttons which I fixed by changing it to a class. 

* It also advised me to add the lang attribute to my html tag so I fixed this as well. 

<br/>

### JavaScript validation with [JSHint](https://jshint.com/)

<br/>

#### Weather

<br/>

* I fixed missing semicolons.

* It complained about currentLocation being a undefined variable, but I ignored this because it is used in another file, geolocation.js.

* I removed the submitBtn variable because it was not used.

* It complained about getWeatherDataFromCurrentLocation not being used, but I did not remove it because it is used in another file.

<br/>

#### List 

<br/>

* I added a missing semicolon on line 39

* It complained about one undefined variable but this is actually jQuery code.

<br/>

#### Time

<br/>

* No errors found

<br/>

#### Geolocation

<br/>

*  It complained about one undefined variable but this is actually jQuery code.

* It says that getWeatherDataFromCurrentLocation is undefined but I am using in weather.js and I am using it for error handling.

* It also complained that initMap is undefined, but I am using that in map.js.

<br/>

#### Map

<br/>

* I got many warnings about unused variables but I believe all of them is ued by the google api so I let them be. 

<br/>

### Responsiveness

<br/>

I tested the responsiveness of the page by using google developer tools, and went through every size and fixed the problems with media queries.

I also tested it in the firefox developer tools and there I noticed a problem that I fixed by chaning my media query.
 
<br/>

### Input fields 

<br/>

I manually tested my input fields to see if there was any errors and I found one visual error that I decided against fixing for now, but I fully intend to fix it as soon as possible. My reasoning for not fixing it was: 

<br/>

* The bug does not effect the functionality of my site.

* I added a max length of 20 on my input fields to block the bug for now.

* I am pressed for time.

* The only way I know how to fix it right now is to break my design and I do not want to do that. 

* My intention is to learn how to fix this without breaking my design.

<br/>

[This](assets/error/button-length-bug.png) is a screenshot of the length bug.

<br/>

I also noticed some element behind my transparent submit buttons on the deployed versions of my site and I fixed this by removing the transparency and changing color.

<br/>

[This](assets/error/button-element-bug.png) is a screenshot of that element behind my buttons.

<br/>

#### Geolocation

<br/>

I used a VPN and I turned on and off the places services on my computer and phone to test so that it worked as expected in both the map and weather app, and it worked as expected.

<br/>

My mentor advised me that I had forgotten about error handling in the weather app for if a place is not found and I fixed this by writing a function that says not found in the weather app and it also changes the icons.

<br/>

### JavaScript Console

<br/>

After looking in the JavaScript console I noticed a warning about a request to an insecure url so I changed it from http to https in map file.

<br/>

### Lighthouse testing

<br/>

* It says that background and foreground colors do not have sufficient contrast ratio in my weather and shopping list apps but I think that the lighthouse tool does not consider the fact that I have a black shadow under them so I will leave it as it is.

* It says my links do not have a discernible name, but this is the font-awesome names so I cannot change that.

* It says I have images with a low resolution but this is the icons for my weather app and I think they are good as they are.

* I got errors that said I didn't have alt tags on my links so I added them.

* It also said my images did not have alt tags and I fixed this both in the html and javascript files.

* Two more links was http so I changed them to https.

* I added labels to my form fields.

* It says that users are mistrustful of or confused by sites that request their location without context and that I should consider tying the request to a user action instead. This is something I might implement in the future but I think it is fine as it is for now because of the type of users that will access my site are more advanced on this topic than a regular person.

<br/>

### Links 

<br/>

I tested my links by clicking on them to see if they worked as expected which they did.

<br/>

### Different browsers

<br/>

I noticed that the fit-content property did not work in FireFox during testing so I fixed this by adding a mozilla specific class.

<br/>

I do not have access to the Safari and Edge browsers because I'm on Linux but I did a google search to see if the fit-content property is supported and it is.

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

#### I also deployed the site to [my own domain](https://tommybratt.se/)  by simply loggin in to the ftp account connected to it and transfared the files from my disk.


<br/>

#### If you want to run my website locally you can download it from [here](https://github.com/Gretaah/milestone-project1/archive/master.zip) and after that you can:

<br/>

* Right click on the file and unzip it.

* Navigate to the unzipped folder.

* double click on index.html to start the file in your browser.

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













