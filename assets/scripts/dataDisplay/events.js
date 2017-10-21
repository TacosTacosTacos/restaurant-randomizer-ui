'use strict'
const apiDataDisplay = require('./api.js')
const uiDataDisplay = require('./ui.js')
const fourSquareDataRequest = function () {
// Simulated API Call using no variables.  Just passing token
// fourSquareCall doesn't return anything
  apiDataDisplay.fourSquareCall()
  // .then(
  // This function calll handles preparing the mock data and display
  uiDataDisplay.fourSquareCallSuccess()
  // )
  // .catch(uiDataDisplay.signOutFailure)
}

module.exports = {
  fourSquareDataRequest
}
