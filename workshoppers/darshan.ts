// interface PokemonTest<T extends [Type] | [Type, Type]> {
//   moves: Move[];
//   type: T;
//   weakness: WeaknessByType<["Grass"]>;
//   trait: Trait;
// }

//======== Client #1: Get Cute
type GetDocile<A, T1 extends Trait> = A extends { trait: T1 } ? A : never;

// can be multiple things
type DocilePkmn = GetDocile<AvailablePokemon, "Cute">;

type GetDocile2<A, T extends Trait> = Values<{
  [Name in keyof A]: A[Name] extends { trait: T } ? Name : never;
}>;

//========= CLient #2 : Avatar, get fire / water/ rock
type PokemonOfType<A, T1 extends Type> = A extends {
  type: [T1] | [T1, Type] | [Type, T1];
}
  ? A
  : never;

type ElementPokemon = PokemonOfType<
  AvailablePokemon,
  "Fire" | "Water" | "Rock"
>;

//===== Client #3 : Chun Li
type TypeWithMoveOrTrait<
  A,
  Ty extends Type,
  M extends Move,
  Tr extends Trait
> = A extends
  | {
      type: [Ty] | [Ty, Type] | [Type, Ty];
      moves: [M, Move] | [Move, M];
    }
  | { trait: Tr }
  ? A
  : never;

type ForChunLi = TypeWithMoveOrTrait<
  AvailablePokemon,
  "Fighting",
  "Double Kick",
  "Cute"
>;

//=== Client #5: Weakness Bro

type NotWeakTo<A, Wt extends Type> = A extends {
  weakness: infer W;
}
  ? Wt extends W
    ? never
    : A
  : never;

type ForSusBro = NotWeakTo<AvailablePokemon, "Electric" | "Ice" | "Grass">;

// type AvailablePokemonHash = {
//   Bulbasaur: Bulbasaur;
//   Charmander: Charmander;
//   Squirtle: Squirtle;
//   Pikachu: Pikachu;
//   Caterpie: Caterpie;
//   Weedle: Weedle;
//   Clefairy: Clefairy;
//   Jigglypuff: Jigglypuff;
//   Vulpix: Vulpix;
//   Psyduck: Psyduck;
//   Meowth: Meowth;
//   Poliwag: Poliwag;
//   Abra: Abra;
//   Machop: Machop;
//   Bellsprout: Bellsprout;
//   Tentacool: Tentacool;
//   Geodude: Geodude;
//   Ponyta: Ponyta;
//   Slowpoke: Slowpoke;
//   Magnemite: Magnemite;
//   Farfetchd: Farfetchd;
//   Doduo: Doduo;
//   Seel: Seel;
//   Snorlax: Snorlax;
//   Dratini: Dratini;
//   Eevee: Eevee;
//   Staryu: Staryu;
//   Hitmonlee: Hitmonlee;
//   Hitmonchan: Hitmonchan;
// };
