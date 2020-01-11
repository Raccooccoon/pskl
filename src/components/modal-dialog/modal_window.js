/* eslint-disable default-case */
import drawingToolsFun from '../tools/tools_functionality';
import Frames from '../frame-list/frames';

const filter = document.querySelector('.filter');
const modalWindow = document.querySelector('.modal_window');
const modalWindowExit = document.querySelector('.modal_window__header-exit');
const modalWindowDisplay = document.querySelector('.keyboard_controls');
let modalWindowItems = Array.from(document.querySelectorAll('.item-key'));
let modalWindowItemsHTML = modalWindowItems.map((el) => el.textContent).join('');
const penSizes = Array.from(document.querySelector('.pen_size').children);
const tools = Array.from(document.querySelector('.drawing_tool').children);
const pen = document.querySelector('.drawing_tool-pen');
const paintBucket = document.querySelector('.drawing_tool-paint_bucket');
const eraser = document.querySelector('.drawing_tool-eraser');
const stroke = document.querySelector('.drawing_tool-stroke');
const revertColors = document.querySelector('.revert_colors');
const keySimbolsString = 'QWERTYUIOP[]ASDFGHJKLZXCVBNM←↑↓→';
const keyCodesArray = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'KeyA', 'KeyS', 'KeyD',
  'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'];

function showWindow(state) {
  filter.style.display = state;
  modalWindow.style.display = state;
}

function changeShortcut(event) {
  const { target } = event;
  target.classList.add('key_change');
  window.addEventListener('keydown', (ev) => {
    const keyCode = ev.code;
    if (keyCodesArray.indexOf(keyCode) === -1) return;
    const simbolIndex = keyCodesArray.indexOf(keyCode);
    const simbolKey = keySimbolsString[simbolIndex];
    modalWindowItems = Array.from(document.querySelectorAll('.item-key'));
    modalWindowItemsHTML = modalWindowItems.map((el) => el.textContent).join('');
    if (modalWindowItemsHTML.indexOf(simbolKey) >= 0) {
      const index = modalWindowItemsHTML.indexOf(simbolKey);
      modalWindowItems[index].classList.add('key_warn');
      modalWindowItems[index].textContent = '???';
    }
    target.textContent = `${keySimbolsString[keyCodesArray.indexOf(keyCode)]}`;
    modalWindowItemsHTML = modalWindowItems.map((el) => el.textContent).join('');
    target.classList.remove('key_change');
    target.classList.remove('key_warn');
  }, { once: true });
}

modalWindowItems.forEach((el) => el.addEventListener('click', changeShortcut));
modalWindowDisplay.addEventListener('click', () => showWindow('block'));
modalWindowExit.addEventListener('click', () => showWindow('none'));
filter.addEventListener('click', () => showWindow('none'));

document.addEventListener('keydown', (event) => {
  const frames = Array.from(document.querySelectorAll('.frame'));
  const activeFrame = document.querySelector('.frame-active');
  const clickEvent = new Event('click');

  if (modalWindow.style.display === 'none') {
    switch (event.code) {
      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[0].textContent)]}`:
        for (let i = 0; i < tools.length; i += 1) {
          if (tools[i].classList.contains('active_tool')) {
            tools[i].classList.remove('active_tool');
          }
        }
        pen.classList.add('active_tool');
        drawingToolsFun(pen);
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[1].textContent)]}`:
        for (let i = 0; i < tools.length; i += 1) {
          if (tools[i].classList.contains('active_tool')) {
            tools[i].classList.remove('active_tool');
          }
        }
        paintBucket.classList.add('active_tool');
        drawingToolsFun(paintBucket);
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[2].textContent)]}`:
        for (let i = 0; i < tools.length; i += 1) {
          if (tools[i].classList.contains('active_tool')) {
            tools[i].classList.remove('active_tool');
          }
        }
        eraser.classList.add('active_tool');
        drawingToolsFun(eraser);
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[3].textContent)]}`:
        for (let i = 0; i < tools.length; i += 1) {
          if (tools[i].classList.contains('active_tool')) {
            tools[i].classList.remove('active_tool');
          }
        }
        stroke.classList.add('active_tool');
        drawingToolsFun(stroke);
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[4].textContent)]}`:
        for (let i = 0; i < penSizes.length; i += 1) {
          if (penSizes[3].classList.contains('active_size')) {
            return;
          }
          if (penSizes[i].classList.contains('active_size')) {
            penSizes[i].classList.remove('active_size');
            penSizes[i].children[0].classList.remove('active_inner');
            penSizes[i + 1].classList.add('active_size');
            penSizes[i + 1].children[0].classList.add('active_inner');
            return;
          }
        }
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[5].textContent)]}`:
        for (let i = 0; i < penSizes.length; i += 1) {
          if (penSizes[0].classList.contains('active_size')) {
            return;
          }
          if (penSizes[i].classList.contains('active_size')) {
            penSizes[i].classList.remove('active_size');
            penSizes[i].children[0].classList.remove('active_inner');
            penSizes[i - 1].classList.add('active_size');
            penSizes[i - 1].children[0].classList.add('active_inner');
            return;
          }
        }
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[6].textContent)]}`:
        for (let i = 0; i < frames.length; i += 1) {
          if (frames[0].classList.contains('frame-active')) {
            return;
          }
          if (frames[i].classList.contains('frame-active')) {
            frames[i].classList.remove('frame-active');
            frames[i - 1].classList.add('frame-active');
            Frames.prototype.putFrameDataOnCanvas();
            return;
          }
        }
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[7].textContent)]}`:
        for (let i = 0; i < frames.length; i += 1) {
          if (frames[frames.length - 1].classList.contains('frame-active')) {
            return;
          }
          if (frames[i].classList.contains('frame-active')) {
            frames[i].classList.remove('frame-active');
            frames[i + 1].classList.add('frame-active');
            Frames.prototype.putFrameDataOnCanvas();
            return;
          }
        }
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[8].textContent)]}`:
        Frames.prototype.addFrame();
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[9].textContent)]}`:
        if (frames.length === 1) return;
        activeFrame.dispatchEvent(clickEvent);
        Frames.prototype.deleteFrame(clickEvent);
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[10].textContent)]}`:
        activeFrame.dispatchEvent(clickEvent);
        Frames.prototype.duplicateFrame(clickEvent);
        break;

      case `${keyCodesArray[keySimbolsString.indexOf(modalWindowItems[11].textContent)]}`:
        revertColors.dispatchEvent(clickEvent);
        break;
    }
  }
});
