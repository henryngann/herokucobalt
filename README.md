## **CobaltLend’s Amazing CryptoCurrency Tracker!**

## What it does

This Cryptocurrency Tracker displays real-time updates by using an API from [coingecko](https://www.coingecko.com/en/api#explore-api).

## How I built it

The technologies used: React, Axios, Postman.

## Step 1 - Set Up

The first thing I did was to set up React and Axios. After installing the necessary packages, I needed good folder structure. I created a screens folder so if i wanted to build upon this tracker with multiple pages, I could have my routes defined there. I also created a components folder to store all my components in one place.

## Step 2 - Finding an API

The second thing I did was research an API that could bring me data. Luckily, coingecko has an extremely strong Cryptocurrency API that I was able to use for free. It gave me data like price name, symbol, images and even percentage change every 24hours!

## Step 3 - Search Bar

After finding my API and having my React application set up, I went to work on the structure of my app. I used my useEffect hook to populate the data which I then connected to a filtering search bar. I connected the useState hook with the search value so that users could search up a cryptocurrency they are interested in. After that I mapped through the filtered values, so that data can now be displayed.

## Step 3 - Props

I passed down all my data into another component using props. This was the coin's component. Nothing much to explain here aside from the ternary operator which I used to dynamically display a negative(red) or positive(green) percentage based on change.

## Step 4 - Animated Ticker

I wanted to stand out from other applicants so I decided to put some time into making a cool horizontal ticker like other stock pages. So I created another component called Ticker.js and mapped through the elements just like I did with the coin component. I passed down data through props the same way to get all the information in one place. After that, I used CSS
keyframes to translate it across the screen which it'll then infinitely loop.

## Step 5- Styling

Lastly, I was able to style everything using flexbox and basic CSS. I used a google font to make the words look nicer, and I templated everything on the screen. It all came together, and I was pleased with the final product.

## Challenges I ran into

I needed to figure out a way to update the data in real-time(requested) without refreshing the page. Here was my thought process.

Firstly, I got the initial API data by using the useEffect hook to populate my current display. I needed something to show the user immediately before refreshing the data.

Secondly, I created a function that fetched data using Axios. I did this so I had a function that I could use to call data whenever I needed to.

Lastly, I used the useEffect hook in conjunction with my fetch data function on an interval. This allowed my data to be recalled which rerenders the appropriate react components without having the user to refresh the page.

## What I learned

In this coding challenge, I learned that I needed to work fast as there were other interviewees competing for the position. Just like a deadline that needs to be met in the workforce, the first thing I needed to prioritize was to get everything working. All in all, this was a lovely coding challenge that allowed me to solve a problem and gain experience! :)
