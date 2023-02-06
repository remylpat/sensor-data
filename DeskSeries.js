import xapi from 'xapi';

//init config
xapi.Config.HttpClient.AllowHTTP.set('True');
xapi.Config.HttpClient.AllowInsecureHTTPS.set('True');
xapi.Config.HttpClient.Mode.set('On');
xapi.Config.RoomAnalytics.AmbientNoiseEstimation.Mode.set('On');

const baseUrl = 'https://fabmarti17.github.io/sensor-data/deskseries.html';

//Update frequency
const updateSec = 300;

async function updateUrl() {
  const temp = await xapi.Status.RoomAnalytics.AmbientTemperature.get();
  const hum = await xapi.Status.RoomAnalytics.RelativeHumidity.get();
  const anoise = await xapi.Status.RoomAnalytics.AmbientNoise.Level.A.get();
  const name = await xapi.Status.SystemUnit.BroadcastName.get();
  const pccur = await xapi.Status.RoomAnalytics.PeopleCount.Current.get()
  const pccap = await xapi.Status.RoomAnalytics.PeopleCount.Capacity.get()
  const sound = await xapi.Status.RoomAnalytics.Sound.Level.A.get()

  const url = baseUrl + '?temp=' + temp + '&humidity=' + hum + '&ambientnoise=' +anoise + '&name=' + name + '&peoplecount=' + pccur + '/' + pccap + '&sound=' + sound;
  xapi.Config.Standby.Signage.Url.set(url);
  console.log('signage url updated:', url);
}

setInterval(updateUrl, 1000 * updateSec); 
