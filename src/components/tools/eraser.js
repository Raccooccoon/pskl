import Pen from './pen';

/* eslint-disable no-restricted-globals, max-len */
export default class Eraser extends Pen {
  drawBrasenham(color) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const range = document.querySelector('.range_line');
    this.canvasSize.chooseSize();
    const activeSize = document.querySelector('.active_size');
    const activeSizeValue = activeSize.getAttribute('value');
    ctx.fillStyle = color;
    if (!this.flag) return;
    let x1 = this.lastX;
    let y1 = this.lastY;
    const field = (512 / range.data);
    x1 = Math.floor(this.lastX / field);
    y1 = Math.floor(this.lastY / field);
    let x2 = event.offsetX;
    let y2 = event.offsetY;
    x2 = Math.floor(x2 / field);
    y2 = Math.floor(y2 / field);

    if (x1 === x2 && y1 === y2) {
      ctx.clearRect(x1 * field, y1 * field, field * activeSizeValue, field * activeSizeValue);
      return;
    }
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const sightX = (deltaX < 0) ? -1 : 1;
    const sightY = (deltaY < 0) ? -1 : 1;

    if (Math.abs(deltaY) < Math.abs(deltaX)) {
      const b = y1 - (deltaY / deltaX) * x1;

      while (x1 !== x2) {
        ctx.clearRect(x1 * field, Math.round((deltaY / deltaX) * x1 + b) * field, field * activeSizeValue, field * activeSizeValue);
        x1 += sightX;
      }
    } else if (Math.abs(deltaY) > Math.abs(deltaX)) {
      const b = x1 - (deltaX / deltaY) * y1;
      while (y1 !== y2) {
        ctx.clearRect(Math.round((deltaX / deltaY) * y1 + b) * field, y1 * field, field * activeSizeValue, field * activeSizeValue);
        y1 += sightY;
      }
    }
    ctx.clearRect(x2 * field, y2 * field, field * activeSizeValue, field * activeSizeValue);
  }
}
