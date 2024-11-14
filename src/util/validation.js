import { getElement } from "./util.js";

export const validateProductForm = () => {
  const name = getElement("#product-name").value.trim();
  const screen = getElement("#product-screen").value.trim();
  const img = getElement("#product-image").value.trim();
  const frontCam = getElement("#front-cam").value.trim();
  const rearCam = getElement("#rear-cam").value.trim();
  const price = getElement("#product-price").value.trim();
  const type = getElement("#product-type").value.trim();
  const desc = getElement("#product-description").value.trim();

  let isValid = true;

  clearValidationErrors();

  if (!name) {
    showValidationError("#product-name", "Product name is required.");
    isValid = false;
  }
  if (!screen) {
    showValidationError("#product-screen", "Screen info is required.");
    isValid = false;
  }
  if (!img) {
    showValidationError("#product-image", "Image URL is required.");
    isValid = false;
  }
  if (!frontCam) {
    showValidationError("#front-cam", "Front camera info is required.");
    isValid = false;
  }
  if (!rearCam) {
    showValidationError("#rear-cam", "Rear camera info is required.");
    isValid = false;
  }
  if (!price || isNaN(price) || price <= 0) {
    showValidationError("#product-price", "Valid price is required.");
    isValid = false;
  }
  if (!type) {
    showValidationError("#product-type", "Product brand/type is required.");
    isValid = false;
  }
  if (!desc) {
    showValidationError("#product-description", "Description is required.");
    isValid = false;
  }

  return isValid;
};

const showValidationError = (selector, message) => {
  const element = getElement(selector);
  element.classList.add("border-red-500");
  const error = document.createElement("p");
  error.classList.add("text-red-500", "text-sm", "mt-1");
  error.innerText = message;
  element.parentElement.appendChild(error);
};

const clearValidationErrors = () => {
  const fields = document.querySelectorAll(".border-red-500");
  fields.forEach((field) => field.classList.remove("border-red-500"));

  const errors = document.querySelectorAll(".text-red-500.text-sm.mt-1");
  errors.forEach((error) => error.remove());
};
