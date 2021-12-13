import { text, select } from "@keystone-6/core/fields";

const Book = {
  fields: {
    title: text({ validation: { isRequired: true } }),
    author: text({ validation: { isRequired: false } }),
  },
};

export default Book;
