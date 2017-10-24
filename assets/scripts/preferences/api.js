'use strict'
const config = require('../config.js')
const store = require('../store.js')

// Store for API calls to CRUD on preference and user selected category data

const createPreference = (data) => {
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

const userCategoryGet = () => {
  return $.ajax({
    url: config.apiOrigin + '/user_selected_categories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const userCategoryInsert = (categoryId) => {
  const insertData = {
    'user_selected_category': {
      'restaurant_category_id': categoryId,
      'user_id': store.user.id
    }
  }

  return $.ajax({
    url: config.apiOrigin + '/user_selected_categories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: insertData
  })
}

const userCategoryDelete = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/user_selected_categories/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
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

const retrieveAddressFromGoogle = (crd) => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + crd.latitude + ',' + crd.longitude + '&key=AIzaSyCwxJaqlOMDni69JHseSy-PHw6MVWHCPFs'
  return $.ajax({
    url: url,
    method: 'GET'
  })
}

module.exports = {
  updatePreference,
  deletePreference,
  createPreference,
  userCategoryInsert,
  userCategoryGet,
  userCategoryDelete,
  retrieveAddressFromGoogle
}
