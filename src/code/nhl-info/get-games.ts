import getSchedule from '../nhl-api/get-schedule';
import Game from './Game';

export default async function getGames() {
  const games: Game[] = [];
  const schedule = await getSchedule();

  for (const date of schedule) {
    const gameDate = new Date(date.date);
    for (const game of date.games) {
      const homeTeam = game.teams.home.team.name;
      const awayTeam = game.teams.away.team.name;
      games.push({
        date: gameDate, homeTeam, awayTeam, teams: [homeTeam, awayTeam],
      });
    }
  }

  return games;
}
