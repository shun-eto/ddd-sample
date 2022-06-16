export abstract class Service<Command, Result> {
  abstract execute(command: Command): Promise<Result>;
}

export class ServiceCommand {
  constructor(command: ServiceCommand) {}
}

export class ServiceResult {
  readonly ok: boolean;

  constructor(result: ServiceResult) {
    this.ok = result.ok;
  }
}
