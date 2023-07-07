import Prompt from "@models/prompt";
import User from "@models/user";

import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find().populate({
          path: "creator"
        });

        const response = new Response(JSON.stringify(prompts), {
          status: 200,
        });

        return response;
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 