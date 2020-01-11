export default class LocalStorageSetData {
  /* eslint-disable class-methods-use-this, no-unused-vars */
  savePenUnit() {
    const penSizes = Array.from(document.querySelector('.pen_size').children);
    penSizes.forEach((el, i) => {
      if (el.classList.contains('active_size')) {
        localStorage.setItem('active_size-index', `${i}`);
      }
    });
  }

  saveActiveTool() {
    const tools = Array.from(document.querySelector('.drawing_tool').children);
    tools.forEach((el, i) => {
      if (el.classList.contains('active_tool')) {
        localStorage.setItem('active_tool-index', `${i}`);
      }
    });
  }

  savePrimaryColor() {
    const primaryColor = document.querySelector('.color_select-primary');
    localStorage.setItem('primary_color-value', `${primaryColor.value}`);
  }

  saveSecondaryColor() {
    const secondaryColor = document.querySelector('.color_select-secondary');
    localStorage.setItem('secondary_color-value', `${secondaryColor.value}`);
  }

  saveFramesLength() {
    const frames = Array.from(document.querySelectorAll('.frame'));
    localStorage.setItem('frames_length', `${frames.length}`);
  }

  saveActiveFrame() {
    const frames = Array.from(document.querySelectorAll('.frame'));
    frames.forEach((el, i) => {
      if (el.classList.contains('frame-active')) {
        localStorage.setItem('active_frame-index', `${i}`);
      }
    });
  }

  saveCanvasData() {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const frames = Array.from(document.querySelectorAll('.frame'));
    frames.forEach((el, i) => {
      localStorage.setItem(`canvas_frame${i + 1}`, el.children[0].toDataURL());
    });
    localStorage.setItem('canvas_image', canvas.toDataURL());
  }

  saveCanvasSize() {
    const range = document.querySelector('.range_line');
    localStorage.setItem('range_value', `${range.value}`);
    localStorage.setItem('canvas_size', `${range.data}`);
  }

  saveAnimationSpeed() {
    const animationSpeed = document.querySelector('.animation_speed');
    localStorage.setItem('animation_speed', `${animationSpeed.value}`);
  }

  saveKeyboardShorts() {
    const modalWindowItems = Array.from(document.querySelectorAll('.item-key'));
    const modalWindowItemsHTML = modalWindowItems.map((el) => el.textContent);
    localStorage.setItem('keyboarb_shortcuts', JSON.stringify(modalWindowItemsHTML));
  }
}
