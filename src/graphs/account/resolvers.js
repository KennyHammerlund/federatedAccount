import jwt from "jsonwebtoken";

export default {
  Query: {
    account: async (obj, { input }, ctx) => {
      return {
        token: jwt.sign({ name: input.displayname }, "gqlFederated"),
        displayName: input.displayName
      };
    }
  }
};
