const catEl = document.querySelectorAll(".item");
console.log("Number of categories:", catEl.length);

for (let i = 0; i < catEl.length; i += 1) {
  const haEl = catEl[i].firstElementChild.textContent;
  console.log("Category:", haEl);
  const liEl = catEl[i].lastElementChild;
  const propEl = liEl.querySelectorAll("li");
  console.log("Elements:", propEl.length);
}
