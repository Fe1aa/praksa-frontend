const cards_div = document.getElementById("cards");
const status_p = document.getElementById("status");

async function loadProducts() {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=12");

    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

    const data = await res.json();
    renderCards(data.products);
    status_p.textContent = "";
  } catch (err) {
    status_p.textContent = `An Error occured: ${err.message}`;
  }
}

function renderCards(products) {
  console.log(products);
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = p.thumbnail;
    img.alt = p.title;

    const body = document.createElement("div");
    body.className = "card-body";

    const title = document.createElement("h3");
    title.textContent = p.title;

    const desc = document.createElement("p");
    desc.textContent = p.description;

    const price = document.createElement("div");
    price.className = "price";
    price.textContent = `$${p.price}`;

    body.append(title, desc, price);
    card.append(img, body);
    cards_div.appendChild(card);
  });
}

loadProducts();
