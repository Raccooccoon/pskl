/* eslint-disable consistent-return, no-undef */
export default class CanvasSize {
  constructor() {
    this.pixelSize = null;
  }

  displayCanvasSize() {
    const canvasSizeWidth = document.querySelector('.canvas_width__value');
    canvasSizeWidth.textContent = this.pixelSize;
    return this.pixelSize;
  }

  chooseSize() {
    const canvasSizeWidth = document.querySelector('.canvas_width__value');
    const canvasSizeHeight = document.querySelector('.canvas_height__value');
    const range = document.querySelector('.range_line');
    if (range.value === '1') {
      this.pixelSize = '32';
      range.data = this.pixelSize;
      canvasSizeWidth.value = `${range.data}`;
      canvasSizeHeight.value = `${range.data}`;
      return this.pixelSize;
    }
    if (range.value === '2') {
      this.pixelSize = '64';
      range.data = this.pixelSize;
      canvasSizeWidth.value = `${range.data}`;
      canvasSizeHeight.value = `${range.data}`;
      return this.pixelSize;
    }
    if (range.value === '3') {
      this.pixelSize = '128';
      range.data = this.pixelSize;
      canvasSizeWidth.value = `${range.data}`;
      canvasSizeHeight.value = `${range.data}`;
      return this.pixelSize;
    }
  }
}
