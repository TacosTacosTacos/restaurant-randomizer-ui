'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const navUi = require('../nav/ui.js')
const navEvents = require('../nav/events.js')
const dataDisplayEvents = require('../dataDisplay/events.js')

const preferenceCreateSuccess = function (data) {
  // Stores the user preference data and
  // adds the handlers for being able to navigate to the other sections of the application.
  store.user.preference = data.preference
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Created Successfully', 'alert-success', 'alert-danger')
  navEvents.addHomeHandler()
}

const userCategoryGetSuccess = function (data) {
  // Stores the users selected categories
  store.user.user_selected_categories = data.user_selected_categories
}

const userCategoryInsertSuccess = function (data) {
  // Created for consistancy.  The application is using a get to store all of the users
  // category information, and not appending after each api call.  This is done to meet
  // CRUD project requirements.
}

const preferenceUpdateSuccess = function (data) {
  store.user.preference = data.preference
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Updated Successfully', 'alert-success', 'alert-danger')
}

const preferenceDeleteSuccess = function (data) {
  // Clears out the form and preference store data.
  store.user.preference = ''
  $('#preferenceLocation').val('')
  $('#preferenceSearchRadius').val('')
  navUi.navDisableHome()

  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Deleted Successfully', 'alert-success', 'alert-danger')
}

const preferenceChangeMade = function () {
  // Initiates the FourSquare request and does navigation work
  $('.content').hide()
  $('.sk-cube-grid').show()
  setTimeout(() => {
    dataDisplayEvents.fourSquareDataRequest()
  }, 200)

  navUi.navHome()
}

const preferenceFailure = function (error) {
  console.error(error)
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Unexpected error', 'alert-danger', 'alert-success')
}

const preferenceDoNotExist = function () {
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Record does not exist', 'alert-danger', 'alert-success')
}

const googleRetrievalSuccess = function (data) {
  $('#preferenceLocation').val(data.results[0].formatted_address)
  $('#getAddress').prop('disabled', false)
}

const googleRetrievalFailure = function () {
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Unexpected error', 'alert-danger', 'alert-success')
  $('#getAddress').prop('disabled', false)
}

module.exports = {
  preferenceUpdateSuccess,
  preferenceFailure,
  preferenceDeleteSuccess,
  preferenceDoNotExist,
  preferenceCreateSuccess,
  userCategoryInsertSuccess,
  userCategoryGetSuccess,
  preferenceChangeMade,
  googleRetrievalSuccess,
  googleRetrievalFailure
}
