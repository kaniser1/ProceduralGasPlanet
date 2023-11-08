import './style.css';
import Renderer from './Classes/Renderer';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <canvas id="canvas" width="800" height="600"
  style="border: 1px solid black"></canvas>
`

const renderer = new Renderer();
renderer.initialize().then(() => renderer.draw());