
import { parse } from 'fast-xml-parser'

export async function handler (event) {

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

  const jsonObj = parse(xmlData)

  return jsonObj
}
