'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const restarauntDisplayTemplate = require('../templates/restaurant-display.handlebars')
const noRestarauntAvailableTemplate = require('../templates/restaurant-notavailable.handlebars')

const fourSquareMockup = require('./fourSquareResponseMockup.js')

const fourSquareCallSuccess = function (data) {
  store.venues = reuse.shuffle(fourSquareMockup.dataRefresh.venues)
  $('.content').children().remove()
  // TODO: figure out how to make it so that you can display just one item
  console.log(store.venues)
  if (store.venues.length > 0) {
    const showRestaurant = restarauntDisplayTemplate({ venue: store.venues[0] })
    $('.content').append(showRestaurant)
    store.venues.shift()
  } else {
    const showRestaurant = noRestarauntAvailableTemplate({ venue: store.venues })
    $('.content').append(showRestaurant)
  }
}

// const preferenceFailure = function (error) {
//   console.error(error)
//   reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Unexpected error', 'alert-danger', 'alert-success')
// }

module.exports = {
  fourSquareCallSuccess
}
