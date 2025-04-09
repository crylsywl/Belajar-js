// Type data
// 1. String
const greeting = "Hello, World!";
const name = 'Alice';
const welcomeMessage = `Welcome, ${name}!`;
alert(greeting);         // Output: Hello, World!
console.log(name);              // Output: Alice
console.log(welcomeMessage);    // Output: Welcome, Alice!

// 2. Boolean
const isLoggedIn = true;
const hasAccess = false;
console.log(isLoggedIn);      // Output: true
console.log(hasAccess);       // Output: false

// Penggunaan kondisi dengan boolean
if (isLoggedIn) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

// 3. Number
const age = 25;
const temperature = -5.5;
const pi = 3.14159;
const m = 1e9;
console.log(age);            // Output: 25
console.log(temperature);    // Output: -5.5
console.log(pi);             // Output: 3.14159
console.log(m);              // Output: 1000000000

// 4. Array
const fruits = ["apple", "banana", "cherry"];
console.log(fruits);         // Output: ["apple", "banana", "cherry"]
console.log(fruits[0]);      // Output: apple

// 5. Object
const person = {
  name: "Bob",
  age: 30,
  isEmployee: true,
  address: {
    street: "123 Maple St",
    city: "Springfield"
  }
};
console.log(person);                  // Output: { name: "Bob", age: 30, isEmployee: true, address: { ... } }

// 6. Console log
console.log(person.name);             // Output: Bob
console.log(person.address.city);     // Output: Springfield

// 7. Operator
let a = 1;
let b = 3;
console.log(a < 10 && b < 10);
console.log(a > 10 || b == 4);

// 8. Equality Comparison
const c = "20";
const d = 20;

console.log(c == d);
console.log(c === d);


// Control Flow
// 1. for loop untuk mencetak lirik chorus klasik "I'm Blue" oleh Eiffel 65
for (let i = 1; i <= 6; i++) {
    console.log(i+". Da ba dee da ba daa");
  }

// 2. for loop counts down
for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
  }

// 3. mencetak setiap nama dalam huruf besar
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}


// Function
// 1. Print Heart
function printHeart() {
    console.log("<3");
}

printHeart();

// 2. Perkalian
function multiply(x, y) {
    return x * y;
}

console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

// 3. menampilkan animal di dalam funtion
// A.
let animal = "Giant Pacific Octopus";
function observe() {
    let animal = "Pajama Squid"; 
    console.log(animal);
}
observe();

//B.
let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
let deadlyAnimal = "Scorpionfish";
console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal)

// 4. Arrow Function
const sayHello = (name) => `Hello ${name}!`;
console.log(sayHello("Hagrid")); 
console.log(sayHello("Luna")); 

//Exception
// 1. Set Time
function setTime() {
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
  }
  setInterval(setTime, 1000);
  console.log("Program Finish");

// 2. Pembagian Dua angka
  function divide(a, b) {
    try {
        // Periksa apakah kedua input adalah angka
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("Input harus berupa angka.");
        }

        // Periksa apakah pembagi adalah nol
        if (b === 0) {
            throw new Error("Tidak dapat membagi dengan nol.");
        }

        // Jika semua pemeriksaan lolos, lakukan pembagian
        return a / b;
    } catch (error) {
        console.error("Terjadi kesalahan: " + error.message);
        return error.message; // Mengembalikan pesan kesalahan untuk ditampilkan
    }
}

function handleDivision() {

    // Ambil nilai dari input
    const num1Value = document.getElementById("num1").value;
    const num2Value = document.getElementById("num2").value;

    // Ambil nilai dari input dan ubah menjadi angka
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

     // Periksa apakah kedua input diisi
     if (num1Value === "" || num2Value === "") {
        document.getElementById("result").textContent = "Error: Kedua input harus diisi.";
        return; // Menghentikan fungsi jika salah satu input kosong
    }

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Error: Input harus berupa angka.";
        return; // Menghentikan fungsi jika input tidak valid
    }

    // Panggil fungsi divide dan tampilkan hasilnya
    const result = divide(num1, num2);
    document.getElementById("result").textContent = typeof result === "number" 
        ? `Hasil: ${result}` 
        : `Error: ${result}`;
}


//String and Array Methods
//1. Antrian
// Awal antrian
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];
console.log("Awal antrian:", antrian);

// Datang 1 pembeli yaitu Nabila
antrian.push("Nabila");
console.log("Setelah Nabila datang:", antrian);

// Datang 2 pembeli yaitu Maza dan Elsi
antrian.push("Maza", "Elsi");
console.log("Setelah Maza dan Elsi datang:", antrian);

// Antrian terakhir (Elsi) tidak jadi antri dan pulang
antrian.pop();
console.log("Setelah Elsi pulang:", antrian);

// Antrian pertama (Ray) sudah mendapatkan belanjaannya dan keluar dari antrian
antrian.shift();
console.log("Setelah Ray selesai belanja:", antrian);

// Antrian kedua (Fiki) juga sudah mendapatkan belanjaannya dan keluar dari antrian
antrian.shift();
console.log("Setelah Fiki selesai belanja:", antrian);

// Datang pembeli baru yang nyerobot antrian yaitu Tomi
antrian.unshift("Tomi");
console.log("Setelah Tomi nyerobot antrian:", antrian);

// Tampilkan hasil akhir antrian
console.log("Hasil akhir antrian:");
antrian.forEach((nama, index) => {
  console.log(`${index + 1}. ${nama}`);
});

//Prototype
Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam;
  return `selamat tidur ${this.nama}`;
};

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `selamat makan ${this.nama}`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `selmat main ${this.nama}`;
};

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

let Cryl = new Mahasiswa(`Cryl`, 10);

console.table(Cryl);
console.table(Cryl.tidur(5));
console.table(Cryl);

let angka = [1, 4, 3];

console.log(angka.sort());

let add = (function () {
  let total = 0;
  return function () {
    return ++total;
  };
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());


