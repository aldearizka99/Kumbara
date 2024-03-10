//=====================================================================================================
//      INVENTARISASI KEBAKARAN HUTAN DAN LAHAN PROVINSI KALIMANTAN TENGAH TAHUN 2014 HINGGA 2024
//=====================================================================================================

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::ju:::::::::::::::::::::
//====================================================================================================
//                                   PENGAMBILAN DATA DAN PRE-PROSESING

//****************************************************************************************************
//----------------------------------------------------------------------------------------------------

// Mengambil landsa8 t1 toa pada area of interest
var imageL8 = ee.ImageCollection('LANDSAT/LC08/C02/T1_RT_TOA')
              .filterBounds (Kalteng);
              
// Visualisasi Boundaries Kalimantan
Map.addLayer(Kalteng, {color: 'grey'}, 'Admin Kalimantan Tengah');

// Menentukan tahun perekaman
var startYear = 2014; 
var endYear = 2024; 

// Mendefinisikan tanggal waktu perekaman yang digunakan
var startdate=ee.Date.fromYMD(startYear,01,01);
var enddate=ee.Date.fromYMD(endYear,02,29);

// Membuat fungsi untuk cloud masking 
var mask_L8 = function(image) {
  var qa = image.select('QA_PIXEL');
    var mask = qa.bitwiseAnd(1 << 4).eq(0);
  return mask;
};

//====================================================================================================
//                                     PENGOLAHAN LAHAN TERBAKAR (NBR)

//****************************************************************************************************
//----------------------------------------------------------------------------------------------------

// Membuat function band math NBR dan 
// Memasukan fungsi cloud masking
var NBRcollection = imageL8
  .map(function(image) {
    return image
      .select([]).addBands(
        image.normalizedDifference(['B5','B7'])
      )
    .updateMask(mask_L8(image))
    .rename('NBR');
});

// Melakukan filter tanggal perekaman pada NBRcollection
// Melakukan reducer median pada NBR
// Melakukan clipping pada batas admin Kalteng
var NBR = NBRcollection.filterDate(startdate, enddate)
    .median()
    .select('NBR')
    .clip(Kalteng);

print('NBR Collection', NBRcollection.first());

// Visualisasi NBR
var NBRVis = {
  bands: 'NBR',
  min: -0.251, max: 0.660, 
  zoom: 7,
  palette:  '#a41fd6, #ff641b, #ffaf38, #fff70b, #0ae042, #acbe4d, #7a8737'
};

Map.addLayer(NBR, NBRVis, 'NBR');
Map.centerObject(Kalteng,7);