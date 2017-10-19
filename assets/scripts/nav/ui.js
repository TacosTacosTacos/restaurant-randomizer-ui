'use strict'

const store = require('../store.js')
const reuse = require('../reuse/reuse.js')

const hideAllNavSections = () => {
  $('#secHomeLoggedOut').hide()
  $('#secUserPreferences').hide()
  $('#secRestaurantDisplay').hide()
}

const navSigningIn = () => {
  hideAllNavSections()
  $('#secRestaurantDisplay').show()
  reuse.removeDisabledClassesNavArray(['.home', '.preferences', '.signout'])
  reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
  $('.home').addClass('active')
}

const navPreferences = () => {
  hideAllNavSections()
  $('#secUserPreferences').show()
  reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
  $('.preferences').addClass('active')
}

const navHome = () => {
  hideAllNavSections()
  $('#secRestaurantDisplay').show()
  reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
  $('.navHome').addClass('active')
}

const navSignOut = () => {
  // TODO: Clear out all of the text fields
  reuse.emptyMultipleTextFields(['#messageNew', '#messageExisting', '#messageChangePassword'])
  $('.chgpass').val('')

  hideAllNavSections()
  $('#secHomeLoggedOut').show()

  // TODO: Hide other error sub-sections and fields to give the next user a fresh start
  // reuse.hideMultipleFields([])

  reuse.addDisableClassNavArray(['.home', '.preferences', '.signout'])

  reuse.removeActiveClassesNavArray(['.game', '.stats', '.changePassword'])

  $('#messageNew').removeClass('alert-danger')
  $('#messageNew').removeClass('alert-success')
  $('#messageChangePassword').removeClass('alert-danger')
  $('#messageChangePassword').removeClass('alert-success')

  // Clear the data store
  store.store = null
}

module.exports = {
  navSigningIn,
  navHome,
  navPreferences,
  navSignOut
}
