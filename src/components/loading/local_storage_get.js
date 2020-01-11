export default class LocalStorageGetData {
  /* eslint-disable class-methods-use-this */
  getActiveTool() {
    const tools = Array.from(document.querySelector('.drawing_tool').children);
    if (localStorage.getItem('active_tool-index') !== null) {
      const activeToolIndex = localStorage.getItem('active_tool-index');
      tools[activeToolIndex].classList.add('active_tool');
    } else {
      tools[0].classList.add('active_tool');
    }
  }

  getPenUnit() {
    const penSizes = Array.from(document.querySelector('.pen_size').children);
    if (localStorage.getItem('active_size-index') !== null) {
      const activeSizeIndex = localStorage.getItem('active_size-index');
      penSizes[activeSizeIndex].classList.add('active_size');
      penSizes[activeSizeIndex].children[0].classList.add('active_inner');
    } else {
      penSizes[0].classList.add('active_size');
      penSizes[0].children[0].classList.add('active_inner');
    }
  }

  getPrimaryColor() {
    const primaryColor = document.querySelector('.color_select-primary');
    if (localStorage.getItem('primary_color-value') !== null) {
      primaryColor.value = localStorage.getItem('primary_color-value');
    } else {
      primaryColor.value = '#000000';
    }
  }

  getSecondaryColor() {
    const secondaryColor = document.querySelector('.color_select-secondary');
    if (localStorage.getItem('secondary_color-value') !== null) {
      secondaryColor.value = localStorage.getItem('secondary_color-value');
    } else {
      secondaryColor.value = '#ffffff';
    }
  }

  getFramesLength() {
    const framesContainer = document.querySelector('.frames_container');
    if (localStorage.getItem('frames_length') !== null) {
      const framesLength = Number(localStorage.getItem('frames_length'));
      const frameStructure = `<div class="frame draggable" draggable="true">
                              <canvas class="canvas_frame" width="96" height="96"></canvas>
                              <button class="button-frame_number"></button>
                              <button class="button-frame_delete" tooltip='delete'></button>
                              <button class="button-frame_move"></button>
                              <button class="button-frame_duplicate"></button>
                            </div>`;

      for (let i = 0; i < framesLength - 1; i += 1) {
        framesContainer.insertAdjacentHTML('beforeend', frameStructure);
      }
    }
  }

  getActiveFrame() {
    const frames = Array.from(document.querySelectorAll('.frame'));
    if (localStorage.getItem('active_frame-index') !== null) {
      const activeFrameInd = localStorage.getItem('active_frame-index');
      frames[activeFrameInd].classList.add('frame-active');
    } else {
      frames[0].classList.add('frame-active');
    }
  }

  getCanvasData() {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const frames = Array.from(document.querySelectorAll('.frame'));
    frames.forEach((el, i) => {
      if (localStorage.getItem(`canvas_frame${i + 1}`) !== null) {
        const canvasFrame = el.children[0];
        const ctxFrame = canvasFrame.getContext('2d');
        const canvasFrameImg = localStorage.getItem(`canvas_frame${i + 1}`);
        const img = new Image();
        img.src = canvasFrameImg;
        img.onload = () => ctxFrame.drawImage(img, 0, 0);
      }
    });

    if (localStorage.getItem('canvas_image') !== null) {
      const canvasImg = localStorage.getItem('canvas_image');
      const img = new Image();
      img.src = canvasImg;
      img.onload = () => ctx.drawImage(img, 0, 0);
    }
  }

  getCanvasSize() {
    const range = document.querySelector('.range_line');
    const canvasSizeWidth = document.querySelector('.canvas_width__value');
    const canvasSizeHeight = document.querySelector('.canvas_height__value');

    if (localStorage.getItem('range_value') !== null) {
      range.value = localStorage.getItem('range_value');
    } else {
      range.value = '2';
    }

    if (localStorage.getItem('canvas_size') !== null) {
      range.data = localStorage.getItem('canvas_size');
      canvasSizeWidth.value = `${range.data}`;
      canvasSizeHeight.value = `${range.data}`;
    } else {
      range.data = '64';
      canvasSizeWidth.value = `${range.data}`;
      canvasSizeHeight.value = `${range.data}`;
    }
  }

  getAnimationSpeed() {
    const animationSpeed = document.querySelector('.animation_speed');
    const animationSpeedOutput = document.querySelector('.fps_output');

    if (localStorage.getItem('animation_speed') !== null) {
      animationSpeed.value = localStorage.getItem('animation_speed');
      animationSpeedOutput.textContent = `${animationSpeed.value} FPS`;
    } else {
      animationSpeed.value = '1';
      animationSpeedOutput.textContent = `${animationSpeed.value} FPS`;
    }
  }

  getKeyboardShorts() {
    const modalWindowItems = Array.from(document.querySelectorAll('.item-key'));
    if (localStorage.getItem('keyboarb_shortcuts') !== null) {
      const modalWindowItemsHTML = JSON.parse(localStorage.getItem('keyboarb_shortcuts'));
      modalWindowItems.forEach((el, i) => {
        const item = el;
        item.textContent = modalWindowItemsHTML[i];
      });
    } else {
      const modalWindowItemsHTML = 'PBES][↑↓FDNX';
      modalWindowItems.forEach((el, i) => {
        const item = el;
        item.textContent = modalWindowItemsHTML[i];
      });
    }
  }
}
