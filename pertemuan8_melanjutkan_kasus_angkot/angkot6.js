var noAngkot = 1;
var angkotBeroprasi = 6;
var jumlahAngkot = 10;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi && noAngkot !== 5) {
    console.log("Angkot " + noAngkot + " Beroprasi dengan baik");
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log("Angkot " + noAngkot + " sedang lembur");
  } else {
    console.log("Angkot " + noAngkot + " sedang tidak beroprasi");
  }
}
