module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ['relay', { artifactDirectory: './Component/__generated__' }],
      'relay'
    ]
  };
};
