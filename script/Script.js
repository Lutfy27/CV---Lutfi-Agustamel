const txtElement = ['Saya seorang fresh graduate lulusan S1 Sistem Informasi Tahun 2022. Memiliki kemampuan dalam menganalisa, pemecahan masalah, dan critical thinking. Memiliki ketertarikan yang lebih pada pengolahan data dan menganalisis data untuk menghasilkan insight. Mencari kesempatan untuk mengembangkan bakat dan memiliki semangat yang tinggi dalam bekerja.'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ketik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.ketik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(ketik, 70);


})();