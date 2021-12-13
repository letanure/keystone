// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import { text, relationship } from "@keystone-6/core/fields";

const Tag = {
  ui: {
    isHidden: true,
  },
  fields: {
    name: text(),
    posts: relationship({ ref: "Post.tags", many: true }),
  },
};

export default Tag;
