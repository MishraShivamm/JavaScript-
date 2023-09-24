# Projects related to DOM

## Project link

[Click Here]()


# Solution Code

## Project-1


```JavaSCript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (event.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2 Solution
```JavaScript
const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('result').value;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * heiight) / 10000)).toFixed2;
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## Project 3 Solution
 ```JAvaScript
 const clockk = document.getElementById('clock');

//const clockk = document.querySelector('#clock')
// Both will give same value

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clockk.innerHTML = date.toLocaleTimeString();
}, 2000);
 ```