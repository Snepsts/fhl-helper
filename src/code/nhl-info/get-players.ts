import getTeams from '../nhl-api/get-teams';
import Player from './Player';

export default async function getPlayers() {
  const players: Player[] = [];
  const teams = await getTeams();

  for (const team of teams) {
    const teamName = team.name;

    for (const player of team.roster.roster) {
      players.push({ team: teamName, name: player.person.fullName, position: player.position.type });
    }
  }

  return players;
}
