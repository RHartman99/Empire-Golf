// Smooth scrolling
const hashes = document.querySelectorAll('a[href^="#"]');
for (const item of hashes) {
  item.addEventListener("click", e => {
    e.preventDefault();
    const hashval = item.getAttribute("href");
    const target =
      document.querySelector(hashval).getBoundingClientRect().top +
      window.pageYOffset -
      150;

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
