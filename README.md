# HooHacks24-FastFashion
# *GreenThreads*

## Overview
The app focuses on providing eco-friendly shopping suggestions by analyzing links inputted by users. Its primary goal is to combat the environmental impact of fast fashion brands like Shein, H&M, Uniqlo, Romwe, and BOOHOOMAN by offering alternatives that help reduce the carbon footprint. The app aims to quantify waste reduction, track overall eco savings, and set goals for users to achieve more sustainable shopping habits.

## Features

- **Eco-Friendly Suggestions**: Paste a link to a product, and the app will provide eco-friendly alternatives.
- **Data Collection**: Utilizes Google's reverse image search (through the SERP API) and user input (such as size) to find matches.
- **Technologies**:
  - **Front End**: React.js
  - **UI Components**: Bootstrap
  - **Web Scraping**: Selenium/bs4
  - **Data Fetching**: Fetch/Tanstack Query
  - **APIs**: [SERP API for Google Shopping] (https://serpapi.com/search-api)

## Pages

- **Home Page**: Features a large logo/company name, a motto/short description (animated), and a box for pasting links.
- **Results Page**: Displays a list of results with images after processing the input link.
- **Favorites**: (Requires database integration, potentially using MongoDB for its no-SQL, ease-of-use characteristics)
- **FAQ**
- **About**
- **Contact**

## Data Flow

1. The user inputs a link.
2. The app scrapes the product data from the provided link.
3. Performs a modified search using the SERP API.
4. Filters the results to display pre-approved sustainable or second-hand options.
5. Displays links and images to the user.

## Sustainable/Second-Hand Platforms

- Mercari
- Depop
- Grailed
- Poshmark
- eBay

## Additional Resources

- [Figma Design](https://www.figma.com/file/qDeK9jArdRpxnJMwikZvnb/HooHacks?type=whiteboard&node-id=0%3A1&t=M0atigq7r6GQN2cJ-1)
- [How to Web Scrape Depop (Using Node.js)](https://www.youtube.com/watch?v=DIzu0iSQHtE)

## Team Organization

- **Alan Cai and Youssef Cherrat**: Responsible for the integration and management of the Google Shopping API and webscraping.
- **Ethan**: Focuses on utilizing the fetch API for data fetching tasks and assisting with front-end work.
- **Peter**: Leads the design efforts, specializing in the use of Tailwind CSS.


