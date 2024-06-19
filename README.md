# README #

## Next.js Walmart Clone - Repo

### What is this repository for? ###

This project is a clone of Walmart's e-commerce platform built using Next.js and integrated with Oxylabs for proxy management.

### version: 1.0.0

### Features 

1. Next.js Framework: Utilizes Next.js for server-side rendering, enabling fast page loads and SEO benefits.
2. Oxylabs Integration: Uses Oxylabs proxies for web scraping and data aggregation.
3. Responsive Design: Built with responsive web design principles to ensure usability across devices.
4. Product Listings: Displays products similar to Walmart, with categories, search, and filtering functionality.
5. Shopping Cart: Allows users to add products to a cart and proceed to checkout.

### How do I get set up? ###

1. Clone from repo 
2. Install dependencies
3. Set up environment variables

## Clone the repository

    git clone https://github.com/your/repository.git
    cd repository-name

## Install dependencies

     npm install

## Create a .env.local file in the root directory and add your Oxylabs API credentials:
    cat > .env.local    

## Set up environment variables:
    OXYLABS_API_KEY=your_api_key_here
    OXYLABS_SECRET=your_secret_here


## Run the app

    npm run dev

## Usage

1. Navigate through the site to explore different products and categories.
2. Use the search and filter options to find specific products.
3. Add products to the cart and proceed to checkout as a regular user.