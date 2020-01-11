import LocalStorageGetData from '../components/loading/local_storage_get';
import LocalStorageSetData from '../components/loading/local_storage_set';

describe('Test LocalStorage getting functionality', () => {

  it('Should return index of actual pen unit size to be "1"', () => {
    document.body.innerHTML = `
      <div class="pen_size">
        <div class="pen_size_cell pen_size-one_by_one" value="1">
          <div class="pen_size-one_by_one-inner"></div>
        </div>
        <div class="pen_size_cell pen_size-two_by_two active_size" value="2">
          <div class="pen_size-two_by_two-inner"></div>
        </div>
        <div class="pen_size_cell pen_size-three_by_three" value="3">
          <div class="pen_size-three_by_three-inner"></div>
        </div>
        <div class="pen_size_cell pen_size-four_by_four" value="4">
          <div class="pen_size-four_by_four-inner"></div>
        </div>
      </div>`;
    LocalStorageSetData.prototype.savePenUnit();
    LocalStorageGetData.prototype.getPenUnit();
    expect(localStorage.getItem('active_size-index')).toBe('1');
  });

  it('Should return index of active tool to be "0"', () => {
    document.body.innerHTML = `
      <div class="drawing_tool">
        <div class="drawing_icon drawing_tool-pen active_tool"></div>
        <div class="drawing_icon drawing_tool-paint_bucket"></div>
        <div class="drawing_icon drawing_tool-eraser"></div>
        <div class="drawing_icon drawing_tool-stroke"></div>
      </div>`;
    LocalStorageSetData.prototype.saveActiveTool();
    LocalStorageGetData.prototype.getActiveTool();
    expect(localStorage.getItem('active_tool-index')).toBe('0');
  });

  it('Should return value of primary color', () => {
    document.body.innerHTML = `
      <div class="color_select">
        <input type="color" class="color_select-primary" value='#ffffff'/>
        <button class="revert_colors"></button>
        <input type="color" class="color_select-secondary" value='#ff0025'/>
      </div>`;
    LocalStorageSetData.prototype.savePrimaryColor();
    LocalStorageGetData.prototype.getPrimaryColor();
    expect(localStorage.getItem('primary_color-value')).toBe('#ffffff');
  });

  it('Should return value of secondary color', () => {
    document.body.innerHTML = `
      <div class="color_select">
        <input type="color" class="color_select-primary" value='#ffffff'/>
        <button class="revert_colors"></button>
        <input type="color" class="color_select-secondary" value='#ff0025'/>
      </div>`;
    LocalStorageSetData.prototype.saveSecondaryColor();
    LocalStorageGetData.prototype.getSecondaryColor();
    expect(localStorage.getItem('secondary_color-value')).toBe('#ff0025');
  });

  it('Should return value of secondary color', () => {
    document.body.innerHTML = `
      <div class="color_select">
        <input type="color" class="color_select-primary" value='#ffffff'/>
        <button class="revert_colors"></button>
        <input type="color" class="color_select-secondary" value='#ff0025'/>
      </div>`;
    LocalStorageSetData.prototype.saveSecondaryColor();
    LocalStorageGetData.prototype.getSecondaryColor();
    expect(localStorage.getItem('secondary_color-value')).toBe('#ff0025');
  });

  it('Should return count of frames', () => {
    document.body.innerHTML = `
      <div class="frames_container">
        <div class="frame draggable" draggable="true">
          <canvas class="canvas_frame" width="96" height="96"></canvas>
          <button class="button-frame_number"></button>
          <button class="button-frame_delete" tooltip='delete'></button>
          <button class="button-frame_move"></button>
          <button class="button-frame_duplicate"></button>
        </div>
        <div class="frame draggable frame-active" draggable="true">
          <canvas class="canvas_frame" width="96" height="96"></canvas>
          <button class="button-frame_number"></button>
          <button class="button-frame_delete" tooltip='delete'></button>
          <button class="button-frame_move"></button>
          <button class="button-frame_duplicate"></button>
        </div>
      </div>`;
    LocalStorageSetData.prototype.saveFramesLength();
    LocalStorageGetData.prototype.getFramesLength();
    expect(localStorage.getItem('frames_length')).toBe('2');
  });

  it('Should return index of active frame - 1', () => {
    document.body.innerHTML = `
      <div class="frames_container">
        <div class="frame draggable" draggable="true">
          <canvas class="canvas_frame" width="96" height="96"></canvas>
          <button class="button-frame_number"></button>
          <button class="button-frame_delete" tooltip='delete'></button>
          <button class="button-frame_move"></button>
          <button class="button-frame_duplicate"></button>
        </div>
        <div class="frame draggable frame-active" draggable="true">
          <canvas class="canvas_frame" width="96" height="96"></canvas>
          <button class="button-frame_number"></button>
          <button class="button-frame_delete" tooltip='delete'></button>
          <button class="button-frame_move"></button>
          <button class="button-frame_duplicate"></button>
        </div>
        <div class="frame draggable" draggable="true">
          <canvas class="canvas_frame" width="96" height="96"></canvas>
          <button class="button-frame_number"></button>
          <button class="button-frame_delete" tooltip='delete'></button>
          <button class="button-frame_move"></button>
          <button class="button-frame_duplicate"></button>
        </div>
      </div>`;
    LocalStorageSetData.prototype.saveActiveFrame();
    LocalStorageGetData.prototype.getActiveFrame();
    expect(localStorage.getItem('active_frame-index')).toBe('1');
  });

  it('Should return size of canvases virtual pixel', () => {
    document.body.innerHTML = `
      <input type="range" list="tickmarks" class="range_line" min="1" max="3" step="1" value="2">
      <datalist id="tickmarks">
        <option class="options" value="32"></option>
        <option class="options" value="64"></option>
        <option class="options" value="128"></option>
      </datalist>
      <div class="canvas_width">
        <div class="canvas_width__text">Width</div>
        <input class="canvas_width__value" type="number" value="64" disabled>
        <div class="canvas_width__text">px</div>
      </div>
      <div class="canvas_height">
        <div class="canvas_height__text">Height</div>
        <input class="canvas_height__value" type="number" value="64" disabled>
        <div class="canvas_height__text">px</div>
      </div>`;
    LocalStorageSetData.prototype.saveCanvasSize();
    LocalStorageGetData.prototype.getCanvasSize();
    expect(localStorage.getItem('range_value')).toBe('2');
  });

  it('Should return animation speed of 1 FPS', () => {
    document.body.innerHTML = `
      <div class="canvas_animation_controls">
        <div class="onion"></div>
        <div class="fps_output"></div>
        <div class="fps_input">
          <input type="range" list="tickmarks" class="animation_speed" min="0" max="24" step="1" value="12">
        </div>
      </div>`;
    LocalStorageSetData.prototype.saveAnimationSpeed();
    LocalStorageGetData.prototype.getAnimationSpeed();
    expect(localStorage.getItem('animation_speed')).toBe('12');
  });

});
