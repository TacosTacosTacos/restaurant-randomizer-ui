'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const authApi = require('./api')
const authUi = require('./ui')

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  if (data.credentials.password === data.credentials.password_confirmation) {
    authApi.signUp(data)
      // .then(authUi.signUpSuccess)
      .then(() => {
        setTimeout(() => {
          authApi.signIn(data)
            .then(authUi.signInSuccess)
            .catch(authUi.signUpFailure)
        }, 200)
      })
      .catch(authUi.signUpFailure)
  } else {
    // Display an error when the user doesn't use matching passwords
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
