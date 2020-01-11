import AnimationPreview from './animation_preview';

const animation = new AnimationPreview();
const popupPreview = document.querySelector('.popup_preview-btn');
const animationSpeed = document.querySelector('.animation_speed');
const animationSpeedText = document.querySelector('.fps_output');
const rightSectionTools = document.querySelector('.right_section-tools');
const animatedCanvas = document.querySelector('.canvas_animation_preview');
const animatedCtx = animatedCanvas.getContext('2d');
const animationButtonsContainer = document.querySelector('.canvas_animation_buttons');


animation.start();

popupPreview.addEventListener('click', animation.fullScreenMode);

animationSpeed.addEventListener('change', () => {
  animationSpeedText.textContent = `${animationSpeed.value} FPS`;
});

rightSectionTools.addEventListener('mouseover', () => {
  animationButtonsContainer.style.visibility = 'visible';
});

rightSectionTools.addEventListener('mouseout', () => {
  animationButtonsContainer.style.visibility = 'hidden';
});

animationSpeedText.textContent = `${animationSpeed.value} FPS`;