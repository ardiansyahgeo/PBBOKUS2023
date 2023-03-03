var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DESA_OKUS_2 = new ol.format.GeoJSON();
var features_DESA_OKUS_2 = format_DESA_OKUS_2.readFeatures(json_DESA_OKUS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DESA_OKUS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DESA_OKUS_2.addFeatures(features_DESA_OKUS_2);
var lyr_DESA_OKUS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DESA_OKUS_2, 
                style: style_DESA_OKUS_2,
                interactive: true,
                title: '<img src="styles/legend/DESA_OKUS_2.png" /> DESA_OKUS'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_DESA_OKUS_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_GoogleSatellite_1,lyr_DESA_OKUS_2];
lyr_DESA_OKUS_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_DESA_OKUS_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_DESA_OKUS_2.set('fieldLabels', {'OBJECTID_1': 'inline label', 'REMARK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'UUPP': 'inline label', 'LUAS': 'inline label', });
lyr_DESA_OKUS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});