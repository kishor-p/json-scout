export declare class JsonScout {
    sourceDoc: any;
    private searchByKeyResults;
    private searchByValueResults;
    private searchByKeyValueResults;
    /**
     * Constructor to initiate the Scout with Source JSON.
     *
     * Checks if the provided JSON String/Object is of proper format or not.
     * IF NOT: throws ERROR
     * ELSE: Assigns the object to source Doc
     *
     * @param sourceDocument User provided Source document
     */
    constructor(sourceDocument: any);
    /**
     * Scouts/Searches for FIRST ONE of objects containing user provided KEY
     *
     * Throws error if KEY is not provided.
     * Return NULL if no object found
     *
     * @param key KEY of object that needs to be searched/scouted
     * @returns IF Found return found object or else returns NULL
     */
    scoutOneByKey(key: string): any;
    /**
     * Scouts/Searches for ALL of objects containing user provided KEY
     *
     * Throws error if KEY is not provided.
     * Return NULL if no object found
     *
     * @param key KEY of object that needs to be searched/scouted
     * @returns IF Found, returns found objects as array or else returns NULL
     */
    scoutAllByKey(key: string): any[];
    /**
     * Scouts/Searches for FIRST ONE  of objects containing user provided VALUE
     *
     * Throws error if VALUE is not provided.
     * Return NULL if no object found
     *
     * @param value VALUE of object that needs to be searched/scouted
     * @returns IF Found, returns found object  or else returns NULL
     */
    scoutOneByValue(value: any): any;
    /**
     * Scouts/Searches for ALL of objects containing user provided VALUE
     *
     * Throws error if VALUE is not provided.
     * Return NULL if no object found
     *
     * @param value VALUE of object that needs to be searched/scouted
     * @returns IF Found, returns found objects Array  or else returns NULL
     */
    scoutAllByValue(value: any): any[];
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
    scoutOneByKeyValue(key: string, value: any): any;
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
    scoutAllByKeyValue(key: string, value: any): any[];
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
    private recursiveSearchByKey;
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
    private recursiveSearchByValue;
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
    private recursiveSearchByKeyValue;
}
