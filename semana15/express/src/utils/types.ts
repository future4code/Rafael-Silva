export enum CONTINENTS {
   AFRICA = "África",
   AMERICA = "América",
   ASIA = "Ásia",
   EUROPE = "Europa",
   OCEANIA = "Oceania"
}

export type country = {
   id: number,
   name: string,
   capital: string,
   continent: CONTINENTS
}

export interface QueryConfig {
   
}