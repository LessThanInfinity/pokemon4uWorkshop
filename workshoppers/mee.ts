import { AvailablePokemon, Trait, Type } from "..";

// ------------------------------
// Find a pokemon with trait cute
type ByTrait<A, T1 extends Trait> = A extends {
  trait: T1;
}
  ? A
  : never;

type CuteResults = ByTrait<AvailablePokemon, "Cute">;
type HardyResults = ByTrait<AvailablePokemon, "Hardy">;
type CalmResults = ByTrait<AvailablePokemon, "Calm">;

// ------------------------------
// Get by type: fire, water, rock

type ByType<A, T extends Type> = A extends {
  type: [T];
}
  ? A
  : never;

type TheNotAirOnes = ByType<AvailablePokemon, "Fire" | "Water" | "Rock">;
