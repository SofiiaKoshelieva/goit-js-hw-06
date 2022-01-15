const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");
const totalEl = ingredients.map((ingredient) => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add("item");
  ingredientsEl.textContent = ingredient;
  return ingredientsEl;
 
});
ulEl.prepend(...totalEl);
 console.log(ulEl)
