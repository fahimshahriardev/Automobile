window.onload = function () {
  motorbikeDynamic();
  sccoterDynamic();
  // Call the function once initially to set the initial state
  scrollNavhide();
  crossBtn();
};

// just manage this data for show vehicle
const vecicleDataList = [
  {
    id: 1,
    name: "APACHE ",
    category: "motorbike",
    modal: "RR310",
    engine: 321.2,
    power: 34,
    weight: 175,
    imgWithColor: [
      { color: "#f12b00", img: "./assets/bike/310.png" },
      { color: "#000000", img: "./assets/bike/green-160.png" },
      { color: "#ffffff", img: "./assets/bike/white-160.png" },
    ],
  },
  {
    id: 2,
    name: "APACHE",
    category: "motorbike",
    modal: "RTR 160 4V",
    engine: 159.7,
    power: 16.5,
    weight: 143,
    imgWithColor: [
      { color: "#f12b00", img: "./assets/bike/160-4V-Centre.png" },
      { color: "#000000", img: "./assets/bike/green-160.png" },
      { color: "#0000FF", img: "./assets/bike/white-160.png" },
    ],
  },
  {
    id: 3,
    name: "hlx ",
    category: "motorbike",
    modal: "150 5 gear",
    engine: 147.49,
    power: 8.9,
    weight: 122,
    imgWithColor: [
      { color: "#f12b00", img: "./assets/bike/H150-listing-home.webp" },
    ],
  },
  {
    id: 4,
    name: "APACHE ",
    category: "motorbike",
    modal: "RR310",
    engine: 321.2,
    power: 34,
    weight: 175,
    imgWithColor: [
      { color: "#000000", img: "./assets/bike/green-160.png" },
      { color: "#0000FF", img: "./assets/bike/white-160.png" },
    ],
  },
  {
    id: 5,
    name: "APACHE",
    category: "motorbike",
    modal: "RTR 160 4V",
    engine: 159.7,
    power: 16.5,
    weight: 143,
    imgWithColor: [
      { color: "#f12b00", img: "./assets/bike/160-4V-Centre.png" },
    ],
  },
  {
    id: 6,
    name: "hlx ",
    category: "motorbike",
    modal: "150 5 gear",
    engine: 147.49,
    power: 8.9,
    weight: 122,
    imgWithColor: [
      { color: "#f12b00", img: "./assets/bike/H150-listing-home.webp" },
    ],
  },
  {
    id: 7,
    name: "APACHE ",
    category: "sccoter",
    modal: "150 5 gear",
    engine: 321.2,
    power: 34,
    weight: 175,
    imgWithColor: [
      {
        color: "#8A8A8A",
        img: "./assets/sccooter/jupiter-listing-home.webp",
      },
      {
        color: "#000000",
        img: "./assets/sccooter/Ntorq-RE.png",
      },
      { color: "#0000FF", img: "./assets/bike/white-160.png" },
    ],
  },
  {
    id: 8,
    name: "hlx ",
    category: "sccoter",
    modal: "150 5 gear",
    engine: 159.7,
    power: 16.5,
    weight: 143,
    imgWithColor: [
      {
        color: "#f12b00",
        img: "./assets/sccooter/Ntorq-RE.png",
      },
      {
        color: "#8A8A8A",
        img: "./assets/sccooter/jupiter-listing-home.webp",
      },
    ],
  },
  {
    id: 9,
    name: "APACHE ",
    category: "sccoter",
    modal: "150 5 gear",
    engine: 147.49,
    power: 8.9,
    weight: 122,

    imgWithColor: [
      {
        color: "#f12b00",
        img: "./assets/bike/H150-listing-home.webp",
      },
    ],
  },
  {
    id: 10,
    name: "APACHE ",
    category: "sccoter",
    modal: "150 5 gear",
    engine: 321.2,
    power: 34,
    weight: 175,
    imgWithColor: [
      {
        color: "#f12b00",
        img: "./assets/sccooter/jupiter-listing-home.webp",
      },
    ],
  },
  {
    id: 11,
    category: "sccoter",
    name: "hlx ",
    modal: "150 5 gear",
    engine: 159.7,
    power: 16.5,
    weight: 143,
    imgWithColor: [
      {
        color: "#f12b00",
        img: "./assets/sccooter/Ntorq-RE.png",
      },
    ],
  },
  {
    id: 12,
    category: "sccoter",
    name: "APACHE ",
    modal: "150 5 gear",
    engine: 147.49,
    power: 8.9,
    weight: 122,

    imgWithColor: [
      {
        color: "#f12b00",
        img: "./assets/bike/H150-listing-home.webp",
      },
      {
        color: "#f1f1f1",
        img: "./assets/sccooter/jupiter-listing-home.webp",
      },
    ],
  },
];

