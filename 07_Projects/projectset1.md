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