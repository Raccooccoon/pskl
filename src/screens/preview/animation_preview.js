export default class AnimationPreview {
  constructor() {
    this.frameIndex = 0;
  }

  update() {
    const frames = Array.from(document.querySelectorAll('.frame'));
    if (this.frameIndex < frames.length - 1) {
      this.frameIndex += 1;
    } else {
      this.frameIndex = 0;
    }
  }

  render() {
    const frames = Array.from(document.querySelectorAll('.frame'));
    const animatedCanvas = document.querySelector('.canvas_animation_preview');
    const animatedCtx = animatedCanvas.getContext('2d');
    animatedCtx.clearRect(0, 0, animatedCanvas.width, animatedCanvas.height);
    const frameImg = frames[this.frameIndex].children[0];
    // eslint-disable-next-line max-len
    animatedCtx.drawImage(frameImg, 0, 0, frameImg.width, frameImg.height, 0, 0, animatedCanvas.width, animatedCanvas.height);
  }

  start() {
    const animatedCanvas = document.querySelector('.canvas_animation_preview');
    const animatedCtx = animatedCanvas.getContext('2d');
    const animationSpeed = document.querySelector('.animation_speed');

    const noSpeed = () => {
      const activeFrame = document.querySelector('.frame-active');
      const frameImg = activeFrame.children[0];
      animatedCtx.imageSmoothingEnabled = false;
      animatedCtx.clearRect(0, 0, animatedCanvas.width, animatedCanvas.height);
      // eslint-disable-next-line max-len
      animatedCtx.drawImage(frameImg, 0, 0, frameImg.width, frameImg.height, 0, 0, animatedCanvas.width, animatedCanvas.height);
    };

    const loop = () => setTimeout(() => {
      const frames = Array.from(document.querySelectorAll('.frame'));
      if (this.frameIndex < frames.length - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
      }
      animatedCtx.clearRect(0, 0, animatedCanvas.width, animatedCanvas.height);
      const frameImg = frames[this.frameIndex].children[0];
      animatedCtx.imageSmoothingEnabled = false;
      // eslint-disable-next-line max-len
      animatedCtx.drawImage(frameImg, 0, 0, frameImg.width, frameImg.height, 0, 0, animatedCanvas.width, animatedCanvas.height);
      window.requestAnimationFrame(loop);
    }, (1000 / animationSpeed.value) === Infinity ? noSpeed() : (1000 / animationSpeed.value));

    window.requestAnimationFrame(loop);
  }

  // eslint-disable-next-line class-methods-use-this
  handleEvent(event) {
    const target = event.target.closest('div');
    switch (event.type) {
      case 'mouseover':
        target.children[0].style.visibility = 'visible';
        break;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  fullScreenMode() {
    const animatedCanvas = document.querySelector('.canvas_animation_preview');
    const animatedCtx = animatedCanvas.getContext('2d');
    if (document.fullscreenEnabled || document.webkitFullscreenEnabled) {
      if ('requestFullscreen' in animatedCanvas) {
        animatedCanvas.requestFullscreen();
      } else if ('webkitRequestFullscreen' in animatedCanvas) {
        animatedCanvas.webkitRequestFullscreen();
      }
    }
  }
}
