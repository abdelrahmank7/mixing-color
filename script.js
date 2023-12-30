// Assuming you have two color input elements with class names 'color1' and 'color2'
const color1Input = document.querySelector('.color1');
const color2Input = document.querySelector('.color2');
const body = document.body;

// Function to update the background gradient
function updateGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;

  // Set the background gradient style for the body
  body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

  // Display the current CSS background in the h3 element
  const h3Element = document.querySelector('h3');
  h3Element.textContent = `linear-gradient(to right, ${color1}, ${color2});`;
}

// Add event listeners to color input elements
color1Input.addEventListener('input', updateGradient);
color2Input.addEventListener('input', updateGradient);

// Initial call to set the background gradient based on default color values
updateGradient();
