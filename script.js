const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const passError = document.getElementById('errorpass')

form.addEventListener('submit', (e) => {
  let messages = ['']
  let messagesPass = ['']

  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messagesPass.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messagesPass.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messagesPass.push('Password cannot be password')
  }
  if (password.value === name.value) {
    messagesPass.push('Password cannot be the same as name')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(' ')
  }

  if (messagesPass.length > 0) {
    e.preventDefault()
    passError.innerText = messagesPass.join(' ')
  }

})
