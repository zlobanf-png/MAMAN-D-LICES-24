const sheetURL = "حط هنا رابط JSON تاع Google Sheets";

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    let container = document.getElementById("products");
    container.innerHTML = "";

    data.forEach(item => {
      container.innerHTML += `
        <div>
          <h3>${item.name}</h3>
          <p>السعر: ${item.price} دج</p>
          <img src="${item.image}" width="100"/>
        </div>
      `;
    });
  });
