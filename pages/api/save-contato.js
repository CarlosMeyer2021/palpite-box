import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[3]
    const data = JSON.parse(req.body)
    //console.log(doc.title)
    const sheetConfig = doc.sheetsByIndex[3]
    //console.log(doc.sheetsByIndex[3])
    await sheetConfig.loadCells('A3:B3')

    const enviaContato = await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Telefone: data.Telefone,
      Mensagem: data.Mensagem,
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      //moment().subtract(10, 'days').calendar();
    })

  } catch (error) {
    //console.log(error)
    res.end('error')
  }
}