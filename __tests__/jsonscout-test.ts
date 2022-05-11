import { JsonScout } from "../src/json-scout";

describe('Constructor Tests', ()=>{

    it("Should throw error when Initiated with NULL", ()=>{
        expect(() => {
            new JsonScout(null);
        }).toThrow("Please provide Source Json");
    });

    it("Should throw error when Initiated with non JSON String", ()=>{
        expect(() => {
            new JsonScout("bla-bla");
        }).toThrow("The provided string is not proper JSON");
    });

    it("Should throw error when Initiated with other types", ()=>{
        expect(() => {
            new JsonScout(2012);
        }).toThrow("Please provided value is neither json string or object");
    });

});