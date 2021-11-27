
export function encrypt(text,pass){
    
    let textBytes = aesjs.utils.utf8.toBytes(text);
    
    const passBytes = aesjs.utils.utf8.toBytes(pass)

    let aesCtr = new aesjs.ModeOfOperation.ctr(passBytes, new aesjs.Counter(5));
    let encryptedBytes = aesCtr.encrypt(textBytes);

    // To print or store the binary data, you may convert it to hex
    let encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

    
    return encryptedHex


}