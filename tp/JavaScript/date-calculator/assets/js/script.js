console.log(new Date());
const today = new Date().toISOString().split('T')[0];
console.log(today);
start_date.value = today;
start_date.min = today;

let tomorrow = new Date();
console.log(tomorrow, '1');
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow, '2');

let tomorrowFormat = tomorrow.toISOString().split('T')[0];
console.log(tomorrowFormat);
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener('change', (e) => {
  let day = new Date(e.target.value);
  console.log(day);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    console.log(day);
    end_date.value = day.toISOString().split('T')[0];
  }
});

end_date.addEventListener('change', (e) => {
  let day = new Date(e.target.value);
  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split('T')[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(new Date(end_date.value) - new Date(start_date.value));
  console.log(diffTime);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  total.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener('change', bookingCalc);
end_date.addEventListener('change', bookingCalc);
bookingCalc();