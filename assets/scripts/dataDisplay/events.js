'use strict'
const apiDataDisplay = require('./api.js')
const uiDataDisplay = require('./ui.js')
const fourSquareDataRequest = function () {
  apiDataDisplay.fourSquareCall()
    .then(uiDataDisplay.fourSquareCallSuccess)
    .catch(uiDataDisplay.fourSquareCallFailure)
}

module.exports = {
  fourSquareDataRequest
}
