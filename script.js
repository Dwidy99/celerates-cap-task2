// ~ ** Tugas ~

// Phase 1
// Field must be 3
// - name, alamat, no hp,
// - harus ada submit
// - ketika disubmit, data masuk ke dalam table
// - fieldnya ga boleh kosong
// - ketika clisk submit, field kosong
// - Ada labeling untuk setiap input field

// Phase 2
// - Tambah field email beserta validasinya
// - Tambah validasi untuk no hp yang harus diawali dengan +62
// - Tambahkan input Checkbox minimal 5 checkbox dan divalidasi apakah salah 1 checkbox tersebut telah checked atau tidak

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  // Ambil element
  let nama = document.getElementById("nama").value;
  let hp = document.getElementById("hp").value;
  let alamat = document.getElementById("alamat").value;
  let email = document.getElementById("email").value;

  // Checkbox
  let category = [];
  let checks = document.querySelectorAll(".check");
  checks.forEach((check) => {
    if (check.checked) {
      category.push(check.value);
    }
  });

  //   Cek apakah Field-nya kosong
  if (nama === "") alert("Field Nama tidak boleh kosong!");

  if (hp === "") alert("Field HP tidak boleh kosong!");

  if (alamat === "") alert("Field Alamat tidak boleh kosong!");

  if (email === "") alert("Field Email tidak boleh kosong!");

  if (category.length === 0) alert("Pilih checkbox Kategori setidaknya 1!");

  // Cek apakah Field-nya sudah terisi dan category-nya > 0
  if (nama && hp && alamat && email && category.length > 0) {
    // cek apakah email valid
    if (validateEmail(email)) {
      // cek apakah hp diawali denagan +62
      if (regexPhoneNumber(hp)) {
        let table = document.querySelector("table");

        let row = table.insertRow(1);

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = nama;
        cell2.innerHTML = hp;
        cell3.innerHTML = alamat;
        cell4.innerHTML = email;
        cell5.innerHTML = category.join(" - ");
      } else {
        alert("Field HP tidak valid, harus diawali +62!");
      }
    } else {
      alert("Email tidak valid!");
    }
  }

  //   Kosongkan Isi Field
  nama = "";
  hp = "";
  alamat = "";
  email = "";

  checks.forEach((check) => {
    if (check.checked) {
      check.checked = false;
    }
  });
});

// Validasi Email
function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}

function regexPhoneNumber(str) {
  const phone = /^(^\+62)(\d{0,9}-?){2}\d{0,9}$/;
  return phone.test(str);
}
