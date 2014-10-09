/**
 * Created by BennyBaruba on 10/8/2014.
 */
var map;
require(["esri/map",
        "esri/layers/ArcGISDynamicMapServiceLayer",
        "dojo/domReady!"],
    function(Map,
             ArcGISDynamicMapServiceLayer) {

        //Turn of detection for CORS
        esriConfig.defaults.io.corsDetection = false;

        map = new Map("map", {
            basemap: "streets",
            center: [-76.09, 36.78], // longitude, latitude
            zoom: 11
        });

        var dynamicMapServiceLayer = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Administrative_Boundaries/MapServer", {
            "opacity" : 1.0
        });

        map.addLayer(dynamicMapServiceLayer);

        var dynamicMapServiceLayer2 = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Administrative_Boundaries/MapServer", {
            "opacity" : 1.0
        });

        map.addLayer(dynamicMapServiceLayer2);

        var dynamicMapServiceLayer3 = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Administrative_Boundaries/MapServer", {
            "opacity" : 1.0
        });

        map.addLayer(dynamicMapServiceLayer3);

        var dynamicMapServiceLayer4 = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Administrative_Boundaries/MapServer", {
            "opacity" : 1.0
        });

        map.addLayer(dynamicMapServiceLayer4);

        var dynamicMapServiceLayer5 = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Administrative_Boundaries/MapServer", {
            "opacity" : 1.0
        });

        map.addLayer(dynamicMapServiceLayer5);
    });