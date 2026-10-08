export function generateRandNumInRange(max) {
  return Math.floor(Math.random() * max + 1);
}

export function generateRandRGBClr() {
  const red = generateRandNumInRange(255);
  const green = generateRandNumInRange(255);
  const blue = generateRandNumInRange(255);

  return `rgb(${red}, ${green}, ${blue})`;
}

export function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    // (e.g. #03F -> #0033FF)
    hex = hex.split('').map(char => char + char).join('');
  }  

  let rHex = hex.substring(0, 2);
  let gHex = hex.substring(2, 4);
  let bHex = hex.substring(4, 6);

  let r = parseInt(rHex, 16);
  let g = parseInt(gHex, 16);
  let b = parseInt(bHex, 16);

  return `rgb(${r}, ${g}, ${b})`;
}