function changeColor(idname) {
  if (idname.style && idname.style.backgroundColor) {
    idname.style.backgroundColor = '';
    idname.style.color = '';
  } else {
    idname.style.backgroundColor = '#30A64A';
    idname.style.color = 'white';
  }
}

function reloadButton() {
  window.location.reload();
}

if (typeof window !== 'undefined') {
  window.changeColor = changeColor;
  window.reloadButton = reloadButton;
}

module.exports = { changeColor, reloadButton };
