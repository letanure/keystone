import { text, relationship } from "@keystone-6/core/fields";

const Book = {
  fields: {
    title: text({ validation: { isRequired: true } }),
    authors: relationship({ ref: "Author.books", many: true }),
  },
};

export default Book;
