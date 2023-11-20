const now = new Date();

const locale = navigator.language;

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
};

const newDate = new Intl.DateTimeFormat(locale, options).format(now);
console.log(newDate);

const ingredients = ["cheese", "pineapple"];

const timer = setTimeout(
  (ing1, ing2) => {
    console.log(`here is your pizza with ${ing1} and ${ing2}`);
  },
  1000,
  ...ingredients
);

if (ingredients.includes("pineapple")) clearTimeout(timer);
