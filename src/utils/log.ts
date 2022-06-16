import chalk from "chalk";

class Log {
  private readonly successLabel: string = chalk.greenBright("[ success ]");
  private readonly warningLabel: string = chalk.yellowBright("[ warning ]");

  constructor() {}

  success(message: string) {
    const msg = chalk.blueBright(message);
    console.log(this.successLabel);
    console.log(msg);
  }

  warning(message: string) {
    console.log(this.warningLabel + message);
  }

  url(method: string, pathname: string) {
    const formattedMethod = (method + "    ").toUpperCase().substring(0, 6);
    console.log(
      chalk.yellowBright(`[-* ${formattedMethod} *-]`) +
        " " +
        chalk.blueBright(pathname)
    );
  }
}

const log = new Log();
export { log };
