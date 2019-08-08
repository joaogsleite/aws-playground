
import { parse } from 'fast-xml-parser'
import FTP from './utils/ftp'

export async function handler (event) {

  const ftp = await FTP()
  const results = await ftp.list('/')
  console.log(results)

  const xmlData = `
    <?xml version="1.0" encoding="UTF-8"?>
    <products>
      <product user="1">
        <id>1</id>
        <name>Example product</name>
      </product>
    </products>
    <users>
      <user>
        <id>1</id>
        <name>Example user</name>
      </user>
    </users>
  `

  ftp.end()

  const jsonObj = parse(xmlData)

  return jsonObj
}
