import { UserRepositoryImplements } from "~src/application/repositories/user.repository";

export class AuthService {
  constructor(private readonly userRepository: UserRepositoryImplements) {}

  async sign(userId: string) {
    /**
     * 認証に必要なデータの生成をもろもろ行い、
     * token を返す
     */

    const token = "test-token";

    return `Bearer ${token}`;
  }
}
