import { ecomProductServices } from "../services/EcomProductService.js";
import EcommerceProduct from "../models/ProductModel.js";
import { validateProductForm } from "../util/validation.js";
import { getElement } from "../util/util.js";
import { formatPrice } from "../util/util.js";

/* ---------------------------- MAIN JS FUNCTIONS --------------------------- */

// Modal Handler
function showModal() {
  const modal = getElement("#defaultModal");
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = getElement("#defaultModal");
  modal.classList.add("hidden");
}

// Add an event listener for the close button
// document
//   .querySelector('[data-modal-toggle="defaultModal"]')
//   .addEventListener("click", closeModal);

/* --------------------------- Darkmode Operation --------------------------- */

const themeToggleDarkIcon = getElement("#theme-toggle-dark-icon");
const themeToggleLightIcon = getElement("#theme-toggle-light-icon");

if (document.documentElement.classList.contains("dark")) {
  themeToggleLightIcon.classList.remove("hidden");
  themeToggleDarkIcon.classList.add("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
  themeToggleLightIcon.classList.add("hidden");
}

window.modeOperation = () => {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  document.documentElement.classList.toggle("dark");
};
