import { CollectionConfig } from "payload/types";


export const Company: CollectionConfig = {
  slug: "companies",
  labels: {
    singular: "Company",
    plural: "Companies",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
  ],
};
