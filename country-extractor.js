var countryCount = require('country-count')
  , nameExtractor = require('name-extractor')

  , extract = function (input) {
      var names = nameExtractor(input)
          .map(function (name) {
            // remove plural s
            return name.replace(/'s$/, '')
          })
          .map(function (name) {
            return name.replace(/^[^A-Za-z\.]|,$/, '')
          })

      return Object.keys(countryCount(names))
    }

module.exports = extract