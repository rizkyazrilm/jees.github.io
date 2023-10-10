let a = 15; // Ubah nilai variabel a menjadi 15

if (a <= 10) {
    console.log("Angka Kurang dari 10");
} else {
    console.log("Angka lebih dari atau sama dengan 10"); // Mengubah pesan
}

let angka = 1;

while (angka <= 10) {
    console.log(angka);
    angka++;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let activityHours = 0; activityHours <= 8; activityHours++) { // Ubah variabel menjadi activityHours
    if (activityHours < 8){
        console.log(`Saya melakukan aktivitas selama ${activityHours} jam`); // Mengubah pesan
        continue;
    }
    console.log('Waktunya istirahat'); // Mengubah pesan
}
