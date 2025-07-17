// script.js
function register() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;
  auth.createUserWithEmailAndPassword(email, password).then(user => {
    db.collection('users').doc(user.user.uid).set({ role });
    alert('Registered!');
  });
}
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password).then(user => {
    db.collection('users').doc(user.user.uid).get().then(doc => {
      if (doc.data().role === 'admin') window.location.href = 'admin.html';
      else window.location.href = 'user.html';
    });
  });
}
