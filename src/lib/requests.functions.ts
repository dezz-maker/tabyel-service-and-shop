import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const requestSchema = z.object({
  request_type: z.enum(["booking", "quote"]),
  service: z.string().trim().min(1).max(120),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(5).max(40),
  address: z.string().trim().max(300).optional(),
  preferred_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional(),
  preferred_time: z.string().trim().max(40).optional(),
  message: z.string().trim().max(3000).optional(),
});

export type ServiceRequestInput = z.infer<typeof requestSchema>;

export const submitServiceRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => requestSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("service_requests").insert({
      ...data,
      address: data.address || null,
      preferred_date: data.preferred_date || null,
      preferred_time: data.preferred_time || null,
      message: data.message || null,
    });
    if (error) {
      console.error("Insert failed", error);
      throw new Error("Kunde inte skicka förfrågan");
    }
    return { ok: true };
  });
