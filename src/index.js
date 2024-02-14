#!/usr/bin/env node
import { program } from "commander";

program
  .command("who")
  .description("who am i")
  .argument("<animal_name>", "Name of the animal")
  .action((animal_name) => {
    console.log(`I am a ${animal_name}`);
  });

program
  .command("food")
  .description("what does animal like to eat")
  .requiredOption("-a, --animal <animal_name>", "Name of the animal")
  .requiredOption("-f, --food <food_name>", "The food the animal likes")
  .action((options) => {
    console.log(`${options.animal} likes to eat ${options.food}`);
  });

program.parse(process.argv);
