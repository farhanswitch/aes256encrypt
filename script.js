import { generatePass } from "./genPass.js"
import { encrypt } from "./encrypt.js"

const chiper = document.getElementById('cipher')
const plain = document.getElementById('plain')
const passf = document.getElementById('pass')
const input = document.getElementById('plaintext')
const encryptBtn = document.getElementById('encrypt')
const result = document.getElementsByClassName('result')[0]
const resetBtn  = document.getElementById('reset')

encryptBtn.addEventListener('click',()=>{
    if(input.value !== ''){
        let pass = generatePass()
    
    let encryptedText = encrypt(input.value,pass)

    result.style.display = 'block'
    plain.innerHTML =  input.value
    passf.value = pass
    chiper.value = encryptedText

    }
})
cipher.setAttribute('readonly','readonly')
pass.setAttribute('readonly','readonly')
resetBtn.addEventListener('click',()=>{
    result.style.display = 'none'
    input.value = ''
})


// The counter mode of operation maintains internal state, so to
// decrypt a new instance must be instantiated.
// var aesCtr = new aesjs.ModeOfOperation.ctr(passBytes, new aesjs.Counter(5));
// var decryptedBytes = aesCtr.decrypt(encryptedBytes);

// // Convert our bytes back into text
// var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
// console.log(decryptedText);
// plain.innerHTML = decryptedText
// plain.setAttribute('readonly','readonly')
// "Text may be any length you wish, no padding is required."