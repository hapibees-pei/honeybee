import React from 'react';

class MapListView extends React.Component {

	componentDidMount(){
		const L = require('leaflet');
		require('leaflet.markercluster');

		let map = L.map('map').setView([51.505, -0.09], 6);

		L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png', {
			attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
		}).addTo(map);

		let markers = L.markerClusterGroup();
		for(let i = 0; i < 200; i++) {
			markers.addLayer(
				// L.marker([51.5, -0.09])
				L.marker([Math.random()*50, Math.random()*50])
			);
		}
		map.addLayer(markers);
	}

	render () {
		return (
			<div>
				<link href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css" type="text/css" rel="stylesheet" />
				<link href="https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.4.1/dist/MarkerCluster.Default.css" type="text/css" rel="stylesheet" />
				<div id="map" style={{height: '100vh'}} ></div>
			</div>
		)
	}
}

export default MapListView;
