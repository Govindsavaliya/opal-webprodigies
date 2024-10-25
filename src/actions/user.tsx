"use sever";

import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      return { status: 403 };
    }
    
  } catch (error) {
    console.log("🚀 ~ onAuthenticateUser ~ error:", error);
  }
};
