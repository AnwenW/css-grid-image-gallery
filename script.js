const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');

const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

// generate item in html with horizontal and vertical dimensions (to be input), image, and overlay with button

function generateHTML([h, v]) {
  return `
    <div class="item h${h} v${v}">
      <img src="images/${randomNumber(12)}.jpg">
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  `;
}

// generate random image from 1.jpg to 12.jpg, in function generateHTML()

function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
  // console.log(e.currentTarget);
  const src = e.currentTarget.querySelector('img').src;
  // console.log(src);
  overlayImage.src = src;
  overlay.classList.add('open');
}

function close() {
  overlay.classList.remove('open');
}

// create array of 50 arrays/items, populated with random h and v values of between 1 and 4, to pass into generateHTML()

const digits = Array.from({ length: 50}, () => [randomNumber(4), randomNumber(4)]).concat([ [1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1] ]);
// console.log(digits);

// map over each item in digits array, pass it to generateHTML(). join('') turns it into a string.

const html = digits.map(generateHTML).join('');
console.log(html);

// set innerhtml of the gallery to be const html;

gallery.innerHTML = html;

// when item is clicked, show overlay image – with function handleClick

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);
