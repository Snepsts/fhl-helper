// auto generated with quicktype.io

export default interface HockeyTeams {
  copyright: string;
  teams:     Team[];
}

export interface Team {
  id:              number;
  name:            string;
  link:            string;
  venue:           Venue;
  abbreviation:    string;
  teamName:        string;
  locationName:    string;
  firstYearOfPlay: string;
  division:        Division;
  conference:      Conference;
  franchise:       Franchise;
  roster:          TeamRoster;
  shortName:       string;
  officialSiteUrl: string;
  franchiseId:     number;
  active:          boolean;
}

export interface Conference {
  id:   number;
  name: ConferenceName;
  link: ConferenceLink;
}

export enum ConferenceLink {
  APIV1Conferences5 = "/api/v1/conferences/5",
  APIV1Conferences6 = "/api/v1/conferences/6",
}

export enum ConferenceName {
  Eastern = "Eastern",
  Western = "Western",
}

export interface Division {
  id:           number;
  name:         DivisionName;
  nameShort:    NameShort;
  link:         DivisionLink;
  abbreviation: DivisionAbbreviation;
}

export enum DivisionAbbreviation {
  A = "A",
  C = "C",
  M = "M",
  P = "P",
}

export enum DivisionLink {
  APIV1Divisions15 = "/api/v1/divisions/15",
  APIV1Divisions16 = "/api/v1/divisions/16",
  APIV1Divisions17 = "/api/v1/divisions/17",
  APIV1Divisions18 = "/api/v1/divisions/18",
}

export enum DivisionName {
  Atlantic = "Atlantic",
  Central = "Central",
  Metropolitan = "Metropolitan",
  Pacific = "Pacific",
}

export enum NameShort {
  Atl = "ATL",
  Cen = "CEN",
  Metro = "Metro",
  Pac = "PAC",
}

export interface Franchise {
  franchiseId: number;
  teamName:    string;
  link:        string;
}

export interface TeamRoster {
  roster: RosterElement[];
  link:   string;
}

export interface RosterElement {
  person:       Person;
  jerseyNumber: string;
  position:     Position;
}

export interface Person {
  id:       number;
  fullName: string;
  link:     string;
}

export interface Position {
  code:         Code;
  name:         PositionName;
  type:         PositionType;
  abbreviation: PositionAbbreviation;
}

export enum PositionAbbreviation {
  C = "C",
  D = "D",
  G = "G",
  Lw = "LW",
  Rw = "RW",
}

export enum Code {
  C = "C",
  D = "D",
  G = "G",
  L = "L",
  R = "R",
}

export enum PositionName {
  Center = "Center",
  Defenseman = "Defenseman",
  Goalie = "Goalie",
  LeftWing = "Left Wing",
  RightWing = "Right Wing",
}

export enum PositionType {
  Defenseman = "Defenseman",
  Forward = "Forward",
  Goalie = "Goalie",
}

export interface Venue {
  name:     string;
  link:     string;
  city:     string;
  timeZone: TimeZone;
  id?:      number;
}

export interface TimeZone {
  id:     string;
  offset: number;
  tz:     Tz;
}

export enum Tz {
  Cdt = "CDT",
  Edt = "EDT",
  Mdt = "MDT",
  Mst = "MST",
  Pdt = "PDT",
}
