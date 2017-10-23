'use strict'
const config = require('../config.js')
const store = require('../store.js')

// Used for calling my foursquare middle man API
const fourSquareCall = () => {
  return $.ajax({
    url: config.apiOrigin + '/foursquare',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  fourSquareCall
}
