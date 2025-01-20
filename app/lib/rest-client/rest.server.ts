import RestClient from "~/lib/rest-client/class";

export const serverClient = new RestClient(process.env.BACKEND_URL);
