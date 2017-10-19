'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const onUpdatePreferences = function (event) {
  const data = getFormFields(this)
  console.log(data)
  // console.log(data.preferences)
  // const selectedCategoryValues = $('.categories').val()
  // console.log(selectedCategoryValues)

  // Compare previously retrieved values vs selected values

  // Determine Category delete and update calls.  Alternatively do no calls

  // Determine if changes needed to preference table and make insert, update, or no calls

  // If all needed calls are successful, then update the fourSquare data

  // Determine the venue limit for each foursquare call
  // const fourSquareVenueLimitPerCall = Math.floor(50 / selectedCategoryValues.length)
  // console.log(fourSquareVenueLimitPerCall)

  event.preventDefault()
  // preferencesApi.changePassword(data)
  //   .then(ui.changePasswordSuccess)
  //   .catch(ui.changePasswordFailure)
}

const addHandlers = function () {
  $('#changeRestaurantPreferences').on('submit', onUpdatePreferences)
}

module.exports = {
  addHandlers
}
