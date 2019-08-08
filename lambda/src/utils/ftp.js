
import Client from 'ftp'

const {
  FTP_HOSTNAME = '127.0.0.1',
  FTP_USERNAME = 'username',
  FTP_PASSWORD = 'password',
} = process.env

const CONFIG = {
  host: FTP_HOSTNAME,
  user: FTP_USERNAME,
  password: FTP_PASSWORD
}

export default function () {
  return new Promise((resolve, reject) => {
    const client = new Client()
    client.connect(CONFIG)
    client._list = client.list
    client.list = list
    client.read = read
    client._delete = client.delete
    client.delete = deleteFile
    const timeout = setTimeout(() => {
      reject()
    }, 10000)
    client.on('ready', () => {
      clearTimeout(timeout)
      resolve(client)
    })
  })
}

function deleteFile (path) {
  return new Promise((resolve, reject) => {
    this._delete(path, (error) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  }) 
}

function read (path) {
  return new Promise((resolve, reject) => {
    this.get(path, (error, stream) => {
      if (error) {
        reject(error)
      } else {
        let result = ''
        stream.on('data', (data) => {
          result += data.toString()
        })
        stream.on('end', () => {
          resolve(result)
        })
      }
    })
  })
}

function list (path) {
  return new Promise((resolve, reject) => {
    this._list(path, (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}
