import { AvailablePokemon, Trait, Type } from "../";

type GetCute<A, T extends Trait> = A extends { trait: T } ? A : never;

type Result = GetCute<AvailablePokemon, "Cute">;

// Answer v1 - wrong, doesn't take into account pokemons with multiple types
type AirTypeSucks<A, T extends Type> = A extends { type: [T] } ? A : never;
type Result2 = AirTypeSucks<AvailablePokemon, "Fire" | "Water" | "Rock">;

// Answer v2 - wrong, doesn't take into account pokemons with multiple types
type AirTypeSucksV2<A, T extends Type> = A extends { type: [keyof T] }
  ? A
  : never;
type Result3 = AirTypeSucks<AvailablePokemon, "Fire" | "Water" | "Rock">;

// type A = 1 | 2 | never | 4
// -> 1 | 2 | 4

/* 

  let response = getReuqest(api)

  response extends <sucessfultype>, 
  response extends <failure>, 

*/
