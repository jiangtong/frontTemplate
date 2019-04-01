const getOptions = require('loader-utils').getOptions;

module.exports = function loader(source) {
    const options = getOptions(this);
    source = source + '111123123';
    return `module.exports = ${ JSON.stringify(source) }`;
};