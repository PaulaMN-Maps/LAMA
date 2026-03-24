var wms_layers = [];

var lyr_OpenStreetMap = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'baseLayer':'true',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        
var format_FraunhoferStandorte = new ol.format.GeoJSON();
var features_FraunhoferStandorte = format_FraunhoferStandorte.readFeatures(json_FraunhoferStandorte, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FraunhoferStandorte = new ol.source.Vector({
    attributions: '<a class="legend"><b>Fraunhofer Standorte</b><br />\
        <img src="styles/legend/FraunhoferStandorte_0.png"/>Es gibt keine Ladepunkte<br />\
        <img src="styles/legend/FraunhoferStandorte_1.png"/>Es gibt Ladepunkte<br /></a>'
        });
var lyr_FraunhoferStandorte = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_FraunhoferStandorte, 
    permalink: "FraunhoferStandorte",
    popuplayertitle: 'Fraunhofer Standorte',
    creationdate: '2026-03-19 11:28:25',
    interactive: true,
    style: style_FraunhoferStandorte,
    title: '<div id="layertitle">Fraunhofer Standorte<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="FALSE" checked><img src="styles/legend/FraunhoferStandorte_0.png"/>Es gibt keine Ladepunkte<br />\
        <input type="checkbox" class="symbology" symbology-type="categorized" value="TRUE" checked><img src="styles/legend/FraunhoferStandorte_1.png"/>Es gibt Ladepunkte<br /></a>'
        });
var featureCounter_FraunhoferStandorte = 1;
jsonSource_FraunhoferStandorte.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_FraunhoferStandorte++);
    feature.set("layerObject", lyr_FraunhoferStandorte);
});        
jsonSource_FraunhoferStandorte.addFeatures(features_FraunhoferStandorte);

