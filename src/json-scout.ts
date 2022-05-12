export class JsonScout {

    sourceDoc: any;
    private searchByKeyResults: any[] = [];
    private searchByValueResults: any[] = [];
    private searchByKeyValueResults: any[] = [];


    /**
     * Constructor to initiate the Scout with Source JSON.
     * 
     * Checks if the provided JSON String/Object is of proper format or not.
     * IF NOT: throws ERROR
     * ELSE: Assigns the object to source Doc
     * 
     * @param sourceDocument User provided Source document
     */
    constructor(sourceDocument:any) {
        if(sourceDocument == null){
            throw new Error('Please provide Source Json.');
        }
        if(typeof sourceDocument == 'string'){
            try{
                this.sourceDoc = JSON.parse(sourceDocument);
            } catch(err){
                throw new Error('The provided string is not proper JSON');
            }
        } else if(typeof sourceDocument == 'object'){
            let jsonStr = JSON.stringify(sourceDocument);
            if(jsonStr == null){
                throw new Error('Please provide a valid Source Json');
            }
            this.sourceDoc = JSON.parse(jsonStr);
        } else {
            throw new Error('Please provided value is neither json string or object');
        }
    }

    /**
     * Scouts/Searches for FIRST ONE of objects containing user provided KEY
     * 
     * Throws error if KEY is not provided.
     * Return NULL if no object found
     * 
     * @param key KEY of object that needs to be searched/scouted
     * @returns IF Found return found object or else returns NULL
     */
    public scoutOneByKey(key: string): any{
        if(key== null || key.trim().length == 0){
            throw new Error('Please provide a valid Key for scout');
        } else {
            this.recursiveSearchByKey(this.sourceDoc, key, 1);
            let retVal: any = this.searchByKeyResults.length>0? this.searchByKeyResults[0]: null;
            this.searchByKeyResults = [];
            return retVal;
        }
    }

    /**
     * Scouts/Searches for ALL of objects containing user provided KEY
     * 
     * Throws error if KEY is not provided.
     * Return NULL if no object found
     * 
     * @param key KEY of object that needs to be searched/scouted
     * @returns IF Found, returns found objects as array or else returns NULL
     */
    public scoutAllByKey(key: string): any[]{
        if(key== null || key.trim().length == 0){
            throw new Error('Please provide a valid Key for scout');
        } else {
            this.recursiveSearchByKey(this.sourceDoc, key, -1);
            let retVal: any[] = this.searchByKeyResults.length>0? [...this.searchByKeyResults]: null;
            this.searchByKeyResults = [];
            return retVal;
        }
    }

    /**
     * Scouts/Searches for FIRST ONE  of objects containing user provided VALUE
     * 
     * Throws error if VALUE is not provided.
     * Return NULL if no object found
     * 
     * @param value VALUE of object that needs to be searched/scouted
     * @returns IF Found, returns found object  or else returns NULL
     */
    public scoutOneByValue(value: any): any{
        if(value== null || (typeof value == 'string' && value.trim().length == 0)){
            throw new Error('Please provide a valid value for scout');
        } else {
            this.recursiveSearchByValue(this.sourceDoc, value, 1);
            let retVal: any = this.searchByValueResults.length>0? this.searchByValueResults[0]: null;
            this.searchByValueResults = [];
            return retVal;
        }
    }

    /**
     * Scouts/Searches for ALL of objects containing user provided VALUE
     * 
     * Throws error if VALUE is not provided.
     * Return NULL if no object found
     * 
     * @param value VALUE of object that needs to be searched/scouted
     * @returns IF Found, returns found objects Array  or else returns NULL
     */
    public scoutAllByValue(value: any): any[]{
        if(value== null || (typeof value == 'string' && value.trim().length == 0)){
            throw new Error('Please provide a valid value for scout');
        } else {
            this.recursiveSearchByValue(this.sourceDoc, value, -1);
            let retVal: any[] = this.searchByValueResults.length>0? [...this.searchByValueResults]: null;
            this.searchByValueResults = [];
            return retVal;
        }
    }


    /**
     * Scouts/Searches for FIRST ONE of object containing user provided KEY and VALUE
     * 
     * Throws error if KEY and VALUE is not provided.
     * Return NULL if no object found
     * 
     * @param key KEY of object that needs to be searched/scouted
     * @param value VALUE of object that needs to be searched/scouted
     * @returns IF Found, returns found object  or else returns NULL
     */
    public scoutOneByKeyValue(key:string, value: any): any{
        if(key == null || key.trim().length==0 || value== null || (typeof value == 'string' && value.trim().length == 0)){
            throw new Error('Please provide a valid KEY and VALUE for scout');
        } else {
            this.recursiveSearchByKeyValue(this.sourceDoc, key, value, 1);
            let retVal: any = this.searchByKeyValueResults.length>0? this.searchByKeyValueResults[0]: null;
            this.searchByKeyValueResults = [];
            return retVal;
        }
    }


    /**
     * Scouts/Searches for ALL of objects containing user provided KEY and VALUE
     * 
     * Throws error if KEY and VALUE is not provided.
     * Return NULL if no object found
     * 
     * @param key KEY of object that needs to be searched/scouted
     * @param value VALUE of object that needs to be searched/scouted
     * @returns IF Found, returns found objects as Array  or else returns NULL
     */
    public scoutAllByKeyValue(key:string, value: any): any[]{
        if(key == null || key.trim().length==0 || value== null || (typeof value == 'string' && value.trim().length == 0)){
            throw new Error('Please provide a valid KEY and VALUE for scout');
        } else {
            this.recursiveSearchByKeyValue(this.sourceDoc, key, value, -1);
            let retVal: any[] = this.searchByKeyValueResults.length>0? [...this.searchByKeyValueResults]: null;
            this.searchByKeyValueResults = [];
            return retVal;
        }
    }


    /**
     * PRIVATE function to RECURSIVELY search the source obj, for Objects containing provided KEY
     * 
     * When found it puts the found object(s) in searchByKeyResults[] array.
     * IF provided limit 'howMany' reached then it will RETURN
     * Use -1 for to search and collect all documents
     * 
     * @param obj Source Json Object
     * @param key KEY of object that needs to be searched/scouted
     * @param howMany Limit to stop after search. Use -1 for All Objects
     * @returns 
     */
    private recursiveSearchByKey(obj: any, key: string, howMany: number): any {

        let currKeys: string[] = Object.keys(obj);
        if(currKeys.indexOf(key) > -1){
            this.searchByKeyResults.push(obj);
            if(howMany != -1 && this.searchByKeyResults.length == howMany){
                return;
            }
        } 
        let propIndex;
        for(propIndex in obj){
            if(typeof obj[propIndex] === 'object'){
                let innerObj = this.recursiveSearchByKey(obj[propIndex], key, howMany);
                if(innerObj != null){
                    this.searchByKeyResults.push(obj);
                    if(howMany != -1 && this.searchByKeyResults.length == howMany){
                        return;
                    }
                }
            }
            
        }
    }

    /**
     * PRIVATE function to RECURSIVELY search the source obj, for Objects containing provided VALUE
     * 
     * When found it puts the found object(s) in searchByValueResults[] array.
     * IF provided limit 'howMany' reached then it will RETURN
     * Use -1 for to search and collect all documents
     * 
     * @param obj Source Json Object
     * @param key KEY of object that needs to be searched/scouted
     * @param howMany Limit to stop after search. Use -1 for All Objects
     * @returns 
     */
    private recursiveSearchByValue(obj: any, value: string, howMany: number): any {
        
        let propIndex;
        for(propIndex in obj){

            if(obj[propIndex] != 'object' && obj[propIndex] === value){
                this.searchByValueResults.push(obj);
                if(howMany != -1 && this.searchByValueResults.length == howMany){
                    return;
                }
            }
            
            if(typeof obj[propIndex] === 'object'){
                let innerObj = this.recursiveSearchByValue(obj[propIndex], value, howMany);
                if(innerObj != null){
                    this.searchByValueResults.push(obj);
                    if(howMany != -1 && this.searchByValueResults.length == howMany){
                        return;
                    }
                }
            }
            
        }
    }

    /**
     * PRIVATE function to RECURSIVELY search the source obj, for Objects containing provided KEY and VALUE
     * 
     * When found it puts the found object(s) in searchByKeyValueResults[] array.
     * IF provided limit 'howMany' reached then it will RETURN
     * Use -1 for to search and collect all documents
     * 
     * @param obj Source Json Object
     * @param key KEY of object that needs to be searched/scouted
     * @param howMany Limit to stop after search. Use -1 for All Objects
     * @returns 
     */
    private recursiveSearchByKeyValue(obj: any, key: string, value: any, howMany: number): any {

        let currKeys: string[] = Object.keys(obj);
        if(currKeys.indexOf(key) > -1 && obj[key] === value){
            this.searchByKeyValueResults.push(obj);
            if(howMany != -1 && this.searchByKeyValueResults.length == howMany){
                return;
            }
        } 
        let propIndex;
        for(propIndex in obj){
            if(typeof obj[propIndex] === 'object'){
                let innerObj = this.recursiveSearchByKeyValue(obj[propIndex], key, value, howMany);
                if(innerObj != null){
                    this.searchByKeyValueResults.push(obj);
                    if(howMany != -1 && this.searchByKeyValueResults.length == howMany){
                        return;
                    }
                }
            }
            
        }
    }


}