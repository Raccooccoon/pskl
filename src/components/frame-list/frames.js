export default class Frames {
/* eslint-disable class-methods-use-this, no-unused-vars, max-len, default-case */
  addFrame() {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const framesContainer = document.querySelector('.frames_container');
    const frames = Array.from(document.querySelectorAll('.frame'));
    for (let i = 0; i < frames.length; i += 1) {
      if (frames[i].classList.contains('frame-active')) {
        frames[i].classList.remove('frame-active');
      }
    }
    const newFrame = frames[0].cloneNode(true);
    framesContainer.append(newFrame);
    newFrame.classList.add('frame-active');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  deleteFrame(event) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const frames = Array.from(document.querySelectorAll('.frame'));
    const target = event.target.closest('div');
    const prevSibling = target.previousElementSibling;
    if (target.classList.contains('frame-active') && prevSibling) {
      prevSibling.classList.add('frame-active');
      Frames.prototype.putFrameDataOnCanvas();
    } else if (target.classList.contains('frame-active') && (target === frames[0])) {
      frames[0].classList.remove('frame-active');
      frames[1].classList.add('frame-active');
      Frames.prototype.putFrameDataOnCanvas();
    }
    target.remove();
    event.stopPropagation();
  }

  duplicateFrame(event) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const framesContainer = document.querySelector('.frames_container');
    const frames = Array.from(document.querySelectorAll('.frame'));
    for (let i = 0; i < frames.length; i += 1) {
      if (frames[i].classList.contains('frame-active')) {
        frames[i].classList.remove('frame-active');
      }
    }
    const target = event.target.closest('div');
    const targetNextSibling = target.nextElementSibling;
    const targetCanvas = target.children[0];
    const targetCanvasCtx = targetCanvas.getContext('2d');
    const duplicate = target.cloneNode(true);

    framesContainer.insertBefore(duplicate, targetNextSibling);
    duplicate.classList.add('frame-active');
    const duplicateCanvas = duplicate.children[0];
    const duplicateCanvasCtx = duplicateCanvas.getContext('2d');
    const duplicateButtons = [duplicate.querySelector('.button-frame_delete'), duplicate.querySelector('.button-frame_move'), duplicate.querySelector('.button-frame_duplicate')];
    duplicateButtons.forEach((el) => {
      const current = el;
      current.style.visibility = 'hidden';
    });

    duplicateCanvasCtx.drawImage(targetCanvas, 0, 0, targetCanvas.width, targetCanvas.height, 0, 0, duplicateCanvas.width, duplicateCanvas.height);
    event.stopPropagation();
  }

  putCanvasDataOnFrame() {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const activeFrame = document.querySelector('.frame-active');
    const canvasFrame = activeFrame.children[0];
    const ctxFrame = canvasFrame.getContext('2d');
    ctxFrame.clearRect(0, 0, canvasFrame.width, canvasFrame.height);
    ctxFrame.imageSmoothingEnabled = false;
    ctxFrame.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, canvasFrame.width, canvasFrame.height);
  }

  putFrameDataOnCanvas() {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const activeFrame = document.querySelector('.frame-active');
    const canvasFrame = activeFrame.children[0];
    const ctxFrame = canvasFrame.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(canvasFrame, 0, 0, canvasFrame.width, canvasFrame.height, 0, 0, canvas.width, canvas.height);
  }

  handleEvent(event) {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const frames = Array.from(document.querySelectorAll('.frame'));

    for (let i = 0; i < frames.length; i += 1) {
      const target = event.target.closest('div');
      const frameButtons = [target.querySelector('.button-frame_delete'), target.querySelector('.button-frame_move'), target.querySelector('.button-frame_duplicate')];
      const frameChildren = [target.children[0], target.children[1]];
      const framesContainer = document.querySelector('.frames_container');
      const framesSection = document.querySelector('.left_section-frames');

      switch (event.type) {
        case 'mouseover':
          frameButtons.forEach((el) => {
            if (target === framesContainer.children[0] && framesContainer.children.length === 1) {
              frameButtons[2].style.visibility = 'visible';
            } else {
              const current = el;
              current.style.visibility = 'visible';
            }
          });
          break;

        case 'mouseout':
          frameButtons.forEach((el) => {
            const current = el;
            current.style.visibility = 'hidden';
          });
          break;

        case 'dragstart':
          this.dragged = target;
          break;

        case 'dragenter':
          event.preventDefault();
          event.stopImmediatePropagation();

          if (Number(this.dragged.children[1].textContent) > Number(target.children[1].textContent)) {
            const replacedNode = framesContainer.replaceChild(this.dragged, target);
            framesContainer.insertBefore(replacedNode, this.dragged.nextElementSibling);
            return;
          }

          if (Number(this.dragged.children[1].textContent) < Number(target.children[1].textContent)) {
            const replacedNode = framesContainer.replaceChild(this.dragged, target);
            framesContainer.insertBefore(replacedNode, this.dragged);
            return;
          }
          break;

        case 'dragover':
          event.preventDefault();
          frameChildren.forEach((el) => {
            const current = el;
            current.style.visibility = 'hidden';
          });
          frameButtons.forEach((el) => {
            const current = el;
            current.style.visibility = 'hidden';
          });
          target.classList.add('over');
          break;

        case 'dragleave':
          event.preventDefault();
          break;

        case 'dragend':
          for (let k = 0; k < frames.length; k += 1) {
            if (frames[k].classList.contains('frame-active')) {
              frames[k].classList.remove('frame-active');
            }
          }
          this.dragged.classList.add('frame-active');
          this.putFrameDataOnCanvas();
          target.classList.remove('over');
          frameChildren.forEach((el) => {
            const current = el;
            current.style.visibility = 'visible';
          });
          break;

        case 'drop':
          event.stopImmediatePropagation();

          if (Number(this.dragged.children[1].textContent) > Number(target.children[1].textContent)) {
            const replacedNode = framesContainer.replaceChild(this.dragged, target);
            framesContainer.insertBefore(replacedNode, this.dragged.nextElementSibling);
            target.classList.remove('over');
            frameChildren.forEach((el) => {
              const current = el;
              current.style.visibility = 'visible';
            });
            for (let j = 0; j < frames.length; j += 1) {
              if (frames[j].classList.contains('frame-active')) {
                frames[j].classList.remove('frame-active');
              }
            }
            this.dragged.classList.add('frame-active');
            this.putFrameDataOnCanvas();
            return;
          }
          if (Number(this.dragged.children[1].textContent) < Number(target.children[1].textContent)) {
            const replacedNode = framesContainer.replaceChild(this.dragged, target);
            framesContainer.insertBefore(replacedNode, this.dragged);
            target.classList.remove('over');
            frameChildren.forEach((el) => {
              const current = el;
              current.style.visibility = 'visible';
            });
            for (let j = 0; j < frames.length; j += 1) {
              if (frames[j].classList.contains('frame-active')) {
                frames[j].classList.remove('frame-active');
              }
            }
            this.dragged.classList.add('frame-active');
            this.putFrameDataOnCanvas();
            return;
          }
          break;
      }
    }
  }
}
