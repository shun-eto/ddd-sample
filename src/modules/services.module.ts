import { RepositoriesModule } from "./repositories.module";

export class ServicesModule {
  constructor(private readonly repositoriesModule: RepositoriesModule) {}
}
