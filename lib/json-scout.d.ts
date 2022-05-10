export declare class JsonScout {
    originalDoc: any;
    constructor(sourceDoc: any);
    scoutOneByKey(key: string): any;
    scoutAllByKey(key: string): any[];
    scoutOneByValue(value: any): any;
    searchByKeyResults: any[];
    private recursiveSearchByKey;
    searchByValueResults: any[];
    private recursiveSearchByValue;
}
