'use strict'

const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const dataDisplay = require('../dataDisplay/events.js')

const hideAllNavSections = () => {
  $('#secHomeLoggedOut').hide()
  $('#secUserPreferences').hide()
  $('#secRestaurantDisplay').hide()
}

const navSigningIn = () => {
  hideAllNavSections()

  if (store.user.preference) {
    $('#preferenceLocation').val(store.user.preference.location)
    $('#preferenceSearchRadius').val(store.user.preference.search_radius)

    store.user.user_selected_categories.map((category) => {
      console.log(category)
      console.log('#categoryId' + category.restaurant_category_id)
      console.log('val', $('#categoryId' + category.restaurant_category_id).val())
      $('#categoryId' + category.restaurant_category_id).attr('selected', true)

      console.log($('#categoryId' + category.restaurant_category_id).attr('selected'))
    })

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

  dataDisplay.fourSquareDataRequest()
}

const navDisableHome = () => {
  reuse.addDisableClassNavArray(['.home'])
  $('#navHome').off('click')
}

const navEnableHome = () => {
  reuse.removeDisabledClassesNavArray(['.home'])
}

const navSignOut = () => {
  reuse.emptyMultipleTextFields(['#messageNew', '#messageExisting', '#messageChangePassword', '#messageUpdatePreferences'])

  reuse.removeValMultipleTextFields(['#preferenceSearchRadius', '#preferenceLocation', '.chgpass'])
  reuse.hideMultipleFields(['#messageChangePassword', '#messageUpdatePreferences'])
  hideAllNavSections()
  $('#secHomeLoggedOut').show()

  console.log($('.categoryOption'))
  $('.categoryOption').removeAttr('selected')
  console.log($('.categoryOption').attr('selected'))

  reuse.addDisableClassNavArray(['.home', '.preferences', '.signout'])

  reuse.removeActiveClassesNavArray(['.game', '.stats', '.changePassword'])

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
