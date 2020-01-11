/* eslint-disable no-undef */
export default class GIFexport {
  constructor() {
    this.gifRepeat = null;
  }

  downloadGif() {
    const animationSpeed = document.querySelector('.animation_speed');
    const loop = document.querySelector('.loop_repeatedly');
    const gifSpeed = 1000 / Number(animationSpeed.value);

    if (loop.checked === true) {
      this.gifRepeat = 0;
    } else {
      this.gifRepeat = 1;
    }
    const encoder = new GIFEncoder();
    const params = $.extend({
      frames: $('.canvas_frame').map((i, f) => f.getContext('2d')).toArray(),
      filename: 'piskelclone.gif',
      repeat: this.gifRepeat,
      delay: gifSpeed,
      dispose: 0,
      transparent: null,
    });
    encoder.setRepeat(params.repeat);
    encoder.setDelay(params.delay);
    encoder.setDispose(params.dispose);
    encoder.setTransparent(params.transparent);
    encoder.start();
    params.frames.forEach((frame) => encoder.addFrame(frame));
    encoder.finish();
    encoder.download(params.filename);
  }
}
