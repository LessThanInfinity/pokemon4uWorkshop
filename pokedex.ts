/* Type to validate weaknessByType */
type WeaknessByType<T extends [Type] | [Type, Type]> = {
  [K in keyof T]: Weakness[T[K]];
}[number];

type Pokemon<T extends [Type] | [Type, Type]> = {
  moves: Move[];
  type: T;
  weakness: WeaknessByType<T>;
  trait: Trait;
};

// Pokemon starts here:

type Bulbasaur = Pokemon<["Grass", "Poison"]> & {
  name: "Bulbasaur";
  type: ["Grass", "Poison"];
  weakness: "Poison" | "Fire" | "Flying" | "Ground" | "Psychic" | "Ice" | "Bug";
  moves: ["Tackle", "Growl"];
  trait: "Hardy";
};

type Charmander = Pokemon<["Fire"]> & {
  name: "Charmander";
  type: ["Fire"];
  weakness: "Water" | "Ground" | "Rock";
  moves: ["Scratch", "Growl"];
  trait: "Lonely";
};

type Squirtle = Pokemon<["Water"]> & {
  name: "Squirtle";
  type: ["Water"];
  weakness: "Grass" | "Electric";
  moves: ["Tackle", "Tail Whip"];
  trait: "Docile";
};

type Pikachu = Pokemon<["Electric"]> & {
  name: "Pikachu";
  type: ["Electric"];
  weakness: "Ground";
  moves: ["Quick Attack", "Growl"];
  trait: "Cute";
};

type Caterpie = Pokemon<["Bug"]> & {
  name: "Caterpie";
  type: ["Bug"];
  weakness: "Fire" | "Flying" | "Rock";
  moves: ["Tackle", "String Shot"];
  trait: "Cute";
};

type Weedle = Pokemon<["Bug", "Poison"]> & {
  name: "Weedle";
  type: ["Bug", "Poison"];
  weakness: "Fire" | "Flying" | "Ground" | "Rock" | "Psychic";
  moves: ["Poison Sting", "String Shot"];
  trait: "Hasty";
};

type Clefairy = Pokemon<["Fairy"]> & {
  name: "Clefairy";
  type: ["Fairy"];
  weakness: "Poison" | "Steel";
  moves: ["Pound", "Growl"];
  trait: "Jolly";
};

type Jigglypuff = Pokemon<["Normal", "Fairy"]> & {
  name: "Jigglypuff";
  type: ["Normal", "Fairy"];
  weakness: "Fighting" | "Poison" | "Steel";
  moves: ["Sing", "Defense Curl"];
  trait: "Calm";
};

type Vulpix = Pokemon<["Fire"]> & {
  name: "Vulpix";
  type: ["Fire"];
  weakness: "Water" | "Ground" | "Rock";
  moves: ["Ember", "Tail Whip"];
  trait: "Timid";
};

type Psyduck = Pokemon<["Water"]> & {
  name: "Psyduck";
  type: ["Water"];
  weakness: "Grass" | "Electric";
  moves: ["Scratch", "Tail Whip"];
  trait: "Sassy";
};

type Meowth = Pokemon<["Normal"]> & {
  name: "Meowth";
  type: ["Normal"];
  weakness: "Fighting";
  moves: ["Scratch", "Growl"];
  trait: "Adamant";
};

type Poliwag = Pokemon<["Water"]> & {
  name: "Poliwag";
  type: ["Water"];
  weakness: "Grass" | "Electric";
  moves: ["Bubble", "Hypnosis"];
  trait: "Lax";
};

type Abra = Pokemon<["Psychic"]> & {
  name: "Abra";
  type: ["Psychic"];
  weakness: "Bug" | "Ghost" | "Dark";
  moves: ["Teleport"];
  trait: "Mild";
};

type Machop = Pokemon<["Fighting"]> & {
  name: "Machop";
  type: ["Fighting"];
  weakness: "Flying" | "Psychic" | "Fairy";
  moves: ["Karate Chop", "Low Kick"];
  trait: "Naive";
};

