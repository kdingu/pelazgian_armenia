import RestClient from "~/lib/rest-client/class";

export const browserClient = new RestClient(window?.location.origin);
