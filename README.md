# json-scout : A scout for your JSON

<img src="resources/json-scout-logo.png"  align="left" width="150" height="150">

#### &nbsp;
#### JSON-SCOUT is a useful library to RECURSIVELY search(scout) and extract JSON objects.
#### &nbsp;
#### Search could be performed based on a KEY or VALUE or BOTH.
#### &nbsp;
#### Initialization of the JsonScout can be done either by JSON string or Json Object
#### &nbsp;

## Installation
This package can be download via Node, NPM using below command

```
npm install json-scout
```

## Usage
### Typescript
```
  // Import JSON SCOUT
  const { JsonScout } = require("json-scout");
  
  /** 
   *  initialize by creating an Object of JsonScout by 
   *  passing your JSON object/string to constructor
  **/
  const jScout = new JsonScout(<YOUR_JSON_OBJ>);
  
  // Access function on the create JsonScout object
  jScout.scoutOneByKey("<KEY_SEARCH>");
  jScout.scoutAllByKey("<KEY_SEARCH>");
  jScout.scoutOneByValue("<VALUE_SEARCH>");
  jScout.scoutAllByKey("<VALUE_SEARCH>");
  
```

### NodeJs
```
// Import JSON SCOUT
var js = require("json-scout")

/** 
 *  initialize by creating an Object of JsonScout by 
 *  passing your JSON object/string to constructor
**/
var jScout = new js.JsonScout(<YOUR_JSON_OBJ>);

 // Access function on the created JsonScout object
  jScout.scoutOneByKey("<KEY_SEARCH>");
  jScout.scoutAllByKey("<KEY_SEARCH>");
  jScout.scoutOneByValue("<VALUE_SEARCH>");
  jScout.scoutAllByKey("<VALUE_SEARCH>");

```

## Functions

###  ``` JsonScout(<YOUR_JSON_OBJ>: object/string) ```  
- Constructor to initialize the Json Scout. 
- Luckily it can take both object and string.
- Example: ```const jScout =  new JsonScout('[{"name": "Kevin", "age": 30}, {"name": "Vanessa", "age": 28}]'); ```  

### ``` scoutOneByKey(<SEARCH_KEY>: string) ```
- RECURSIVELY searches the initialized JSON based on KEY
- Returns the First Object containing the searched KEY.
- Example: ``` jScout.scoutOneByKey("name"); ```
- Result: ``` {"name": "Kevin", "age": 30} ```

### ``` scoutAllByKey(<SEARCH_KEY>: string) ```
- RECURSIVELY searches the initialized JSON based on KEY
- Returns ALL the Objects containing the searched KEY.
- Example: ``` jScout.scoutAllByKey("name"); ```
- Result: ``` [{"name": "Kevin", "age": 30}, {"name": "Vanessa", "age": 28}] ```

### ``` scoutOneByValue(<SEARCH_VALUE>: string) ```
- RECURSIVELY searches the initialized JSON based on VALUE
- Returns the First Object containing the searched VALUE.
- Example: ``` jScout.scoutAllByValue("Vanessa"); ```
- Result: ``` {"name": "Vanessa", "age": 28} ```

### ``` scoutAllByValue(<SEARCH_VALUE>: string) ```
- RECURSIVELY searches the initialized JSON based on VALUE
- Returns ALL the Objects containing the searched VALUE.
- Example: ``` jScout.scoutAllByValue(28); ```
- Result: ``` [{"name": "Vanessa", "age": 28}] ```

### ``` scoutOneByKeyValue(<SEARCH_VALUE>: string) ```
- RECURSIVELY searches the initialized JSON based on provided KEY and VALUE
- Returns the First Object containing the searched KEY and VALUE.
- Example: ``` jScout.scoutOneByKeyValue("age", 28); ```
- Result: ``` {"name": "Vanessa", "age": 28} ```

### ``` scoutAllByKeyValue(<SEARCH_VALUE>: string) ```
- RECURSIVELY searches the initialized JSON based on KEY and VALUE
- Returns ALL the Objects containing the searched KEY and VALUE.
- Example: ``` jScout.scoutAllByKeyValue("age", 28); ```
- Result: ``` [{"name": "Vanessa", "age": 28}] ```

