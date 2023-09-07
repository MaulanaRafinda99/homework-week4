let arrAngka = [];

for(let i = 1; i <= 100; i++) {
    
    arrAngka.push([i])
}

console.log(arrAngka);

// Menyortir bilangan genap :
let genap = [];
for (let i = 0; i <= 100; i++) {
    if (arrAngka[i] % 2 == 0) {
        genap.push(arrAngka[i]);
    }
}


// Mengambil angka genap yang sudah disortir sebanyak 50 data dari isi array angkaRandom.
let arrGenap = genap.slice(0, 50)
console.log("Array dengan data 50 bilangan genap :", arrGenap)


// Membuat logika untuk mendapatkan nilai paling kecil dari isi variabel arrGenap.
let min = null;
for (let angka of arrGenap) {
    if (min === null) {
        min = angka;
    } else if (angka < min) {
        angka = min
    }
}

// Cetak bilangan terendah dari 50 data array bilangan genap :
console.log("Nilai terendah dari array bilangan genap :", min);


// Membuat logika untuk mendapatkan nilai paling tinggi dari isi variabel arrGenap.
let max = 100;
for (let angka of arrGenap) {
    if (max === 100) {
        max = angka;
    } else if (angka > max) {
        max = angka;
    }
}

// Cetak bilangan tertinggi dari 50 data array bilangan genap :
console.log("Nilai tertinggi dari array bilangan genap :", max);


// Membuat logika untuk mendapatkan nilai rata-rata dari Array bilangan genap :
var sum = 0;

for (var angka of arrGenap) {
    sum += angka;
}

rataRata = sum / arrGenap.length;

hasil_rata_genap = rataRata.toFixed(4);
console.log("Nilai rata-rata dari array bilangan genap : ", hasil_rata_genap);

console.log(" ");
console.log("====================================================");
console.log(" ");

// Menyortir bilangan ganjil :
let ganjil = [];
for (let j = 0; j <= 100; j++) {
    if (arrAngka[j] % 2 != 0) {
        ganjil.push(arrAngka[j])
    }
}

// Menyimpan bilangan ganjil yang sudah disortir sebanyak 50 data dari isi array arrAngka.
let arrGanjil = ganjil.slice(0, 50);
console.log("Array dengan data 50 bilangan ganjil", arrGanjil);

// Membuat logika untuk mendapatkan nilai terendah dari isi variabel arrGanjil.
let minGanjil = null;
for (let angka of arrGanjil) {
    if (minGanjil === null) {
        minGanjil = angka;
    } else if (angka < minGanjil) {
        minGanjil = angka;
    }
}

// Cetak bilangan paling kecil dari 50 data array bilangan ganjil :
console.log("Nilai terendah dari array bilangan ganjil :", minGanjil);

// Membuat logika untuk mendapatkan nilai paling tinggi dari isi variabel arrGanjil.
let maxGanjil = 100;
for (let angka of arrGanjil) {
    if (maxGanjil === 100) {
        maxGanjil = angka;
    } else if (angka > maxGanjil) {
        maxGanjil = angka;
    }
}

// Cetak bilangan paling tinggi dari 50 data array bilangan ganjil :
console.log("Nilai tertinggi dari array bilangan ganjil :", maxGanjil);



// Membuat logika untuk mendapatkan nilai rata-rata dari Array bilangan ganjil :
for (var angka of arrGanjil) {
    sum += angka;
}

rataRata = sum / arrGanjil.length;

hasil_rata_ganjil = rataRata.toFixed(4);
console.log("Nilai rata-rata dari array bilangan ganjil : ", hasil_rata_ganjil);


// Membandingkan kedua buah array :
console.log(" ");
console.log("Hasil perbandingan dari array bilangan genap dengan array bilangan ganjil : ");
console.log(" ");
// Membandingkan nilai min :
if (min < minGanjil) {
    console.log("1. Nilai min array bilangan genap lebih kecil daripada array bilangan ganjil");
} else {
    console.log("1. Nilai min array bilangan genap lebih besar daripada array bilangan ganjil");
}

// Membandingkan nilai Max :
if (max < maxGanjil) {
    console.log("2. Nilai max array bilangan genap lebih kecil daripada array bilangan ganjil");
} else {
    console.log("2. Nilai max array bilangan genap lebih besar daripada array bilangan ganjil");
}

// Membandingkan nilai Rata-rata :
if (hasil_rata_genap < hasil_rata_ganjil) {
    console.log("3. Nilai rata-rata array bilangan genap lebih kecil daripada array bilangan ganjil");
} else {
    console.log("3. Nilai rata-rata array bilangan genap lebih besar daripada array bilangan ganjil");
}


