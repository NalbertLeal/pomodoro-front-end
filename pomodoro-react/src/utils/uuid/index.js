// --------------- help functions ----------------------

let ajust7thByte = (inByte) => {
  let tempByte = inByte & 15
  // tempByte = tempByte >> 4

  return tempByte | 64
}

let ajust9thByte = (inByte) => {
  let tempByte = inByte & 63
  // tempByte = tempByte >> 2

  return tempByte | 128
}

let convetDecimalToHexadecimal = (byte) => {
  let hex = byte.toString(16)
  if (hex.length < 2) hex = '0' + hex
  return hex
}

// --------------- the main fuctions ----------------------

let random16bytes = () => {
  let bytesArray = []
  for(let index = 0; index < 16; index++) {
    let randomValue = Math.random() * 255
    let intRandomValue = Number.parseInt(randomValue)
    bytesArray.push(intRandomValue)
  }

  return bytesArray
}

let ajustBytes = (bytes) => {
  let ajusted7thByte = ajust7thByte(bytes)
  let ajusted9thByte = ajust9thByte(bytes)

  bytes[6] = ajusted7thByte
  bytes[8] = ajusted9thByte

  return bytes
}

let convert16bytesToHexadecimal = (bytes) => {
  let uuid = ''
  for(let index = 0; index < 16; index++) {
    if(index == 4 || index == 6 || index == 8 || index == 10) {
      uuid += '-'
    }

    let hexadecimalValue = convetDecimalToHexadecimal(bytes[index])
    uuid += hexadecimalValue.toUpperCase()
  }
  return uuid
}

let main = () => {
  let bytes = random16bytes()
  ajustBytes(bytes)
  return convert16bytesToHexadecimal(bytes)
}

module.exports = main