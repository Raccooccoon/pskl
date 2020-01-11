import CanvasSize from '../components/modal-dialog/canvas_size';

describe('Test of CanvasSize Class', () => {

  // *** CanvasSize.prototype.displayCanvasSize ***

  it('Sould be an instance of function', () => {
    expect(CanvasSize.prototype.displayCanvasSize).toBeInstanceOf(Function);
  });

  it('Should display canvas size value on the page', () => {
    document.body.innerHTML = `<input class="canvas_width__value" type="number" value="64" disabled>
                               <input class="canvas_height__value" type="number" value="64" disabled>
                               <input type="range" list="tickmarks" class="range_line" min="1" max="3" step="1" value="1"></input>`;
    CanvasSize.prototype.chooseSize();
    CanvasSize.prototype.displayCanvasSize();
    expect(CanvasSize.prototype.displayCanvasSize()).toEqual('32');
  });

  // *** CanvasSize.prototype.chooseSize ***

  it('Sould be an instance of function', () => {
    expect(CanvasSize.prototype.chooseSize).toBeInstanceOf(Function);
  });

  it('Should show virtual pixel size of 32px', () => {
    document.body.innerHTML = `<input class="canvas_width__value" type="number" value="64" disabled>
                               <input class="canvas_height__value" type="number" value="64" disabled>
                               <input type="range" list="tickmarks" class="range_line" min="1" max="3" step="1" value="1"></input>`;
    expect(CanvasSize.prototype.chooseSize()).toEqual('32');
  });

  it('Should show virtual pixel size of 64px', () => {
    document.body.innerHTML = `<input class="canvas_width__value" type="number" value="64" disabled>
                               <input class="canvas_height__value" type="number" value="64" disabled>
                               <input type="range" list="tickmarks" class="range_line" min="1" max="3" step="1" value="2"></input>`;
    expect(CanvasSize.prototype.chooseSize()).toEqual('64');
  });

  it('Should show virtual pixel size of 128px', () => {
    document.body.innerHTML = `<input class="canvas_width__value" type="number" value="64" disabled>
                               <input class="canvas_height__value" type="number" value="64" disabled>
                               <input type="range" list="tickmarks" class="range_line" min="1" max="3" step="1" value="3"></input>`;
    expect(CanvasSize.prototype.chooseSize()).toEqual('128');
  });
});
