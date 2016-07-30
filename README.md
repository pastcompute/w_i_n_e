# W_I_N_E - Wine Industry National Explorer

W_I_N_E is an interactive tool that aims to teach potential employees, investors, or interested students about geographic relationships important to the Australian wine and grape growing industry.

## Outline

This is a proof of concept web application, and given the time constraints of the weekend, we aim to only answer a few questions.

We would like to inform users of the app of the following:

* Where the wine regions of AUstralia are located,
* The volume of grape varieties grown in a region, with variation over time,
* Where else in the weld those grapes are (i.e., competition!)
* The number of vineyards, as this may be of interest to potential employees,
* An in particular for South Australia, predominant weather information and resources such as bores, related to those regions,

A fully developed application would provide many more categories and much more detail.

## Design

We particularly feel this application would benefit from an API back end. There are multiple spreadsheets, and moving this data into a database with simple API queries would simplify future  development.

For the purpose of the competion, we have documented what this API would look like, but have supplied  hard coded data to the app due to time constraints.

Similarly, due to time constraints, we have manually constructed the end visualisations, a proper app would generate these from full  data sets dynamically.

Main screen constructed using http://d3pie.org/

## UX

### Main screen

Intro, and several question bubbles inviting the user to click
Clicking on any, takes the user to relevant page

### What Wine do we grow?

Displays a histogram of variety vs hectares.
Click on the map to filter down to wine growing region
Click on year to see historical total (2000, 2010 only)

### Who else grows wine?

Map with AU regions
Click on a region, and secondary map shows overseas locations with significant hecatrage

### Wine region environment

Map with AU regions
Click on a region
Shows a summary of wethear related to the region

### Wine region resources

Map with AU regions
Click on a region
Shows a summary of resouces, shows bores on the map, number of vineyards, etc

# Data Sets

## data.sa data sets

### Regional, national and global winegrape bearing areas

http://data.sa.gov.au/data/dataset/regional-national-and-global-winegrape-bearing-areas-2000-and-2010
http://data.sa.gov.au/data/dataset/regional-national-and-global-winegrape-bearing-areas-2000-and-2010/resource/e05c2ec3-fd62-4f3b-a244-7249cec1ffe0
http://www.adelaide.edu.au/wine-econ/databases/winegrapes/
Licensed: Creative Commons

Artefacts:

Data on hectares per grape variety, world wide
http://www.adelaide.edu.au/wine-econ/databases/winegrapes-national-1960-to-2010-rev0714.xlsx

Data on hectares per grape variety, wine regions, 2000 and 2010
http://www.adelaide.edu.au/wine-econ/databases/winegrapes-detailed-regional-2000-and-2010-rev0714.xlsx

We have copied data from the spreadsheet into a subset to make the app.

Using http://www.csvjson.com/csv2json generated a JSON file of regions vs. varieties, this is loaded, filtered and processed with the web page.
In a real application this processing would happen on a server abd be optimised for performance.
We would like to have the information abstracted behind an API.

The data is transposed into JSON, so that each region has the hectares per variety and the toal available.


### Vineyards

http://data.sa.gov.au/data/dataset/vineyards


### Other:

Soil Waterholding capability
http://data.sa.gov.au/data/dataset/awhc 

SA Gov regions
http://data.sa.gov.au/data/dataset/south-australian-government-regions

# Embedded software components attribution

* d3pie.js - https://github.com/benkeen/d3pie - MIT license

