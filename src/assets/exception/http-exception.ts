interface Context {
  jp: string;
  en: string;
}

export class HttpException extends Error {
  readonly statusCode: number;
  readonly context: Context;

  constructor(message: string, status: keyof typeof HTTPStatus) {
    super(message);
    this.statusCode = HTTPStatus[status].code;
    this.context = HTTPStatus[status].context;
  }
}

const HTTPStatus = {
  BAD_REQUEST: {
    code: 400,
    context: {
      jp: "不適切なリクエストです。",
      en: "Bad Request"
    }
  },
  ALREADY_VERIFIED: {
    code: 400,
    context: {
      jp: "既に検証済みです。",
      en: "Already Verified"
    }
  },
  BAD_VALUE_OBJECT: {
    code: 400,
    context: {
      jp: "Value Objectで不適切な値が検出されました。",
      en: "Bad Value Object"
    }
  },
  BAD_SERVICE_COMMAND_OBJECT: {
    code: 400,
    context: {
      jp: "Service Commandで不適切な値が検出されました。",
      en: "Bad Service Command Object"
    }
  },
  VALIDATION_ERROR: {
    code: 400,
    context: {
      jp: "Validation Error",
      en: "Validation Error"
    }
  },
  UNAUTHORIZED: {
    code: 401,
    context: {
      jp: "クライアントはリクエストされたレスポンスを得るためには認証を受けなければなりません。",
      en: "Unauthorized"
    }
  },
  FORBIDDEN: {
    code: 403,
    context: {
      jp: "アカウントの問題で、操作が成功しませんでした。",
      en: "Forbidden"
    }
  },
  NOT_FOUND: {
    code: 404,
    context: {
      jp: "指定のバージョン ID は、既存のバージョン情報の中からは一致しません。",
      en: "Not Found"
    }
  },
  SERVER_ERROR: {
    code: 500,
    context: {
      jp: "本サービスのシステム内部エラーが発生しました。",
      en: "Internal Server Error"
    }
  },
  METHOD_NOT_ALLOWED: {
    code: 405,
    context: {
      jp: "指定のメソッドは、このリソース下では許可されていません。",
      en: "Method Not Allowed"
    }
  },
  REQUEST_TIMEOUT: {
    code: 408,
    context: {
      jp: "リクエストに時間がかかり、完了しないまま時間切れになりました。",
      en: "Request Timeout"
    }
  },
  CONFLICT: {
    code: 409,
    context: {
      jp: "以前のリクエストで指定名のバケットの生成が成功しており、すでに所持しています。",
      en: "Conflict"
    }
  },
  REPOSITORY_ERROR: {
    code: 500,
    context: {
      jp: "リポジトリでエラーが発生しました。",
      en: "Repository Error"
    }
  },
  ENV_ERROR: {
    code: 500,
    context: {
      jp: "Environment Error",
      en: "Environment Error"
    }
  },
  NOT_IMPLEMENTED: {
    code: 501,
    context: {
      jp: "ヘッダーで指定した機能は、まだ実装されていません。",
      en: "Not Implemented"
    }
  },
  SERVICE_UNAVAILABLE: {
    code: 503,
    context: {
      jp: "サービス過負荷状態にあるため、リクエスト頻度を下げてください。",
      en: "Service Unavailable"
    }
  }
} as const;
