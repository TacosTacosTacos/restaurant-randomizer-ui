'use strict'
const apiDataDisplay = require('./api.js')
const uiDataDisplay = require('./ui.js')
const fourSquareDataRequest = function () {
// Simulated API Call using no variables.  Just passing token

  apiDataDisplay.fourSquareCall()
  // .then(
  uiDataDisplay.fourSquareCallSuccess()
  // )
  // .catch(uiDataDisplay.signOutFailure)
}

module.exports = {
  fourSquareDataRequest
}
