const Util = {

    delay: (ms) => {
        return new Promise((resolve) => {
            if (ms) {
                setTimeout(resolve, ms);
            } else {
                setImmediate(resolve);
            }
        });
    },

    isNum: (num) => {
        if (typeof (num) !== 'number' || isNaN(num)) {
            return false;
        }
        const isInvalid = function(n) {
            const N = Number;
            if (n === N.MAX_VALUE || n === N.MIN_VALUE || n === N.NEGATIVE_INFINITY || n === N.POSITIVE_INFINITY) {
                return true;
            }
            return false;
        };
        if (isInvalid(num)) {
            return false;
        }
        return true;
    },

    toNum: (num, toInt) => {
        if (typeof (num) !== 'number') {
            num = parseFloat(num);
        }
        if (isNaN(num)) {
            num = 0;
        }
        if (toInt) {
            num = Math.round(num);
        }
        return num;
    },

    numFix: (num, fix) => {
        const n = Util.toNum;
        let f = Util.isNum(fix) ? fix : 2;
        f = n(f, true);
        num = Math.round((n(num) * Math.pow(10, f + 1)) / 10) / Math.pow(10, f);
        num = num.toFixed(f);
        return num;
    },

    token: (len, pre = '') => {
        let str = Math.random().toString().substr(2);
        if (len) {
            str = str.substr(0, Util.toNum(len));
        }
        return pre + str;
    },

    isList: (data) => {
        if (data && data instanceof Array && data.length > 0) {
            return true;
        }
        return false;
    },

    guid: () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : ((r & 0x3) | 0x8);
            return v.toString(16);
        });
    },

    hasOwn: function(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    },


    replace: (str, obj, defaultValue) => {
        if (typeof str !== 'string' || !obj) {
            return str;
        }
        str = str.replace(/\{([^}]+)\}/g, function(match, key) {

            if (!Util.hasOwn(obj, key)) {
                if (typeof (defaultValue) !== 'undefined') {
                    return defaultValue;
                }
                return match;
            }

            let val = obj[key];

            if (typeof (val) === 'function') {
                val = val(obj, key);
            }

            if (typeof (val) === 'undefined') {
                val = '';
            }

            return val;

        });
        return str;
    },

    getValue: (data, dotPathStr, defaultValue) => {
        if (!dotPathStr) {
            return defaultValue;
        }
        let current = data;
        const list = dotPathStr.split('.');
        const lastKey = list.pop();
        while (current && list.length) {
            const item = list.shift();
            current = current[item];
        }
        if (current && Util.hasOwn(current, lastKey)) {
            const value = current[lastKey];
            if (typeof (value) !== 'undefined') {
                return value;
            }
        }
        return defaultValue;
    },

    toDate: function(input) {
        if (Util.isDate(input)) {
            return input;
        }

        //fix time zone issue by use "/" replace "-"
        const inputHandler = function(it) {
            if (typeof (it) !== 'string') {
                return it;
            }
            it = it.split('-').join('/');
            return it;
        };

        input = inputHandler(input);

        let date = new Date(input);
        if (Util.isDate(date)) {
            return date;
        }

        date = new Date();
        return date;
    },

    isDate: function(date) {
        if (!date || !(date instanceof Date)) {
            return false;
        }
        //is Date Object but Date {Invalid Date}
        if (isNaN(date.getTime())) {
            return false;
        }
        return true;
    }
};


export default Util;
