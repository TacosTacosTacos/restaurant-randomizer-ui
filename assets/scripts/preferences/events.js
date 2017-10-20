'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store.js')
const preferenceAPI = require('./api.js')
const preferenceUi = require('./ui.js')

const determineUserCategoryChanges = (insertOrDelete) => {
  let selectedCategoryIdValues = ($('.categories').val()).map((category) => { return parseInt(category) })
  selectedCategoryIdValues = selectedCategoryIdValues.map((category) => { return parseInt(category) })

  const currentlyStoredCategories = store.user.user_selected_categories.map((category) => {
    return category.restaurant_category_id
  })
  if (insertOrDelete === 'insert') {
    return selectedCategoryIdValues.filter((id) => {
      return currentlyStoredCategories.includes(id) === false
    })
  } else if (insertOrDelete === 'delete') {
    const deletionIds = currentlyStoredCategories.filter((id) => {
      return selectedCategoryIdValues.includes(id) === false
    })

    store.user.user_selected_categories.map((category) => {

    })
    const deletionRecords = store.user.user_selected_categories.filter((category) => {
      return deletionIds.includes(category.restaurant_category_id) === true
    })

    return deletionRecords
  }
}

const updateInMemoryUserCategories = () => {
  // Update local list of preferences
  preferenceAPI.userCategoryGet()
    .then(preferenceUi.userCategoryGetSuccess)
    .catch(preferenceUi.preferenceFailure)
}

const onUpdatePreferences = function (event) {
  const data = getFormFields(this)
  const categoryIdInserts = determineUserCategoryChanges('insert')
  const categoryRecordDeletes = determineUserCategoryChanges('delete')

  if (categoryIdInserts.length !== 0) {
  // Complete needed insert statements
    categoryIdInserts.forEach((categoryId) => {
      preferenceAPI.userCategoryInsert(categoryId)
        .then(updateInMemoryUserCategories)
        .catch(preferenceUi.preferenceFailure)
    })
  }

  if (categoryRecordDeletes.length !== 0) {
    categoryRecordDeletes.forEach((record) => {
      preferenceAPI.userCategoryDelete(record.id)
        .then(updateInMemoryUserCategories)
        .catch(preferenceUi.preferenceFailure)
    })
  }

  if (store.user.preference) {
    // Preferences record exists.  Update
    preferenceAPI.updatePreference(data)
      .then(preferenceUi.preferenceUpdateSuccess)
      .catch(preferenceUi.preferenceFailure)
  } else {
    // Preferences record exists.  Insert
    preferenceAPI.createPreference(data)
      .then(preferenceUi.preferenceCreateSuccess)
      .catch(preferenceUi.preferenceFailure)
  }
  event.preventDefault()
}

const onDeletePreferences = function (event) {
  if (store.user.preference) {
    // Preferences available for deletion
    preferenceAPI.deletePreference()
      .then(preferenceUi.preferenceDeleteSuccess)
      .catch(preferenceUi.preferenceFailure)
  } else {
    // Preferences don't exist
    preferenceUi.preferenceDoNotExist()
  }
  event.preventDefault()
}

const addHandlers = function () {
  $('#changeRestaurantPreferences').on('submit', onUpdatePreferences)
  $('#stupidDeletionButton').on('click', onDeletePreferences)
}

module.exports = {
  addHandlers
}
