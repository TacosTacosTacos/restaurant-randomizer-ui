'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const restarauntDisplayTemplate = require('../templates/restaurant-display.handlebars')
const noRestarauntAvailableTemplate = require('../templates/restaurant-notavailable.handlebars')

const fourSquareMockup = require('./fourSquareResponseMockup.js')

const updateDisplay = () => {
  $('.content').hide()
  $('.content').children().remove()
  if (store.venues.length > 0) {
    const showRestaurant = restarauntDisplayTemplate({ venue: store.venues[0] })
    $('.content').append(showRestaurant)
    store.venues.shift()

    $('.restaurantReroll').on('click', updateDisplay)
  } else {
    const showRestaurant = noRestarauntAvailableTemplate({ venue: store.venues })
    $('.content').append(showRestaurant)
  }
  $('.content').show()
}

const fourSquareCallSuccess = function (data) {
  store.venues = JSON.parse(JSON.stringify(reuse.shuffle(fourSquareMockup.dataRefresh.venues)))
  updateDisplay()
}

// const preferenceFailure = function (error) {
//   console.error(error)
//   reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Unexpected error', 'alert-danger', 'alert-success')
// }

module.exports = {
  fourSquareCallSuccess
}
