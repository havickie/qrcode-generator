const canvas = document.getElementById('mycanvas');

const hide = (el) => el.style.setProperty('display', 'none');
const show = (el) => el.style.setProperty('display', 'block');

// wifi
function generateQrCode() {
  new QRious({
    element: canvas,
    value: getQrCodeValue(),
    size: 300,
  });
}

function getQrCodeValue() {
  const ssid = document.getElementById('ssid').value;
  const password = document.getElementById('password').value;
  const type = document.querySelector('input[name="type"]:checked').value;
  const hidden = document.getElementById('hidden').checked;
  return `WIFI:S:${ssid};T:${type};P:${password};H:${hidden};;`;
}

window.onload = function () {
  var dwn = document.getElementById('btndownload')

  // Event handler for download
  dwn.onclick = function () {
    download(canvas, 'myimage.png');
  };
};

// Source from:  http://stackoverflow.com/questions/18480474/how-to-save-an-image-from-canvas

/* Canvas Donwload */
function download(canvas, filename) {
  /// create an "off-screen" anchor tag
  var lnk = document.createElement('a'),
    e;

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  lnk.href = canvas.toDataURL('image/png;base64');

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    e = document.createEvent('MouseEvents');
    e.initMouseEvent(
      'click',
      true,
      true,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null
    );

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent('onclick');
  }
}