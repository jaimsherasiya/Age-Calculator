const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    const nextBirthday = getNextBirthday(birthdayValue);

    resultEl.innerText = `Your age is ${age.years} years, ${age.months} months, ${age.weeks} weeks, and ${age.days} days old. Your next birthday is on a ${nextBirthday}.`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  const ageInMilliseconds = currentDate - birthdayDate;
  const ageInMillisecondsWeek = 1000 * 60 * 60 * 24 * 7;
  const ageInMillisecondsMonth = 1000 * 60 * 60 * 24 * 30.44; // Average number of days in a month
  const ageInMillisecondsYear = 1000 * 60 * 60 * 24 * 365.25; // Average number of days in a year

  const years = Math.floor(ageInMilliseconds / ageInMillisecondsYear);
  const remainingMilliseconds = ageInMilliseconds % ageInMillisecondsYear;
  const months = Math.floor(remainingMilliseconds / ageInMillisecondsMonth);
  const remainingMilliseconds2 = remainingMilliseconds % ageInMillisecondsMonth;
  const weeks = Math.floor(remainingMilliseconds2 / ageInMillisecondsWeek);
  const days = Math.floor((remainingMilliseconds2 % ageInMillisecondsWeek) / (1000 * 60 * 60 * 24));

  return {
    years,
    months,
    weeks,
    days
  };
}

function getNextBirthday(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);

  birthdayDate.setFullYear(currentDate.getFullYear());

  if (currentDate > birthdayDate) {
    birthdayDate.setFullYear(currentDate.getFullYear() + 1);
  }

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayOfWeek = daysOfWeek[birthdayDate.getDay()];

  return dayOfWeek;
}

btnEl.addEventListener("click", calculateAge);
