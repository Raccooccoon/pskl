/* eslint-disable class-methods-use-this, no-unused-vars */
export default class PNGexport {
  spritesheetFileInfo() {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const frames = Array.from(document.querySelectorAll('.frame'));
    const resolutionBoxLeft = document.querySelector('.box_input-left');
    const spritesheetCols = document.querySelector('.spitesheet_cols');
    const spritesheetRows = document.querySelector('.spitesheet_rows');
    const spritesheetOutputFrames = document.querySelector('.spritesheet_output-frames');
    const spritesheetOutputColRow = document.querySelector('.spritesheet_output-colrow');

    if (frames.length === 1) {
      spritesheetOutputFrames.textContent = `${resolutionBoxLeft.value * spritesheetCols.value} x ${resolutionBoxLeft.value * spritesheetRows.value} px, ${frames.length} frame`;
    } else {
      spritesheetOutputFrames.textContent = `${resolutionBoxLeft.value * spritesheetCols.value} x ${resolutionBoxLeft.value * spritesheetRows.value} px, ${frames.length} frames`;
    }
    if (spritesheetCols.value === '1' && spritesheetRows.value === '1') {
      spritesheetOutputColRow.textContent = `${spritesheetCols.value} column, ${spritesheetRows.value} row.`;
    } else if (spritesheetCols.value === '1' && spritesheetRows.value !== '1') {
      spritesheetOutputColRow.textContent = `${spritesheetCols.value} column, ${spritesheetRows.value} rows.`;
    } else if (spritesheetCols.value !== '1' && spritesheetRows.value === '1') {
      spritesheetOutputColRow.textContent = `${spritesheetCols.value} columns, ${spritesheetRows.value} row.`;
    }
  }

  singleFrameToPNG() {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d');
    const a = document.createElement('a');
    a.href = canvas.toDataURL();
    a.download = 'canvas-image.png';
    a.click();
  }
}
