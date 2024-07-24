import { CollectionConfig } from "payload/types";
// import PrefillCompany from "./ui/PrefillCompany";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: {
    singular: "Project",
    plural: "Projects",
  },
  fields: [

    {
      name: "name",
      label: "Name",
      type: "text",
    },
    // {
    //   name: "company",
    //   label: "Company",
    //   type: "relationship",
    //   relationTo: "companies",
    // },
  ],
};
