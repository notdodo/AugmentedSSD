var PoiRadar = {
    show: function initFn() {
        AR.radar.enabled = true;
        // the div defined in the index.htm
        AR.radar.container = document.getElementById("radarContainer");

        // set the back-ground image for the radar
        AR.radar.background = new AR.ImageResource("assets/radar_bg.png");

        // set the north-indicator image for the radar (not necessary if you don't want to display a north-indicator)
        AR.radar.northIndicator.image = new AR.ImageResource("assets/radar_north.png");

        // center of north indicator and radar-points in the radar asset, usually center of radar is in the exact middle of the bakground, meaning 50% X and 50% Y axis --> 0.5 for centerX/centerY
        AR.radar.centerX = 0.5;
        AR.radar.centerY = 0.5;
        AR.radar.radius = 0.3;
        AR.radar.northIndicator.radius = 0.0;
    },

    updatePosition: function updatePositionFn() {
        if (AR.radar.enabled) {
            AR.radar.notifyUpdateRadarPosition();
        }
    },

    setMaxDistance: function setMaxDistanceFn(maxDistanceMeters) {
        AR.radar.maxDistance = maxDistanceMeters;
    }
};