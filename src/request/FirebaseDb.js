import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDCl1nXnlab2BCOC4XXvygdnZJp9I7fZo0',
  authDomain: 'products-catalog-velvetech.firebaseapp.com',
  databaseURL: 'https://products-catalog-velvetech.firebaseio.com',
  projectId: 'products-catalog-velvetech',
  storageBucket: 'products-catalog-velvetech.appspot.com',
  messagingSenderId: '857277101261',
  appId: '1:857277101261:web:7d2129c9ff121644d36584',
}

firebase.initializeApp(firebaseConfig)

export class FirebaseDb {
  constructor(dbName) {
    this.dbName = dbName
    this.db = firebase.database()
  }

  subscribeDb(callBack) {
    this.db.ref(this.dbName).on('value', callBack)
  }

  async addItem(payload) {
    if (!payload) {
      return
    }

    try {
      await this.db.ref(this.dbName).push(payload)
    } catch (error) {
      throw new Error(error)
    }
  }

  async removeItem(id) {
    if (!id) {
      return
    }

    try {
      await this.db.ref(this.dbName + '/' + id).remove()
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateItem(id, payload) {
    if (!id || !payload) {
      return
    }

    try {
      await this.db.ref(this.dbName + '/' + id).update(payload)
    } catch (error) {
      throw new Error(error)
    }
  }
}
