const imgs = document.querySelectorAll("img[data-src]");

const obsCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function (e) {
    entry.target.classList.remove("lazy-img");
  });
};

const obsOptions = {
  root: null,
  threshold: 0,
  //   rootMargin: "200px",
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

imgs.forEach((img) => observer.observe(img));

// localStorage.setItem("name", "gaurav");
// localStorage.removeItem("name");
// console.log(localStorage.getItem("name"));
// sessionStorage.setItem("lastName", "yadav");
