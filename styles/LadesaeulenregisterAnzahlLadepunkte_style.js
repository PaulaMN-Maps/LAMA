var clusterSize = 0;
function categories_LadesaeulenregisterAnzahlLadepunkte(feature, value, clusterSize, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       textPlacement) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case '1':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(180,234,63,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case '2':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(142,111,209,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;

        case '3':
            return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 8.0 + clusterSize,
            displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(24,222,186,1.0)'})}),
            text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, textPlacement, bufferColor,
                              bufferWidth)
            })];
        break;
    }};
    
var style_LadesaeulenregisterAnzahlLadepunkte = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var labelText = "";
    var labelFont = "10px, sans-serif";
    var labelFill = '';
    var bufferColor = '';
    var bufferWidth = 0;
    var textAlign = "left";
    var textPlacement = 'point';
    var offsetX = 8;
    var offsetY = 3; 
    // Check if the feature is a cluster
    var clusteredFeatures = feature.get("features");	
    var feature
    var value
    // Checks if clusteredFeatures is defined and if it is an array
    if (Array.isArray(clusteredFeatures)) {
        clusterSize = clusteredFeatures.length;
        feature = clusteredFeatures[0];
        value = clusteredFeatures[0].get("Anzahl Ladepunkte");
    } else {
        feature = feature
        value = feature.get("Anzahl Ladepunkte");
    }    
    if ("" !== null) {
        labelText = String("");
    } 
        
    var style = categories_LadesaeulenregisterAnzahlLadepunkte(feature, value, clusterSize, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, textPlacement);
    return style;
};
    