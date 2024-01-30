const testDiv = document.getElementById("test");

function card(nama, harga) {
  return `
    <div class="card">
        <h3>${nama}</h3>
        <h4>${harga}</h4>
    </div>`;
}

fetch("https://data-kamar.vercel.app/kamar/deluxe")
  .then((res) => res.json())
  .then((res) => {
    console.log(res.data);
    res.data.map((kamar) => {
      testDiv.innerHTML += card(kamar.nama_kamar, kamar.harga);
    });
  });
