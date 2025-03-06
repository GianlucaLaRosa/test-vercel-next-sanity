import { createClient, groq } from "next-sanity";
import clientConfig from "./clientConfig";
import type { Logo } from "../../src/types/index";

const getLogoQuery = groq`*[_type == "logo"][0]{
  label,
    link,
    "logoUrl": logoUrl.asset->url
    }`;

export async function getLogo(): Promise<Logo> {
  return createClient(clientConfig).fetch(getLogoQuery);
}
