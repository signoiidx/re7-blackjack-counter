/**
 * @jest-environment jsdom
 */
const { changeColor, reloadButton } = require('./app');

describe('changeColor', () => {
  test('toggles styles', () => {
    const element = { style: { backgroundColor: '', color: '' } };
    changeColor(element);
    expect(element.style.backgroundColor).toBe('#30A64A');
    expect(element.style.color).toBe('white');
    changeColor(element);
    expect(element.style.backgroundColor).toBe('');
    expect(element.style.color).toBe('');
  });
});

describe('reloadButton', () => {
  test('calls window.location.reload', () => {
    const reloadMock = jest.fn();
    delete window.location;
    window.location = { reload: reloadMock };
    reloadButton();
    expect(reloadMock).toHaveBeenCalled();
  });
});
