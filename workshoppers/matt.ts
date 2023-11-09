import { Trait, AvailablePokemon, Type } from "../index";

type MattsGetByTrait<A, T extends Trait> = A extends { trait: T } ? A : never;

type MattsGetCuteRes = MattsGetByTrait<AvailablePokemon, "Cute">;

type MattsGetByType<A, T extends Type> = A extends {
  type: [T] | [T, any] | [any, T];
}
  ? A
  : never;

type MattsGetByTypeRes = MattsGetByType<
  AvailablePokemon,
  "Water" | "Fire" | "Rock"
>;
