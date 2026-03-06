import { z } from "zod";

export const LoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional().default(false),
});

export type LoginInput = z.infer<typeof LoginSchema>;

export const SetupSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(64, "Username too long")
    .regex(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, underscores and hyphens"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(256, "Password too long"),
  displayName: z.string().max(128, "Display name too long").optional(),
});

export type SetupInput = z.infer<typeof SetupSchema>;
