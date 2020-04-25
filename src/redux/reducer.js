/** @format */
import path from 'path';
import { combineReducers } from 'redux';

const files = require.context('@reducers', false, /\.js$/);

const modules = {};

files.keys().forEach(key => {
    const name = path.basename(key, '.js');
    const file = files(key);
    modules[name] = (file.__esModule && file.default) || files(key);
});

export default combineReducers(modules);
