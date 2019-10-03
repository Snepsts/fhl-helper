// auto generated with quicktype.io

export default interface HockeySchedule {
  copyright: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalMatches: number;
  wait: number;
  dates: DateElement[];
}

export interface DateElement {
  date: string;
  totalItems: number;
  totalEvents: number;
  totalGames: number;
  totalMatches: number;
  games: Game[];
  events: any[];
  matches: any[];
}

export interface Game {
  gamePk: number;
  link: string;
  gameType: GameType;
  season: string;
  gameDate: string;
  status: Status;
  teams: Teams;
  venue: Venue;
  content: Content;
}

export interface Content {
  link: string;
}

export enum GameType {
  R = 'R',
}

export interface Status {
  abstractGameState: AbstractGameState;
  codedGameState: string;
  detailedState: DetailedState;
  statusCode: string;
  startTimeTBD: boolean;
}

export enum AbstractGameState {
  Preview = 'Preview',
}

export enum DetailedState {
  Scheduled = 'Scheduled',
}

export interface Teams {
  away: Away;
  home: Away;
}

export interface Away {
  leagueRecord: LeagueRecord;
  score: number;
  team: Venue;
}

export interface LeagueRecord {
  wins: number;
  losses: number;
  ot: number;
  type: Type;
}

export enum Type {
  League = 'league',
}

export interface Venue {
  id?: number;
  name: string;
  link: string;
}
