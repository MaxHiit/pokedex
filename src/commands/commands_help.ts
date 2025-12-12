import { type State } from "src/state.js";

export function commandHelp(state: State): void {
  console.log("\nWelcome to the Pokedex!");
  console.log("\nUsage:\n");

  Object.values(state.commands).forEach(cmd => {
    console.log(`${cmd.name} - ${cmd.description}`);
  });

  console.log();
}
