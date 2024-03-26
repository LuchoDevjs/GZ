"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Image from "next/image";
import { Art } from ".";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const FormSchema = z.object({
  fullname: z.string().min(5, {
    message: "Tu nombre completo debe tener al menos 5 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor introduce un mail valido",
  }),
  query: z.string().min(10, {
    message: "Tu consulta es muy corta",
  }),
});

export const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values);
  }

  return (
    <section className="flex flex-col lg:flex-row mb-24 border border-[#FFF4E499] rounded-2xl h-full bg-[#FFF4E473]">
      <div className="flex-1 rounded-s-2xl p-10">
        <h1 className="text-5xl font-extralight mb-5">Hablamos?</h1>
        <p className="mb-4">
          Estamos listos para discutir tus necesidades y cómo podemos ayudarte a
          alcanzar tus objetivos, obtén una cotización personalizada para tu
          proyecto. o si tenés alguna pregunta o consulta, no dudes en llenar el
          formulario y estaremos encantados de ayudarte.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Nombre y Apellido</FormLabel>
                  <FormControl>
                    <Input type="text" id="fullname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input type="email" id="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tu consulta</FormLabel>
                  <FormControl>
                    <Textarea id="query" className="resize-none" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <button className="btn" type="submit">
              Enviar
            </button>
          </form>
        </Form>
      </div>
      <div className="flex-1">
        <Image
          src={Art}
          alt="Art"
          width={600}
          height={600}
          className="object-cover"
        />
      </div>
    </section>
  );
};
