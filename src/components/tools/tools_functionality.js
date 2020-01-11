import Eraser from './eraser';
import PaintBucket from './paint_bucket';
import Pen from './pen';
import Stroke from './stroke';
import CanvasSize from '../modal-dialog/canvas_size';

/* eslint-disable no-unused-vars */
const penFunctionality = new Pen();
const eraserFunctionality = new Eraser();
const strokeFunctionality = new Stroke();
const paintBucketFunctionality = new PaintBucket();
const canvasSize = new CanvasSize();

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const penSizes = Array.from(document.querySelector('.pen_size').children);
const tools = Array.from(document.querySelector('.drawing_tool').children);
const range = document.querySelector('.range_line');
const primaryColor = document.querySelector('.color_select-primary');
const secondaryColor = document.querySelector('.color_select-secondary');
const revertColors = document.querySelector('.revert_colors');

range.addEventListener('change', () => {
  canvasSize.chooseSize();
});

range.addEventListener('change', canvasSize.handleEvent);

penSizes.forEach((el) => el.addEventListener('click', () => {
  for (let i = 0; i < penSizes.length; i += 1) {
    if (penSizes[i].classList.contains('active_size')) {
      penSizes[i].classList.remove('active_size');
      penSizes[i].children[0].classList.remove('active_inner');
    }
  }
  el.classList.add('active_size');
  el.children[0].classList.add('active_inner');
}));

function drawingToolsFun(target) {
  const events = ['mousemove', 'mousedown', 'mouseup', 'mouseleave'];
  if (target.classList.contains('drawing_tool-pen')) {
    events.forEach((el) => canvas.addEventListener(el, penFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, eraserFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, strokeFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, paintBucketFunctionality));
  } else if (target.classList.contains('drawing_tool-paint_bucket')) {
    events.forEach((el) => canvas.addEventListener(el, paintBucketFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, penFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, eraserFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, strokeFunctionality));
  } else if (target.classList.contains('drawing_tool-eraser')) {
    events.forEach((el) => canvas.addEventListener(el, eraserFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, penFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, strokeFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, paintBucketFunctionality));
  } else if (target.classList.contains('drawing_tool-stroke')) {
    events.forEach((el) => canvas.addEventListener(el, strokeFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, penFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, eraserFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, paintBucketFunctionality));
  } else if (target.classList.contains('drawing_tool-color_picker')) {
    events.forEach((el) => canvas.removeEventListener(el, penFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, eraserFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, strokeFunctionality));
    events.forEach((el) => canvas.removeEventListener(el, paintBucketFunctionality));
  }
}

function toolsListeners(event) {
  const { target } = event;
  drawingToolsFun(target);
}

tools.forEach((el) => el.addEventListener('click', (event) => {
  for (let i = 0; i < tools.length; i += 1) {
    if (tools[i].classList.contains('active_tool')) {
      tools[i].classList.remove('active_tool');
    }
  }
  el.classList.add('active_tool');
  toolsListeners(event);
}));

revertColors.addEventListener('click', () => {
  [primaryColor.value, secondaryColor.value] = [secondaryColor.value, primaryColor.value];
});

export default drawingToolsFun;