type Bellsprout = Pokemon<["Grass", "Poison"]> & {
  name: "Bellsprout";
  type: ["Grass", "Poison"];
  weakness: "Ground" | "Fire" | "Ice" | "Poison" | "Flying" | "Bug" | "Psychic";
  moves: ["Vine Whip", "Growth"];
  trait: "Calm";
};

type Tentacool = Pokemon<["Water", "Poison"]> & {
  name: "Tentacool";
  type: ["Water", "Poison"];
  weakness: "Ground" | "Grass" | "Electric" | "Psychic";
  moves: ["Poison Sting", "Supersonic"];
  trait: "Modest";
};

type Geodude = Pokemon<["Rock", "Ground"]> & {
  name: "Geodude";
  type: ["Rock", "Ground"];
  weakness: "Fighting" | "Water" | "Ground" | "Grass" | "Ice" | "Steel";
  moves: ["Tackle", "Defense Curl"];
  trait: "Hasty";
};

type Ponyta = Pokemon<["Fire"]> & {
  name: "Ponyta";
  type: ["Fire"];
  weakness: "Water" | "Ground" | "Rock";
  moves: ["Ember", "Growl"];
  trait: "Gentle";
};

type Slowpoke = Pokemon<["Water", "Psychic"]> & {
  name: "Slowpoke";
  type: ["Water", "Psychic"];
  weakness: "Grass" | "Electric" | "Bug" | "Ghost" | "Dark";
  moves: ["Confusion", "Growl"];
  trait: "Rash";
};

type Magnemite = Pokemon<["Electric", "Steel"]> & {
  name: "Magnemite";
  type: ["Electric", "Steel"];
  weakness: "Fighting" | "Ground" | "Fire";
  moves: ["Metal Sound", "Tackle"];
  trait: "Sassy";
};

type Farfetchd = Pokemon<["Normal", "Flying"]> & {
  name: "Farfetchd";
  type: ["Normal", "Flying"];
  weakness: "Fighting" | "Rock" | "Electric" | "Ice";
  moves: ["Peck", "Sand Attack"];
  trait: "Timid";
};

type Doduo = Pokemon<["Normal", "Flying"]> & {
  name: "Doduo";
  type: ["Normal", "Flying"];
  weakness: "Fighting" | "Rock" | "Electric" | "Ice";
  moves: ["Peck", "Growl"];
  trait: "Lax";
};

type Seel = Pokemon<["Water"]> & {
  name: "Seel";
  type: ["Water"];
  weakness: "Grass" | "Electric";
  moves: ["Headbutt", "Growl"];
  trait: "Cute";
};

type Snorlax = Pokemon<["Normal"]> & {
  name: "Snorlax";
  type: ["Normal"];
  weakness: "Fighting";
  moves: ["Rest", "Body Slam"];
  trait: "Brave";
};

type Dratini = Pokemon<["Dragon"]> & {
  name: "Dratini";
  type: ["Dragon"];
  weakness: "Ice" | "Fairy" | "Dragon";
  moves: ["Leer", "Thunder Wave"];
  trait: "Hasty";
};

type Eevee = Pokemon<["Normal"]> & {
  name: "Eevee";
  type: ["Normal"];
  weakness: "Fighting";
  moves: ["Tackle", "Tail Whip"];
  trait: "Mild";
};

type Staryu = Pokemon<["Water"]> & {
  name: "Staryu";
  type: ["Water"];
  weakness: "Grass" | "Electric";
  moves: ["Water Gun", "Rapid Spin"];
  trait: "Naughty";
};

type Hitmonlee = Pokemon<["Fighting"]> & {
  name: "Hitmonlee";
  type: ["Fighting"];
  weakness: "Flying" | "Psychic" | "Fairy";
  moves: ["Double Kick", "Meditate"];
  trait: "Naughty";
};

type Hitmonchan = Pokemon<["Fighting"]> & {
  name: "Hitmonchan";
  type: ["Fighting"];
  weakness: "Flying" | "Psychic" | "Fairy";
  moves: ["Comet Punch", "Agility"];
  trait: "Bold";
};
