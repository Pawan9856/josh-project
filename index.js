// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});


const kitchenItemsData = [
  {
    name: "Home made Pizza",
    price: "$19",
    rating: 4.7,
    time: "50-79 min",
    imgSrc: "resource/images/unsplash_MqT0asuoIcU-1.png",
  },
  {
    name: "Home made Pizza",
    price: "$15",
    rating: 4.2,
    time: "30-45 min",
    imgSrc: "resource/images/unsplash_33GPuoFI7v8.png",
  },
  {
    name: "Home made Pizza",
    price: "$10",
    rating: 4.3,
    time: "20-30 min",
    imgSrc: "resource/images/unsplash_60nzTP7_hMQ.png",
  },
  {
    name: "Home made Pizza",
    price: "$22",
    rating: 4.8,
    time: "40-50 min",
    imgSrc: "resource/images/unsplash_CbNAuxSZTFo.png",
  },
  {
    name: "Home made Pizza",
    price: "$12",
    rating: 4.1,
    time: "10-20 min",
    imgSrc: "resource/images/unsplash_CbNAuxSZTFo.png",
  },
  {
    name: "Home made Pizza",
    price: "$18",
    rating: 4.6,
    time: "30-40 min",
    imgSrc: "resource/images/unsplash_MqT0asuoIcU.png",
  },
  {
    name: "Home made Pizza",
    price: "$14",
    rating: 4.4,
    time: "15-25 min",
    imgSrc: "resource/images/unsplash_nP11TkjxJ7s.png",
  },
  {
    name: "Home made Pizza",
    price: "$30",
    rating: 4.9,
    time: "60-90 min",
    imgSrc: "resource/images/unsplash_sejqj6Eaqe8.png",
  },
  {
    name: "Home made Pizza",
    price: "$5",
    rating: 4.0,
    time: "5-10 min",
    imgSrc: "resource/images/unsplash_UxRhrU8fPHQ.png",
  },
  {
    name: "Home made Pizza",
    price: "$8",
    rating: 4.5,
    time: "20-30 min",
    imgSrc: "resource/images/unsplash_Y6OgisiGBjM.png",
  },
  {
    name: "Home made Pizza",
    price: "$8",
    rating: 4.5,
    time: "20-30 min",
    imgSrc: "resource/images/unsplash_CbNAuxSZTFo.png",
  },
  {
    name: "Home made Pizza",
    price: "$8",
    rating: 4.5,
    time: "20-30 min",
    imgSrc: "resource/images/unsplash_nP11TkjxJ7s.png",
  },
];

const kitchenItemsContainer = document.querySelector(".kitchen-items");

kitchenItemsData.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("kitchen-item-card");

  card.innerHTML = `
    <div class="kitchen-item-card-image">
      <img src="${item.imgSrc}" alt="image" />
    </div>
    
    <div class="kitchen-item-card-info">
      <span class="item-name">${item.name}</span>
      <span>${item.price}</span>
      <div class="item-rating">
        <span class="badge">
          <img src="/resource/svg/ant-design_star-filled.svg" alt="star" />${item.rating}
        </span>
        <span class="badge">${item.time}</span>
      </div>
      <div class="add-to-cart-button">
        <button>
          <img src="/resource/svg/iconoir_add-to-cart-2.svg" alt="add to cart" />
        </button>
      </div>
    </div>
  `;
  
  kitchenItemsContainer.appendChild(card);
});
