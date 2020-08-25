
let calcButton = document.querySelector('#calculate');


printTip = () => {
  let c = Number(document.querySelector('#cost').value);
  let p = Number(document.querySelector('#percent').value);
  console.log(c);
  if (isNaN(c) || isNaN(p) || c == 0) document.querySelector('#calculation').innerHTML = 'Please only enter numbers';
  else document.querySelector('#calculation').innerHTML = `Your total will be $${calculateTip(c, p)}`
}

calculateTip = (c, p) => {
  return Math.round(c * (1 + (p / 100)));
}

calcButton.addEventListener('click', printTip);
