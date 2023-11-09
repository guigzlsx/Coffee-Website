// Fonction d'initialisation de la carte
function initMap() {
  // Coordonnées de votre emplacement
  var myLatLng = { lat: 48.8566, lng: 2.3522 }; // Exemple : Paris, France

  // Créez une nouvelle carte Google Maps
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12, // Niveau de zoom initial
  });

  // Ajoutez un marqueur à votre emplacement sur la carte
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Mon Emplacement",
  });
}
