function getRandomHexColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

export default function getRandomColor() {
  let color = '';
  while (true) {
    color = getRandomHexColor();
    if (color !== '#ffffff') {
      break;
    }
  }

  return color;
}


