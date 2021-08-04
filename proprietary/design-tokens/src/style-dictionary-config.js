const config = require('../style-dictionary.config.json');
const cssPropertyFormat = require('./css-property-formatter.js');
const figmaTokensFormat = require('./figma-tokens-formatter.js');
const jsonListFormat = require('./json-list-formatter.js');

const stringSort = (a, b) => (a === b ? 0 : a > b ? 1 : -1);
const destinationSort = (a, b) => stringSort(a.destination, b.destination);

module.exports = {
  format: {
    ...cssPropertyFormat,
    ...figmaTokensFormat,
    ...jsonListFormat,
  },
  source: ['../../components/**/*.style-dictionary.json', './src/**/*.style-dictionary.json'],
  ...config,
  platforms: {
    ...config.platforms,
    css: {
      ...config.platforms.css,
      files: [
        ...config.platforms.css.files,
        {
          destination: 'property.css',
          format: 'css/property',
        },
      ].sort(destinationSort),
    },
    json: {
      ...config.platforms.json,
      files: [
        ...config.platforms.json.files,
        {
          destination: 'index.json',
          format: 'json/list',
        },
      ].sort(destinationSort),
    },
    figma: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: 'figma-tokens.json',
          format: 'json/figma-tokens',
        },
      ],
    },
  },
};
