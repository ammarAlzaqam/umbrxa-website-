import z from "zod";

export const SendMessageValidationSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(30, { message: "Name cannot exceed 30 characters" }),

  email: z.email({ message: "Please enter a valid email address" }),

  message: z
    .string()
    .min(3, { message: "Message must be at least 3 characters long" })
    .max(300, { message: "Message cannot exceed 300 characters" }),
});
