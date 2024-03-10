# Kumbara: Inventory of Forest and Land Fires in Central Kalimantan Province 2014 - 2024
![Kumbara](https://github.com/aldearizka99/Kumbara/assets/57086261/1cec9795-8f1a-4c18-b803-d69b02fd77ae)

An application that aims to visualise the severity of land fires using the Normalised Burn Ratio (NBR) and Difference Normalised Burn Ratio (dNBR) methods on the results of processing on Landsat 8 OLI/TIRS images and the potential level of land fires using Fire Information for Resource Management System (FIRMS) hotspot points on the results of the MODIS image import process. This application serves as an educational and mitigation effort to prevent land and forest fires timeseries in Central Kalimantan Province from 2014 to 2024.

## Severity of Land Fires
### Normalised Burn Ratio
Normalised Burn Ratio (NBR) is an index developed to identify burnt areas in large fire zones. It combines the use of near infrared (NIR) and shortwave infrared (SWIR) wavelengths. 
Healthy vegetation shows very high reflectance in the NIR, and low reflectance in the SWIR part of the spectrum (Figure 1) and vice versa in damaged vegetation in areas destroyed by fire. Recently burnt areas show low reflectance in the NIR and high reflectance in the SWIR, i.e. the difference between the spectral response of healthy vegetation and burnt areas peaks in the NIR and SWIR regions of the spectrum.

![image](https://un-spider.org/sites/default/files/Spectral_responses.jpg)

Figure 1. Comparison of the spectral response of healthy vegetation and burned areas. Source: U.S. Forest service.

![image](https://un-spider.org/sites/default/files/NBR_formula.jpg)

Figure 2. NBR Formula

### Burn Severity

The dNBR value is obtained from processing the NBR before the fire and after the fire. Based on the results of the index processing, the NBR and dNBR values will be obtained which indicate the severity of the fire in the study area.

The difference between the pre-fire and post-fire NBR obtained from the images is used to calculate the delta NBR (dNBR or ∆NBR), which then can be used to estimate the burn severity. A higher value of dNBR indicates more severe damage, while areas with negative dNBR values may indicate regrowth following a fire.

![image](https://un-spider.org/sites/default/files/dNBR_formula.jpg)

Figure 3. dNBR Formula

dNBR values can vary from case to case, and so, if possible, interpretation in specific instances should also be carried out through field assessment; in order to obtain the best results. However, the United States Geological Survey (USGS) proposed a classification table to interpret the burn severity, which can be seen below (Table 1).

![image](https://un-spider.org/sites/default/files/table+legend.PNG)

Table 1. Burn severity levels obtained calculating dNBR, proposed by USGS.


The NBR index results were classified to show fire severity based on thresholds from <-0.25 to >0.66 (GSP at Humboldt State University).
The dNBR index was obtained by processing the NBR with the time span before the fire (pre-fire) and after the fire (post-fire) in 2015, 2019, 2021, and 2023.


## The Distribution of Fire Hotspots
The distribution of hotspots is obtained from the import process of Fire Information for Resource Management System (FIRMS) data on MODIS images using the T21 band and confidence level band. Hotspot band T21 is a brightness temperature band that shows the level of brightness of the temperature at the recorded hotspot with Kelvin units and has been converted to Celsius. Hotspot band confidence level shows the level of confidence in the recorded hotspots that actually occur in the field with a scale of 0% to 100%.
![otpsot](https://github.com/aldearizka99/Kumbara/assets/57086261/db6e9ef5-da18-42a2-951e-57bd61617a86)


The GEE Kumbara project application can be accessed through (https://aldearizka.users.earthengine.app/view/kumbara-kebakaran-hutan-dan-lahan-provinsi-kalimantan-tengah)

#### Data requirements
- Landsat 8 OLI image (Landsat 8 Collection 2 Tier 1 TOA Reflectance) in band 5 (Near Infrared) and band 7 (Short Wave Infrared 2).
- Hotspots from Fire Information for Resource Management System (FIRMS) MODIS image, MODIS MOD14/MYD14 Fire and Thermal Anomalies product standard dataset.
- The data obtained were processed in time-series from 1 January 2014 to 29 February 2024.

#### Learning material 
- Normalised burn Ratio UN-Spider (https://un-spider.org/advisory-support/recommended-practices/recommended-practice-burn-severity/in-detail/normalized-burn-ratio)
- FIRMS Data Earth Data NASA (https://www.earthdata.nasa.gov/learn/find-data/near-real-time/firms/about-firms#ed-firms-links)
- For information about which bands to use to calculate NBR using different sensors (https://www.indexdatabase.de/db/i-single.php?id=53)
