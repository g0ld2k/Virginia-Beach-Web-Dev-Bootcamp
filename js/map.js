/**
 * Created by BennyBaruba on 10/8/2014.
 */
var djConfig = {
    parseOnLoad: true,
    baseUrl: './',
    modulePaths: {
        'agsjs': location.pathname.replace(/\/[^/]+$/, '') + './agsjs/TOC.js'
    }
};

require([
   //Map and Layers
    "esri/map",
    "esri/layers/ArcGISDynamicMapServiceLayer",
   //Map dijits
    "esri/dijit/OverviewMap",
    "esri/dijit/HomeButton",
    "esri/dijit/LocateButton",
    "esri/dijit/Scalebar",
    "esri/dijit/BasemapGallery",
    //???
    "esri/arcgis/utils",
    //Layout dijits
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/TitlePane",

    //TOC
    "agsjs/dijit/TOC",

    "dojo/parser",
    "dojo/domReady!"],

    function(
        Map,
        ArcGISDynamicMapServiceLayer,

        OverviewMap,
        HomeButton,
        LocateButton,
        Scalebar,
        BasemapGallery,
        arcgisUtils,

        BorderContainer,
        ContentPane,
        TitlePane,

        TOC,

        parser
        ){

        var map;

        //Turn of detection for CORS
        esriConfig.defaults.io.corsDetection = false;

        //parser.parse();
        map = new Map("map", {
            basemap: "streets",
            center: [-76.09, 36.78], // longitude, latitude
            zoom: 11
        });

        //Add Administrative_Boundaries as a dynamic layer
        var Administrative_Boundaries = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Administrative_Boundaries/MapServer", {
            "opacity" : 1.0
        });
        map.addLayer(Administrative_Boundaries);
        Administrative_Boundaries.visible=true;

        //Add points_of_interest as a dynamic layer
        var points_of_interest  = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/PointsOfInterest_VBgov/MapServer", {
            "opacity" : 1.0
        });
        map.addLayer(points_of_interest);
        points_of_interest.visible=true;

        //Add property_information as a dynamic layer
        var property_information = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/PropertyInformation_VBgov/MapServer", {
            "opacity" : 1.0
        });
        map.addLayer(property_information);
        property_information.visible=false;

        //Add emergency_preparedness as a dynamic layer
        var emergency_preparedness = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Emergency_Preparedness/MapServer", {
            "opacity" : 1.0
        });
        map.addLayer(emergency_preparedness);
        emergency_preparedness.visible=false;

        //Add flood_zones_preliminary as a dynamic layer
        var flood_zones_preliminary = new ArcGISDynamicMapServiceLayer("http://maps.vbgov.com/ArcGISimap/rest/services/Flood_Zones_Preliminary/MapServer", {
            "opacity" : 1.0
        });
        map.addLayer(flood_zones_preliminary);
        flood_zones_preliminary.visible=false;

        //Dijits that connect to the map
        //Overview Map
        var overviewMapDijit = new OverviewMap({
            map: map,
            visible: true
        });
        overviewMapDijit.startup();

        //Home Button
        var home = new HomeButton({
            map: map
        }, "HomeButton");
        home.startup();

        //LocateButton
        geoLocate = new LocateButton({
            map: map
        }, "LocateButton");
        geoLocate.startup();

        //ScaleBar
        var scalebar = new Scalebar({
            map: map,
            // "dual" displays both miles and kilmometers
            // "english" is the default, which displays miles
            // use "metric" for kilometers
            scalebarUnit: "dual"
        });

        //BaseMapGallery
        var basemapGallery = new BasemapGallery({
            showArcGISBasemaps: true,
            map: map
        }, "basemapGallery");
        basemapGallery.startup();

        basemapGallery.on("error", function(msg) {
            console.log("basemap gallery error:  ", msg);
        });


    });