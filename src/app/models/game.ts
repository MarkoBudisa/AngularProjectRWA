import { Team } from "./team";

export interface Game{
    id: number;
    team1: Team;
    team2: Team;
    stadium: string;
    capacity: number;
    ticketsSaled: number;
    ticketPrace: number;
}