# FX1 Sydney Hackathon: Mood Booster

>
> Live app link: [http://ca-mood-booster.s3-website-ap-southeast-2.amazonaws.com/](http://ca-mood-booster.s3-website-ap-southeast-2.amazonaws.com/)
>

&nbsp;  

## Purpose

The app would show a quote based on the user's mood in a hope to boost the mood.

&nbsp;  

## User Interface

The homepage will have 8 mood buttons for users to click: **Happy** button, **Sad** button, **Excited** button, **Tired** button, **Scared** button, **Anxious** button, **Confused** button, **Bored** button.

Once the user clicks one of the buttons, all the buttons will be replaced with a section that shows the quote.

A **Try Again** button will show up below the quote section for the user to click to restart from beginning.

&nbsp;  

## How The App Works

Each button has different mood that corresponds to different quote categories provided by an API.

For example, a Happy button will give a random quote from category "happiness". The corresponding buttons and quote categories are currently being hard coded as following:

- Happy button: *"happiness"* category
- Sad button: *"positive"* category
- Excited button: *"amazing"* category
- Tired button: *"strength"* category
- Scared button: *"courage"* category
- Anxious button: *"peace"* category
- Confused button: *"wisdom"* category
- Bored button: *"funny"* category

A fetch request is made to an API to get a single quote from the category, which then rendered to the DOM.

The page has elements that are shown or hidden using CSS property *display* manipulation that will swap elements to give a feeling of a Single Page Application.

The controllers to swap the elements are the mood buttons and the Try Again button. When a user clicks one of the mood buttons, it will cause all elements that have class name *homepage-element* to be hidden and the elements that have class name *quotepage-element* to be shown. The Try Again button will do the reverse. 

&nbsp;  

## Third Party Services

Bootstrap is used to style the app.

API used in this app is **Famous Quotes API** (https://rapidapi.com/saicoder/api/famous-quotes4/).

This app is deployed on AWS S3.

&nbsp;  

## Acknowledgement

Ana Lazarevska, Duong Pham and Jessica Gozali would like to thank our awesome Coder Academy educators (a.k.a. mentors), Nandini and Alex for helping us to make things possible!
