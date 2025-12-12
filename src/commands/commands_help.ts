import { CLICommand } from "./commands";

export function commandHelp(commands: Record<string, CLICommand>): void {
  console.log("\nWelcome to the Pokedex")
  console.log("\nUsage:\n")

  Object.values(commands).forEach(cmd => {
    console.log(`${cmd.name} - ${cmd.description}`)
  })

  console.log()
}
