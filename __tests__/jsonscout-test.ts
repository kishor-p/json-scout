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

describe('Test Search By KEY', () => {
    const testObject1 = require('../resources/test-data-1.json');

    let jScout = new JsonScout(testObject1);

    it("Return One object with provided Key", ()=>{
        expect(jScout.scoutOneByKey("productCode")).
        toMatchObject(JSON.parse('{ "id": "1000", "productCode": "f230fh0g3", "date": "2020-09-13", "amount": 65, "quantity": 1, "customer": "David James", "status": "PENDING" }'));
    });

    it("Return All objects with provided Key", ()=>{
        expect( jScout.scoutAllByKey("productCode").length).
        toEqual(22);
    });
});



describe('Test Search By VALUE', () => {
    const testObject1 = require('../resources/test-data-1.json');

    let jScout = new JsonScout(testObject1);

    it("Return One object with provided VALUE", ()=>{
        expect(jScout.scoutOneByValue(130)).
        toMatchObject(JSON.parse('{ "id": "1001", "productCode": "f230fh0g3", "date": "2020-05-14", "amount": 130, "quantity": 2, "customer": "Leon Rodrigues", "status": "DELIVERED" }'));
    });

    it("Return ALL objects with provided VALUE", ()=>{
        expect(jScout.scoutAllByValue('RETURNED').length).
        toEqual(3);
    });

});


describe('Test Search By KEY and VALUE', () => {
    const testObject1 = require('../resources/test-data-1.json');

    let jScout = new JsonScout(testObject1);

    it("Return One object with provided KEY and VALUE", ()=>{
        expect(jScout.scoutOneByKeyValue("customer", "Leon Rodrigues")).
        toMatchObject(JSON.parse('{ "id": "1001", "productCode": "f230fh0g3", "date": "2020-05-14", "amount": 130, "quantity": 2, "customer": "Leon Rodrigues", "status": "DELIVERED" }'));
    });

    it("Return ALL objects with provided VALUE", ()=>{
        expect(jScout.scoutAllByKeyValue("price", 299).length).
        toEqual(1);
    });

});