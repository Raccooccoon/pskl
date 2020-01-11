import LocalStorageSetData from './local_storage_set';
import LocalStorageGetData from './local_storage_get';
import Frames from '../frame-list/frames';
import drawingToolsFun from '../tools/tools_functionality';

const localStorageSet = new LocalStorageSetData();
const localStorageGet = new LocalStorageGetData();
const framesFunctionality = new Frames();

window.addEventListener('beforeunload', () => {
  localStorageSet.savePenUnit();
  localStorageSet.saveActiveTool();
  localStorageSet.savePrimaryColor();
  localStorageSet.saveSecondaryColor();
  localStorageSet.saveFramesLength();
  localStorageSet.saveActiveFrame();
  localStorageSet.saveCanvasData();
  localStorageSet.saveCanvasSize();
  localStorageSet.saveAnimationSpeed();
  localStorageSet.saveKeyboardShorts();
});

window.addEventListener('load', () => {
  localStorageGet.getPenUnit();
  localStorageGet.getActiveTool();
  localStorageGet.getPrimaryColor();
  localStorageGet.getSecondaryColor();
  localStorageGet.getFramesLength();
  localStorageGet.getActiveFrame();
  localStorageGet.getCanvasData();
  localStorageGet.getCanvasSize();
  localStorageGet.getAnimationSpeed();
  localStorageGet.getKeyboardShorts();
  const activeTool = document.querySelector('.active_tool');
  drawingToolsFun(activeTool);
  framesFunctionality.putFrameDataOnCanvas();
});
