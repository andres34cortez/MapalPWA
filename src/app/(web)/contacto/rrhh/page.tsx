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
  area?: string;
  nivelEstudio?: string;
  trabajaste?: string;
  projecto?: string;
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
      area,
      nivelEstudio,
      trabajaste,
      projecto,
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
      Área: ${area}
      Nivel de Estudio: ${nivelEstudio}
      ¿Trabajó en nuestros proyectos?: ${trabajaste}
      Proyecto: ${projecto}
      Mensaje:
      ${mensaje}
      
      *Recordá adjuntar el CV al correo.
    `.trim();

    const mailtoLink = `mailto:rrhh@mapal.com.ar?subject=${encodeURIComponent(
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

      <div className="flex flex-col gap-1 w-full">
        <h1>Nivel de estudio*</h1>
        <Controller
          control={control}
          name="nivelEstudio"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccione nivel de estudio" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="primaria">Primaria</SelectItem>
                  <SelectItem value="secundaria">Secundaria</SelectItem>
                  <SelectItem value="terciaria">Terciaria / Técnica</SelectItem>
                  <SelectItem value="universitaria">Universitaria</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <div className="flex flex-row items-center gap-6 w-full">
        <div className="flex flex-col gap-1 w-full">
          <h1>Tabajó en alguno de nuestros proyectos?*</h1>
          <Controller
            control={control}
            name="trabajaste"
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Indique su respuesta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="yes">Si</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="w-full gap-1 flex flex-col">
          <h1>Indique cuál</h1>
          <Input className="w-full" {...register("projecto")} />
        </div>
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
      <div className="italic text-muted-foreground">
        *Recordá adjuntarnos tu CV en el mail
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
