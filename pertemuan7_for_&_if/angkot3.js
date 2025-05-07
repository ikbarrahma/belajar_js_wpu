var noAngkot = 1;
var angkotBeroprasi = 7;
var jumlahAngkot = 10;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroprasi) {
    console.log("Angkot " + noAngkot + " Beroprasi dengan baik");
  } else {
    console.log("Angkot " + noAngkot + " Tidak sedang beroprasi");
  }
}
