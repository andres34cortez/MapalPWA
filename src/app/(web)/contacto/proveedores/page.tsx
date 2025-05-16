"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm, Controller } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";

type FormData = {
  apellido?: string;
  nombre?: string;
  email?: string;
  telefono?: string;
  provincia?: string;
  localidad?: string;
  empresa?: string;
  sector?: string;
  mensaje?: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const {
      apellido,
      nombre,
      email,
      telefono,
      provincia,
      localidad,
      empresa,
      sector,
      mensaje,
    } = data;

    let emailReceptor = "";
    switch (sector) {
      case "compras":
        emailReceptor = "compras@mapal.com.ar";
        break;
      case "taller":
        emailReceptor = "taller@mapal.com.ar";
        break;
      case "administracion":
        emailReceptor = "administración@mapal.com.ar";
        break;
      case "oficina":
        emailReceptor = "tecnica@mapal.com.ar";
        break;
    }

    const subject = `Nueva consulta de ${nombre} ${apellido}`;
    const body = `
Nombre: ${nombre}

Apellido: ${apellido}

Email: ${email}

Teléfono: ${telefono}

Provincia: ${provincia}

Localidad: ${localidad}

Empresa: ${empresa}

Sector: ${sector}

Mensaje:
      ${mensaje}
    `.trim();

    const mailtoLink = `mailto:${emailReceptor}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col justify-center items-center bg-[#f4f4f4] rounded-xl p-8 space-y-5"
    >
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="w-full gap-1 flex flex-col">
          <h1>Apellido*</h1>
          <Input className="w-full" {...register("apellido")} />
        </div>
        <div className="w-full gap-1 flex flex-col">
          <h1>Nombre*</h1>
          <Input className="w-full" {...register("nombre")} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="w-full gap-1 flex flex-col">
          <h1>Email*</h1>
          <Input
            className="w-full"
            {...register("email", {
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email inválido",
              },
            })}
          />
        </div>
        <div className="w-full gap-1 flex flex-col">
          <h1>Teléfono*</h1>
          <Input className="w-full" {...register("telefono")} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="w-full gap-1 flex flex-col">
          <h1>Provincia*</h1>
          <Input className="w-full" {...register("provincia")} />
        </div>
        <div className="w-full gap-1 flex flex-col">
          <h1>Localidad*</h1>
          <Input className="w-full" {...register("localidad")} />
        </div>
      </div>
      <div className="w-full gap-1 flex flex-col">
        <h1>Empresa*</h1>
        <Input className="w-full" {...register("empresa")} />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h1>Sector a contratar*</h1>
        <Controller
          control={control}
          name="sector"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione un sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="compras">Compras</SelectItem>
                  <SelectItem value="taller">Taller</SelectItem>
                  <SelectItem value="administracion">Administración</SelectItem>
                  <SelectItem value="oficina">Oficina Técnica</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="w-full gap-1 flex flex-col">
          <h1>Mensaje</h1>
          <Textarea
            placeholder="Escribenos tu consulta..."
            {...register("mensaje")}
          />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-6 w-full">
        <Button type="submit">
          <SendIcon className="w-4 h-4 mr-2" />
          Enviar
        </Button>
      </div>
    </form>
  );
}
