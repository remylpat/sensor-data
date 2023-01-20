import xapi from 'xapi';


const baseUrl = 'github.com/sensor-data';
const updateSec = 10;

async function updateUrl() {
  const temp = await xapi.Status.RoomAnalytics.AmbientTemperature.get();
  const hum = await xapi.Status.RoomAnalytics.RelativeHumidity.get();
  const anoise = await xapi.Status.RoomAnalytics.AmbientNoise.Level.A.get();
// AIR QUALITY 
//only avialable if RoomNavigator available
//  const airquality = await xapi.Status.RoomAnalytics.airquality.get();
  const url = baseUrl + '?temp=' + temp + '&humidity=' + hum + '&ambiantNoise=' +anoise; // + '&airquality' + airquality;
  xapi.Config.Standby.Signage.Url.set(url);
  console.log('signage url updated:', url);
}

setInterval(updateUrl, 1000 * updateSec); 
