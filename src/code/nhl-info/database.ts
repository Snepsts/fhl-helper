import getGames from './get-games';
import Player from './Player';
import getPlayers from './get-players';

export const TeamGameDateMap = new Map<string, Date[]>();
export const TeamPlayerMap = new Map<string, Player[]>();

export async function initializeDatabase() {
  await initializeTeamGameDateMap();
  await initializeTeamPlayerMap();
}

async function initializeTeamGameDateMap() {
  const games = await getGames();

  for (const game of games) {
    addGameToMap(game.homeTeam, game.date);
    addGameToMap(game.awayTeam, game.date);
  }
}

function addGameToMap(teamName: string, gameDate: Date) {
  if (!TeamGameDateMap.has(teamName)) {
    TeamGameDateMap.set(teamName, []);
  }

  const dateArray = TeamGameDateMap.get(teamName);

  if (dateArray === undefined) { // this is mostly for typing
    throw new Error('addGameToMap failed at getting the dateArray.');
  }

  dateArray.push(gameDate);
}

async function initializeTeamPlayerMap() {
  const players = await getPlayers();

  for (const player of players) {
    if (!TeamPlayerMap.has(player.team)) {
      TeamPlayerMap.set(player.team, []);
    }

    const playerArray = TeamPlayerMap.get(player.team);

    if (playerArray === undefined) { // this is mostly for typing
      throw new Error('initializeTeamPlayerMap failed at getting the playerArray.');
    }

    playerArray.push(player);
  }
}