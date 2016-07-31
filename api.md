# Introduction

An API for providing consolidated wine industry data, for use by tools such as [W_I_N_E](https://pastcompute.github.com/w_i_n_e)

**wineRegions**
----
  Fetch a list of all Australian wine growing regions.

* **URL**

  `/wine_api/v1/wineRegions`

* **Method:**
  
  `GET`
  
*  **URL Params**

 None

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ { id : 1, name : "Barossa Valley" }, { id : 2, name : "Clare Valley" }, ... }`

* **Sample Call:**

 ``` $.ajax('https://api.wine.example.com/wine_api/v1/wineRegions', ...) ```


* **Notes:**

Enumerate over the resulting list and use the wineRegionInfo API call to fetch summary data, and the wineRegionGeo API call to fetch GeoJSON data

**wineRegion**
----
  Fetch summary information for the given wine region, such as acreage under vine, varieties farmed, exports, resources, etc.

* **URL**

  `/wine_api/v1/wineRegion`

* **Method:**
  
  `GET`
  
*  **URL Params**

   `id` - specify an ID returned by the `wineRegions` call.

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 7, totalHectares : 12345, varieties : [ 'Cabernet Sauvignon', 'Dolcetto' ], resouces: {'bores':17, climate:'mild'}}`

* **Sample Call:**

 ``` $.ajax('https://api.wine.example.com/wine_api/v1/wineRegion?id=3', ...) ```


**wineRegionGeo**
----
  Fetch GeoJSON boundary data for the given wine region.

* **URL**

  `/wine_api/v1/wineRegionGeo`

* **Method:**
  
  `GET`
  
*  **URL Params**

   `id` - specify an ID returned by the `wineRegions` call.

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ id : 7, {"type":"FeatureCollection","features":[
{"type":"Feature","id":"1","properties":{"name":"Clare Valley"},"geometry":{"type":"MultiPolygon","coordinates":[[[[145.397978,-40.792549],[`

* **Sample Call:**

 ``` $.ajax('https://api.wine.example.com/wine_api/v1/wineRegionGeo?id=3', ...) ```


