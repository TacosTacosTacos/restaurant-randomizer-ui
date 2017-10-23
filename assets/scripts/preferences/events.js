'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store.js')
const preferenceAPI = require('./api.js')
const preferenceUi = require('./ui.js')

// This function is used to detemine if any categories need to be inserted or deleted
const determineUserCategoryChanges = (insertOrDelete) => {
  // Pull back the categories the user selected on the form and convert them to INT
  const selectedCategoryIdValues = ($('.categories').val()).map((category) => {
    return parseInt(category)
  })
  // Create an array of the Category IDs stored in the database
  const currentlyStoredCategories = store.user.user_selected_categories.map((category) => {
    return category.restaurant_category_id
  })

  if (insertOrDelete === 'insert') {
    // Return the Category IDs that should be inserted
    return selectedCategoryIdValues.filter((id) => {
      return currentlyStoredCategories.includes(id) === false
    })
  } else if (insertOrDelete === 'delete') {
    // Determine the category ids for deletion
    const deletionIds = currentlyStoredCategories.filter((id) => {
      return selectedCategoryIdValues.includes(id) === false
    })

    // Convert the category ids into user selected category records that need to be deleted from the database
    const deletionRecords = store.user.user_selected_categories.filter((category) => {
      return deletionIds.includes(category.restaurant_category_id) === true
    })

    // Return the user category records for deletion
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
  // Retrieves the form data
  const data = getFormFields(this)
  // Calls functions for creating arrays of data for insertion/deletion
  const categoryIdInserts = determineUserCategoryChanges('insert')
  const categoryRecordDeletes = determineUserCategoryChanges('delete')
  event.preventDefault()

  const categoryAndPreferencePromise = new Promise(
    function (resolve, reject) {
      if (categoryIdInserts.length !== 0) {
        // Complete needed insert statements
        categoryIdInserts.forEach((categoryId) => {
          preferenceAPI.userCategoryInsert(categoryId)
            .then(updateInMemoryUserCategories)
            .catch(preferenceUi.preferenceFailure)
        })
      }

      if (categoryRecordDeletes.length !== 0) {
        // Complete needed delete statements
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
      resolve() // fulfilled
    }
  )
  // All other requests have been completed.  Make 4S request
  categoryAndPreferencePromise.then(preferenceUi.preferenceChangeMade)
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
