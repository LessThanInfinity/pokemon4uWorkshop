import { AvailablePokemon, Trait, Type, ElementType, TypeOfCreature, Pokemon } from "../";

// PROBLEM 1

// type GetCute takes in A and some trait T1 which is in Trait
// if A has trait "Cute", then return A otherwise never
type GetCute<A, T1 extends Trait> = A extends { trait: "Cute" } ? A : never; // complete this

// we want to find the type of Result1
// if any of the available pokemon has type cute, then return pokemon ??
type Result1 = GetCute<AvailablePokemon, "Cute">;
// A = AvailablePokeomon

// Notes

// if the test element (just one, like "water") extends Basic Element
// that means that TestElement is in BasicElement
// if so, elementType is the type BasicElement
// otherwise, it has type never
type ElementType = TestElement extends BasicElement ? BasicElement : never;

// we want to figure out the type of a particular creature
// if the creature has 8 legs then it is an arthropod
// otherwise it is an insect
type TypeOfCreature = UnknownCreature extends { numberOfLegs: 8 }
  ? Arthropod
  : Insect;

// seel is cute !!
type Seel = Pokemon<["Water"]> & {
  name: "Seel";
  type: ["Water"];
  weakness: "Grass" | "Electric";
  moves: ["Headbutt", "Growl"];
  trait: "Cute";
};

// PROBLEM 2

type GetAangPokemon<A, T extends Type> = (A.type[0] extends { type: T } || A.type[1] extends { type: T }) ? A : never;
type AangPokemon = "Water" | "Fire" | "Rock"
type Result2 = GetAangPokemon<AvailablePokemon, AangPokemon>