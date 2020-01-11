import Frames from './frames';

const framesFunctionality = new Frames();
let frames = Array.from(document.querySelectorAll('.frame'));
const addNewFrameButton = document.querySelector('.add_new_frame');

document.body.addEventListener('DOMSubtreeModified', () => {
  frames = Array.from(document.querySelectorAll('.frame'));
  frames.forEach((el, i) => {
    const element = el;
    element.children[1].textContent = i + 1;
    element.children[2].addEventListener('click', framesFunctionality.deleteFrame);
    element.children[4].addEventListener('click', framesFunctionality.duplicateFrame);
    const events = ['mousemove', 'mousedown', 'mouseover', 'mouseout', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop', 'mousewheel', 'scroll'];
    events.forEach((ev) => element.addEventListener(ev, framesFunctionality));
  });
  frames.forEach((el) => el.addEventListener('click', () => {
    for (let i = 0; i < frames.length; i += 1) {
      if (frames[i].classList.contains('frame-active')) {
        frames[i].classList.remove('frame-active');
      }
    }
    el.classList.add('frame-active');
    framesFunctionality.putFrameDataOnCanvas();
  }));
});

addNewFrameButton.addEventListener('click', () => {
  framesFunctionality.addFrame();
});
