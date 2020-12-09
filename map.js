mapboxgl.accessToken = 'pk.eyJ1IjoibHVhbnBzcyIsImEiOiJja2ZqMmxyamkwaHN0MnBtajRxeHc3Mm1lIn0.8b9heh2jO0KBMXrd39nCaw';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
  center: [-48.1617725, -21.7858677,], // starting position [lng, lat]
  zoom: 14,
  scrollZoom: false // starting zoom
});
map.addControl(new mapboxgl.FullscreenControl());
const marker = new mapboxgl.Marker({
    color: "#033F88"
  })
  .setLngLat([-48.1617725, -21.7858677])
  .setPopup(new mapboxgl.Popup().setHTML("<h2>BarberShop Renan</h3>")) 
  .addTo(map);
  21.7858677,-48.1617725