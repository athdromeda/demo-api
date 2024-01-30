const testDiv = document.getElementById("test");

function card(judul) {
  return `
    <div class="card">
        <h3>${judul}</h3>
    </div>`;
}

// const card = (judul) => {
//   return `
//     <div class="card">
//         <h3>${judul}</h3>
//     </div>`;
// }; //Arrow function

fetch("https://katarandom.vercel.app/api")
.then((res) => res.json())
.then((data) => {
    console.log(data.kata);
    data.kata.map((kata) => {
      testDiv.innerHTML += card(kata);
    });
  });