function crossBtn() {
  const cancelBtn = document.querySelector("#cancel");
  const crossBtn = document.querySelector("#cross");
  const popUp = document.querySelector("#popup");

  cancelBtn.addEventListener("click", () => {
    popUp.classList.add("hidden");
  });

  crossBtn.addEventListener("click", () => {
    popUp.classList.add("hidden");
  });
}

// navbar toggler
const toggleBtn = document.querySelector("#toggle-btn");
const navbarDropdown = document.querySelectorAll(".navbarDropdown");

toggleBtn.addEventListener("click", () => {
  for (let i = 0; i < navbarDropdown.length; i++) {
    navbarDropdown[i].classList.toggle("hidden");
    navbarDropdown[i].classList.toggle("flex");
  }
});

const nav = document.querySelector(".nav");

function scrollNavhide() {
  if (window.scrollY > 200) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0)";
  }
}
// Add an event listener to run the function when the page is scrolled
window.addEventListener("scroll", scrollNavhide);

// banner swiper carousel
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  speed: 1200,
  loop: true,

  navigation: {
    nextEl: ".swiperbutton-next",
    prevEl: ".swiperbutton-prev",
  },
});

// explore our vechiles
// motorcycle
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiperbutton2-next",
    prevEl: ".swiperbutton2-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// sccoters
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  navigation: {
    nextEl: ".swiperbutton3-next",
    prevEl: ".swiperbutton3-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// explore our vechiles tab functionality
const category = document.querySelectorAll(".category");

const motorcycles = document.querySelector(".motorcycles");
const sccoters = document.querySelector(".sccoters");

category[0].classList.add("border-b-2", "border-[#f12b00]");

for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", () => {
    // Reset borders for all buttons
    for (let j = 0; j < category.length; j++) {
      category[j].classList.remove("border-b-2", "border-[#f12b00]");
    }

    // Add border to the clicked button
    category[i].classList.add("border-b-2", "border-[#f12b00]");

    // Toggle visibility of motorcycles and scooters
    if (category[i].innerText === "SCCOTERS") {
      motorcycles.classList.add("hidden");
      sccoters.classList.remove("hidden");
    } else {
      motorcycles.classList.remove("hidden");
      sccoters.classList.add("hidden");
    }
  });
}
// brand experince section
var swiper = new Swiper(".mySwiper4", {
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 38,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiperbutton-next4",
    prevEl: ".swiperbutton-prev4",
  },
});

// motorcycleSlide dynamic
// data add here color with img,name,id
function motorbikeDynamic() {
  const motorcycleSlide = document.querySelector(".motorcycleSlide");
  const motorbikeData = vecicleDataList.filter((vecicleData) => {
    return vecicleData.category === "motorbike";
  });

  const motorcycleData = motorbikeData;
  const motorBikebtn = "motorBikebtn";
  commonVehicles(motorcycleData, motorcycleSlide, motorBikebtn);
  colorChangeImgMotorcycle(motorcycleData);
}
// sccoterSlide dynamic
// data add here color with img,name,id
function sccoterDynamic() {
  const sccoterSlide = document.querySelector(".sccoterSlide");
  const sccoterData = vecicleDataList.filter((vecicleData) => {
    return vecicleData.category === "sccoter";
  });

  const sccooterBtn = "sccooterBtn";
  commonVehicles(sccoterData, sccoterSlide, sccooterBtn);
  colorChangeImgScooter(sccoterData);
}

