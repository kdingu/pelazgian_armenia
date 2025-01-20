import RestClient from "~/lib/rest-client/class";

class DjangoBackend extends RestClient {
  static #instance: DjangoBackend;

  private constructor() {
    super(process.env.BACKEND_URL);
  }

  public static get instance(): DjangoBackend {
    if (!DjangoBackend.#instance) {
      DjangoBackend.#instance = new DjangoBackend();
    }

    return DjangoBackend.#instance;
  }

  public async getBooks() {
    return {
      data: [],
    };
  }
}

export const Backend = DjangoBackend.instance;
