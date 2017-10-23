'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const restarauntDisplayTemplate = require('../templates/restaurant-display.handlebars')
const noRestarauntAvailableTemplate = require('../templates/restaurant-notavailable.handlebars')

const updateDisplay = () => {
  // Hides the existing content on the data display / home page
  // Removes all of the previously appended content within it
  $('.content').hide()
  $('.content').children().remove()

  if (store.venues.length > 0) {
    // Takes the first value from the returned data and formats it for display
    const showRestaurant = restarauntDisplayTemplate({ venue: store.venues[0] })
    // Appends the data to the content div and remove it from the array of restaurant information
    $('.content').append(showRestaurant)
    store.venues.shift()
    // Creates the onclick event for the newly created reroll button
    $('.restaurantReroll').on('click', updateDisplay)
  } else {
    // Displays when there is no more data left to display
    const showRestaurant = noRestarauntAvailableTemplate({ venue: store.venues })
    $('.content').append(showRestaurant)
  }
  // Shows newly defined content using an animation
  $('.content').fadeIn('slow')
}

const fourSquareCallSuccess = function (data) {
  // FourSquare Call
  // I am also calling the shuffle function from the reuse library to randomly sort the returned data.
  // Technically my reshuffle button isn't shuffling, but the user won't know, and it is more efficient
  // to do things this way.  After the data is stored, it is displayed
  store.venues = reuse.shuffle(data.venues)
  console.log(store.venues)
  updateDisplay()
}

// const preferenceFailure = function (error) {
//   console.error(error)
//   reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Unexpected error', 'alert-danger', 'alert-success')
// }

module.exports = {
  fourSquareCallSuccess
}
