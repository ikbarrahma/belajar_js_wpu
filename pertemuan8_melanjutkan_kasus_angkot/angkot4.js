var noAngkot = 1;
var angkotBeroprasi = 6;
var jumlahAngkot = 10;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi) {
    console.log("Angkot " + noAngkot + " Beroprasi dengan baik");
  } else if (noAngkot === 8) {
    console.log("Angkot " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot " + noAngkot + " sedang tidak beroprasi");
  }
}
