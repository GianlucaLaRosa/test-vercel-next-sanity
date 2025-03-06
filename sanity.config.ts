import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

const visionToolConfig = {
  defaultApiVersion: apiVersion,
  defaultDataset: dataset,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: !isDev,
};

const plugins = isDev
  ? [structureTool(), visionTool(visionToolConfig)]
  : [structureTool()];

export default defineConfig({
  name: "fortitude-group",
  title: "Fortitude Group",
  projectId,
  dataset,
  apiVersion,
  basePath: "/admin",
  plugins,
  schema: {
    types: schemas,
  },
});
