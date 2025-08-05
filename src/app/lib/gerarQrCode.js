'use server'

import QRCode from 'qrcode'

const generateQR = async (text) => {
  try {
    const qrCode = await QRCode.toDataURL(text)
    return qrCode
  } catch (err) {
    console.error(err)
  }
}

export default generateQR;