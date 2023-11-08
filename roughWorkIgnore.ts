// A extends { trait: T} ? A : never

type DocilePkmn2 = GetDocile2<AvailablePokemonHash, "Cute">;

type Values<T> = T[keyof T];
// type GetWeakTo<A, T extends Type> = Values<{
//   [Name in keyof A]: A[Name] extends { weakness: infer W }
//     ? T extends W
//       ? Name
//       : never
//     : never;
// }>;

// type GetWeakTo<A, T extends Type> = { weakness: T } extends A ? A : never;

type GetWeakTo<A, T extends Type> = A extends { weakness: infer W }
  ? W extends A["weakness"]
    ? A
    : never
  : never;

type WeakToFire = GetWeakTo<AvailablePokemon, "Fire">;

interface A {
  name: "one";
  _: "a";
}
interface B {
  name: "two";
  w: "d";
}

type _t = A | B;
type t_ = _t extends { name: "one" } ? _t : never;

// question: Find me a pokemon that is not weak to ice  and not weak to water.
// Return an array of the types avaiable taht are not this weak.

// type hashTypes = {
//   element: Elem;
// };

// type test1 =
//   | {
//       element: "air";
//     }
//   | {
//       element: "water";
//     };

// type test2 = {
//   element: "fire" | "air";
// };

// type result = test1 extends { element: infer el }
//   ? el extends "water"
//     ? el
//     : never
//   : "b";

// type T1 = "water" extends "water" | "air" ? true : false;
// type T2 = "water" | "air" extends "water" ? true : false;

// type X = {
//   weakness: ["fire", "water", "ground"];
// };

// type IsWeakTo<
//   P extends { weakness: string[] },
//   Weakness extends string
// > = Weakness extends P["weakness"][number] ? true : false;

// // "fire" extends "fire"| 'water'| 'ground']

// type X2 = IsWeakTo<X, "fire">;

// type Includes<Arr extends readonly any[], Val> = Values<{
//   [Index in keyof Arr]: Val extends Arr[Index] ? true : never;
// }>;

// type X3 = Includes<readonly [1, 2], 1>;
// type X4 = keyof [1, 2];
