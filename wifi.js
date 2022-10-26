







const hide = (el) => el.style.setProperty('display', 'none');
const show = (el) => el.style.setProperty('display', 'block');

// wifi
function generateQrCode() {
  new QRious({
    element: document.getElementById('qrcode'),
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
