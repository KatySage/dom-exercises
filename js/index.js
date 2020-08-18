const myButton = document.getElementById('clickMe');
const noun1 = document.getElementById('noun1');
const noun1Input = document.getElementById('noun1Input');
const noun2 = document.getElementById('noun2');
const noun2Input = document.getElementById('noun2Input');
const verb = document.getElementById('verb');
const verbInput = document.getElementById('verbInput');
const noun3 = document.getElementById('noun3');
const noun4 = document.getElementById('noun4');
const noun5 = document.getElementById('noun5');
const noun8 = document.getElementById('noun8');

const bodyContainer = document.getElementById('container');
const additionalText = "Hey, this is rad!"
const radButton = document.getElementById('radButton')

myButton.addEventListener('click', function (event) {
  event.preventDefault();

  noun1.innerHTML = noun1Input.value;
  noun1.classList.add('filled');
  noun3.innerHTML = noun1Input.value;
  noun3.classList.add('filled');
  noun4.innerHTML = noun1Input.value;
  noun4.classList.add('filled');
  noun2.innerHTML = noun2Input.value;
  noun2.classList.add('filled');
  noun5.innerHTML = noun1Input.value;
  noun5.classList.add('filled');
  noun8.innerHTML = noun2Input.value;
  noun8.classList.add('filled');
  verb.innerHTML = verbInput.value;
  verb.classList.add('filled');
});

radButton.addEventListener('click', function(event) {
  event.preventDefault();
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = additionalText;
  bodyContainer.appendChild(newParagraph);
})