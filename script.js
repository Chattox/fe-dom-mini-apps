const list = [...document.querySelectorAll('li')];

console.log(list);

const onClick = event => {
  console.log(event.target);
  if (!event.target.classList.contains('done')) {
    event.target.classList.remove('hover');
    event.target.classList.add('done');
    console.log(event.target.innerText);
    event.target.innerText += ' ✅';
    console.log(event.target.innerText);
  } else {
    event.target.classList.remove('done');
    event.target.innerText = event.target.innerText.replace(' ✅', '');
  }
  // console.log(list.classList);
};

const onHover = event => {
  if (!event.target.classList.contains('done')) {
    event.target.classList.add('hover');
  }
};

const onOut = event => {
  if (!event.target.classList.contains('done')) {
    event.target.classList.remove('hover');
  }
};

list.forEach(el => {
  el.addEventListener('click', onClick);
  el.addEventListener('pointerover', onHover);
  el.addEventListener('pointerout', onOut);
});
