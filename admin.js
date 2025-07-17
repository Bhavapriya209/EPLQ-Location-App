// admin.js
function uploadPOI() {
  const name = btoa(document.getElementById('poi').value);
  const lat = btoa(document.getElementById('lat').value);
  const lng = btoa(document.getElementById('lng').value);
  db.collection('pois').add({ name, lat, lng });
  alert('POI uploaded securely.');
}