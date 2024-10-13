import { z } from "zod";

export const messageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
  style: z.string(),
  skillsNeeded: z.string(),
  projectsViewed: z.string(),
});
