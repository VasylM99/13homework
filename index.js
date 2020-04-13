function* createIdGenerator() {
    let i = 0;
    while (true) {
        yield ++i;
    }
}
let idGenerator = createIdGenerator();
console.log('idGenerator: ', idGenerator.next().value);
console.log('idGenerator: ', idGenerator.next().value);
console.log('idGenerator: ', idGenerator.next().value);


function* newFontGenerator(fontSize) {
    while (true) {
        let val = yield fontSize;
        if (val === 'up') {
            fontSize +=2
        }else if(val === 'down'){
            fontSize -= 2;
        }   
    }
}

let fontGenerator = newFontGenerator(14);

console.log('fontGenerator : ', fontGenerator.next('up').value );
console.log('fontGenerator: ', fontGenerator.next('up').value);
console.log('fontGenerator: ', fontGenerator.next('up').value);
console.log('fontGenerator: ', fontGenerator.next().value);
console.log('fontGenerator: ', fontGenerator.next('down').value);
console.log('fontGenerator: ', fontGenerator.next('down').value);
console.log('fontGenerator: ', fontGenerator.next('down').value);
console.log('fontGenerator: ', fontGenerator.next().value);

let buttonUp = document.querySelector('.button-up');
let buttonDown = document.querySelector('.button-down');
let text = document.querySelector('.text');
text.style.fontSize = fontGenerator.next().value + 'px'; 

buttonUp.addEventListener('click',function () {
    let up = fontGenerator.next('up').value;
    text.style.fontSize = `${up}px`;
    console.log('fontGenerator: ', fontGenerator.next().value);
    
});

buttonDown.addEventListener('click',function () {
    let down = fontGenerator.next('down').value;
    text.style.fontSize = `${down}px`;
    console.log('fontGenerator: ', fontGenerator.next().value);
    
})