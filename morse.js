const message = "hello world";

function getLatinCharacterList(text){
    let characters = [];
    for (let i = 0; i < text.length; i++){
        characters.push(text[i]);
    }
    return characters;
}
const characterslist = getLatinCharacterList(message);
console.log(characterslist);

const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function translateLatinCharacter(character){
    return latinToMorse[character];
}
console.log(translateLatinCharacter("A"));

function encode(text2){
   
}
console.log(encode);