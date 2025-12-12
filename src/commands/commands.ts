import { commandExit } from "./commands_exit.js";
import { commandHelp } from "./commands_help.js";
import { type CLICommand } from "src/state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Display a help message",
      callback: commandHelp,
    }
  };
}

