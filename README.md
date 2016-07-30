# W_I_N_E - Wine Industry National Explorer

W_I_N_E is an interactive tool that aims to teach potential employees, investors, or interested students about geographic relationships important to the Australian wine and grape growing industry.

To view the demo, go to https://pastcompute.github.io/w_i_n_e/

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

Artefacts from this dataset used:

Data on hectares per grape variety, world wide
http://www.adelaide.edu.au/wine-econ/databases/winegrapes-national-1960-to-2010-rev0714.xlsx

Data on hectares per grape variety, wine regions, 2000 and 2010
http://www.adelaide.edu.au/wine-econ/databases/winegrapes-detailed-regional-2000-and-2010-rev0714.xlsx

We have copied data from the spreadsheets into a subset to make the app.
We created a CSV and filtered out all grape varieties not grown in Australia.

Using http://www.csvjson.com/csv2json generated a JSON file of regions vs. varieties, this is loaded, filtered and processed with the web page.
In our desired application this processing would happen on a server and be optimised for performance.
We would like to have the information abstracted behind an API.

The data was converted into a JSON file listing hectares per wine region (and per grape variety)
The data is also transposed into a second JSON file, to obtain hectares per variety (and per region)

A second table was created, showing summary hectares per region.

### Vineyards

http://data.sa.gov.au/data/dataset/vineyards
http://data.sa.gov.au/data/dataset/vineyards/resource/32ae82e8-74d0-4afe-8924-79068cde7291
http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/1329.0.55.0022011-12?OpenDocument
Vineyards: Production, area and number of businesses by Australia, State and GI Zone:
http://www.abs.gov.au/AUSSTATS/subscriber.nsf/log?openagent&1329055002do002_201112.xls&1329.0.55.002&Data%20Cubes&422FC8129E2E3747CA257A980013DD18&0&2011-12&16.10.2012&Latest

### Exports

http://data.sa.gov.au/data/dataset/international-exports-abs-customised-data
http://data.sa.gov.au/data/dataset/international-exports-abs-customised-data/resource/9c3c23b7-69a3-4c36-8bd3-fe07442d2271
https://data.sa.gov.au/data/dataset/10c37b6e-254a-4a49-af7a-7d9cc8f3497f/resource/9c3c23b7-69a3-4c36-8bd3-fe07442d2271/download/saprimaryindustries20140708083024exports.xlsx

We coped segments from the spreadsheet into a form that can be expressed on our web application


### Other:

Soil Waterholding capability
http://data.sa.gov.au/data/dataset/awhc 

SA Gov regions
http://data.sa.gov.au/data/dataset/south-australian-government-regions

# Embedded software components attribution

* d3pie.js - https://github.com/benkeen/d3pie - MIT license

