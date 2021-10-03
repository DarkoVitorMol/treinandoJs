
//Strings

const text1 = "Hello World!"
const text2 = ' | Fuck You World!'

console.log(text1); //Show string
console.log(text1 + text2); //String concatenate

//Unicode Special Characters (UTF-16 - bits)

    const cifrao = '\u0024' //Every \u indicates that its a Unicode
    const aMaiusculo = '\u0041'
    const tique = '\u2705'
    const hiragana = '\u3041'

    console.log(cifrao)
    console.log(aMaiusculo)
    console.log(tique)
    console.log(hiragana)

//Strings functions

    const cidade = "belo horizonte";
    const input = "Belo Horizonte";

    console.log(cidade === input); // === Compares and return false without a match

        //Input -> toLowerCase()

            const cidade = "belo horizonte";
            const input = "Belo Horizonte";
            const inputMinusculo = input.toLowerCase();

            console.log(cidade === inputMinusculo); // === Compares and return false without a match
            
            //.length

                const senha = "minhaSenha123"
                console.log(senha.length) // Returns the length of the stringf