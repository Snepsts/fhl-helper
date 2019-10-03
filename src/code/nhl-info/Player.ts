import { PositionType } from '../nhl-api/HockeyTeams';

export default interface Player {
  name: string;
  team: string;
  position: PositionType;
}