var format_LadesaeulenregisterAnzahlLadepunkte = new ol.format.GeoJSON();
var features_LadesaeulenregisterAnzahlLadepunkte = format_LadesaeulenregisterAnzahlLadepunkte.readFeatures(json_LadesaeulenregisterAnzahlLadepunkte, 
    {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LadesaeulenregisterAnzahlLadepunkte = new ol.source.Vector({ })
cluster_LadesaeulenregisterAnzahlLadepunkte = new ol.source.Cluster({
        distance: 30,
        source: jsonSource_LadesaeulenregisterAnzahlLadepunkte, 
    attributions: '<a class="legend"><b>Ladesaeulenregister [Anzahl Ladepunkte]</b><br />\
        <img src="styles/legend/LadesaeulenregisterAnzahlLadepunkte_0.png"/>1<br />\
        <img src="styles/legend/LadesaeulenregisterAnzahlLadepunkte_1.png"/>2<br />\
        <img src="styles/legend/LadesaeulenregisterAnzahlLadepunkte_2.png"/>3<br /></a>'
        });
var lyr_LadesaeulenregisterAnzahlLadepunkte = new ol.layer.AnimatedCluster({
    declutter: false,
    source: cluster_LadesaeulenregisterAnzahlLadepunkte, 
    permalink: "LadesaeulenregisterAnzahlLadepunkte",
    popuplayertitle: 'Ladesaeulenregister [Anzahl Ladepunkte]',
    creationdate: '2026-03-19 11:28:25',
    interactive: true,
    style: function(feature, resolution) {
        return clusterStyle(feature, resolution, style_LadesaeulenregisterAnzahlLadepunkte);
    },
    title: '<div id="layertitle">Ladesaeulenregister [Anzahl Ladepunkte]<br />\
        <i class="fas fa-angle-up" id="secondImage"></i><i class="fas fa-angle-down" id="firstImage"></i></div><a class="layerlegend">\
        <img src="styles/legend/LadesaeulenregisterAnzahlLadepunkte_0.png" /> 1<br />\
        <img src="styles/legend/LadesaeulenregisterAnzahlLadepunkte_1.png" /> 2<br />\
        <img src="styles/legend/LadesaeulenregisterAnzahlLadepunkte_2.png" /> 3<br /></a>'
        });
var featureCounter_LadesaeulenregisterAnzahlLadepunkte = 1;
jsonSource_LadesaeulenregisterAnzahlLadepunkte.on('addfeature', function (event) {
    var feature = event.feature;
    feature.set("idO", featureCounter_LadesaeulenregisterAnzahlLadepunkte++);
    feature.set("layerObject", lyr_LadesaeulenregisterAnzahlLadepunkte);
});        
jsonSource_LadesaeulenregisterAnzahlLadepunkte.addFeatures(features_LadesaeulenregisterAnzahlLadepunkte);



window.layersLoadedFlag = true;
const layersLoaded = new Event('layersLoaded');
document.dispatchEvent(layersLoaded);

lyr_OpenStreetMap.setVisible(true);lyr_FraunhoferStandorte.setVisible(true);lyr_LadesaeulenregisterAnzahlLadepunkte.setVisible(true);
var layersList = [lyr_OpenStreetMap,lyr_FraunhoferStandorte,lyr_LadesaeulenregisterAnzahlLadepunkte];
lyr_FraunhoferStandorte.set('fieldAliases', {'field_1': 'field_1', 'einrichtun': 'einrichtun', 'einricht_1': 'einricht_1', 'einricht_2': 'einricht_2', 'view': 'view', 'einricht_3': 'einricht_3', 'kurzform': 'kurzform', 'www': 'www', 'email': 'email', 'telefon': 'telefon', 'fax': 'fax', 'icon': 'icon', 'icon_rotat': 'icon_rotat', 'icon_size_': 'icon_size_', 'standort_i': 'standort_i', 'standort_n': 'standort_n', 'standort_1': 'standort_1', 'adresse': 'adresse', 'region_id': 'region_id', 'region_nam': 'region_nam', 'area_id': 'area_id', 'area_name': 'area_name', 'i18n_id': 'i18n_id', 'language_i': 'language_i', 'xkoor': 'xkoor', 'ykoor': 'ykoor', 'bildurl': 'bildurl', 'profiltext': 'profiltext', 'bildurl_co': 'bildurl_co', 'benennung_': 'benennung_', 'einricht_4': 'einricht_4', 'icon_1': 'icon_1', 'icon_rot_1': 'icon_rot_1', 'icon_siz_1': 'icon_siz_1', 'wkt': 'wkt', 'lat': 'lat', 'lon': 'lon', 'Institutes, yes no LAMA_Ladepunkte': 'Institutes, yes no LAMA_Ladepunkte', });
lyr_LadesaeulenregisterAnzahlLadepunkte.set('fieldAliases', {'Ladeeinrichtungs-ID': 'Ladeeinrichtungs-ID', 'Betreiber': 'Betreiber', 'Anzeigename (Karte)': 'Anzeigename (Karte)', 'Status': 'Status', 'Art der Ladeeinrichtung': 'Art der Ladeeinrichtung', 'Anzahl Ladepunkte': 'Anzahl Ladepunkte', 'Nennleistung Ladeeinrichtung [kW]': 'Nennleistung Ladeeinrichtung [kW]', 'Inbetriebnahmedatum': 'Inbetriebnahmedatum', 'Stra�e': 'Stra�e', 'Hausnummer': 'Hausnummer', 'Adresszusatz': 'Adresszusatz', 'Postleitzahl': 'Postleitzahl', 'Ort': 'Ort', 'Kreis/kreisfreie Stadt': 'Kreis/kreisfreie Stadt', 'Bundesland': 'Bundesland', 'Breitengrad': 'Breitengrad', 'L�ngengrad': 'L�ngengrad', 'Standortbezeichnung': 'Standortbezeichnung', 'Informationen zum Parkraum': 'Informationen zum Parkraum', 'Bezahlsysteme': 'Bezahlsysteme', '�ffnungszeiten': '�ffnungszeiten', '�ffnungszeiten: Wochentage': '�ffnungszeiten: Wochentage', '�ffnungszeiten: Tageszeiten': '�ffnungszeiten: Tageszeiten', 'Steckertypen1': 'Steckertypen1', 'Nennleistung Stecker1': 'Nennleistung Stecker1', 'EVSE-ID1': 'EVSE-ID1', 'Public Key1': 'Public Key1', 'Steckertypen2': 'Steckertypen2', 'Nennleistung Stecker2': 'Nennleistung Stecker2', 'EVSE-ID2': 'EVSE-ID2', 'Public Key2': 'Public Key2', 'Steckertypen3': 'Steckertypen3', 'Nennleistung Stecker3': 'Nennleistung Stecker3', 'EVSE-ID3': 'EVSE-ID3', 'Public Key3': 'Public Key3', 'Steckertypen4': 'Steckertypen4', 'Nennleistung Stecker4': 'Nennleistung Stecker4', 'EVSE-ID4': 'EVSE-ID4', 'Public Key4': 'Public Key4', 'Steckertypen5': 'Steckertypen5', 'Nennleistung Stecker5': 'Nennleistung Stecker5', 'EVSE-ID5': 'EVSE-ID5', 'Public Key5': 'Public Key5', 'Steckertypen6': 'Steckertypen6', 'Nennleistung Stecker6': 'Nennleistung Stecker6', 'EVSE-ID6': 'EVSE-ID6', 'Public Key6': 'Public Key6', });
lyr_FraunhoferStandorte.set('fieldImages', {'field_1': 'TextEdit', 'einrichtun': 'TextEdit', 'einricht_1': 'TextEdit', 'einricht_2': 'TextEdit', 'view': 'TextEdit', 'einricht_3': 'TextEdit', 'kurzform': 'TextEdit', 'www': 'TextEdit', 'email': 'TextEdit', 'telefon': 'TextEdit', 'fax': 'TextEdit', 'icon': 'TextEdit', 'icon_rotat': 'TextEdit', 'icon_size_': 'TextEdit', 'standort_i': 'TextEdit', 'standort_n': 'TextEdit', 'standort_1': 'TextEdit', 'adresse': 'TextEdit', 'region_id': 'TextEdit', 'region_nam': 'TextEdit', 'area_id': 'TextEdit', 'area_name': 'TextEdit', 'i18n_id': 'TextEdit', 'language_i': 'TextEdit', 'xkoor': 'TextEdit', 'ykoor': 'TextEdit', 'bildurl': 'TextEdit', 'profiltext': 'TextEdit', 'bildurl_co': 'TextEdit', 'benennung_': 'TextEdit', 'einricht_4': 'TextEdit', 'icon_1': 'TextEdit', 'icon_rot_1': 'TextEdit', 'icon_siz_1': 'TextEdit', 'wkt': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'Institutes, yes no LAMA_Ladepunkte': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_LadesaeulenregisterAnzahlLadepunkte.set('fieldImages', {'Ladeeinrichtungs-ID': 'Range', 'Betreiber': 'TextEdit', 'Anzeigename (Karte)': 'TextEdit', 'Status': 'TextEdit', 'Art der Ladeeinrichtung': 'TextEdit', 'Anzahl Ladepunkte': 'Range', 'Nennleistung Ladeeinrichtung [kW]': 'Range', 'Inbetriebnahmedatum': 'TextEdit', 'Stra�e': 'TextEdit', 'Hausnummer': 'TextEdit', 'Adresszusatz': 'TextEdit', 'Postleitzahl': 'Range', 'Ort': 'TextEdit', 'Kreis/kreisfreie Stadt': 'TextEdit', 'Bundesland': 'TextEdit', 'Breitengrad': 'TextEdit', 'L�ngengrad': 'TextEdit', 'Standortbezeichnung': 'TextEdit', 'Informationen zum Parkraum': 'TextEdit', 'Bezahlsysteme': 'TextEdit', '�ffnungszeiten': 'TextEdit', '�ffnungszeiten: Wochentage': 'TextEdit', '�ffnungszeiten: Tageszeiten': 'TextEdit', 'Steckertypen1': 'TextEdit', 'Nennleistung Stecker1': 'TextEdit', 'EVSE-ID1': 'Range', 'Public Key1': 'TextEdit', 'Steckertypen2': 'TextEdit', 'Nennleistung Stecker2': 'TextEdit', 'EVSE-ID2': 'TextEdit', 'Public Key2': 'TextEdit', 'Steckertypen3': 'TextEdit', 'Nennleistung Stecker3': 'TextEdit', 'EVSE-ID3': 'TextEdit', 'Public Key3': 'TextEdit', 'Steckertypen4': 'Range', 'Nennleistung Stecker4': 'TextEdit', 'EVSE-ID4': 'TextEdit', 'Public Key4': 'TextEdit', 'Steckertypen5': 'TextEdit', 'Nennleistung Stecker5': 'TextEdit', 'EVSE-ID5': 'TextEdit', 'Public Key5': 'TextEdit', 'Steckertypen6': 'TextEdit', 'Nennleistung Stecker6': 'TextEdit', 'EVSE-ID6': 'TextEdit', 'Public Key6': 'TextEdit', 'layerObject': 'Hidden', 'idO': 'Hidden'});
lyr_FraunhoferStandorte.set('fieldLabels', {'field_1': 'hidden field', 'einrichtun': 'hidden field', 'einricht_1': 'hidden field', 'einricht_2': 'hidden field', 'view': 'hidden field', 'einricht_3': 'hidden field', 'kurzform': 'hidden field', 'www': 'hidden field', 'email': 'hidden field', 'telefon': 'hidden field', 'fax': 'hidden field', 'icon': 'hidden field', 'icon_rotat': 'hidden field', 'icon_size_': 'hidden field', 'standort_i': 'hidden field', 'standort_n': 'hidden field', 'standort_1': 'hidden field', 'adresse': 'inline label - visible with data', 'region_id': 'hidden field', 'region_nam': 'hidden field', 'area_id': 'hidden field', 'area_name': 'hidden field', 'i18n_id': 'hidden field', 'language_i': 'hidden field', 'xkoor': 'hidden field', 'ykoor': 'hidden field', 'bildurl': 'hidden field', 'profiltext': 'hidden field', 'bildurl_co': 'hidden field', 'benennung_': 'hidden field', 'einricht_4': 'hidden field', 'icon_1': 'hidden field', 'icon_rot_1': 'hidden field', 'icon_siz_1': 'hidden field', 'wkt': 'hidden field', 'lat': 'hidden field', 'lon': 'hidden field', 'Institutes, yes no LAMA_Ladepunkte': 'inline label - visible with data', });
lyr_LadesaeulenregisterAnzahlLadepunkte.set('fieldLabels', {'Ladeeinrichtungs-ID': 'hidden field', 'Betreiber': 'hidden field', 'Anzeigename (Karte)': 'hidden field', 'Status': 'hidden field', 'Art der Ladeeinrichtung': 'hidden field', 'Anzahl Ladepunkte': 'inline label - visible with data', 'Nennleistung Ladeeinrichtung [kW]': 'inline label - visible with data', 'Inbetriebnahmedatum': 'hidden field', 'Stra�e': 'hidden field', 'Hausnummer': 'hidden field', 'Adresszusatz': 'inline label - visible with data', 'Postleitzahl': 'hidden field', 'Ort': 'hidden field', 'Kreis/kreisfreie Stadt': 'hidden field', 'Bundesland': 'hidden field', 'Breitengrad': 'hidden field', 'L�ngengrad': 'hidden field', 'Standortbezeichnung': 'hidden field', 'Informationen zum Parkraum': 'hidden field', 'Bezahlsysteme': 'hidden field', '�ffnungszeiten': 'hidden field', '�ffnungszeiten: Wochentage': 'hidden field', '�ffnungszeiten: Tageszeiten': 'hidden field', 'Steckertypen1': 'hidden field', 'Nennleistung Stecker1': 'hidden field', 'EVSE-ID1': 'hidden field', 'Public Key1': 'hidden field', 'Steckertypen2': 'hidden field', 'Nennleistung Stecker2': 'hidden field', 'EVSE-ID2': 'hidden field', 'Public Key2': 'hidden field', 'Steckertypen3': 'hidden field', 'Nennleistung Stecker3': 'hidden field', 'EVSE-ID3': 'hidden field', 'Public Key3': 'hidden field', 'Steckertypen4': 'hidden field', 'Nennleistung Stecker4': 'hidden field', 'EVSE-ID4': 'hidden field', 'Public Key4': 'hidden field', 'Steckertypen5': 'hidden field', 'Nennleistung Stecker5': 'hidden field', 'EVSE-ID5': 'hidden field', 'Public Key5': 'hidden field', 'Steckertypen6': 'hidden field', 'Nennleistung Stecker6': 'hidden field', 'EVSE-ID6': 'hidden field', 'Public Key6': 'hidden field', });
