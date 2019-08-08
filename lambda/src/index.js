
import { parse } from 'fast-xml-parser'
import FTP from './utils/ftp'

export async function handler (event) {

  const ftp = await FTP()
  const results = await ftp.list('/')
  const xmlFiles = results.filter((file) => {
    return file.name.includes('.xml')
  })

  let jsonObj

  if (xmlFiles.length > 0) {
    const fileName = xmlFiles[0].name
    const xmlData = await ftp.read(fileName)
    jsonObj = parse(xmlData)
    await ftp.delete(fileName)
  }

  ftp.end()

  return jsonObj
}
