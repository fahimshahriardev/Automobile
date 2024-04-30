window.onload = function () {
  virticul();
  sliderDynamic();
};

// change this array data
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
      { color: "#0000FF", img: "./assets/bike/white-160.png" },
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
      { color: "#000000", img: "./assets/bike/green-160.png" },
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
      { color: "#000000", img: "./assets/bike/green-160.png" },
    ],
  },
  {
    id: 7,
    name: "APACHE ",
    category: "sccoter",
    modal: "RR310",
    engine: 321.2,
    power: 34,
    weight: 175,
    imgWithColor: [
      {
        color: "#8A8A8A",
        img: "./assets/sccooter/jupiter-listing-home.webp",
      },

      { color: "#0000FF", img: "./assets/bike/white-160.png" },
    ],
  },
  {
    id: 8,
    name: "APACHE ",
    category: "sccoter",
    modal: "RTR 160 4V",
    engine: 159.7,
    power: 16.5,
    weight: 143,
    imgWithColor: [
      {
        color: "#f1f1f1",
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
    modal: "RR310",
    engine: 147.49,
    power: 8.9,
    weight: 122,

    imgWithColor: [
      {
        color: "#f1f1f1",
        img: "./assets/bike/H150-listing-home.webp",
      },
      { color: "#000000", img: "./assets/bike/green-160.png" },
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
        color: "#f1f1f1",
        img: "./assets/sccooter/jupiter-listing-home.webp",
      },
      {
        color: "#f1f1f1",
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
      { color: "#000000", img: "./assets/bike/green-160.png" },
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

// navbar toggler
const toggleBtn = document.querySelector("#toggle-btn");
const navbarDropdown = document.querySelectorAll(".navbarDropdown");

toggleBtn.addEventListener("click", () => {
  for (let i = 0; i < navbarDropdown.length; i++) {
    navbarDropdown[i].classList.toggle("hidden");
    navbarDropdown[i].classList.toggle("flex");
  }
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

// swiper

function virticul() {
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiperbuttonnext",
      prevEl: ".swiperbuttonprev",
    },
  });
}

// dynamic bike show
const bikeDisplay = document.querySelector(".bikedisplay");
const motorbike = document.querySelectorAll(".motorbike");
const sccotersactive = document.querySelectorAll(".sccotersactive");

motorbike.forEach((slide) => {
  slide.addEventListener("click", () => {
    motorbike.forEach((slide) => {
      slide.classList.remove("active");
    });
    slide.classList.add("active");
  });
});

sccotersactive.forEach((slide) => {
  slide.addEventListener("click", () => {
    sccotersactive.forEach((slide) => {
      slide.classList.remove("active");
    });
    slide.classList.add("active");
  });
});

const bikes = vecicleDataList.filter((vecicleData) => {
  return vecicleData.category === "motorbike";
});

// slider dynamic show

function sliderDynamic() {
  const motocycleSlide = document.querySelector(
    ".myBikeSwiper .swiper-wrapper"
  ); // Update the selector to target the swiper-wrapper

  // Assuming 'bikes' is an array containing slide data
  const firstBike = bikes[0];

  const vehicleSlides = bikes.map((bike) => {
    const bikeActive = firstBike.id === bike.id;

    return `<div class="swiper-slide motorbike-swiper ${
      bikeActive && "active"
    } bg-white ">
      <div class="flex py-1 gap-3 px-6 items-center justify-between">
        <h3 class="text-xl font-semibold rounded-sm">${bike.name} ${
      bike.modal
    }</h3>
        <img class="w-32 h-24" src="${bike.imgWithColor[0].img}" alt="" />
      </div>
    </div>`;
  });

  // Append the new slides to the Swiper container
  motocycleSlide.innerHTML = vehicleSlides.join("");

  // After adding new slides, update the Swiper instance
  virticul();
  bikeSwipers();
}

// Call sliderDynamic when you want to add new slides dynamically

function bikeSwipers() {
  const bikeDisplay = document.getElementById("bikeDisplay");
  const motorbikeSwipers = document.querySelectorAll(".motorbike-swiper");

  motorbikeSwipers.forEach((swiper) => {
    swiper.addEventListener("click", (e) => {
      motorbikeSwipers.forEach((otherSwiper) => {
        otherSwiper.classList.remove("active");
      });

      swiper.classList.add("active");

      const selectedBikeName = e.currentTarget
        .querySelector("h3")
        .innerText.split(" ")
        .join("");

      updateBikeDisplay(selectedBikeName);
      bikeimgChangeByColor();
    });
  });

  if (bikes.length > 0) {
    const firstBikeName = (bikes[0].name + bikes[0].modal).split(" ").join("");
    updateBikeDisplay(firstBikeName);
  }

  function updateBikeDisplay(selectedBikeName) {
    const selectedBike = bikes.find((bike) => {
      const bikeName = (bike.name + bike.modal).split(" ").join("");
      return selectedBikeName === bikeName;
    });

    const colorBTngroup = selectedBike.imgWithColor
      .map(
        (color) =>
          `<button id=${selectedBike.id} name="${color.color}" class="w-5 h-5 bg-[${color.color}]  bikeColorBtn  rounded-full cursor-pointer"></buttonname=>`
      )
      .join(" ");

    if (selectedBike) {
      bikeDisplay.innerHTML = `  <div ${selectedBike.id} class="flex justify-evenly w-full ">
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/power.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          engine
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${selectedBike.engine} CC
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets//products-page/engine.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          power
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${selectedBike.power} PS
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/compound.png  "
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          weight
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${selectedBike.weight} KG
        </p>
      </div>
      </div>
      <div>
      <img class="bikeImg w-[600px] h-[360px]" src=${selectedBike.imgWithColor[0].img} alt="" />
      </div>
      <div class=" flex gap-2 ">
      ${colorBTngroup}
    </div>
      <div>
      <a
        href="#"
        class="bg-[#f12b00] lg:text-2xl text-sm py-2 md:px-8 px-4 rounded-sm text-white font-bold aos-init aos-animate"
        >View details</a
      >
      </div>`;
    }
    bikeimgChangeByColor();
  }
}

sliderDynamic();

// bikeimgChangeByColor
function bikeimgChangeByColor() {
  const bikeColorBtn = document.querySelectorAll("#bikeDisplay .bikeColorBtn");

  bikeColorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const color = e.target.getAttribute("name");
      const id = e.target.getAttribute("id");
      const parent = e.target.parentElement.parentElement;
      const imageElement = parent.querySelector(".bikeImg");

      const imageData = bikes.find(
        (bike) =>
          bike.id === parseInt(id) &&
          bike.imgWithColor.some((c) => c.color === color)
      );

      if (imageData) {
        const selectedColorImage = imageData.imgWithColor.find(
          (c) => c.color === color
        );

        if (imageElement && selectedColorImage) {
          imageElement.src = selectedColorImage.img;
        }
      }
    });
  });
}

