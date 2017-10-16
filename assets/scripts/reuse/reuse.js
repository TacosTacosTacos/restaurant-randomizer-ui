'use strict'
// Generic Functions to be reused as needed

const removeDisabledClassesNavArray = (stringArray) => {
  stringArray.forEach((id) => { $(id).removeClass('disabled') })
}

const addDisableClassNavArray = (stringArray) => {
  stringArray.forEach((id) => { $(id).addClass('disabled') })
}

const removeActiveClassesNavArray = (stringArray) => {
  stringArray.forEach((id) => { $(id).removeClass('active') })
}

const hideMultipleFields = (stringArray) => {
  stringArray.forEach((id) => { $(id).hide() })
}

const showMultipleFields = (stringArray) => {
  stringArray.forEach((id) => { $(id).show() })
}

const emptyMultipleTextFields = (stringArray) => {
  stringArray.forEach((id) => { $(id).text('') })
}

const updateFieldAddRemoveClassMessage = (fieldIDStr, newTextStr, addClassStr, removeClassStr) => {
// Example Call: updateFieldAddRemoveClassMessage('#messageNew', 'Signed up successfully', 'alert-success', 'alert-danger')
  $(fieldIDStr).text(newTextStr)
  $(fieldIDStr).addClass(addClassStr)
  $(fieldIDStr).removeClass(removeClassStr)
  $(fieldIDStr).show()
}

module.exports = {
  removeDisabledClassesNavArray,
  addDisableClassNavArray,
  removeActiveClassesNavArray,
  hideMultipleFields,
  emptyMultipleTextFields,
  updateFieldAddRemoveClassMessage,
  showMultipleFields
}
