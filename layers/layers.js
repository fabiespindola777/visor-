var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_municipios_1 = new ol.format.GeoJSON();
var features_municipios_1 = format_municipios_1.readFeatures(json_municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_1.addFeatures(features_municipios_1);
var lyr_municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_municipios_1, 
                style: style_municipios_1,
                interactive: true,
    title: 'municipios<br />\
    <img src="styles/legend/municipios_1_0.png" /> 0 - 70<br />\
    <img src="styles/legend/municipios_1_1.png" /> 70 - 262<br />\
    <img src="styles/legend/municipios_1_2.png" /> 262 - 596<br />\
    <img src="styles/legend/municipios_1_3.png" /> 596 - 1153<br />\
    <img src="styles/legend/municipios_1_4.png" /> 1153 - 1766<br />'
        });
var format_lagos_2 = new ol.format.GeoJSON();
var features_lagos_2 = format_lagos_2.readFeatures(json_lagos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lagos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lagos_2.addFeatures(features_lagos_2);
var lyr_lagos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lagos_2, 
                style: style_lagos_2,
                interactive: true,
                title: '<img src="styles/legend/lagos_2.png" /> lagos'
            });
var format_rios_3 = new ol.format.GeoJSON();
var features_rios_3 = format_rios_3.readFeatures(json_rios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rios_3.addFeatures(features_rios_3);
var lyr_rios_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rios_3, 
                style: style_rios_3,
                interactive: true,
                title: '<img src="styles/legend/rios_3.png" /> rios'
            });
var format_redferroviaria_4 = new ol.format.GeoJSON();
var features_redferroviaria_4 = format_redferroviaria_4.readFeatures(json_redferroviaria_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_redferroviaria_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_redferroviaria_4.addFeatures(features_redferroviaria_4);
var lyr_redferroviaria_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_redferroviaria_4, 
                style: style_redferroviaria_4,
                interactive: true,
                title: '<img src="styles/legend/redferroviaria_4.png" /> red ferroviaria'
            });
var format_rutas_5 = new ol.format.GeoJSON();
var features_rutas_5 = format_rutas_5.readFeatures(json_rutas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rutas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rutas_5.addFeatures(features_rutas_5);
var lyr_rutas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rutas_5, 
                style: style_rutas_5,
                interactive: true,
                title: '<img src="styles/legend/rutas_5.png" /> rutas'
            });
var format_puertos_6 = new ol.format.GeoJSON();
var features_puertos_6 = format_puertos_6.readFeatures(json_puertos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_puertos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_puertos_6.addFeatures(features_puertos_6);
var lyr_puertos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_puertos_6, 
                style: style_puertos_6,
                interactive: true,
                title: '<img src="styles/legend/puertos_6.png" /> puertos'
            });
var format_areropuertos_7 = new ol.format.GeoJSON();
var features_areropuertos_7 = format_areropuertos_7.readFeatures(json_areropuertos_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areropuertos_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areropuertos_7.addFeatures(features_areropuertos_7);
var lyr_areropuertos_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_areropuertos_7, 
                style: style_areropuertos_7,
                interactive: true,
                title: '<img src="styles/legend/areropuertos_7.png" /> areropuertos'
            });
var format_Capital_8 = new ol.format.GeoJSON();
var features_Capital_8 = format_Capital_8.readFeatures(json_Capital_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capital_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capital_8.addFeatures(features_Capital_8);
var lyr_Capital_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capital_8, 
                style: style_Capital_8,
                interactive: true,
                title: '<img src="styles/legend/Capital_8.png" /> Capital'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_municipios_1.setVisible(true);lyr_lagos_2.setVisible(true);lyr_rios_3.setVisible(true);lyr_redferroviaria_4.setVisible(true);lyr_rutas_5.setVisible(true);lyr_puertos_6.setVisible(true);lyr_areropuertos_7.setVisible(true);lyr_Capital_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_municipios_1,lyr_lagos_2,lyr_rios_3,lyr_redferroviaria_4,lyr_rutas_5,lyr_puertos_6,lyr_areropuertos_7,lyr_Capital_8];
lyr_municipios_1.set('fieldAliases', {'nom_mun': 'nom_mun', 'p_total': 'p_total', 'pob x km2': 'pob x km2', });
lyr_lagos_2.set('fieldAliases', {'gid': 'gid', 'tipo': 'tipo', 'area': 'area', 'perimetro': 'perimetro', });
lyr_rios_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'CUENCA': 'CUENCA', });
lyr_redferroviaria_4.set('fieldAliases', {'gid': 'gid', 'nom_tram': 'nom_tram', });
lyr_rutas_5.set('fieldAliases', {'gid': 'gid', 'nom_tramo': 'nom_tramo', 'ruta': 'ruta', });
lyr_puertos_6.set('fieldAliases', {'ID': 'ID', 'MUNICIPIO': 'MUNICIPIO', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', });
lyr_areropuertos_7.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', });
lyr_Capital_8.set('fieldAliases', {'Name': 'Name', });
lyr_municipios_1.set('fieldImages', {'nom_mun': 'TextEdit', 'p_total': 'TextEdit', 'pob x km2': 'TextEdit', });
lyr_lagos_2.set('fieldImages', {'gid': 'Range', 'tipo': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', });
lyr_rios_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'CUENCA': 'TextEdit', });
lyr_redferroviaria_4.set('fieldImages', {'gid': 'Range', 'nom_tram': 'TextEdit', });
lyr_rutas_5.set('fieldImages', {'gid': 'Range', 'nom_tramo': 'TextEdit', 'ruta': 'TextEdit', });
lyr_puertos_6.set('fieldImages', {'ID': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_areropuertos_7.set('fieldImages', {'ID': 'TextEdit', 'NOMBRE': 'TextEdit', });
lyr_Capital_8.set('fieldImages', {'Name': 'TextEdit', });
lyr_municipios_1.set('fieldLabels', {'nom_mun': 'header label', 'p_total': 'header label', 'pob x km2': 'header label', });
lyr_lagos_2.set('fieldLabels', {'gid': 'header label', 'tipo': 'header label', 'area': 'header label', 'perimetro': 'header label', });
lyr_rios_3.set('fieldLabels', {'NOMBRE': 'header label', 'CUENCA': 'header label', });
lyr_redferroviaria_4.set('fieldLabels', {'gid': 'header label', 'nom_tram': 'header label', });
lyr_rutas_5.set('fieldLabels', {'gid': 'header label', 'nom_tramo': 'header label', 'ruta': 'header label', });
lyr_puertos_6.set('fieldLabels', {'ID': 'header label', 'MUNICIPIO': 'header label', 'TIPO': 'header label', 'NOMBRE': 'header label', });
lyr_areropuertos_7.set('fieldLabels', {'ID': 'header label', 'NOMBRE': 'header label', });
lyr_Capital_8.set('fieldLabels', {'Name': 'header label', });
lyr_Capital_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});