"use server"

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetTopInteractedTagsParams } from "./shared.types";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams){
  try {
    connectToDatabase();

    const { userId, limit = 3 } = params;

    const user = await User.findById(userId);

    if(!user) {
      throw new Error("User not found!");
    }

    //Find interactions for the user and group by tags...
    // Interaction...

    return [{_id: "1", name: "tag1"}, {_id: "2", name: "tag2"}, {_id: "3", name: "tag3"}]

  } catch (error) {
    console.log(error);
    throw error;
  }
}