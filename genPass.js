const smallAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const alphabet = []
smallAlphabet.forEach(element=>{
    alphabet.push(element.toUpperCase())
})
const number = [0,1,2,3,4,5,6,7,8,9]
const sym = [',','.','/','?',';',':','[',']','{','}','_','=','!','@','#','$','^','&','(',')']
const materials = [...smallAlphabet,...alphabet,...number,...sym]
// console.log(materials)
export function generatePass(){
    let  pass = ''
    for(let i = 0;i<32;i++){
        let angka = Math.floor(Math.random() * (81-1)+1)
        pass += materials[angka]

    }
    return pass
}



