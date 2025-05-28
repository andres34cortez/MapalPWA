"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { useLanguage } from "@/context/LayoutContext";

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

  const { language } = useLanguage();

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

    const subject =
      language === "ESP"
        ? `Nueva consulta de ${nombre} ${apellido}`
        : `New inquiry from ${nombre} ${apellido}`;

    const body =
      language === "ESP"
        ? `
Nombre: ${nombre}

Apellido: ${apellido}

Email: ${email}

Teléfono: ${telefono}

Provincia: ${provincia}

Localidad: ${localidad}

Empresa: ${empresa}

Mensaje: ${mensaje}
    `.trim()
        : `
First Name: ${nombre}

Last Name: ${apellido}

Email: ${email}

Phone: ${telefono}

State: ${provincia}

City: ${localidad}

Company Name: ${empresa}

Message: ${mensaje}
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
          {language === "ESP" ? <h1>Apellido*</h1> : <h1>Last Name*</h1>}
          <Input className="w-full" {...register("apellido")} />
        </div>
        <div className="w-full gap-1 flex flex-col">
          {language === "ESP" ? <h1>Nombre*</h1> : <h1>First Name*</h1>}
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
          {language === "ESP" ? <h1>Teléfono*</h1> : <h1>Phone*</h1>}
          <Input className="w-full" {...register("telefono")} />
        </div>
      </div>
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="w-full gap-1 flex flex-col">
          {language === "ESP" ? <h1>Provincia*</h1> : <h1>State*</h1>}
          <Input className="w-full" {...register("provincia")} />
        </div>
        <div className="w-full gap-1 flex flex-col">
          {language === "ESP" ? <h1>Localidad*</h1> : <h1>City*</h1>}
          <Input className="w-full" {...register("localidad")} />
        </div>
      </div>
      <div className="w-full gap-1 flex flex-col">
        {language === "ESP" ? <h1>Empresa*</h1> : <h1>Company Name*</h1>}
        <Input className="w-full" {...register("empresa")} />
      </div>
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="w-full gap-1 flex flex-col">
          {language === "ESP" ? <h1>Mensaje</h1> : <h1>Message</h1>}
          <Textarea
            placeholder={
              language === "ESP"
                ? "Escribenos tu consulta..."
                : "Write us your inquiry..."
            }
            {...register("mensaje")}
          />
        </div>
      </div>
      <div className="flex flex-row justify-end gap-6 w-full">
        <Button type="submit">
          <SendIcon className="w-4 h-4 mr-2" />
          {language === "ESP" ? "Enviar" : "Send"}
        </Button>
      </div>
    </form>
  );
}
