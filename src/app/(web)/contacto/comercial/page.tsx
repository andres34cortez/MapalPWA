"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
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
      mensaje,
    } = data;

    const subject = `Nueva consulta de ${nombre} ${apellido}`;
    const body = `
Nombre: ${nombre}

Apellido: ${apellido}

Email: ${email}

Teléfono: ${telefono}

Provincia: ${provincia}

Localidad: ${localidad}

Empresa: ${empresa}

Mensaje:
      ${mensaje}
    `.trim();

    const mailtoLink = `mailto:comercial@mapal.com.ar?subject=${encodeURIComponent(
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