// scooters
const scooters = vecicleDataList.filter((vecicleData) => {
  return vecicleData.category === "sccoter";
});

function sliderSccoerDynamic() {
  const sccoterSlide = document.querySelector(
    ".mySccoterSwiper .swiper-wrapper"
  );

  const firstSccoter = scooters[0];

  const vehicleSlides = scooters.map((scooter) => {
    const sccooterActive = firstSccoter.id === scooter.id;

    return `<div class="swiper-slide sccoter-swiper ${
      sccooterActive && "active"
    } bg-white ">
      <div class="flex py-1 gap-3 px-6 items-center justify-between">
        <h3 class="text-xl font-semibold rounded-sm">${scooter.name} ${
      scooter.modal
    }</h3>
        <img class="w-32 h-24" src="${scooter.imgWithColor[0].img}" alt="" />
      </div>
    </div>`;
  });

  // Append the new slides to the Swiper container
  sccoterSlide.innerHTML = vehicleSlides.join("");

  // After adding new slides, update the Swiper instance
  virticul();
  SccoterSwipers();
}

function SccoterSwipers() {
  const sccoterDisplay = document.getElementById("sccoterDisplay");

  const sccoterwipers = document.querySelectorAll(".sccoter-swiper");

  sccoterwipers.forEach((swiper) => {
    swiper.addEventListener("click", (e) => {
      sccoterwipers.forEach((swiper) => {
        swiper.classList.remove("active");
      });
      swiper.classList.add("active");
      const selectedSccoterName = e.target
        .querySelector("h3")
        .innerText.split(" ")
        .join("");
      updateSccoterDisplay(selectedSccoterName);

      sccoterimgChangeByColor();
    });
  });

  // Display details of the first bike by default
  if (scooters.length > 0) {
    const firstSccoterName = (scooters[0].name + scooters[0].modal)
      .split(" ")
      .join("");
    updateSccoterDisplay(firstSccoterName);
  }

  function updateSccoterDisplay(selectedSccoterName) {
    const selectedSccoter = scooters.find((scooter) => {
      const sccoterName = (scooter.name + scooter.modal).split(" ").join("");
      return selectedSccoterName === sccoterName;
    });

    const colorBTngroup = selectedSccoter.imgWithColor
      .map(
        (color) =>
          `<button id=${selectedSccoter.id}  name="${color.color}" class="w-5 h-5 bg-[${color.color}] sccoterColorBtn   rounded-full cursor-pointer"></button>`
      )
      .join(" ");

    if (selectedSccoter) {
      sccoterDisplay.innerHTML = `  <div ${selectedSccoter.id} class="flex justify-evenly w-full">
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/power.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          engine
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${selectedSccoter.engine} CC
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets//products-page/engine.png"
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          power
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${selectedSccoter.power} PS
        </p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <img
          class="md:w-16 w-10 md:h-14 h-9"
          src="./assets/products-page/compound.png  "
          alt=""
        />
        <p
          class="uppercase md:text-lg text-base montserrat text-[#7A7A7A] font-semibold"
        >
          weight
        </p>
        <p
          class="uppercase md:text-3xl text-xl text-white montserrat font-semibold"
        >
          ${selectedSccoter.weight} KG
        </p>
      </div>
      </div>
      <div>
      <img class="sccoterImg w-[600px] h-[360px]" src=${selectedSccoter.imgWithColor[0].img} alt="" />
      </div>
      <div class=" flex gap-2 ">
    ${colorBTngroup}
    </div>
      <div>
      <a
        href="#"
        class="bg-[#f12b00] lg:text-2xl text-sm py-2 md:px-8 px-4 rounded-sm text-white font-bold aos-init aos-animate"
        >View details</a
      >
      </div>`;
    }
    sccoterimgChangeByColor();
  }
}

sliderSccoerDynamic();

function sccoterimgChangeByColor() {
  const sccoterColorBtn = document.querySelectorAll(
    "#sccoterDisplay .sccoterColorBtn"
  );

  sccoterColorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const color = e.target.getAttribute("name");

      const id = e.target.getAttribute("id");

      const parent = e.target.parentElement.parentElement;
      const imageElement = parent.querySelector(".sccoterImg");

      const imageData = scooters.find(
        (scooter) =>
          scooter.id === parseInt(id) &&
          scooter.imgWithColor.some((c) => c.color === color)
      );

      if (imageData) {
        const selectedColorImage = imageData.imgWithColor.find(
          (c) => c.color === color
        );

        if (imageElement && selectedColorImage) {
          imageElement.src = selectedColorImage.img;
        }
      }
    });
  });
}
