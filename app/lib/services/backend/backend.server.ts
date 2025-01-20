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

  public async getHighlightedBooks() {
    const books = await this.get("/books/get_all?is_featured=true");

    if (!Array.isArray(books)) return [];

    return books.slice(0, 4);
  }

  public async getBooks(category: string|null|undefined = "", locale = "sq") {
    const query = new URLSearchParams();

    query.append("locale", locale);
    if (category) query.append("category", category);

    console.log("GET", query.toString());

    return this.get(`/books/get_all?${query.toString()}`);
  }

  // Not implemented by backend?
  public async getBookById(id: string) {
    return this.get("/books/get?id=" + id);
  }

  public async getBookBySlug(slug: string, locale = "sq") {
    return this.get(`/books/get?language=${locale}&slug=` + slug);
  }

  public async getCategories() {
    return this.get("/books/categories")
  }
}

export const Backend = DjangoBackend.instance;
