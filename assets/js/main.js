// Function Validate Form
function validateForm() {
  var date = new Date();
  var nama = document.forms["msg-form"]["nama"].value;
  var tanggal = document.forms["msg-form"]["ttl"].value;
  var jekel = document.forms["msg-form"]["jekel"].value;
  var pesan = document.forms["msg-form"]["pesan"].value;

  var tanggalArr = tanggal.split("-");
  var newTanggal = tanggalArr[2] + "-" + tanggalArr[1] + "-" + tanggalArr[0];
  var newDate = date.toString().slice(0, 33);

  document.getElementById("sender-time").innerText = newDate;
  document.getElementById("sender-nama").innerHTML = nama;
  document.getElementById("sender-ttl").innerHTML = newTanggal;
  document.getElementById("sender-jekel").innerHTML = jekel;
  document.getElementById("sender-pesan").innerHTML = pesan;
  return false;
}

// Responsive Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("aktif");
  navMenu.classList.toggle("aktif");
});

document.querySelectorAll("li").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("aktif");
    navMenu.classList.remove("aktif");
  })
);