function colorChangeImgMotorcycle(motorcycleData) {
  const colorBtn = document.querySelectorAll(".motorBikebtn");

  colorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const color = e.target.getAttribute("name");
      const id = e.target.getAttribute("id");
      const parent = e.target.parentElement.parentElement;
      const imageElement = parent.querySelector("img");

      const imageData = motorcycleData.find(
        (vehicle) =>
          vehicle.id === parseInt(id) &&
          vehicle.imgWithColor.some((c) => c.color === color)
      );

      if (imageData) {
        const selectedImage = imageData.imgWithColor.find(
          (c) => c.color === color
        );
        if (selectedImage) {
          imageElement.src = selectedImage.img;
        }
      }
    });
  });
}
function colorChangeImgScooter(scooterData) {
  const colorBtn = document.querySelectorAll(".sccooterBtn");

  colorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const color = e.target.getAttribute("name");
      const id = e.target.getAttribute("id");
      const parent = e.target.parentElement.parentElement;
      const imageElement = parent.querySelector("img");

      const imageData = scooterData.find(
        (vehicle) =>
          vehicle.id === parseInt(id) &&
          vehicle.imgWithColor.some((c) => c.color === color)
      );

      if (imageData) {
        const selectedImage = imageData.imgWithColor.find(
          (c) => c.color === color
        );
        if (selectedImage) {
          imageElement.src = selectedImage.img;
        }
      }
    });
  });
}
// common vehicle looping
const commonVehicles = (vechicleData, vechileSlide, btnName) => {
  const motorArr = vechicleData.map((vecicle, i) => {
    let colorTagGroup;
    if (vecicle.imgWithColor && vecicle.imgWithColor.length > 0) {
      const colorTags = vecicle.imgWithColor.map((color) => {
        return `<button key=${i} id=${vecicle.id} name="${color.color}" class="w-5 h-5 bg-[${color.color}]  ${btnName}  rounded-full cursor-pointer"></button>`;
      });
      colorTagGroup = colorTags.join("");
    } else {
      colorTagGroup = "";
    }

    return `<div key=${i} class="swiper-slide bikeCard">
  <div
    class="bg-[#F1F1F1] flex flex-col justify-center items-center relative"
  >
    <h2
      class="bg-black text-white text-3xl w-full text-center pt-5 pb-6"
    >
      ${vecicle.name} <br/>${vecicle.modal}
    </h2>
    <img
      class="w-full h-60 px-5 py-5"
      src=${vecicle.imgWithColor[0].img}
      alt=${vecicle.modal}
    />
    <div class="my-2 flex gap-3 ">
    ${colorTagGroup}
    </div>
    <div
      class="flex justify-evenly w-full border-t-2 border-[#D5D5D5] pt-3 pb-6"
    >
      <div class="flex flex-col items-center gap-1">
        <img
          class="w-7"
          src="./assets/explore your vechicle/Engine.png"
          alt=""
        />
        <p class="uppercase text-sm montserrat font-semibold">
          Engine
        </p>
        <p
          class="uppercase text-xl text-[#f12b00] montserrat font-semibold"
        >
          ${vecicle.engine} CC
        </p>
      </div>
      <div class="flex flex-col items-center gap-1">
        <img
          class="w-7"
          src="./assets/explore your vechicle/Power.png"
          alt=""
        />
        <p class="uppercase text-sm montserrat font-semibold">
          power
        </p>
        <p
          class="uppercase text-xl text-[#f12b00] montserrat font-semibold"
        >
        ${vecicle.power} PS
        </p>
      </div>
      <div class="flex flex-col items-center gap-1">
        <img
          class="w-7"
          src="./assets/explore your vechicle/Weight.png"
          alt=""
        />
        <p class="uppercase text-sm montserrat font-semibold">
          weight
        </p>
        <p
          class="uppercase text-xl text-[#f12b00] montserrat font-semibold"
        >
        ${vecicle.weight} KG
        </p>
      </div>
    </div>
    <a
      href="./products.html"
      class="bg-[#f12b00] text-white font-bold uppercase py-1 px-3 rounded-sm absolute -bottom-4"
      >explore</a
    >
  </div>
  </div>`;
  });

  return (vechileSlide.innerHTML = motorArr.join());
};
