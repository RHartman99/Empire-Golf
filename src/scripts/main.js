// Smooth scrolling
const hashes = document.querySelectorAll('a[href^="#"]');

const overviewH = document.querySelector("#overview").offsetTop;
const timelineH = document.querySelector("#timeline").offsetTop;
const outcomesH = document.querySelector("#outcomes").offsetTop;
const budgetH = document.querySelector("#budget").offsetTop;

const overview = document.querySelector("#menu-1");
const timeline = document.querySelector("#menu-2");
const outcomes = document.querySelector("#menu-3");
const budget = document.querySelector("#menu-4");

console.log(`${overviewH}`);

for (const item of hashes) {
  item.addEventListener("click", e => {
    e.preventDefault();
    const hashval = item.getAttribute("href");
    const target =
      document.querySelector(hashval).getBoundingClientRect().top +
      window.pageYOffset -
      70;

    if (target && hashval) {
      window.scrollTo({
        top: target,
        behavior: "smooth"
      });

      // eslint-disable-next-line no-restricted-globals
      history.pushState(null, null, hashval);
    }
  });
}

// window.onscroll = () => {
//   if (window.innerWidth > 1024) {
//     var height = window.pageYOffset + 80;
//     if (height >= budgetH) {
//       budget.classList.add("active");
//       outcomes.classList.remove("active");
//       timelines.classList.remove("active");
//       overview.classList.remove("active");
//     } else if (height >= outcomesH) {
//       budget.classList.remove("active");
//       outcomes.classList.add("active");
//       timeline.classList.remove("active");
//       overview.classList.remove("active");
//     } else if (height >= timelineH) {
//       budget.classList.remove("active");
//       outcomes.classList.remove("active");
//       timeline.classList.add("active");
//       overview.classList.remove("active");
//     } else if (height >= overviewH) {
//       budget.classList.remove("active");
//       outcomes.classList.remove("active");
//       timeline.classList.remove("active");
//       overview.classList.add("active");
//     } else {
//       budget.classList.remove("active");
//       outcomes.classList.remove("active");
//       timeline.classList.remove("active");
//       overview.classList.remove("active");
//     }
//   }
// };

document.onload = () => {
  budget.classList.remove("active");
  outcomes.classList.remove("active");
  timeline.classList.remove("active");
  overview.classList.remove("active");
};
