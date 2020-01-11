import Frames from '../frame-list/frames';

/* eslint-disable max-len, default-case */
export default class Stroke {
  constructor() {
    this.lastX = null;
    this.lastY = null;
    this.canvasEvent = false;
    this.storedLines = [];
    this.originalImage = null;
    this.color = null;
    this.framesFunctionality = new Frames();
  }

  handleEvent(event) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const range = document.querySelector('.range_line');
    const primaryColor = document.querySelector('.color_select-primary');
    const secondaryColor = document.querySelector('.color_select-secondary');
    const activeSize = document.querySelector('.active_size');
    const activeSizeValue = activeSize.getAttribute('value');

    switch (event.type) {
      case 'mousedown':
        this.originalImage = ctx.getImageData(0, 0, 512, 512);
        this.lastX = event.offsetX;
        this.lastY = event.offsetY;
        this.canvasEvent = true;
        break;

      case 'mousemove':
        if (this.canvasEvent === true) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.putImageData(this.originalImage, 0, 0);
          ctx.fillStyle = this.color;
          ctx.strokeStyle = 'transparent';
          ctx.lineJoin = 'square';
          ctx.lineCap = 'square';
          let x1 = this.lastX;
          let y1 = this.lastY;
          const field = 512 / range.data;
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
          ctx.beginPath();
          ctx.moveTo(this.lastX, this.lastY);
          ctx.lineTo(event.offsetX, event.offsetY);
          ctx.stroke();
        }
        break;

      case 'mouseup':
        this.canvasEvent = false;
        this.framesFunctionality.putCanvasDataOnFrame();
        break;

      case 'mouseout':
        this.canvasEvent = false;
        break;
    }

    switch (event.which) {
      case 1:
        this.color = primaryColor.value;
        break;

      case 3:
        this.color = secondaryColor.value;
        break;

      default:
        this.color = secondaryColor.value;
        break;
    }
  }
}
