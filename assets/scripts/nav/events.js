'use strict'

const apiAuth = require('../auth/api.js')
const uiNav = require('./ui.js')
const uiAuth = require('../auth/ui.js')

const home = (event) => {
  uiNav.navHome()
}

const preferences = (event) => {
  uiNav.navPreferences()
}

const onSignOut = function (event) {
  event.preventDefault()
  apiAuth.signOut()
    .then(uiAuth.signOutSuccess)
    .catch(uiAuth.signOutFailure)
}

const signOut = (event) => {
  onSignOut(event)
  uiNav.navSignOut()
  removeAllNavHandlers()
}
const addAllNavHandlers = function () {
  $('#navHome').on('click', home)
  $('#navPreferences').on('click', preferences)
  $('#navSignOut').on('click', signOut)
}

const removeAllNavHandlers = function () {
  $('#navHome').off('click', home)
  $('#navPreferences').off('click', preferences)
  $('#navSignOut').off('click', signOut)
}
module.exports = {
  addAllNavHandlers
}
