import { AvailablePokemon, Trait, Type } from "..";

type GetCute<A, T1 extends Trait> = A extends {
  trait: T1;
}
  ? A
  : never; // complete this

type CuteResult = GetCute<AvailablePokemon, "Cute">;

type GetAvatar<A, T1 extends Type> = A extends { type: infer Ti }
  ? T1 extends Values<Ti>
    ? A
    : never
  : never;

type R1 = GetAvatar<AvailablePokemon, "Fire" | "Water" | "Rock">;
