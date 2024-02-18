const now = new Date();

console.log(navigator.language);

const a = new Intl.DateTimeFormat().format(now);

console.log(a);
