window.onload = function() {
    const pazymiai = [8, 6, 9, 10, 10, 4, 8, 6, 7, 10];

    console.log(pazymiai);

    isvedaMasyva(pazymiai);

    let suma = masyvoSuma(pazymiai);
    console.log(suma);
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