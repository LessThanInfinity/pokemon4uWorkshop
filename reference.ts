let isLightOn = true;
let isApplianceOn = isLightOn ? true : false;
//=============

type weakness = "Fire" | "Water" | "Air";
type testWeak = "Water";
type testProp = testWeak extends weakness ? "a" : "b";

type BasicElement = "air" | "water" | "fire" | "earth";
type TestElement = "water";

type ElementType = TestElement extends BasicElement ? BasicElement : never;

//===========
type Insect = {
  /* ... */
};
type Arthropod = {
  /* ... */
};

type UnknownCreature = {
  numberOfLegs: 8;
};

type TypeOfCreature = UnknownCreature extends { numberOfLegs: 8 }
  ? Arthropod
  : Insect;
