// Membuat PopUp Box
// Ikbar rahma

// Alert yang di gunakan untuk memunculkan pop up
alert("Hallo");

// Promp memunculkan popup yang berisi text box
var nama = prompt("Masukkan nama: ");
alert(nama);

// Confirm memunculkan konfirmasi dari user
// dia akan mengembalikan nilai boolean true / false
var text = confirm("kamu yakin?");
alert(text);

// coba aplikasi sederhana

alert("Selamat datang...");
var lagi = true;

while (lagi) {
  var nama = prompt("Masukkan nama");
  alert("nama saya" + nama);
  lagi = confirm("lagi??");
}

alert("terima kasih");
