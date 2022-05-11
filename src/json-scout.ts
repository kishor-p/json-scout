export class JsonScout {

    originalDoc: any;

    constructor(sourceDoc:any) {
        if(sourceDoc == null){
            throw new Error('Please provide Source Json.');
        }
        if(typeof sourceDoc == 'string'){
            try{
                this.originalDoc = JSON.parse(sourceDoc);
            } catch(err){
                throw new Error('The provided string is not proper JSON');
            }
        } else if(typeof sourceDoc == 'object'){
            let jsonStr = JSON.stringify(sourceDoc);
            if(jsonStr == null){
                throw new Error('Please provide a valid Source Json');
            }
            this.originalDoc = JSON.parse(jsonStr);
        } else {
            throw new Error('Please provided value is neither json string or object');
        }
    }

    public scoutOneByKey(key: string): any{
        if(key== null || key.trim().length == 0){
            throw new Error('Please provide a valid Key for scout');
        } else {
            this.recursiveSearchByKey(this.originalDoc, key, 1);
            let retVal: any = this.searchByKeyResults.length>0? this.searchByKeyResults[0]: null;
            this.searchByKeyResults = [];
            return retVal;
        }
    }

    public scoutAllByKey(key: string): any[]{
        if(key== null || key.trim().length == 0){
            throw new Error('Please provide a valid Key for scout');
        } else {
            this.recursiveSearchByKey(this.originalDoc, key, -1);
            let retVal: any[] = this.searchByKeyResults.length>0? [...this.searchByKeyResults]: null;
            this.searchByKeyResults = [];
            return retVal;
        }
    }

    public scoutOneByValue(value: any): any{
        if(value== null || (typeof value == 'string' && value.trim().length == 0)){
            throw new Error('Please provide a valid value for scout');
        } else {
            this.recursiveSearchByValue(this.originalDoc, value, 1);
            let retVal: any = this.searchByValueResults.length>0? this.searchByValueResults[0]: null;
            this.searchByValueResults = [];
            return retVal;
        }
    }

    public scoutAllByValue(value: any): any[]{
        if(value== null || (typeof value == 'string' && value.trim().length == 0)){
            throw new Error('Please provide a valid value for scout');
        } else {
            this.recursiveSearchByValue(this.originalDoc, value, -1);
            let retVal: any[] = this.searchByValueResults.length>0? [...this.searchByValueResults]: null;
            this.searchByValueResults = [];
            return retVal;
        }
    }


    searchByKeyResults: any[] = [];
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


    searchByValueResults: any[] = [];
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


}