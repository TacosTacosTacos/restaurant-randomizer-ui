'use strict'
const store = require('../store.js')
const reuse = require('../reuse/reuse.js')
const navUi = require('../nav/ui.js')
const navEvents = require('../nav/events.js')

const signInSuccess = function (data) {
  store.user = data.user
  $('#messageExisting').text('')
  // Navigate the user to the display section of the application
  navUi.navSigningIn()
  navEvents.addAllNavHandlers()
  // TODO: Show loading animation

  // TODO: Call the retrieve data from fourSquare on sign in function from restraunt-display event
}

const signInFailure = function (error) {
  console.error(error)
  if (error.status === 401) {
    $('#messageExisting').text('Please enter a correct email and password')
    $('#messageExisting').show()
  } else {
    $('#messageExisting').text('Unexpected error')
    $('#messageExisting').show()
  }
}

const signUpSuccess = function (data) {
  reuse.updateFieldAddRemoveClassMessage('#messageNew', 'Signed up successfully', 'alert-success', 'alert-danger')
}
const signUpFailure = function (error) {
  console.error(error)
  reuse.updateFieldAddRemoveClassMessage('#messageNew', 'Unexpected error', 'alert-danger', 'alert-success')
}
const signUpPasswordFailure = () => {
  reuse.updateFieldAddRemoveClassMessage('#messageNew', 'Your passwords do not match', 'alert-danger', 'alert-success')
}

const changePasswordSuccess = function (data) {
  reuse.updateFieldAddRemoveClassMessage('#messageChangePassword', 'Password Changed Successfully', 'alert-success', 'alert-danger')
}
const changePasswordFailure = function (error) {
  console.error(error)
  reuse.updateFieldAddRemoveClassMessage('#messageChangePassword', 'Unexpected error', 'alert-danger', 'alert-success')
}

const signOutSuccess = function (data) {
  store.user = null
}
const signOutFailure = function (error) {
  console.error(error)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signUpPasswordFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
