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
  // console.log(store.user.preference.length)
  if (store.user.preference) {
    $('#preferenceLocation').val(store.user.preference.location)
    $('#preferenceSearchRadius').val(store.user.preference.search_radius)

    $('#secRestaurantDisplay').show()
    reuse.removeDisabledClassesNavArray(['.home', '.preferences', '.signout'])
    reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
    $('.home').addClass('active')
  } else {
    $('#secUserPreferences').show()
    reuse.removeDisabledClassesNavArray(['.preferences', '.signout'])
    reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
    $('.preferences').addClass('active')
  }
}

const navPreferences = () => {
  hideAllNavSections()
  $('#secUserPreferences').show()
  reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
  $('.preferences').addClass('active')
}

const navHome = () => {
  hideAllNavSections()
  // TODO: Show loading screen
  $('#secRestaurantDisplay').show()
  reuse.removeDisabledClassesNavArray(['.home'])
  reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
  $('.home').addClass('active')
}

const navDisableHome = () => {
  reuse.addDisableClassNavArray(['.home'])
  $('#navHome').off('click')
}

const navEnableHome = () => {
  reuse.removeDisabledClassesNavArray(['.home'])
}

const navSignOut = () => {
  // TODO: Clear out all of the text fields
  reuse.emptyMultipleTextFields(['#messageNew', '#messageExisting', '#messageChangePassword', '#messageUpdatePreferences'])

  reuse.removeValMultipleTextFields(['#preferenceSearchRadius', '#preferenceLocation', '.chgpass'])
  reuse.hideMultipleFields(['#messageChangePassword', '#messageUpdatePreferences'])
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
  $('#messageUpdatePreferences').removeClass('alert-danger')
  $('#messageUpdatePreferences').removeClass('alert-success')
  // Clear the data store
  store.user = null
}

module.exports = {
  navSigningIn,
  navHome,
  navPreferences,
  navSignOut,
  navEnableHome,
  navDisableHome
}
