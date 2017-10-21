'use strict'

const apiAuth = require('../auth/api.js')
const uiNav = require('./ui.js')
const uiAuth = require('../auth/ui.js')
const store = require('../store.js')
const home = (event) => {
  if (store.user.preference) {
    uiNav.navHome()
  }
}

const preferences = (event) => {
  if (store.user) {
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
  if (store.user) {
    onSignOut(event)
    uiNav.navSignOut()
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

module.exports = {
  addAllNavHandlers,
  addHomeHandler
}
