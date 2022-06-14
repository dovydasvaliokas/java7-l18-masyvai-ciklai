window.onload = function() {
    const pazymiai = [8, 6, 9, 10, 10, 4, 8, 6, 7, 10];

    console.log(pazymiai);

    isvedaMasyva(pazymiai);

    let suma = masyvoSuma(pazymiai);
    console.log(suma);

    const lyginiaiSkaiciai = issaugotiLyginiusNuo200Iki360();
  //  isvedaMasyva(lyginiaiSkaiciai);
    console.log(masyvoSuma(lyginiaiSkaiciai));

    console.log("------------------------------");

    const lyginiaiSkaiciai2 = issaugotiLyginiusNuo205Iki379();
    isvedaMasyva(lyginiaiSkaiciai2);
}


function isvedaMasyva(masyvas) {
    for (let i = 0; i < masyvas.length; i++) {
        console.log(masyvas[i]);
    }
}


function masyvoSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
       // suma = suma + masyvas[i];   // čia yra sumavimo ilgesnis variantas
        suma += masyvas[i];             // +=   sumuoja (prideda prie pirminės reikšmės)
    }
    return suma;
}


function issaugotiLyginiusNuo200Iki360() {
    const masyvas = [];
    for (let i = 200; i <= 360; i += 2) {
        masyvas.push(i);
    }
    return masyvas;
}




function issaugotiLyginiusNuo205Iki379() {
    const masyvas = [];
    for (let i = 205; i <= 379; i++) {
        if (arLyginis(i)) {
            masyvas.push(i);
        }
    }
    return masyvas;
}

function arLyginis(x) {
    return x % 2 === 0;
}