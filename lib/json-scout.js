"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.JsonScout = void 0;
var JsonScout = /** @class */ (function () {
    function JsonScout(sourceDoc) {
        this.searchByKeyResults = [];
        this.searchByValueResults = [];
        if (sourceDoc == null) {
            throw new Error('Please provide Source Json');
        }
        if (typeof sourceDoc == 'string') {
            try {
                this.originalDoc = JSON.parse(sourceDoc);
            }
            catch (err) {
                throw new Error('The provided string is not proper JSON');
            }
        }
        else if (typeof sourceDoc == 'object') {
            var jsonStr = JSON.stringify(sourceDoc);
            if (jsonStr == null) {
                throw new Error('Please provide a valid Source Json');
            }
            this.originalDoc = JSON.parse(jsonStr);
        }
        else {
            throw new Error('Please provided value is neither json string or object');
        }
    }
    JsonScout.prototype.scoutOneByKey = function (key) {
        if (key == null || key.trim().length == 0) {
            throw new Error('Please provide a valid Key for scout');
        }
        else {
            this.recursiveSearchByKey(this.originalDoc, key, 1);
            var retVal = this.searchByKeyResults.length > 0 ? this.searchByKeyResults[0] : null;
            this.searchByKeyResults = [];
            return retVal;
        }
    };
    JsonScout.prototype.scoutAllByKey = function (key) {
        if (key == null || key.trim().length == 0) {
            throw new Error('Please provide a valid Key for scout');
        }
        else {
            this.recursiveSearchByKey(this.originalDoc, key, -1);
            var retVal = this.searchByKeyResults.length > 0 ? __spreadArray([], this.searchByKeyResults, true) : null;
            this.searchByKeyResults = [];
            return retVal;
        }
    };
    JsonScout.prototype.scoutOneByValue = function (value) {
        if (value == null || (typeof value == 'string' && value.trim().length == 0)) {
            throw new Error('Please provide a valid value for scout');
        }
        else {
            this.recursiveSearchByValue(this.originalDoc, value, 1);
            var retVal = this.searchByValueResults.length > 0 ? this.searchByValueResults[0] : null;
            this.searchByValueResults = [];
            return retVal;
        }
    };
    JsonScout.prototype.recursiveSearchByKey = function (obj, key, howMany) {
        var currKeys = Object.keys(obj);
        if (currKeys.indexOf(key) > -1) {
            this.searchByKeyResults.push(obj);
            if (howMany != -1 && this.searchByKeyResults.length == howMany) {
                return;
            }
        }
        var propIndex;
        for (propIndex in obj) {
            if (typeof obj[propIndex] === 'object') {
                var innerObj = this.recursiveSearchByKey(obj[propIndex], key, howMany);
                if (innerObj != null) {
                    this.searchByKeyResults.push(obj);
                    if (howMany != -1 && this.searchByKeyResults.length == howMany) {
                        return;
                    }
                }
            }
        }
    };
    JsonScout.prototype.recursiveSearchByValue = function (obj, value, howMany) {
        var propIndex;
        for (propIndex in obj) {
            if (obj[propIndex] != 'object' && obj[propIndex] === value) {
                this.searchByValueResults.push(obj);
                if (howMany != -1 && this.searchByValueResults.length == howMany) {
                    return;
                }
            }
            if (typeof obj[propIndex] === 'object') {
                var innerObj = this.recursiveSearchByValue(obj[propIndex], value, howMany);
                if (innerObj != null) {
                    this.searchByValueResults.push(obj);
                    if (howMany != -1 && this.searchByValueResults.length == howMany) {
                        return;
                    }
                }
            }
        }
    };
    return JsonScout;
}());
exports.JsonScout = JsonScout;
