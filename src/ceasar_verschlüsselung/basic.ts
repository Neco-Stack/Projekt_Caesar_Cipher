const originalText = document.querySelector('#textToCipher') as HTMLInputElement;
const keyCeasar = document.querySelector('#keyToCipher') as HTMLInputElement;
const encodeBtn = document.querySelector('#encodeBtn') as HTMLButtonElement; 
const decodeBtn = document.querySelector('#decodeBtn') as HTMLButtonElement;
const messageElement = document.querySelector('#message') as HTMLParagraphElement;

function caesarCipher (text: string, key: number): string {
    const alphaBet = 'abcdefghijklmnopqrstuvwxyz'
    let outputCode = ''; 
    key = key % 26; 
    text = text.toLowerCase();
    for (let i= 0; i < text.length; i++){
        let element = text[i];
        if (alphaBet.includes(element)){
            let index = alphaBet.indexOf(element)
            let newIndex = (index+key) % 26;
            let newElement= alphaBet[newIndex];
            outputCode += newElement; 
        } else {
            outputCode += element;
        }
    }
    return outputCode;
}
encodeBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("User hat Encode geklickt");
    const text = originalText.value;
    const key = parseInt(keyCeasar.value) || 0;
    const encodedText = caesarCipher(text, key);
    messageElement.textContent = `Encoded: ${encodedText}`;
    
});
decodeBtn?.addEventListener('click', (e) => {
    console.log("User hat Decode geklickt");
    e.preventDefault();
    const text = originalText.value; 
    const key = parseInt(keyCeasar.value) || 0; 
    const decodedText = caesarCipher(text, -key); 
    messageElement.textContent = `Decoded: ${decodedText}`;
    });

