
// user.js

function loginUser() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      document.getElementById("loginStatus").innerText = "Logged in!";
    })
    .catch((error) => {
      document.getElementById("loginStatus").innerText = "Login failed: " + error.message;
    });
}

// Haversine formula to calculate distance between two lat/lng
function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Radius of Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function searchPOIs() {
  const userLat = parseFloat(document.getElementById("userLat").value);
  const userLng = parseFloat(document.getElementById("userLng").value);
  const radius = parseFloat(document.getElementById("radius").value);
  const resultList = document.getElementById("poiResults");

  db.collection("pois").get().then(snapshot => {
    resultList.innerHTML = "";
    snapshot.forEach(doc => {
      const data = doc.data();
      const dist = getDistance(userLat, userLng, data.lat, data.lng);
      if (dist <= radius) {
        const li = document.createElement("li");
        li.innerText = `${data.poi} - ${dist.toFixed(2)} km away`;
        resultList.appendChild(li);
      }
    });
  });
}

