"use strict";

// navbar scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.style.background = "#141414";
    navbar.style.boxShadow = "0px 5px 5px 0 #000000AA";
  } else if (window.scrollY < 100) {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});

// indicators
const indicators = document.querySelectorAll(".indicator-btn");
const exploreItems = document.querySelectorAll(".explore-item__link");
const exploreItemsLength = exploreItems.length;
let totalItems = exploreItemsLength / 5;
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");

let exploreItemIndex = 0;
let indicatorIndex = 0;

function updateCarousel() {
  if (indicatorIndex >= 3) {
    exploreItems[exploreItemsLength - 1].focus();
  } else {
    exploreItems[indicatorIndex * 5].focus();
  }
  indicators.forEach((indicator, index) => {
    indicator.parentElement.classList.toggle("active", index == indicatorIndex);
  });
}

function moveToNext() {
  indicatorIndex = (indicatorIndex + 1) % totalItems;
  console.log(indicatorIndex);
  updateCarousel();
}

function moveToPrev() {
  indicatorIndex = (indicatorIndex - 1 + totalItems) % totalItems;
  exploreItems[indicatorIndex].focus();
  updateCarousel();
  console.log(indicatorIndex);
}

function moveToIndex(index) {
  indicatorIndex = index;
  updateCarousel();
}

nextBtn.addEventListener("click", moveToNext);
prevBtn.addEventListener("click", moveToPrev);

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    moveToIndex(index);
    if (index != 3) {
      exploreItems[index * 5].focus();
    } else {
      exploreItems[exploreItemsLength - 1].focus();
    }
  });
});

// question-toggle
const questionItems = document.querySelectorAll(".question-item");

for (let i = 0; i < questionItems.length; i++) {
  const item = questionItems[i];

  item.addEventListener("click", (e) => {
    if (item.classList.contains("active")) {
      item.classList.toggle("active");
    } else {
      questionItems.forEach((question) => question.classList.remove("active"));
      item.classList.add("active");
      item.style.height = "100%";
    }
  });
}

// plans
const plansContainer = document.querySelector(".plans-items");
const plans = document.querySelectorAll(".plans-btn");

const plansList = [
  {
    id: 1,
    name: "monthly",
    title: "Basic Plan",
    desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "$9.99",
    time: "/month",
  },
  {
    id: 2,
    name: "monthly",
    title: "Standart Plan",
    desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    price: "$12.99",
    time: "/month",
  },
  {
    id: 3,
    name: "monthly",
    title: "Premium Plan",
    desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    price: "$14.99",
    time: "/month",
  },
  {
    id: 4,
    name: "yearly",
    title: "Basic Plan",
    desc: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
    price: "$90.99",
    time: "/year",
  },
  {
    id: 5,
    name: "yearly",
    title: "Standart Plan",
    desc: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
    price: "$120.99",
    time: "/year",
  },
  {
    id: 6,
    name: "yearly",
    title: "Premium Plan",
    desc: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
    price: "$140.99",
    time: "/year",
  },
];

plansList.forEach((plan) => {
  if (plan.name === "monthly") {
    // console.log(item);

    const planItem = document.createElement("div");
    planItem.classList.add("plan");
    const planItemText = document.createElement("div");
    planItemText.classList.add("text");
    const planTitle = document.createElement("h2");
    planTitle.textContent = plan.title;
    planTitle.classList.add("title");
    const planDesc = document.createElement("p");
    planDesc.textContent = plan.desc;
    planDesc.classList.add("desc");
    planItemText.appendChild(planTitle);
    planItemText.appendChild(planDesc);
    const planCost = document.createElement("div");
    planCost.classList.add("cost");
    const planCostPrice = document.createElement("span");
    planCostPrice.classList.add("cost-number");
    planCostPrice.textContent = plan.price + " ";
    const planCostTime = document.createElement("span");
    planCostTime.classList.add("time");
    planCostTime.textContent = plan.time;
    planCost.appendChild(planCostPrice);
    planCost.appendChild(planCostTime);
    const planBtns = document.createElement("div");
    planBtns.classList.add("btns");
    const firstBtn = document.createElement("a");
    firstBtn.href = "#";
    firstBtn.textContent = "Start Free Trail";
    firstBtn.classList.add("btn");
    firstBtn.classList.add("btn-outline");
    const secondBtn = document.createElement("a");
    secondBtn.href = "#";
    secondBtn.textContent = "Choose Plan";
    secondBtn.classList.add("btn");
    secondBtn.classList.add("btn-primary");
    planItem.appendChild(planItemText);
    planItem.appendChild(planCost);
    planItem.appendChild(planBtns);
    planBtns.appendChild(firstBtn);
    planBtns.appendChild(secondBtn);
    plansContainer.appendChild(planItem);
  }
});

for (let i = 0; i < plans.length; i++) {
  const plan = plans[i];

  plan.addEventListener("click", (e) => {
    const planData = plan.getAttribute("data-content");

    plansContainer.innerHTML = "";
    plansList.forEach((item) => {
      if (item.name === planData) {
        // console.log(item);

        const planItem = document.createElement("div");
        planItem.classList.add("plan");
        const planItemText = document.createElement("div");
        planItemText.classList.add("text");
        const planTitle = document.createElement("h2");
        planTitle.textContent = item.title;
        planTitle.classList.add("title");
        const planDesc = document.createElement("p");
        planDesc.textContent = item.desc;
        planDesc.classList.add("desc");
        planItemText.appendChild(planTitle);
        planItemText.appendChild(planDesc);
        const planCost = document.createElement("div");
        planCost.classList.add("cost");
        const planCostPrice = document.createElement("span");
        planCostPrice.classList.add("cost-number");
        planCostPrice.textContent = item.price;
        const planCostTime = document.createElement("span");
        planCostTime.classList.add("time");
        planCostTime.textContent = item.time;
        planCost.appendChild(planCostPrice);
        planCost.appendChild(planCostTime);
        const planBtns = document.createElement("div");
        planBtns.classList.add("btns");
        const firstBtn = document.createElement("a");
        firstBtn.href = "#";
        firstBtn.textContent = "Start Free Trail";
        firstBtn.classList.add("btn");
        firstBtn.classList.add("btn-outline");
        const secondBtn = document.createElement("a");
        secondBtn.href = "#";
        secondBtn.textContent = "Choose Plan";
        secondBtn.classList.add("btn");
        secondBtn.classList.add("btn-primary");
        planItem.appendChild(planItemText);
        planItem.appendChild(planCost);
        planItem.appendChild(planBtns);
        planBtns.appendChild(firstBtn);
        planBtns.appendChild(secondBtn);
        plansContainer.appendChild(planItem);
      }
    });
    plan.style.outline = "none";
    plans.forEach((el) => {
      el.parentElement.classList.remove("active");
    });
    plan.parentElement.classList.add("active");
  });
}
