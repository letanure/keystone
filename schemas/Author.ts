import { text, relationship } from "@keystone-6/core/fields";

const Author = {
  fields: {
    name: text({ validation: { isRequired: true } }),
    books: relationship({ ref: "Book.authors", many: true }),
  },
};

export default Author;
