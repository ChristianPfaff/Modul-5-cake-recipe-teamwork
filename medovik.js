function portion() {
    let inputNumber = +document.getElementById('number1').value;
    let eggs = 3;
    let sugar = 390;
    let butter = 100;
    let honey = 2;
    let natron = 5;
    let powder = 500;
    let vanillasugar = 1;
    let other = 30;
    let milk = 400;
    let butterhard = 100;
    let creme = 200;

    let result1 = inputNumber * eggs;
    let result2 = inputNumber * sugar;
    let result3 = inputNumber * butter;
    let result4 = inputNumber * honey;
    let result5 = inputNumber * natron;
    let result6 = inputNumber * powder;
    let result7 = inputNumber * vanillasugar;
    let result8 = inputNumber * other;
    let result9 = inputNumber * milk;
    let result10 = inputNumber * butterhard;
    let result11 = inputNumber * creme;

    document.getElementById('eggs').innerHTML = `${result1}`;
    document.getElementById('sugar').innerHTML = `${result2}`;
    document.getElementById('butter').innerHTML = `${result3}`;
    document.getElementById('honey').innerHTML = `${result4}`;
    document.getElementById('natron').innerHTML = `${result5}`;
    document.getElementById('powder').innerHTML = `${result6}`;
    document.getElementById('vanillasugar').innerHTML = `${result7}`;
    document.getElementById('other').innerHTML = `${result8}`;
    document.getElementById('milk').innerHTML = `${result9}`;
    document.getElementById('butterhard').innerHTML = `${result10}`;
    document.getElementById('creme').innerHTML = `${result11}`;
}