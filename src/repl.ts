import { type State } from "./state.js";



export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State): void {


  // Manage Ctstate.rl+C
  state.rl.on('SIGINT', () => {
    console.log('\nClosing the Pokedex... Goodbye!');
    process.exit(0);
  });


  state.rl.prompt();

  state.rl.on('line', (line) => {
    const inputs = cleanInput(line);

    if (!inputs.length) {
      state.rl.prompt();
      return;
    }

    const commandName = inputs[0];
    const command = state.commands[commandName];

    if (!command) {
      console.log(`Unknown command: ${commandName}.`);
      console.log('Type "help" for list of command.');
      state.rl.prompt();
      return;
    }

    try {
      command.callback(state);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error during execution of "${commandName}" command`, error.message);
      } else {
        console.error(`Unknown error during execution of "${commandName}"`);
      }
    }

    state.rl.prompt();
  });
}
