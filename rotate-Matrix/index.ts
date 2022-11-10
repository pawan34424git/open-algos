// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const n = arr[0].length;

for (let layer = 0; layer < n / 2; layer++) {
  const first = layer;
  const last = n - 1 - layer;
  console.log({ first, last, layer });
  for (let i = first; i < last; i++) {
    const offset = i - first;

    const temp = arr[first][i]; // top
    console.log('T ', arr[first][i]);

    arr[first][i] = arr[last - offset][first]; // left
    console.log('L ', arr[last - offset][first]);

    arr[last - offset][first] = arr[last][last - offset]; //bottom
    console.log('B ', arr[last][last - offset]);

    arr[last][last - offset] = arr[i][last]; //right
    console.log('R ', arr[i][last]);

    arr[i][last] = temp;
  }
}

appDiv.innerHTML = `${JSON.stringify(arr[0])}
                    <br>${JSON.stringify(arr[1])}
                    <br>${JSON.stringify(arr[2])}
                    <br>${JSON.stringify(arr[3])}`;
