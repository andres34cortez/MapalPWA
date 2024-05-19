"use client";

import * as React from "react";
import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import ResponsabilidadImg from "@/assets/responsabilidad.png";
import Link from "next/link";
import { useLanguage } from "@/context/LayoutContext";

export const dynamic = "force-dynamic";
export async function getCards() {
  const cards = await client.fetch(
    `*[_type == "card"]{title, description,link, "image":image.asset->url}`
  );
  return cards;
}

export function Content() {
  return (
    <div className='flex flex-col w-full'>
      <div className='pt-0 pb-12 border-r-2 border-[#FAB918] pr-6 sm:pr-12 mt-4 mb-12 justify-center items-center'>
        <div className='flex flex-col bg-transparent max-w-7xl mx-auto md:pl-0 pl-3'>
          <Empresa />
          <div className='h-[90px]' id='prensa' />
          <News />
        </div>
      </div>
    </div>
  );
}
const Empresa = () => {
  const { language } = useLanguage();
  return (
    <div className='container sm:pl-6'>
      <div className='flex flex-row items-center relative mb-2'>
        <div className='absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]' />
        <h2 className='font-bold'>
          {language === "ESP" ? <>La Empresa</> : <>The Company</>}
        </h2>
      </div>
      <div className='flex flex-row justify-between flex-wrap sm:flex-nowrap'>
        <div className='max-w-[450px] w-full'>
          <h3 className='text-[#FAB918] font-bold'>
            {language === "ESP" ? <>MISIÓN</> : <>MISSION</>}
          </h3>
          <p className='font-light text-sm mt-2 mb-6'>
            {language === "ESP" ? (
              <>
                {" "}
                Contribuir al bienestar y evolución de la sociedad a través de
                la construcción de obras y servicios, ejecutándolos con calidad,
                en un entorno de seguridad y respeto por el medio ambiente,
                generando al mismo tiempo en la empresa, un ámbito propicio para
                el desarrollo profesional y personal de sus integrantes.
              </>
            ) : (
              <>
                Contribute to the well-being and evolution of society through
                the construction of works and services, executing them with
                quality, in an environment of safety and respect for the
                environment, while generating in the company, an environment
                conducive to professional development and staff of its members.
              </>
            )}{" "}
          </p>
          <h3 className='text-[#FAB918] font-bold'>
            {language === "ESP" ? <>VISIÓN</> : <>VIEW</>}
          </h3>
          <p className='m-0 p-0 font-light text-sm mb-6'>
            {language === "ESP" ? (
              <>
                {" "}
                Ser una empresa constructora líder en el mercado nacional,
                reconocida por su cumplimiento, calidad, innovación, capacidad
                técnica y respeto por el medio ambiente, que supere sus
                estándares día a día, logrando la máxima satisfacción de
                nuestros clientes y de todas las personas que trabajamos en
                esta.
              </>
            ) : (
              <>
                To be a leading construction company in the national market,
                recognized for its compliance, quality, innovation, technical
                capacity and respect for the environment, which exceeds its
                standards day by day, achieving the maximum satisfaction of our
                clients and of all the people we work with.
              </>
            )}
          </p>
          <h3 className='text-[#FAB918] font-bold'>
            {language === "ESP" ? <>VALORES</> : <>VALUES</>}
          </h3>
          <ul className='m-0 p-0 font-light text-sm'>
            <li>
              {language === "ESP" ? (
                <>• Respeto por el medio ambiente.</>
              ) : (
                <>• Respect for the environment.</>
              )}{" "}
            </li>
            <li>
              {language === "ESP" ? (
                <>• Honestidad y transparencia en nuestros actos. </>
              ) : (
                <>• Honesty and transparency in our actions.</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>
                  • Aprendizaje continuo y trabajo en equipo en búsqueda de la
                  excelencia.
                </>
              ) : (
                <>• Continuous learning and teamwork in search of excellence.</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>
                  • Compromiso con los resultados, la calidad y seguridad de
                  nuestras obras y personas que trabajan en las mismas.
                </>
              ) : (
                <>
                  • Commitment to the results, quality and safety of our works
                  and people who work on them.
                </>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>
                  • Respeto por nuestros proveedores, clientes y todas las
                  personas relacionadas a nuestra compañía.
                </>
              ) : (
                <>
                  • Respect for our suppliers, clients and all people related to
                  our company.
                </>
              )}{" "}
            </li>
            <li>
              {language === "ESP" ? (
                <>
                  {" "}
                  • Respeto por las personas, sus creencias y sus diferencias.
                </>
              ) : (
                <>• Respect for people, their beliefs and their differences.</>
              )}{" "}
            </li>
          </ul>
        </div>
        <div className='w-0.5 bg-[#C8C8C8] min-h-full mx-5 hidden sm:flex' />
        <div className='max-w-[700px] w-full'>
          <div className='mt-4'>
            <h3 className='text-[#FAB918] font-bold'>
              {language === "ESP" ? (
                <>RESPONSABILIDAD SOCIAL</>
              ) : (
                <>SOCIAL RESPONSIBILITY</>
              )}{" "}
            </h3>
            <p className='m-0 p-0 font-light text-sm mb-12 text-justify'>
              {language === "ESP" ? (
                <>
                  {" "}
                  MAPAL S.A. define la calidad a partir de una visión
                  estratégica basada en el impacto positivo social y ambiental
                  generado en el medio donde actúa y desarrolla sus obras y
                  servicios. Consideramos primordial establecer relaciones con
                  proveedores y trabajadores regionales como así también el
                  fortalecimiento de la relación y cooperación de todos nuestros
                  proveedores y trabajadores que nos acompañan desde el inicio,
                  así lograr un gran desarrollo de capital humano amplio y poder
                  brindar a nuestros clientes y a la sociedad productos con
                  valor agregado.
                </>
              ) : (
                <>
                  MAPAL S.A. defines quality from a strategic vision based on
                  the positive social and environmental impact generated in the
                  medium where it operates and develops its works and services.
                  We consider it essential to establish relationships with
                  regional suppliers and workers as well as strengthening the
                  relationship and cooperation of all our suppliers and workers
                  who have accompanied us from the beginning, thus achieving
                  great development of broad human capital and being able to
                  provide our customers and society value-added products.
                </>
              )}{" "}
            </p>
            <div className='border-[#FDBA13] ml-4 pb-4 border items-center rounded-sm'>
              <Image
                src={ResponsabilidadImg}
                alt=''
                className='md:-ml-4 md:-mt-4'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const [cards, setCards] = React.useState([]);
  const { language } = useLanguage();

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getCards();
      setCards(data);
    };
    fetchData();
  }, []);

  return (
    <div className='flex flex-col mt-[10px] z-10 pl-6'>
      <div className='flex flex-row items-center relative mb-2'>
        <div className='absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]' />
        <h2 className='font-bold'>
          {language === "ESP" ? <>NOTICIAS / PRENSA</> : <>PRESS NEWS</>}
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {cards.map((card, index) => (
          <NewsCard card={card} key={index} />
        ))}
      </div>
    </div>
  );
};

export default News;

type Card = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const NewsCard = (props: { card: Card }) => {
  const { language } = useLanguage()
  return (
    <div className='rounded-[8px] flex flex-col py-3 px-5 w-full gap-3 max-h-[300px] border shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.4)] bg-white'>
      <div className='relative w-full h-[200px]'>
        <Image
          src={props.card.image}
          alt='image'
          layout='fill'
          objectFit='cover'
          className='object-cover'
        />
      </div>
      <h1>{props.card.title}</h1>
      <p>{props.card.description}</p>
      <Link
        href={props.card.link}
        className='pointer underline text-blue-700'
        target='_blank'
      >
        {language === "ESP" ? <>ver mas</> : <>see more</>} 
      </Link>
    </div>
  );
};
