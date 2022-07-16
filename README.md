# Apify Automation Challenge

An algorithm to scrap all products from an imaginary e-commerce JSON API and accumulate them into a single array

## Technologies used:
- Nodejs
- Axios

## Methods:
    
    
getProducts: A function to get products of various price ranges with the use of the `axios` GET method. It takes in two parameters:
- `minPrice`: this sets the minimum price query parameter
- `maxPrice`: the sets the maximum price query parameter

compareProducts: A fuction to get the unique products not present in the products array by comparing all the products gotten from the `getProducts` function and the products array

main: The main function that calls other functions where the data returned from the `compareProduct` function is pushed into the `products` array
    

## Issues Faced:

A major issue I faced while coming up with a solution was clarity. I found it difficult understanding what exactly I had to do. For example, I chose making the price query params in the `getProducts` function dynamic cause I wasn't sure if I was supposed to hardcode the params making it arithmetically progressive and getting all the results, though this would had led to more than one GET request.