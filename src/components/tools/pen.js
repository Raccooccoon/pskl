import CanvasSize from '../modal-dialog/canvas_size';
import Frames from '../frame-list/frames';

/* eslint-disable no-restricted-globals, max-len, default-case */
export default class Pen {
  constructor() {
    this.flag = null;
    this.lastX = null;
    this.lastY = null;
    this.canvasSize = new CanvasSize();
    this.framesFunctionality = new Frames();
  }

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
      ctx.fillRect(x1 * field, y1 * field, field * activeSizeValue, field * activeSizeValue);
      return;
    }
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    const sightX = (deltaX < 0) ? -1 : 1;
    const sightY = (deltaY < 0) ? -1 : 1;

    if (Math.abs(deltaY) < Math.abs(deltaX)) {
      const b = y1 - (deltaY / deltaX) * x1;

      while (x1 !== x2) {
        ctx.fillRect(x1 * field, Math.round((deltaY / deltaX) * x1 + b) * field, field * activeSizeValue, field * activeSizeValue);
        x1 += sightX;
      }
    } else if (Math.abs(deltaY) > Math.abs(deltaX)) {
      const b = x1 - (deltaX / deltaY) * y1;
      while (y1 !== y2) {
        ctx.fillRect(Math.round((deltaX / deltaY) * y1 + b) * field, y1 * field, field * activeSizeValue, field * activeSizeValue);
        y1 += sightY;
      }
    }
    ctx.fillRect(x2 * field, y2 * field, field * activeSizeValue, field * activeSizeValue);
  }

  handleEvent(event) {
    const primaryColor = document.querySelector('.color_select-primary');
    const secondaryColor = document.querySelector('.color_select-secondary');
    let color = null;
    switch (event.which) {
      case 1:
        color = primaryColor.value;
        break;

      case 3:
        color = secondaryColor.value;
        break;

      default:
        color = secondaryColor.value;
        break;
    }
    switch (event.type) {
      case 'mousemove':
        this.drawBrasenham(color);
        [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
        break;

      case 'mousedown':
        this.flag = true;
        [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
        this.drawBrasenham(color);
        break;

      case 'mouseup':
        this.flag = false;
        this.drawBrasenham(color);
        this.framesFunctionality.putCanvasDataOnFrame();
        break;

      case 'mouseleave':
        this.flag = false;
        this.drawBrasenham(color);
        break;
    }
  }
}
