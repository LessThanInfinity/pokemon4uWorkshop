/* 
  Congratulations on joining Pokemon4U - the premier Pokemon adoption center that caters to your specific needs. 

  As new initiates, you must master the task of providing our clients a list of available pokemon that caters to their specific needs. 
*/

import {
  Bulbasaur,
  Charmander,
  Squirtle,
  Pikachu,
  Caterpie,
  Weedle,
  Clefairy,
  Jigglypuff,
  Vulpix,
  Psyduck,
  Meowth,
  Poliwag,
  Abra,
  Machop,
  Bellsprout,
  Tentacool,
  Geodude,
  Ponyta,
  Slowpoke,
  Magnemite,
  Farfetchd,
  Doduo,
  Seel,
  Snorlax,
  Dratini,
  Eevee,
  Staryu,
  Hitmonlee,
  Hitmonchan,
} from "./pokedex";

export type Move =
  | "Agility"
  | "Body Slam"
  | "Defense Curl"
  | "Growl"
  | "Growth"
  | "Hypnosis"
  | "Low Kick"
  | "Meditate"
  | "Rapid Spin"
  | "Sand Attack"
  | "Supersonic"
  | "Tackle"
  | "Tail Whip"
  | "Thunder Wave"
  | "Bubble"
  | "Comet Punch"
  | "Confusion"
  | "Double Kick"
  | "Ember"
  | "Headbutt"
  | "Karate Chop"
  | "Leer"
  | "Metal Sound"
  | "Peck"
  | "Poison Sting"
  | "Pound"
  | "Quick Attack"
  | "Rest"
  | "Scratch"
  | "Sing"
  | "Teleport"
  | "Vine Whip"
  | "String Shot"
  | "Water Gun";

export type Trait =
  | "Hardy"
  | "Lonely"
  | "Docile"
  | "Bashful"
  | "Jolly"
  | "Calm"
  | "Timid"
  | "Sassy"
  | "Adamant"
  | "Lax"
  | "Mild"
  | "Naive"
  | "Hasty"
  | "Brave"
  | "Impish"
  | "Cautious"
  | "Quiet"
  | "Rash"
  | "Bold"
  | "Modest"
  | "Timid"
  | "Serious"
  | "Jolly"
  | "Naughty"
  | "Gentle"
  | "Calm"
  | "Sassy"
  | "Hardy"
  | "Mild"
  | "Bold"
  | "Relaxed"
  | "Impish"
  | "Lax"
  | "Hasty"
  | "Naive"
  | "Timid"
  | "Serious"
  | "Jolly"
  | "Cautious"
  | "Cute"
  | "Quirky";

export interface Weakness {
  Normal: "Fighting";
  Fire: "Water" | "Ground" | "Rock";
  Water: "Grass" | "Electric";
  Grass: "Fire" | "Ice" | "Poison" | "Flying" | "Bug";
  Electric: "Ground";
  Ice: "Fire" | "Fighting" | "Rock" | "Steel";
  Fighting: "Flying" | "Psychic" | "Fairy";
  Poison: "Ground" | "Psychic";
  Ground: "Water" | "Grass" | "Ice";
  Flying: "Electric" | "Ice" | "Rock";
  Psychic: "Bug" | "Ghost" | "Dark";
  Bug: "Flying" | "Rock" | "Fire";
  Rock: "Water" | "Grass" | "Fighting" | "Ground" | "Steel";
  Ghost: "Ghost" | "Dark";
  Dragon: "Ice" | "Dragon" | "Fairy";
  Dark: "Fighting" | "Bug" | "Fairy";
  Steel: "Fire" | "Fighting" | "Ground";
  Fairy: "Poison" | "Steel";
}

export type Type =
  | "Normal"
  | "Fire"
  | "Water"
  | "Grass"
  | "Flying"
  | "Fighting"
  | "Poison"
  | "Electric"
  | "Ground"
  | "Rock"
  | "Psychic"
  | "Ice"
  | "Bug"
  | "Ghost"
  | "Steel"
  | "Dragon"
  | "Dark"
  | "Fairy";

/* Check pokedex.ts for the details on each, and the Pokemon Type */
export type AvailablePokemon =
  | Bulbasaur
  | Charmander
  | Squirtle
  | Pikachu
  | Caterpie
  | Caterpie
  | Weedle
  | Clefairy
  | Jigglypuff
  | Vulpix
  | Psyduck
  | Meowth
  | Poliwag
  | Abra
  | Machop
  | Bellsprout
  | Tentacool
  | Geodude
  | Ponyta
  | Slowpoke
  | Magnemite
  | Farfetchd
  | Doduo
  | Seel
  | Snorlax
  | Dratini
  | Eevee
  | Staryu
  | Hitmonlee
  | Hitmonchan;
