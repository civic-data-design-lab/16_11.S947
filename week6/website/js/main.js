function helloworld() {
    document.getElementById('foo').innerHTML = 'Hello JavaScript!';
}

var map = L.map('map',{ center: [42.362432, -71.086086], zoom: 14 });

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);
