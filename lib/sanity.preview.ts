"use client";

import { dataset, projectId } from "./sanity.client";
import { definePreview } from "next-sanity/preview";

const onPublicAccessOnly = () => {
  throw new Error("Unable to load preview as you're not logged in");
};

if (!projectId || !dataset) {
  throw new Error(
    "Missing projectId or dataset. Check your `sanity.json` configuration"
  );
}

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
});
