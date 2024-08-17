const map = L.map('map').setView([28.7041, 77.1025], 8);   // basic setup


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 9,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([28.7041, 77.1025]).addTo(map)
    .bindPopup('Dummy Suhora Office.<br> From Documentation')
    .openPopup();


              
    
             //--------------PARTIALLY WORKING (UNCOMMENT TO SEE)--------------------




             
// *****for IMAGE LAYER *************** working
    
// var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
// var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
// var altText = 'Image of Newark, N.J. in 1922. Source: The University of Texas at Austin, UT Libraries Map Collection.';
// var latLngBounds = L.latLngBounds([28.7041, 77.1025]);

// var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
//     opacity: 0.8,
//     errorOverlayUrl: errorOverlayUrl,
//     alt: altText,
//     interactive: true
// }).addTo(map);

// L.rectangle(latLngBounds).addTo(map);
// map.fitBounds(latLngBounds);





        //-----------------NOT WORKING CODE HERE, LIKE GEOJSON , LAYERS SATALLITE---------------------------X





//**********************GEOJSON DATA ******************************* */


//*************** */ Created  GeoJSON data   ______NOT WORKING*****************

// const geojsonData = {
//     "type": "FeatureCollection",
//     "features": [
//         {
//             "type": "Feature",
//             "geometry": {
//                 "type": "Point",
//                 "coordinates": [-0.09, 51.505]
//             },
//             "properties": {
//                 "name": "A Fake Point"
//             }
//         }
//     ]
// };

//     // Add GeoJSON layer to the map

// L.geoJSON(geojsonData, {
//     onEachFeature: function (feature, layer) {
//         if (feature.properties && feature.properties.name) {
//             layer.bindPopup(feature.properties.name).openPopup();
//         }
//     }
// }).addTo(map)




// ****************VIDEO LAYER **********************
// const littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
// denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
// aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
// golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');


// var cities = L.layerGroup([littleton, denver, aurora, golden]);





