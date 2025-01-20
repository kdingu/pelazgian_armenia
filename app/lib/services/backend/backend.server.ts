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
    return this.get("/books/get_all");
  }

  // Not implemented by backend?
  public async getBookById(id: string) {
    return this.get("/books/get?id=" + id);
  }

  public async getBookBySlug(slug: string) {
    return this.get("/books/get?slug=" + slug);
  }

  public async getCategories() {
    return this.get("/books/categories")
  }
}

export const Backend = DjangoBackend.instance;
