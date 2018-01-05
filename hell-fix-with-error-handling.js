class Api {
  constructor () {
    this.user = { id: 1, name: 'test' }
    this.friends = [ this.user, this.user, this.user ]
    this.photo = 'not a real photo'
  }

  getUser () {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.user), 200)
    })
  }

  getFriends (userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.friends.slice()), 200)
    })
  }

  getPhoto (userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.photo), 200)
    })
  }

  throwError () {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Intentional Error')), 200)
    })
  }
}

async function aysncAwaitTryCatch () {
  try {
    const api = new Api()
    const user = await api.getUser()
    const friends = await api.getFriends(user.id)

    await api.throwError()
    console.log('Error was not thrown')

    const photo = await api.getPhoto(user.id)
    console.log('async/await', { user, friends, photo })
  } catch (err) {
    console.error(err)
  }
}

aysncAwaitTryCatch()