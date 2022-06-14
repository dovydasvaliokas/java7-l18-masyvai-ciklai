window.onload = function() {
    // Susikuriu masyvą, kuris jau turi skaičius.
    const kainos = [3, 5, 12, 35.84, 147, 25.96, 15];
    console.log(kainos);


    // Susikuriu tuščią masyvą, į kurį įdėsiu elementus naudojant masyvo funkciją.
    const atlyginimai = [];
    atlyginimai.push(1200);
    atlyginimai.push(1500);
    atlyginimai.push(5242);
    atlyginimai.push(5123);
    atlyginimai.push(1200);
    atlyginimai.push(1252);
    atlyginimai.push(1265);
    atlyginimai.push(2412);

    console.log(atlyginimai);

    atlyginimai.push(1000);
    atlyginimai.push(1500);

    console.log(atlyginimai);

    // Išvedu trečią atlyginimą
    console.log(atlyginimai[2]);

    // Suskaičiuoju ir išvedu trečio ir šešto atlyginimų sumą
    let suma = atlyginimai[2] + atlyginimai[5];
    console.log(suma);

    // Ištrinu vieną paskutinį masyvo elementą
    atlyginimai.pop();

    console.log(atlyginimai);


    // Pakeičiu trečio algą į 3000
    atlyginimai[2] = 3000;


    // Išvedu trečią atlyginimą po pakeitimo
    console.log(atlyginimai[2]);


    // Suskaičiuoju ir išvedu trečio ir šešto atlyginimų sumą
    let suma2 = atlyginimai[2] + atlyginimai[5];
    console.log(suma2);


    // Ištrinu pačią pirmą algą
    atlyginimai.shift();

    console.log(atlyginimai);


    // Įdedu algą prieš nulinę
    atlyginimai.unshift(1750);
    
    console.log(atlyginimai);
}