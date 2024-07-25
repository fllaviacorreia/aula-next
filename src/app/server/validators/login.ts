import { z } from "zod";

export const LoginSchema = z.object({
    nome: z
        .string({message: "O campo nome não pode ser vazio."})
        .min(4, {message:"O campo deve possuir no mínimo 6 caracteres."})
        .trim(),
    password: z
        .string()
        .min(8, { message: "Necessário possuir mínimo de 8 caracteres." })
        .regex(/[A-Z]/, {
          message: "Necessário possuir no mínimo uma letra maiúscula",
        })
        .regex(/[a-z]/, {
          message: "Necessário possuir no mínimo uma letra minúscula.",
        })
        .regex(/[0-9]/, {
          message: "Necessário possuir no mínimo um dígito entre 0 e 9.",
        })
        .regex(/[^a-zA-Z0-9]/, {
          message: "Necessário possuir no mínimo um caractere especial.",
        })
        .trim(),
    data: z.string().date("O campo só recebe datas"),
});

export type LoginState =
  | {
      errors?: {
        nome?: string[];
        data?: string[];
      };
      message?: string;
    }
  | undefined;