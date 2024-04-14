import { prismaClient } from "../lib/db";

export interface CreateItemPayload {
    name: string;
    price: number; 
    description: string;
    owner: string;
    lentTo: string;
  }

  class ItemService {
    public static createItem(payload: CreateItemPayload) {
      const { name, price, description, owner, lentTo } = payload;
        console.log(payload)
      return prismaClient.item.create({
        data: {
          name,
          price,
          description,
          owner,
          lentTo,
        },
      });
    }
  
}  

export default ItemService;