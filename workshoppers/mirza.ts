import { AvailablePokemon } from "..";

type CutePokemon = Extract<AvailablePokemon, { trait: "Cute" }>;
type IsntWeak = 

// why this doesn't work
type CutePokemonManual = AvailablePokemon extends { trait: "Cute" }
  ? AvailablePokemon
  : never;

// but this does
type GetPokemonOfTrait<A, T> = A extends T ? A : never;
type CutePokemonGeneric = GetPokemonOfTrait<
  AvailablePokemon,
  { trait: "Cute" }
>;

// type WaterRockIceGeneric = GetPokemonOfTrait<AvailablePokemon, { weakness: "Rock" }>

// type WaterRockIcePokemon = Pick<AvailablePokemon,

//Water Rock Ice

// Isn't weak

// Fire type ember, eletric must be able to quick attack,
// type GetPokemonWithTraits<Pokes, Prop extends string, Vals> = Pokes extends {
//   weakness: Vals;
// }
//   ? Pokes
//   : never;

// type WaterRockIce = GetPokemonWithTraits<
//   AvailablePokemon,
//   "weakness",
//   "Water" | "Ice" | "Rock"
// >;

// const someCutPokem: CutePokemon = undefined as any;
