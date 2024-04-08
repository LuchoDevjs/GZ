"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IconBulb } from ".";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "@/utils/motion";

export const Contact = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullname: "",
      email: "",
      package: "",
      query: "",
    },
  });

  function onSubmit(data: z.infer<typeof ContactSchema>) {
    console.log(data);

    const formData = new URLSearchParams();
    formData.append("Fullname", data.fullname);
    formData.append("Email", data.email);
    formData.append("Package", data.package);
    formData.append("Query", data.query);

    axios
      .post(`${process.env.NEXT_PUBLIC_GOOGLESHEETS_LINK}`, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        form.reset(); // Limpia el formulario después del envío exitoso
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
      });
  }

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.section
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="flex flex-col lg:flex-row justify-center lg:items-center gap-10 lg:gap-16 mb-24 bg-bento-gradient rounded-2xl h-full p-5 lg:p-20"
        id="contact"
      >
        <div className="flex-1 flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <motion.div variants={textVariant(0.6)}>
            <IconBulb color="#006ff0" />
          </motion.div>
          <motion.h1
            variants={textVariant(0.7)}
            className="text-5xl font-extralight my-5"
          >
            Hablamos?
          </motion.h1>
          <motion.p
            variants={textVariant(0.8)}
            className="mb-4 text-center lg:text-start"
          >
            Exploramos tus necesidades y te ayudamos a alcanzar tus metas.
            Solicitá tu cotización o enviá tus consultas completando el
            formulario. Estamos aquí para asistirte.
          </motion.p>
        </div>
        <motion.div variants={textVariant(0.9)} className="flex-1">
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
                    <FormLabel className="text-sm">
                      {" "}
                      Nombre y Apellido
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id="fullname"
                        {...field}
                        className="!mt-0 bg-transparent border border-primary"
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
                    <FormLabel className="text-sm">
                      Correo Electrónico
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        id="email"
                        {...field}
                        className="!mt-0 bg-transparent border border-primary"
                      />
                    </FormControl>
                    <FormMessage className="text-secondary" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Paquete</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="!mt-0 bg-transparent border border-primary">
                          <SelectValue placeholder="" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-primary text-custom-bg">
                        <SelectItem value="package1">
                          Paquete Estandar
                        </SelectItem>
                        <SelectItem value="package2">
                          Paquete Premium
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-secondary" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Tu consulta</FormLabel>
                    <FormControl>
                      <Textarea
                        id="query"
                        className="resize-none !mt-0 bg-transparent border border-primary"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-secondary" />
                  </FormItem>
                )}
              />

              <div className="flex justify-center lg:justify-start">
                <button className="btn" type="submit">
                  Enviar
                </button>
              </div>
            </form>
          </Form>
        </motion.div>
      </motion.section>
    </motion.section>
  );
};
