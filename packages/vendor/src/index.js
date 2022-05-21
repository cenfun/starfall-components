
import { uid } from 'uid';
import { parse } from 'marked';

import markedStyle from 'github-markdown-css/github-markdown-light.css';
const marked = {
    markedStyle,
    parse
};

import qrcode from 'qrcode';

import {
    clone,
    cloneDeep,
    debounce,
    merge,
    throttle
} from 'lodash';
const lodash = {
    clone,
    cloneDeep,
    debounce,
    merge,
    throttle
};

import vue from './vue.js';
import lit from './lit.js';


export {
    lit,
    lodash,
    marked,
    vue,
    qrcode,
    uid
};

export default {
    lit,
    lodash,
    marked,
    vue,
    qrcode,
    uid
};
