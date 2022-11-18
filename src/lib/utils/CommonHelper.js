export default class CommonHelper {
    /**
     * Checks whether value is plain object.
     *
     * @param  {Mixed} value
     * @return {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === "object" && value.constructor === Object;
    }

    /**
     * Checks whether a value is empty. The following values are considered as empty:
     * - null
     * - undefined
     * - empty string
     * - empty array
     * - empty object
     * - zero uuid, time and dates
     *
     * @param  {Mixed} value
     * @return {Boolean}
     */
    static isEmpty(value) {
        return (
            (value === "") ||
            (value === null) ||
            (value === "00000000-0000-0000-0000-000000000000") || // zero uuid
            (value === "0001-01-01T00:00:00Z") || // zero time
            (value === "0001-01-01") || // zero date
            (typeof value === "undefined") ||
            (Array.isArray(value) && value.length === 0) ||
            (CommonHelper.isObject(value) && Object.keys(value).length === 0)
        );
    }

    /**
     * Checks whether the provided dom element is a form field (input, textarea, select).
     *
     * @param  {Node} element
     * @return {Boolean}
     */
    static isInput(element) {
        let tagName = element && element.tagName ? element.tagName.toLowerCase() : "";

        return (
            tagName === "input" ||
            tagName === "select" ||
            tagName === "textarea" ||
            element.isContentEditable
        )
    }

    /**
     * Checks if an element is a common focusable one.
     *
     * @param  {Node} element
     * @return {Boolean}
     */
    static isFocusable(element) {
        let tagName = element && element.tagName ? element.tagName.toLowerCase() : "";

        return (
            CommonHelper.isInput(element) ||
            tagName === "button" ||
            tagName === "a" ||
            tagName === "details" ||
            element.tabIndex >= 0
        );
    }

    /**
     * Check if `obj` has at least one none empty property.
     *
     * @param  {Object} obj
     * @return {Boolean}
     */
    static hasNonEmptyProps(obj) {
        for (let i in obj) {
            if (!CommonHelper.isEmpty(obj[i])) {
                return true;
            }
        }

        return false;
    }

    /**
     * Checks whether `arr` is an object array where the first element has `keys`.
     * NB! Empty arrays are considered thruethfull.
     *
     * @param  {Array}        arr
     * @param  {String|Array} keys
     * @return {Boolean}
     */
    static isObjectArrayWithKeys(arr, keys) {
        if (!Array.isArray(arr) || typeof arr[0] !== "object") {
            return false;
        }

        if (arr.length == 0) {
            return true;
        }

        let normalizedKeys = CommonHelper.toArray(keys);
        for (let key of normalizedKeys) {
            if (!(key in arr[0])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Normalizes and returns arr as a valid array instance (if not already).
     *
     * @param  {Array}   arr
     * @param  {Boolean} [allowNull]
     * @return {Array}
     */
    static toArray(arr, allowNull = false) {
        if (Array.isArray(arr)) {
            return arr;
        }

        return (allowNull || arr !== null) && typeof arr !== "undefined" ? [arr] : [];
    }

    /**
     * Loosely checks if value exists in an array.
     *
     * @param  {Array}  arr
     * @param  {String} value
     * @return {Boolean}
     */
    static inArray(arr, value) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == value) {
                return true;
            }
        }

        return false;
    }

    /**
     * Removes single element from array by loosely comparying values.
     *
     * @param {Array} arr
     * @param {Mixed} value
     */
    static removeByValue(arr, value) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == value) {
                arr.splice(i, 1);
                break;
            }
        }
    }

    /**
     * Adds `value` in `arr` only if it's not added already.
     *
     * @param {Array} arr
     * @param {Mixed} value
     */
    static pushUnique(arr, value) {
        if (!CommonHelper.inArray(arr, value)) {
            arr.push(value);
        }
    }

    /**
     * Returns single element from objects array by matching its key value.
     *
     * @param  {Array} objectsArr
     * @param  {Mixed} key
     * @param  {Mixed} value
     * @return {Object}
     */
    static findByKey(objectsArr, key, value) {
        for (let i in objectsArr) {
            if (objectsArr[i][key] == value) {
                return objectsArr[i];
            }
        }

        return null;
    }

    /**
     * Group objects array by a specific key.
     *
     * @param  {Array}  objectsArr
     * @param  {String} key
     * @return {Object}
     */
    static groupByKey(objectsArr, key) {
        let result = {};

        for (let i in objectsArr) {
            result[objectsArr[i][key]] = result[objectsArr[i][key]] || [];

            result[objectsArr[i][key]].push(objectsArr[i]);
        }

        return result;
    }

    /**
     * Removes single element from objects array by matching an item"s property value.
     *
     * @param {Array}  objectsArr
     * @param {String} key
     * @param {Mixed}  value
     */
    static removeByKey(objectsArr, key, value) {
        for (let i in objectsArr) {
            if (objectsArr[i][key] == value) {
                objectsArr.splice(i, 1);
                break;
            }
        }
    }

    /**
     * Adds or replace an object array element by comparing its key value.
     *
     * @param  {Array}  objectsArr
     * @param  {Object} item
     * @param  {Mixed}  [key]
     * @return {Array}
     */
    static pushOrReplaceByKey(objectsArr, item, key = "id") {
        for (let i = objectsArr.length - 1; i >= 0; i--) {
            if (objectsArr[i][key] == item[key]) {
                objectsArr[i] = item; // replace
                return;
            }
        }

        objectsArr.push(item);
    }

    /**
     * Filters and returns a new objects array with duplicated elements removed.
     *
     * @param  {Array} objectsArr
     * @param  {String} key
     * @return {Array}
     */
    static filterDuplicatesByKey(objectsArr, key = "id") {
        const uniqueMap = {};
        for (const item of objectsArr) {
            uniqueMap[item[key]] = item;
        }

        return Object.values(uniqueMap)
    }

    /**
     * Safely access nested object/array key with dot-notation.
     *
     * @example
     * ```javascript
     * var myObj = {a: {b: {c: 3}}}
     * this.getNestedVal(myObj, "a.b.c");       // returns 3
     * this.getNestedVal(myObj, "a.b.c.d");     // returns null
     * this.getNestedVal(myObj, "a.b.c.d", -1); // returns -1
     * ```
     *
     * @param  {Object|Array} data
     * @param  {string}       path
     * @param  {Mixed}        [defaultVal]
     * @param  {String}       [delimiter]
     * @return {Mixed}
     */
    static getNestedVal(data, path, defaultVal = null, delimiter = ".") {
        let result = data || {};
        let parts  = path.split(delimiter);

        for (const part of parts) {
            if (
                (!CommonHelper.isObject(result) && !Array.isArray(result)) ||
                typeof result[part] === "undefined"
            ) {
                return defaultVal;
            }

            result = result[part];
        }

        return result;
    }

    /**
     * Sets a new value to an object (or array) by its key path.
     *
     * @example
     * ```javascript
     * this.setByPath({}, "a.b.c", 1);             // results in {a: b: {c: 1}}
     * this.setByPath({a: {b: {c: 3}}}, "a.b", 4); // results in {a: {b: 4}}
     * ```
     *
     * @param  {Array|Object} data
     * @param  {string}       path
     * @param  {String}       delimiter
     */
    static setByPath(data, path, newValue, delimiter = ".") {
        if (data === null || typeof data !== 'object') {
            console.warn("setByPath: data not an object or array.");
            return
        }

        let result   = data;
        let parts    = path.split(delimiter);
        let lastPart = parts.pop();

        for (const part of parts) {
            if (
                (!CommonHelper.isObject(result) && !Array.isArray(result)) ||
                (!CommonHelper.isObject(result[part]) && !Array.isArray(result[part]))
            ) {
                result[part] = {};
            }

            result = result[part];
        }

        result[lastPart] = newValue;
    }

    /**
     * Recursively delete element from an object (or array) by its key path.
     * Empty array or object elements from the parents chain will be also removed.
     *
     * @example
     * ```javascript
     * this.deleteByPath({a: {b: {c: 3}}}, "a.b.c");       // results in {}
     * this.deleteByPath({a: {b: {c: 3, d: 4}}}, "a.b.c"); // results in {a: {b: {d: 4}}}
     * ```
     *
     * @param  {Array|Object} data
     * @param  {string}       path
     * @param  {String}       delimiter
     */
    static deleteByPath(data, path, delimiter = ".") {
        let result   = data || {};
        let parts    = path.split(delimiter);
        let lastPart = parts.pop();

        for (const part of parts) {
            if (
                (!CommonHelper.isObject(result) && !Array.isArray(result)) ||
                (!CommonHelper.isObject(result[part]) && !Array.isArray(result[part]))
            ) {
                result[part] = {};
            }

            result = result[part];
        }

        if (Array.isArray(result)) {
            result.splice(lastPart, 1);
        } else if (CommonHelper.isObject(result)) {
            delete (result[lastPart]);
        }

        // cleanup the parents chain
        if (
            parts.length > 0 &&
            (
                (Array.isArray(result) && !result.length) ||
                (CommonHelper.isObject(result) && !Object.keys(result).length)
            ) &&
            (
                (Array.isArray(data) && data.length > 0) ||
                (CommonHelper.isObject(data) && Object.keys(data).length > 0)
            )
        ) {
            CommonHelper.deleteByPath(data, parts.join(delimiter), delimiter);
        }
    }

    /**
     * Generates random string (suitable for elements id and keys).
     *
     * @param  {Number} [length] Results string length (default 10)
     * @return {String}
     */
    static randomString(length) {
        length = length || 10;

        let result = "";
        let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < length; i++) {
            result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        }

        return result;
    }

    /**
     * Converts and normalizes string into a sentence.
     *
     * @param  {String}  str
     * @param  {Boolean} [stopCheck]
     * @return {String}
     */
    static sentenize(str, stopCheck = true) {
        if (typeof str !== "string") {
            return "";
        }

        str = str.trim().split("_").join(" ");
        if (str === "") {
            return str;
        }

        str = str[0].toUpperCase() + str.substring(1);

        if (stopCheck) {
            let lastChar = str[str.length - 1];
            if (lastChar !== "." && lastChar !== "?" && lastChar !== "!") {
                str += ".";
            }
        }

        return str
    }

    /**
     * Normalizes and converts the provided string to a slug.
     *
     * @param  {String} str
     * @param  {String} [delimiter]
     * @param  {Array}  [preserved]
     * @return {String}
     */
    static slugify(str, delimiter = '_', preserved = ['.', '=', '-']) {
        if (str === '') {
            return '';
        }

        // special characters
        const specialCharsMap = {
            'a': /а|à|á|å|â/gi,
            'b': /б/gi,
            'c': /ц|ç/gi,
            'd': /д/gi,
            'e': /е|è|é|ê|ẽ|ë/gi,
            'f': /ф/gi,
            'g': /г/gi,
            'h': /х/gi,
            'i': /й|и|ì|í|î/gi,
            'j': /ж/gi,
            'k': /к/gi,
            'l': /л/gi,
            'm': /м/gi,
            'n': /н|ñ/gi,
            'o': /о|ò|ó|ô|ø/gi,
            'p': /п/gi,
            'q': /я/gi,
            'r': /р/gi,
            's': /с/gi,
            't': /т/gi,
            'u': /ю|ù|ú|ů|û/gi,
            'v': /в/gi,
            'w': /в/gi,
            'x': /ь/gi,
            'y': /ъ/gi,
            'z': /з/gi,
            'ae': /ä|æ/gi,
            'oe': /ö/gi,
            'ue': /ü/gi,
            'Ae': /Ä/gi,
            'Ue': /Ü/gi,
            'Oe': /Ö/gi,
            'ss': /ß/gi,
            'and': /&/gi
        };

        // replace special characters
        for (let k in specialCharsMap) {
            str = str.replace(specialCharsMap[k], k);
        }

        const slug = str
            .replace(new RegExp('[' + preserved.join('') + ']', 'g'), ' ') // replace preserved characters with spaces
            .replace(/[^\w\ ]/gi, '')                                      // replaces all non-alphanumeric with empty string
            .replace(/\s+/g, delimiter);                                   // collapse whitespaces and replace with `delimiter`

        return slug.charAt(0).toLowerCase() + slug.slice(1);
    }

    /**
     * Splits `str` and returns its non empty parts as an array.
     *
     * @param  {String} str
     * @param  {String} [separator]
     * @return {Array}
     */
    static splitNonEmpty(str, separator = ",") {
        const items = (str || "").split(separator);
        const result = [];

        for (let item of items) {
            item = (item + "").trim();
            if (!CommonHelper.isEmpty(item)) {
                result.push(item);
            }
        }

        return result;
    }

    /**
     * Returns a concatenated `items` string.
     *
     * @param  {String} items
     * @param  {String} [separator]
     * @return {Array}
     */
    static joinNonEmpty(items, separator = ", ") {
        const result = [];

        for (let item of items) {
            item = typeof item === "string" ? item.trim() : "";
            if (!CommonHelper.isEmpty(item)) {
                result.push(item);
            }
        }

        return result.join(separator);
    }

    /**
     * Copies text to the user clipboard.
     *
     * @param  {String} text
     * @return {Promise}
     */
    static async copyToClipboard(text) {
        text = "" + text // ensure that text is string

        if (!text.length || !window?.navigator?.clipboard) {
            return;
        }

        return window.navigator.clipboard.writeText(text).catch((err) => {
            console.warn("Failed to copy.", err);
        })
    }

    /**
     * Opens url address within a new popup window.
     *
     * @param  {String} url
     * @param  {Number} [width]  Popup window width (Default: 600).
     * @param  {Number} [height] Popup window height (Default: 480).
     * @param  {String} [name]   The name of the created popup window (default to "popup").
     * @return {Object} Reference to the newly created window.
     */
    static openInWindow(url, width, height, name) {
        width = width || 1024;
        height = height || 768;
        name = name || "popup";

        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;

        // normalize window size
        width = width > windowWidth ? windowWidth : width;
        height = height > windowHeight ? windowHeight : height;

        let left = (windowWidth / 2) - (width / 2);
        let top = (windowHeight / 2) - (height / 2);

        return window.open(
            url,
            name,
            "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left + ",resizable,menubar=no"
        );
    }
}
