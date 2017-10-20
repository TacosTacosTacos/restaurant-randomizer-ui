'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store.js')
const preferenceAPI = require('./api.js')
const preferenceUi = require('./ui.js')

const onUpdatePreferences = function (event) {
  const data = getFormFields(this)

  if (store.user.preference) {
    // Preferences record exists.  Update
    preferenceAPI.updatePreference(data)
      .then(preferenceUi.preferenceUpdateSuccess)
      .catch(preferenceUi.preferenceFailure)
  } else {
    // Preferences record exists.  Insert
    preferenceAPI.createPreference(data)
      .then(preferenceUi.preferenceCreateSuccess)
      .catch(preferenceUi.preferenceFailure)
  }
  event.preventDefault()
}

const onDeletePreferences = function (event) {
  if (store.user.preference) {
    // Preferences available for deletion
    preferenceAPI.deletePreference()
      .then(preferenceUi.preferenceDeleteSuccess)
      .catch(preferenceUi.preferenceFailure)
  } else {
    // Preferences don't exist
    preferenceUi.preferenceDoNotExist()
  }
  event.preventDefault()
}

const addHandlers = function () {
  $('#changeRestaurantPreferences').on('submit', onUpdatePreferences)
  $('#stupidDeletionButton').on('click', onDeletePreferences)
}

module.exports = {
  addHandlers
}
