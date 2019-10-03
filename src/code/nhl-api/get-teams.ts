import HockeyTeams from './HockeyTeams';
import { callAxiosGet } from '../library/axios-helpers';

export default async function getTeams() {
  const result = await callAxiosGet<HockeyTeams>('https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster');

  return result.data.teams;
}
