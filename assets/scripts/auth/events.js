'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const authApi = require('./api')
const authUi = require('./ui')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signIn(data)
    .then(authUi.signInSuccess) // User has preferences
    .catch(authUi.signInFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.credentials.password === data.credentials.password_confirmation) {
    authApi.signUp(data)
      .then(authUi.signUpSuccess)
      .catch(authUi.signUpFailure)
  } else {
    authUi.signUpPasswordFailure()
  }
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFailure)
}

const addHandlers = function () {
  $('#sign-in').on('submit', onSignIn)
  $('#sign-up').on('submit', onSignUp)
  $('#change-password').on('submit', onChangePassword)
}

module.exports = {
  addHandlers
}
