import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/base64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
  const code = parseInt(moment().format('YYYYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    //console.log(doc.title)
    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A3:B3')

    const mostrarPromocao = sheetConfig.getCell(2, 0)
    //console.log(mostrarPromocao.value)
    const textoCell = sheetConfig.getCell(2, 1)
    //Nome	Email	WhatsApp	Cupom	Promo	Data Preenchimento

    let Cupom = ''
    let Promo = ''
    if (mostrarPromocao.value === 'VERDADEIRO') {
      Cupom = genCupom()
      Promo = textoCell.value
    }

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      WhatsApp: data.WhatsApp,
      Nota: parseInt(data.Nota),
      'Data Preenchimento': moment().format('DD/MM/YYYY, HH:mm:ss'),
      //moment().subtract(10, 'days').calendar();
      Cupom,
      Promo
    })
    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))

  } catch (error) {
    console.log(error)
    res.end('error')
  }
}