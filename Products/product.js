fetch("products.json")
  .then((response) => response.json())
  .then((data) => {
    const productList = document.getElementById("product-list");
    data.forEach((product) => {
      const col = document.createElement("div");
      col.className = "col-md-4";

      const card = document.createElement("div");
      card.className = "card mb-4";

      const img = document.createElement("img");
      img.src = product.image;
      img.className = "card-img-top";
      img.alt = product.name;

      const cardBody = document.createElement("div");
      cardBody.className = "card-body";

      const h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = product.name;

      const p = document.createElement("p");
      p.className = "card-text";
      p.textContent = product.description;

      const contactDiv = document.createElement("div");
      contactDiv.className = "d-flex justify-content-between";

      // Telefon ikonu
      const phoneLink = document.createElement("a");
      phoneLink.href = "#";
      phoneLink.className = "text-primary";
      phoneLink.innerHTML = '<i class="bi bi-telephone"></i>';
      phoneLink.setAttribute("data-bs-toggle", "tooltip");
      phoneLink.setAttribute("title", "+90 555 555 55 55");

      // Mail ikonu
      const mailLink = document.createElement("a");
      mailLink.href = "mailto:info@firma.com";
      mailLink.className = "text-danger";
      mailLink.innerHTML = '<i class="bi bi-envelope"></i>';

      contactDiv.appendChild(phoneLink);
      contactDiv.appendChild(mailLink);

      cardBody.appendChild(h5);
      cardBody.appendChild(p);
      cardBody.appendChild(contactDiv);

      card.appendChild(img);
      card.appendChild(cardBody);

      col.appendChild(card);
      productList.appendChild(col);
    });

    // Tooltipleri etkinleştirme
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });
