'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const navUi = require('../nav/ui.js')
const navEvents = require('../nav/events.js')

const preferenceCreateSuccess = function (data) {
  store.user.preference = data.preference
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Created Successfully', 'alert-success', 'alert-danger')
  navEvents.addHomeHandler()
  navUi.navHome()
}

const userCategoryGetSuccess = function (data) {
  console.log('ReturnedDBData', data.user_selected_categories)
  store.user.user_selected_categories = data.user_selected_categories
}

const userCategoryInsertSuccess = function (data) {
  console.log('It Worked', data)
}

const preferenceUpdateSuccess = function (data) {
  store.user.preference = data.preference
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Updated Successfully', 'alert-success', 'alert-danger')
  navUi.navHome()
}

const preferenceDeleteSuccess = function (data) {
  store.user.preference = ''
  $('#preferenceLocation').val('')
  $('#preferenceSearchRadius').val('')
  navUi.navDisableHome()

  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Deleted Successfully', 'alert-success', 'alert-danger')
}


const preferenceFailure = function (error) {
  console.error(error)
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Unexpected error', 'alert-danger', 'alert-success')
}

const preferenceDoNotExist = function () {
  reuse.updateFieldAddRemoveClassMessage('#messageUpdatePreferences', 'Preferences Record does not exist', 'alert-danger', 'alert-success')
}

module.exports = {
  preferenceUpdateSuccess,
  preferenceFailure,
  preferenceDeleteSuccess,
  preferenceDoNotExist,
  preferenceCreateSuccess,
  userCategoryInsertSuccess,
  userCategoryGetSuccess
}
