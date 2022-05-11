# json-scout 

<img src="test/Json-scout-logo.png"  align="left" width="100" height="100">

- JSON-SCOUT is a library useful to quickly RECURSIVELY search (scout) and extract JSON objects.
- Search could be based on a KEY or VALUE or BOTH.
- Initilization of the JsonScout can be done either by JSON string or Json Object
- 

## Usage

```
  // Import JSON SCOUT
  const { JsonScout } = require("json-scout");
  
  // Initilize by createing an Object of JsonScout by passing your JSON object/string to constructor
  const jScout = new JsonScout(<YOUR_JSON_OBJ>);
  
  // Access function on the create JsonScout object
  jScout.scoutOneByKey("<KEY_SEARCH>");
  jScout.scoutAllByKey("<KEY_SEARCH>");
  jScout.scoutOneByValue("<VALUE_SEARCH>");
  jScout.scoutAllByKey("<VALUE_SEARCH>");
  
```

## Functions

###  ``` JsonScout(<YOUR_JSON_OBJ>: object/string) ```  
- Constructor to initilize the Json Scout. 
- Luckly it can take both object and string.
- Example: ```const jScout =  new JsonScout('[{"name": "Kishor", "age": 30}, {"name": "Venni", "age": 28}]'); ```  

### ``` scoutOneByKey(<SEARCHKEY>: string) ```
- RECURSIVELY searchs the initilized JSON based on KEY
- Returns the First Object contianing the searched KEY.
- Example: ``` jScout.scoutOneByKey("name"); ```
- Result: ``` {"name": "Kishor", "age": 30} ```

### ``` scoutAllByKey(<SEARCHKEY>: string) ```
- RECURSIVELY searchs the initilized JSON based on KEY
- Returns ALL the Objects contianing the searched KEY.
- Example: ``` jScout.scoutAllByKey("name"); ```
- Result: ``` [{"name": "Kishor", "age": 30}, {"name": "Venni", "age": 28}] ```

### ``` scoutOneByValue(<SEARCH_VALUE>: string) ```
- RECURSIVELY searchs the initilized JSON based on VALUE
- Returns the First Object contianing the searched VALUE.
- Example: ``` jScout.scoutAllByValue("Venni"); ```
- Result: ``` {"name": "Venni", "age": 28} ```

### ``` scoutAllByValue(<SEARCH_VALUE>: string) ```
- RECURSIVELY searchs the initilized JSON based on VALUE
- Returns ALL the Objects contianing the searched VALUE.
- Example: ``` jScout.scoutAllByValue(28); ```
- Result: ``` [{"name": "Venni", "age": 28}] ```

