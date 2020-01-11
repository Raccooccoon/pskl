import LocalStorageSetData from '../components/loading/local_storage_set';

describe('Test LocalStorage setting functionality', () => {

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
    expect(localStorage.getItem('active_size-index')).toBe('1');
  });

  it('Should return index of active tool to be "2"', () => {
    document.body.innerHTML = `
      <div class="drawing_tool">
        <div class="drawing_icon drawing_tool-pen"></div>
        <div class="drawing_icon drawing_tool-paint_bucket"></div>
        <div class="drawing_icon drawing_tool-eraser active_tool"></div>
        <div class="drawing_icon drawing_tool-stroke"></div>
      </div>`;
    LocalStorageSetData.prototype.saveActiveTool();
    expect(localStorage.getItem('active_tool-index')).toBe('2');
  });

  it('Should return value of primary color', () => {
    document.body.innerHTML = `
      <div class="color_select">
        <input type="color" class="color_select-primary" value='#ffffff'/>
        <button class="revert_colors"></button>
        <input type="color" class="color_select-secondary" value='#ff0025'/>
      </div>`;
    LocalStorageSetData.prototype.savePrimaryColor();
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
        <div class="frame draggable" draggable="true">
          <canvas class="canvas_frame" width="96" height="96"></canvas>
          <button class="button-frame_number"></button>
          <button class="button-frame_delete" tooltip='delete'></button>
          <button class="button-frame_move"></button>
          <button class="button-frame_duplicate"></button>
        </div>
      </div>`;
    LocalStorageSetData.prototype.saveFramesLength();
    expect(localStorage.getItem('frames_length')).toBe('3');
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
    expect(localStorage.getItem('active_frame-index')).toBe('1');
  });

  it('Should return size of canvases virtual pixel', () => {
    document.body.innerHTML = `
      <input type="range" list="tickmarks" class="range_line" min="1" max="3" step="1" value="2">
      <datalist id="tickmarks">
        <option class="options" value="32"></option>
        <option class="options" value="64"></option>
        <option class="options" value="128"></option>
      </datalist>`;
    LocalStorageSetData.prototype.saveCanvasSize();
    expect(localStorage.getItem('range_value')).toBe('2');
  });

  it('Should return animation speed of 1 FPS', () => {
    document.body.innerHTML = `
      <div class="canvas_animation_controls">
        <div class="onion"></div>
        <div class="fps_output"></div>
        <div class="fps_input">
          <input type="range" list="tickmarks" class="animation_speed" min="0" max="24" step="1" value="1">
        </div>
      </div>`;
    LocalStorageSetData.prototype.saveAnimationSpeed();
    expect(localStorage.getItem('animation_speed')).toBe('1');
  });
});
