'use strict'

const apiAuth = require('../auth/api.js')
const uiNav = require('./ui.js')
const uiAuth = require('../auth/ui.js')
const store = require('../store.js')
const home = (event) => {
  console.log(store.user.preference)
  uiNav.navHome()
}

const preferences = (event) => {
  if (store.user != null) {
    uiNav.navPreferences()
  }
}

const onSignOut = (event) => {
  event.preventDefault()
  apiAuth.signOut()
    .then(uiAuth.signOutSuccess)
    .catch(uiAuth.signOutFailure)
}

const signOut = (event) => {
  if (store.user != null) {
    onSignOut(event)
    uiNav.navSignOut()
    removeAllNavHandlers()
  }
}

const addHomeHandler = () => {
  $('#navHome').on('click', home)
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
  addAllNavHandlers,
  addHomeHandler
}
