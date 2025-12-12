import { createInterface } from "node:readline";
import { getCommands } from "./commands/commands.js";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'pokedex> '
});

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

export function startREPL(): void {
  const commands = getCommands();

  // Manage Ctrl+C
  rl.on('SIGINT', () => {
    console.log('\nClosing the Pokedex... Goodbye!');
    process.exit(0);
  });


  rl.prompt();

  rl.on('line', (line) => {
    const inputs = cleanInput(line);

    if (!inputs.length) {
      rl.prompt();
      return;
    }

    const commandName = inputs[0];
    const command = commands[commandName];

    if (!command) {
      console.log(`Unknown command: ${commandName}.`);
      console.log('Type "help" for list of command.');
      rl.prompt();
      return;
    }

    try {
      command.callback(commands);
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error during execution of "${commandName}" command`, error.message);
      } else {
        console.error(`Unknown error during execution of "${commandName}"`);
      }
    }

    rl.prompt();
  });
}
