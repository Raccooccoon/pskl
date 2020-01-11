import Frames from '../frame-list/frames';

/* eslint-disable class-methods-use-this,no-restricted-globals, no-unused-vars, no-undef */
export default class PaintBucket {
  constructor() {
    this.color = null;
    this.clickedColor = null;
    this.imageData = null;
    this.framesFunctionality = new Frames();
  }

  hexToRgb(hexName) {
    const hex = hexName.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
  }

  floodFill(color) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    this.imageData = ctx.getImageData(0, 0, 512, 512);
    this.clickedColor = `rgba(${
      this.imageData.data[event.offsetY * 4 * 512 + event.offsetX * 4]
    },${this.imageData.data[event.offsetY * 4 * 512 + event.offsetX * 4 + 1]},${
      this.imageData.data[event.offsetY * 4 * 512 + event.offsetX * 4 + 2]
    },1)`;

    this.clickedColorRGB = `rgb(${
      this.imageData.data[event.offsetY * 4 * 512 + event.offsetX * 4]
    },${this.imageData.data[event.offsetY * 4 * 512 + event.offsetX * 4 + 1]},${
      this.imageData.data[event.offsetY * 4 * 512 + event.offsetX * 4 + 2]
    })`;

    const fac = new FastAverageColor();
    const avgColor = fac.getColor(canvas);
    const stack = [[event.offsetY, event.offsetX]];
    const viewed = {};
    let pixel;
    let canvasColor;
    let length = 1;
    const arrRgb = this.hexToRgb(`${color}`);

    if (this.clickedColor === 'rgba(0,0,0,1)' && this.clickedColorRGB === avgColor.rgb) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 512, 512);
      this.imageData = ctx.getImageData(0, 0, 512, 512);
    } else if (this.clickedColor === avgColor.rgba) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 512, 512);
      this.imageData = ctx.getImageData(0, 0, 512, 512);
    } else {
      while (length > 0) {
        pixel = stack.pop();
        viewed.pixel = true;
        length -= 1;
        if (pixel[0] >= 0 && pixel[0] <= 512 && pixel[1] >= 0 && pixel[1] <= 512) {
          canvasColor = `rgba(${this.imageData.data[pixel[0] * 4 * 512 + pixel[1] * 4]},${this.imageData.data[pixel[0] * 4 * 512 + pixel[1] * 4 + 1]},${this.imageData.data[pixel[0] * 4 * 512 + pixel[1] * 4 + 2]},1)`;
          if (canvasColor === this.clickedColor) {
            [
              this.imageData.data[pixel[0] * 4 * 512 + pixel[1] * 4],
              this.imageData.data[pixel[0] * 4 * 512 + pixel[1] * 4 + 1],
              this.imageData.data[pixel[0] * 4 * 512 + pixel[1] * 4 + 2],
            ] = [arrRgb[0], arrRgb[1], arrRgb[2]];

            if (!viewed[[pixel[0] - 1, pixel[1]]]) {
              stack.push([pixel[0] - 1, pixel[1]]);
              length += 1;
            }
            if (!viewed[[pixel[0] - 1, pixel[1] - 1]]) {
              stack.push([pixel[0] - 1, pixel[1] - 1]);
              length += 1;
            }
            if (!viewed[[pixel[0] - 1, pixel[1] + 1]]) {
              stack.push([pixel[0] - 1, pixel[1] + 1]);
              length += 1;
            }
            if (!viewed[[pixel[0] + 1, pixel[1]]]) {
              stack.push([pixel[0] + 1, pixel[1]]);
              length += 1;
            }
          }
        }
      }
    }
    ctx.putImageData(this.imageData, 0, 0);
  }

  handleEvent(event) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const primaryColor = document.querySelector('.color_select-primary');
    const secondaryColor = document.querySelector('.color_select-secondary');
    if (event.type === 'mousedown' && event.which === 1) {
      this.floodFill(primaryColor.value);
      this.framesFunctionality.putCanvasDataOnFrame();
    } else if (event.type === 'mousedown' && event.which === 3) {
      this.floodFill(secondaryColor.value);
      this.framesFunctionality.putCanvasDataOnFrame();
    }
  }
}
