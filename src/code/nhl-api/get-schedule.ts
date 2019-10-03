import HockeySchedule from './HockeySchedule';
import { callAxiosGet } from '../library/axios-helpers';
import Game from '../nhl-info/Game';

export default async function getSchedule() {
  const games: Game[] = [];
  // const result = await callAxiosGet<HockeySchedule>('https://statsapi.web.nhl.com/api/v1/schedule?startDate=2019-10-01&endDate=2020-04-05');
  const result = await callAxiosGet<HockeySchedule>('https://statsapi.web.nhl.com/api/v1/schedule?startDate=2019-10-01&endDate=2019-10-05');

  return result.data.dates;
}
