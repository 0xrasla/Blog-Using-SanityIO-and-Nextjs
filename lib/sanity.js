import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: process.env.projectId,
  dataset: process.env.dataset,
  token: process.env.token,
  useCdn: false,
  ignoreBrowserTokenWarning: true,
  apiVersion: "2021-08-31",
});

export default client;
