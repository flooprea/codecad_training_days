const random = Math.floor(Math.random() * 3);
let name = prompt("Please enter your name");

const getRandEvent = () => {
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    let days = 0;
  if (event === 'Marathon') {
     days = 50;
  } else if (event === 'Triathlon') {
     days = 100;
  } else if (event === 'Pentathlon') {
     days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = (name, event) => {
    return `${name}'s event is: ${event}`
};

const logTime = (name, days) => {
  return `${name}'s time to train is: ${days} days`
};

const event = getRandEvent();
const days = getTrainingDays(event);

//display output
document.getElementById('output').innerHTML = logEvent(name, event) + ' | ' + logTime(name, days);

//reload button
document.getElementById("button").addEventListener("click", function(){
    location.reload();
});



