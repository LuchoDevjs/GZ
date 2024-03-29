"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Image from "next/image";
import { Art } from ".";
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
import { ContactSchema } from "@/helpers";

export const Contact = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullname: "",
      email: "",
      query: "",
    },
  });

  function onSubmit(data: z.infer<typeof ContactSchema>) {
    console.log(data);
  }

  return (
    <section
      className="flex flex-col mb-24 border border-[#FFF4E499] rounded-2xl h-full bg-[#FFF4E473] rounded-s-2xl p-10"
      id="contact"
    >
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
                <FormLabel className="text-xs"> Nombre y Apellido</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    id="fullname"
                    {...field}
                    className="!mt-0"
                  />
                </FormControl>
                <FormMessage className="text-secondary" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Correo Electrónico</FormLabel>
                <FormControl>
                  <Input type="email" id="email" {...field} className="!mt-0" />
                </FormControl>
                <FormMessage className="text-secondary" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs">Tu consulta</FormLabel>
                <FormControl>
                  <Textarea
                    id="query"
                    className="resize-none !mt-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-secondary" />
              </FormItem>
            )}
          />

          <div>
            <button className="btn" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </Form>
    </section>
  );
};
