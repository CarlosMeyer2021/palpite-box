import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  //console.log(fromBase64(process.env.SHEET_PRIVATE_KEY))
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    //console.log(doc.title)
    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A3:B3')

    const mostrarPromocao = sheet.getCell(2, 0)
    //console.log(mostrarPromocao.value)
    const textoCell = sheet.getCell(2, 1)
    //console.log(textoCell.value)

    res.end(JSON.stringify({
      showCoupon: mostrarPromocao.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (error) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }


}