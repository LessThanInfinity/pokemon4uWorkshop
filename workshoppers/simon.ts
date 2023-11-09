import { Trait, AvailablePokemon, Type } from "../index";
type FindByTrait<
  Pokemons extends { name: string; trait: string },
  ToFind extends Trait
> = ToFind extends Pokemons["trait"] ? Pokemons : never;

type R = AvailablePokemon["trait"] extends "Cute" ? AvailablePokemon : never;

type R2 = FindByTrait<AvailablePokemon, "Cute">;

type GetCute<A, T extends Trait> = A extends { trait: T } ? A : never;

type R3 = GetCute<AvailablePokemon, "Cute">;

type GetByType<A, T extends Type> = A extends { type: infer Types }
  ? T extends Values<Types>
    ? A
    : never
  : never;

type Values<T> = T[keyof T];
type R4 = GetByType<AvailablePokemon, "Rock" | "Fire" | "Water">;
// Charmander | Squirtle | Vulpix | Psyduck | Poliwag | Tentacool | Geodude | Ponyta | Slowpoke | Seel | Staryu
