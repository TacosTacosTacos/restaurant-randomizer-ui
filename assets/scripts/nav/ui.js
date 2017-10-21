'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const dataDisplay = require('../dataDisplay/events.js')

const hideAllNavSections = () => {
  // Hides all sections from display.  Used before showing a section
  $('#secHomeLoggedOut').hide()
  $('#secUserPreferences').hide()
  $('#secRestaurantDisplay').hide()
}

const navSigningIn = () => {
  hideAllNavSections()

  // When the user has preferences, bring them to the display page
  // When the user doesn't have preferences bring them to the preferences page
  if (store.user.preference) {
    // Set form values
    $('#preferenceLocation').val(store.user.preference.location)
    $('#preferenceSearchRadius').val(store.user.preference.search_radius)

    store.user.user_selected_categories.map((category) => {
      $('#categoryId' + category.restaurant_category_id).prop('selected', true)
    })

    // Bring users to the display page & pull fourSquareData
    $('#secRestaurantDisplay').show()
    dataDisplay.fourSquareDataRequest()

    // Enable Nav
    reuse.removeDisabledClassesNavArray(['.home', '.preferences', '.signout'])
    reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
    $('.home').addClass('active')
  } else {
    // Bring users to the preference secUserPreferences
    $('#secUserPreferences').show()

    // Enable Nav and set active class on nav
    reuse.removeDisabledClassesNavArray(['.preferences', '.signout'])
    reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
    $('.preferences').addClass('active')
  }
}

const navPreferences = () => {
  // Hide all sections and then show the preferences screen
  hideAllNavSections()
  $('#secUserPreferences').show()
  // Set Active class on Nav
  reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
  $('.preferences').addClass('active')
}

const navHome = () => {
  // Hide all sections and then show the display screen
  hideAllNavSections()
  $('#secRestaurantDisplay').show()
  // Set Active class on Nav and enable nav for home screen (used when preferences are added)
  reuse.removeDisabledClassesNavArray(['.home'])
  reuse.removeActiveClassesNavArray(['.home', '.preferences', '.signout'])
  $('.home').addClass('active')
}

const navDisableHome = () => {
  // Enable nav for home screen (used when preferences are removed)
  reuse.addDisableClassNavArray(['.home'])
}

const navEnableHome = () => {
  // Enable nav for home screen (used when preferences are added)
  reuse.removeDisabledClassesNavArray(['.home'])
}

const navSignOut = () => {
  // Clear the values of all success/error message fields
  reuse.emptyMultipleTextFields(['#messageNew', '#messageExisting', '#messageChangePassword', '#messageUpdatePreferences'])

  // Clear out the values of the fields on the preference page and hide associated messages
  reuse.removeValMultipleTextFields(['#preferenceSearchRadius', '#preferenceLocation', '.chgpass'])
  reuse.hideMultipleFields(['#messageChangePassword', '#messageUpdatePreferences'])

  store.user.user_selected_categories.map((category) => {
    $('#categoryId' + category.restaurant_category_id).prop('selected', false)
  })

  // Bring the user to the logged out page
  hideAllNavSections()
  $('#secHomeLoggedOut').show()

  // Reset the nav bar
  reuse.addDisableClassNavArray(['.home', '.preferences', '.signout'])
  reuse.removeActiveClassesNavArray(['.game', '.stats', '.changePassword'])

  // Remove alert classes on message fields
  $('#messageNew').removeClass('alert-danger')
  $('#messageNew').removeClass('alert-success')
  $('#messageChangePassword').removeClass('alert-danger')
  $('#messageChangePassword').removeClass('alert-success')
  $('#messageUpdatePreferences').removeClass('alert-danger')
  $('#messageUpdatePreferences').removeClass('alert-success')

  // Clear the data store
  store.user = ''
}

module.exports = {
  navSigningIn,
  navHome,
  navPreferences,
  navSignOut,
  navEnableHome,
  navDisableHome
}
