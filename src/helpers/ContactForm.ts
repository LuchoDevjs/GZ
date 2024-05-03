import { z } from "zod";

export const ContactSchema = z.object({
  fullname: z
    .string()
    .min(1, "Por favor, introduce tu nombre completo.")
    .regex(
      /^[a-zA-Z\s]*$/,
      "El nombre completo solo debe contener letras y espacios."
    )
    .trim()
    .refine((name) => name.length >= 5, {
      message: "Tu nombre completo debe tener al menos 5 caracteres.",
    }),

  email: z
    .string()
    .email("Por favor introduce un correo válido")
    .transform((email) => email.toLowerCase().trim()),

  package: z.string().min(1, "Selecciona un Paquete"),

  query: z
    .string()
    .min(1, "Por favor, introduce tu consulta.")
    .trim()
    .refine((query) => query.length >= 10, {
      message: "Tu consulta debe tener al menos 10 caracteres.",
    }),
});
