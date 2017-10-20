'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createPreference = (data) => {
  console.log(store)
  const createRequestData = {
    preference: {
      location: data.preference.location,
      search_radius: data.preference.search_radius,
      user_id: store.user.id
    }
  }

  return $.ajax({
    url: config.apiOrigin + '/preferences',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: createRequestData
  })
}

const updatePreference = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/preferences/' + store.user.preference.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deletePreference = () => {
  return $.ajax({
    url: config.apiOrigin + '/preferences/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  updatePreference,
  deletePreference,
  createPreference
}
