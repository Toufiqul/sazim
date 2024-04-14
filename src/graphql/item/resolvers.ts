import ItemService, { CreateItemPayload } from "../../services/item";

const queries = {
    getItem: {return: "get item not implemented"}
    // async (
    //     _: any,
    //     payload: { name: string }
    //   ) => {
    //     const token = await UserService.getUserToken({
    //       name: payload.name,
    //     });
    //     return token;
    // },
};

const mutations = {
  createItem: async (_: any, payload: CreateItemPayload) => {
    const res = await ItemService.createItem(payload);
    return res.id;
  },
};

export const resolvers = { queries, mutations };