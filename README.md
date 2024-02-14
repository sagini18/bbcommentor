# cli_animal

A command-line interface (CLI) tool to interactively learn about different animals.

## Installation

To use `cli_animal`, you need to have Node.js installed on your machine. Then you can install the package globally using npm:

```bash
npm install -g cli_animal
```
## Usage
After installing the package, you can use the following commands to learn about animals:


```bash
# who
Get to know about an animal.
animal who <animal_name>

# Example:
animal who lion
# Output:
# I am a lion

# food
Find out what a specific animal likes to eat.
animal food -a <animal_name> -f <food_name>

# Example:
animal food -a panda -f bamboo
# Output:
# panda likes to eat bamboo
```

## Options
- -a, --animal <animal_name>: Specify the name of the animal.
- -f, --food <food_name>: Specify the food the animal likes.

## Contributing
Contributions are welcome! If you have any ideas, bug fixes, or enhancements, feel free to open an issue or submit a pull request.

## Contact
- Name: Sagini Navaratnam
- Email: navaratnamsagini@gmail.com 