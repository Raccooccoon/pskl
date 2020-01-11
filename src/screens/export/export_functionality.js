import GIFexport from './GIFexport';
import PNGexport from './PNGexport';

const pngExport = new PNGexport();
const gifExport = new GIFexport();

let frames = Array.from(document.querySelectorAll('.frame'));
const resolutionInputs = Array.from(document.querySelectorAll('.resolution_value'));
const resolutionBoxLeft = document.querySelector('.box_input-left');
const downloadGIF = document.querySelector('.download_gif-btn');
const singleFramePNG = document.querySelector('.PNG_frame-btn');
const scaleOutput = document.querySelector('.scale_output');
const spritesheetCols = document.querySelector('.spitesheet_cols');
const spritesheetRows = document.querySelector('.spitesheet_rows');

window.addEventListener('DOMContentLoaded', () => {
  scaleOutput.textContent = `${(resolutionBoxLeft.value / 32).toFixed(1)}x`;
  pngExport.spritesheetFileInfo();
});

resolutionInputs.forEach((el) => el.addEventListener('input', () => {
  for (let i = 0; i < resolutionInputs.length; i += 1) {
    resolutionInputs[i].value = el.value;
  }
  scaleOutput.textContent = `${(el.value / 32).toFixed(1)}x`;
  pngExport.spritesheetFileInfo();
}));

spritesheetCols.addEventListener('input', () => {
  frames = Array.from(document.querySelectorAll('.frame'));
  spritesheetCols.max = `${frames.length}`;
  if (spritesheetCols.value > spritesheetCols.max) {
    spritesheetCols.value = spritesheetCols.max;
  }
  spritesheetRows.value = Math.ceil(frames.length / spritesheetCols.value);
  pngExport.spritesheetFileInfo();
});

singleFramePNG.addEventListener('click', pngExport.singleFrameToPNG);

downloadGIF.addEventListener('click', gifExport.downloadGif);
