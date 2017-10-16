'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      // .then(ui.signUpSuccess)
      .then(() => {
        setTimeout(() => {
          api.signIn(data)
            .then(ui.signInSuccess)
            .catch(ui.signUpFailure)
        }, 200)
      })
      .catch(ui.signUpFailure)
  } else {
    ui.signUpPasswordFailure()
  }
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Creates most of the game events.  Some area set based on the nav or when creating a new game
const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
