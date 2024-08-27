import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const pikachuData = {
    name: "Pikachu",
    image: require("./assets/pikachu.png"),
    type: "Electric",
    hp: 35,
    moves: ["Thunder Shock", "Quick Attack", "Iron Tail", "Electro Ball"],
    weaknesses: ["Ground-type Moves"],
  };

  const bulbasaurData = {
    name: "Bulbasaur",
    image: require("./assets/balbasaur.webp"),
    type: "Grass/Poison",
    hp: 45,
    moves: ["Tackle", "Vine Whip", "Razor Leaf", "Solar Beam"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  const blastoiseData = {
    name: "Blastoise",
    image: require("./assets/blastoise.png"),
    type: "Water",
    hp: 79,
    moves: ["Water Gun", "Hydro Pump", "Bite", "Skull Bash"],
    weaknesses: ["Electric", "Grass"],
  };

  const butterfreeData = {
    name: "Butterfree",
    image: require("./assets/butterfree.png"),
    type: "Bug/Flying",
    hp: 60,
    moves: ["Confusion", "Gust", "Sleep Powder", "Psychic"],
    weaknesses: ["Fire", "Flying", "Rock", "Electric", "Ice"],
  };

  const caterpieData = {
    name: "Caterpie",
    image: require("./assets/caterpie.png"),
    type: "Bug",
    hp: 45,
    moves: ["Tackle", "String Shot", "Bug Bite"],
    weaknesses: ["Fire", "Flying", "Rock"],
  };

  const charizardData = {
    name: "Charizard",
    image: require("./assets/charizard.png"),
    type: "Fire/Flying",
    hp: 78,
    moves: ["Flamethrower", "Fly", "Dragon Claw", "Fire Spin"],
    weaknesses: ["Water", "Electric", "Rock"],
  };

  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Growl", "Flamethrower", "Flare Blitz"],
    weaknesses: ["Water-type Moves"],
  };

  const jigglypuffData = {
    name: "Jigglypuff",
    image: require("./assets/jigglypuff.png"),
    type: "Normal/Fairy",
    hp: 115,
    moves: ["Sing", "Body Slam", "Double-Edge", "Hyper Voice"],
    weaknesses: ["Steel", "Poison"],
  };

  const squirtleData = {
    name: "Squirtle",
    image: require("./assets/squirtle.png"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"],
  };

  const venusaurData = {
    name: "Venusaur",
    image: require("./assets/venusaur.png"),
    type: "Grass/Poison",
    hp: 80,
    moves: ["Vine Whip", "Solar Beam", "Sludge Bomb", "Earthquake"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...pikachuData} />
        <PokemonCard {...bulbasaurData} />
        <PokemonCard {...blastoiseData} />
        <PokemonCard {...butterfreeData} />
        <PokemonCard {...caterpieData} />
        <PokemonCard {...charizardData} />
        <PokemonCard {...charmanderData} />
        <PokemonCard {...jigglypuffData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...venusaurData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
