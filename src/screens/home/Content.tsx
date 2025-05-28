"use client";

import * as React from "react";
import Image, { StaticImageData } from "next/image";
import { client } from "../../../sanity/lib/client";
// import ResponsabilidadImg from "@/assets/responsabilidad.png";
import DirecvitosImg from "@/assets/cambios2025/fotos/Directivos_y_empleados.jpg";
import Link from "next/link";
import { useLanguage } from "@/context/LayoutContext";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// fotos empleados
import FrancoPalluchini from "@/assets/cambios2025/fotos/mesaDirectiva/FrancoPallucchini.jpg";
import AlejandroPalluchini from "@/assets/cambios2025/fotos/mesaDirectiva/AlejandroPallucchini.jpg";
import CarlosVillalonga from "@/assets/cambios2025/fotos/mesaDirectiva/CarlosVillalonga.jpg";
import DanielAguado from "@/assets/cambios2025/fotos/mesaDirectiva/DanielAguado.jpg";
import RaulCuneo from "@/assets/cambios2025/fotos/mesaDirectiva/RaulCuneo.jpg";
import FedericoMoreno from "@/assets/cambios2025/fotos/mesaDirectiva/FedericoMoreno.jpg";
import GabrielPinto from "@/assets/cambios2025/fotos/mesaDirectiva/GabrielPintos.jpg";
import HumbertoViener from "@/assets/cambios2025/fotos/mesaDirectiva/HumbertoViener.jpg";
import ManuelBustamante from "@/assets/cambios2025/fotos/mesaDirectiva/ManuelBustamante.jpg";
import VictorZanni from "@/assets/cambios2025/fotos/mesaDirectiva/VictorZanni.jpg";
import MarceloRomero from "@/assets/cambios2025/fotos/mesaDirectiva/MarceloRomero.jpg";
import JavierRodriguez from "@/assets/cambios2025/fotos/mesaDirectiva/JavierRodriguez.jpg";
import MdelValle from "@/assets/cambios2025/fotos/mesaDirectiva/MariadelValleBalmaceda.jpg";
import CarlaPalluchini from "@/assets/cambios2025/fotos/mesaDirectiva/CarlaPalucchini.jpg";
import FacundoBaigorri from "@/assets/cambios2025/fotos/mesaDirectiva/FacundoBaigorri.jpg";
import DefaultUser from "@/assets/cambios2025/fotos/mesaDirectiva/silhouette-male-icon.svg";

// logosClientes
import AustralGold from "@/assets/cambios2025/logosMapal/AustralGold.png";
import Barrick from "@/assets/cambios2025/logosMapal/Barrick.svg";
import Belararox from "@/assets/cambios2025/logosMapal/Belararox.png";
import Casposo from "@/assets/cambios2025/logosMapal/Casposo.png";
import CBB from "@/assets/cambios2025/logosMapal/Cbb.png";
import Hidraulica from "@/assets/cambios2025/logosMapal/DepartamentoHidráulica.jpg";
import EDEMSA from "@/assets/cambios2025/logosMapal/EDEMSA.png";
import Enohsa from "@/assets/cambios2025/logosMapal/Enohsa.jpg";
import Glencore from "@/assets/cambios2025/logosMapal/Glencore.svg";
import GobSj from "@/assets/cambios2025/logosMapal/GobiernoSanJuan.png";
import IPV from "@/assets/cambios2025/logosMapal/IPV.svg";
import LosAzules from "@/assets/cambios2025/logosMapal/LosAzules.png";
import McEwenMining from "@/assets/cambios2025/logosMapal/McEwenMining.png";
import MinasArgentinas from "@/assets/cambios2025/logosMapal/MinasArgentinas.png";
import MuniChimbas from "@/assets/cambios2025/logosMapal/MunicipalidadChimbas.png";
import MuniSJ from "@/assets/cambios2025/logosMapal/MunicipalidadSanJuan.png";
import OSSE from "@/assets/cambios2025/logosMapal/OSSE.png";
import PerezCompanc from "@/assets/cambios2025/logosMapal/PerezCompanc.jpg";
import RecursosHidricos from "@/assets/cambios2025/logosMapal/RecursosHídricos.jpeg";
import ShandongGold from "@/assets/cambios2025/logosMapal/ShandongGoldMining.png";
import Techint from "@/assets/cambios2025/logosMapal/Techint.svg";
import Veladero from "@/assets/cambios2025/logosMapal/Veladero.png";
import VialidadNacional from "@/assets/cambios2025/logosMapal/VialidadNacional.jpg";
import VialidadMendoza from "@/assets/cambios2025/logosMapal/VialidadProvincialMendoza.png";
import VialidadProvincial from "@/assets/cambios2025/logosMapal/VialidadProvincial.jpg";
import YamanaGold from "@/assets/cambios2025/logosMapalSigma/Logo_Yamana_Gold.png";
import YPF from "@/assets/cambios2025/logosMapal/YPF.svg";
import BancoHipotecario from "@/assets/cambios2025/logosMapal/BancoHipotecario.svg";

export const dynamic = "force-dynamic";
export async function getCards() {
  const cards = await client.fetch(
    `*[_type == "card"]{title, description,link, "image":image.asset->url}`
  );
  return cards;
}

export function Content() {
  return (
    <div className="flex flex-col w-full">
      <div className="pt-0 pb-6 border-r-2 border-[#FAB918] pr-6 sm:pr-12 mt-4 mb-12 justify-center items-center">
        <div className="flex flex-col bg-transparent max-w-7xl mx-auto md:pl-0 pl-3">
          <Empresa />
          <div className="h-[90px]" id="prensa" />
          <News />
          <div className="h-[90px]" id="prensa" />
          <Clientes />
        </div>
      </div>
    </div>
  );
}

const Empresa = () => {
  const { language } = useLanguage();

  const downloadPDFMapal = () => {
    const fileId = "1fY30GYdl9uAcY3IdH9fRRNDgfBbh1vKv";
    const downloadLink = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.open(downloadLink, "_blank");
  };

  return (
    <div className="container sm:pl-6">
      <div className="flex flex-row items-center relative mb-2">
        <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
        <h2 className="font-bold">
          {language === "ESP" ? <>LA EMPRESA</> : <>THE COMPANY</>}
        </h2>
      </div>
      <div className="flex flex-row justify-between flex-wrap sm:flex-nowrap">
        <div className="max-w-[450px] w-full">
          <h3 className="text-[#FAB918] font-bold">
            {language === "ESP" ? <>MISIÓN</> : <>MISSION</>}
          </h3>
          <p className="font-light text-sm mt-2 mb-6">
            {language === "ESP" ? (
              <>
                Nuestra misión es generar valor a través de la calidad en la
                construcción de las obras y servicios que desarrollamos, tanto a
                nuestros socios como a nuestros clientes y proveedores,
                mejorando la vida de las personas que trabajan en nuestra
                compañía, las comunidades donde ejecutamos cada trabajo y la
                sociedad en general, con responsabilidad en la seguridad y el
                cuidado del medio ambiente.
              </>
            ) : (
              <>
                Our mission is to create value through the quality of the
                projects and services we deliver — for our partners, clients,
                and suppliers — while improving the lives of our employees, the
                communities where we operate, and society as a whole. We work
                with a firm commitment to safety and environmental
                responsibility.
              </>
            )}
          </p>
          <h3 className="text-[#FAB918] font-bold">
            {language === "ESP" ? <>VISIÓN</> : <>VISION</>}
          </h3>
          <p className="m-0 p-0 font-light text-sm mb-6">
            {language === "ESP" ? (
              <>
                Ser una empresa referente en nuestra provincia y en el país por
                los altos estándares de calidad y cumplimiento. Ser reconocida
                por nuestros clientes, proveedores y colegas como socio
                estratégico, generando alianzas confiables y respetuosas. Ser el
                lugar de trabajo donde las personas quieren pertenecer y
                desarrollarse.
              </>
            ) : (
              <>
                To be a benchmark company in our province and nationwide,
                recognized for our high standards of quality and reliability. To
                be known by our clients, suppliers, and industry peers as a
                trusted strategic partner, fostering respectful and dependable
                partnerships. To be the workplace where people aspire to belong,
                grow, and build their careers.
              </>
            )}
          </p>
          <h3 className="text-[#FAB918] font-bold">
            {language === "ESP" ? <>VALORES</> : <>CORE VALUES</>}
          </h3>
          <ul className="m-0 p-0 font-light text-sm">
            <li>{language === "ESP" ? <>• Confianza.</> : <>• Trust.</>}</li>
            <li>{language === "ESP" ? <>• Respeto. </> : <>• Respect.</>}</li>
            <li>
              {language === "ESP" ? (
                <>• Calidad.</>
              ) : (
                <>• Commitment to Quality.</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>• Seguridad de las personas.</>
              ) : (
                <>• Safety First.</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>• Cuidado del medio ambiente.</>
              ) : (
                <>• Environmental Responsibility.</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>• Mejora continua.</>
              ) : (
                <>• Continuous Improvement</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>• Sentido de pertenencia.</>
              ) : (
                <>• Sense of Belonging.</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>• Contribución a las comunidades.</>
              ) : (
                <>• Community Engagement.</>
              )}
            </li>
            <li>
              {language === "ESP" ? (
                <>• Colaboración.</>
              ) : (
                <>• Teamwork and Collaboration.</>
              )}
            </li>
          </ul>
          <h3 className="text-[#FAB918] font-bold mt-6">
            {language === "ESP" ? (
              <>RESPONSABILIDAD SOCIAL</>
            ) : (
              <>SOCIAL RESPONSIBILITY</>
            )}
          </h3>
          <p className="m-0 p-0 font-light text-sm mb-12 text-justify">
            {language === "ESP" ? (
              <>
                La calidad de nuestras obras y servicios genera un impacto
                positivo y mejora la vida de las personas de las comunidades
                donde desarrollamos nuestros trabajos. Esto se logra a partir de
                una visión estratégica que atraviesa verticalmente toda nuestra
                empresa, planificando las acciones en función de las necesidades
                de las instituciones y las personas en las regiones donde
                trabajamos.
              </>
            ) : (
              <>
                The quality of our projects and services creates a positive
                impact and improves the lives of people in the communities where
                we work. This is achieved through a strategic vision that runs
                throughout the entire organization, planning actions based on
                the needs of local institutions and communities in every region
                where we operate.
              </>
            )}
          </p>
        </div>
        <div className="w-0.5 bg-[#C8C8C8] min-h-full mx-5 hidden sm:flex" />
        <div className="max-w-[700px] w-full">
          <div className="mt-4">
            <div className="md:border-[#FDBA13] md:ml-4 pb-4 md:border items-center rounded-sm">
              <iframe
                width="684"
                height="352"
                src="https://www.youtube.com/embed/o8_scl4l-H4?si=-bY_WnglpUlOfIHQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                className="md:-ml-4 md:-mt-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col items-end justify-center mt-4">
              <button
                className="bg-[#FAB918] text-white font-semibold text-sm py-1 px-3 rounded-lg hover:bg-[#FDBA13]"
                onClick={downloadPDFMapal}
              >
                {language === "ESP" ? (
                  <>Descargar Brochure</>
                ) : (
                  <>Download Brochure</>
                )}
              </button>
            </div>
            <div className="mt-12" />
            <div className="md:border-[#FDBA13] md:ml-4 pb-4 md:border items-center rounded-sm">
              <Image
                src={DirecvitosImg}
                alt=""
                className="md:-ml-4 md:-mt-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col items-end justify-center mt-4">
              <DialogMesaDirectiva>
                <button className="bg-[#FAB918] text-white font-semibold text-sm py-1 px-3 rounded-lg hover:bg-[#FDBA13]">
                  {language === "ESP" ? (
                    <>Conocé Nuestro Equipo de Liderazgo</>
                  ) : (
                    <>Meet Our Leadership Team</>
                  )}
                </button>
              </DialogMesaDirectiva>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DialogMesaDirectiva = (props: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto max-w-[90%]">
        <div className="flex flex-col items-center justify-center space-y-8 py-4">
          <div className="flex flex-row items-start gap-4">
            <FotoEmpleado
              foto={FrancoPalluchini}
              nombre="Franco Palluchini"
              cargo="Presidente y CEO"
            />
            <FotoEmpleado
              foto={AlejandroPalluchini}
              nombre="Alejandro Palluchini"
              cargo="Vicepresidente"
            />
            <FotoEmpleado nombre="Julio Palluchini" cargo="Director" />
            <FotoEmpleado nombre="Fernando Palluchini" cargo="Director" />
          </div>
          <div className="flex flex-row items-start gap-4">
            <FotoEmpleado
              foto={CarlosVillalonga}
              nombre="Carlos Villalonga"
              cargo="Director y Gerente de Legal y Técnica"
            />
            <FotoEmpleado
              foto={DanielAguado}
              nombre="Daniel Aguado"
              cargo="Director y Gerente de Operaciones"
            />
            <FotoEmpleado
              foto={RaulCuneo}
              nombre="Raul Cuneo"
              cargo="Gerente de Obras"
            />
          </div>
          <div className="flex flex-row items-start gap-4">
            <FotoEmpleado
              foto={FedericoMoreno}
              nombre="Federico Moreno"
              cargo="Coordinador de RRHH"
            />
            <FotoEmpleado
              foto={GabrielPinto}
              nombre="Gabriel Pinto"
              cargo="Coordinador de Taller y Logística"
            />
            <FotoEmpleado
              foto={HumbertoViener}
              nombre="Humberto Viener"
              cargo="Coordinador de Obras"
            />
            <FotoEmpleado
              foto={ManuelBustamante}
              nombre="Manuel Bustamante"
              cargo="Coordinador de SGC"
            />
            <FotoEmpleado
              foto={VictorZanni}
              nombre="Victor Zanni"
              cargo="Coordinador de Control de Gestión"
            />
          </div>
          <div className="flex flex-row items-start gap-4">
            <FotoEmpleado
              foto={MarceloRomero}
              nombre="Marcelo Romero"
              cargo="Coordinador de Compras y Depósitos"
            />
            <FotoEmpleado
              foto={JavierRodriguez}
              nombre="Javier Rodriguez"
              cargo="Coordinador de Servicios Mineros"
            />
            <FotoEmpleado
              foto={MdelValle}
              nombre="M. del Valle Balmaceda"
              cargo="Coordinadora de Oficina Técnica"
            />
            <FotoEmpleado
              foto={CarlaPalluchini}
              nombre="Carla Palluchini"
              cargo="Coordinadora de Legales y Contratos"
            />
            <FotoEmpleado
              foto={FacundoBaigorri}
              nombre="Facundo Baigorri"
              cargo="Coordinador de Administración y Finanzas"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const FotoEmpleado = (props: {
  foto?: StaticImageData;
  nombre: string;
  cargo: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {props.foto && (
        <Image
          src={props.foto}
          alt=""
          className="rounded-2xl w-full max-w-[250px] min-w-[200px] max-h-[250px] object-cover border-[3px] border-black"
        />
      )}
      {!props.foto && (
        <div className="rounded-2xl min-w-[250px] min-h-[243px] border-[3px] border-black felx items-center justify-center">
          <Image
            src={DefaultUser}
            alt=""
            className="max-w-[250px] max-h-[237px] object-center p-10 opacity-45"
          />
        </div>
      )}
      <h3 className="text-center font-bold mt-1 text-xl">{props.nombre}</h3>
      <p className="m-0 p-0 text-lg text-center text-[#FAB918] font-semibold max-w-[200px]">
        {props.cargo}
      </p>
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
    <div className="flex flex-col mt-[10px] z-10 pl-6">
      <div className="flex flex-row items-center relative mb-2">
        <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
        <h2 className="font-bold">
          {language === "ESP" ? <>NOTICAS / PRENSA</> : <>PRESS / NEWS</>}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
  const { language } = useLanguage();
  return (
    <div className="rounded-[8px] flex flex-col py-3 px-5 w-full gap-3 max-h-[300px] border shadow-[0px_0px_20px_-10px_rgba(0,0,0,0.4)] bg-white">
      <div className="relative w-full h-[200px]">
        <Image
          src={props.card.image}
          alt="image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
      </div>
      <h1>{props.card.title}</h1>
      <p>{props.card.description}</p>
      <Link
        href={props.card.link}
        className="pointer underline text-blue-700"
        target="_blank"
      >
        {language === "ESP" ? <>ver mas</> : <>see more</>}
      </Link>
    </div>
  );
};

const Clientes = () => {
  const { language } = useLanguage();
  return (
    <div className="flex flex-col mt-[10px] z-10 pl-6">
      <div className="flex flex-row items-center relative mb-2">
        <div className="absolute bg-[#FAB918] h-0.5 w-[400px] -left-[410px]" />
        <h2 className="font-bold">
          {language === "ESP" ? <>NUESTROS CLIENTES</> : <>OUR CLIENTS</>}
        </h2>
      </div>
      <MarqueeEmpresas />
    </div>
  );
};

const MarqueeEmpresas = () => {
  return (
    <div className=" bg-white px-20">
      <div className="whitespace-nowrap animate-marquee flex items-center py-3 gap-8">
        <Image src={Barrick} alt="" className="h-[50px] w-auto p-3 =mx-3" />
        <Image src={ShandongGold} alt="" className="h-[55px] w-auto px-3" />
        <Image src={Veladero} alt="" className="h-[70px] w-auto" />
        <Image src={McEwenMining} alt="" className="h-[45px] w-auto px-2" />
        <Image src={LosAzules} alt="" className="h-[45px] w-auto" />
        <Image src={MinasArgentinas} alt="" className="h-[70px] w-auto" />
        <Image src={Glencore} alt="" className="h-[150px] w-auto -my-[50px]" />
        <Image src={YamanaGold} alt="" className="h-[60px] w-auto" />
        <Image src={AustralGold} alt="" className="h-[50px] w-auto" />
        <Image src={Casposo} alt="" className="h-[50px] w-auto px-3" />
        <Image src={Belararox} alt="" className="h-[60px] w-auto" />
        <Image src={YPF} alt="" className="h-[50px] w-auto" />
        <Image src={CBB} alt="" className="h-[40px] w-auto px-4" />
        <Image src={Techint} alt="" className="h-[70px] w-auto mx-6" />
        <Image src={PerezCompanc} alt="" className="h-[70px] w-auto" />
        <Image src={BancoHipotecario} alt="" className="h-[50px] w-auto" />
        <Image src={VialidadNacional} alt="" className="h-[70px] w-auto ml-8" />
        <Image src={Enohsa} alt="" className="h-[100px] w-auto -mx-4" />
        <Image src={EDEMSA} alt="" className="h-[50px] w-auto -my-8" />
        <Image src={VialidadMendoza} alt="" className="h-[80px] w-auto mx-4" />
        <Image src={RecursosHidricos} alt="" className="h-[110px] w-auto" />
        <Image src={GobSj} alt="" className="h-[50px] w-auto px-2" />
        <Image src={OSSE} alt="" className="h-[40px] w-auto px-2" />
        <Image src={IPV} alt="" className="h-[60px] w-auto px-2" />
        <Image src={Hidraulica} alt="" className="h-[90px] w-auto -mx-8" />
        <Image src={VialidadProvincial} alt="" className="h-[80px] w-auto" />
        <Image src={MuniSJ} alt="" className="h-[40px] w-auto px-1" />
        <Image src={MuniChimbas} alt="" className="h-[40px] w-auto" />

        {/*  */}
        <Image src={Barrick} alt="" className="h-[50px] w-auto p-3 =mx-3" />
        <Image src={ShandongGold} alt="" className="h-[55px] w-auto px-3" />
        <Image src={Veladero} alt="" className="h-[70px] w-auto" />
        <Image src={McEwenMining} alt="" className="h-[45px] w-auto px-2" />
        <Image src={LosAzules} alt="" className="h-[45px] w-auto" />
        <Image src={MinasArgentinas} alt="" className="h-[70px] w-auto" />
        <Image src={Glencore} alt="" className="h-[150px] w-auto -my-[50px]" />
        <Image src={YamanaGold} alt="" className="h-[60px] w-auto" />
        <Image src={AustralGold} alt="" className="h-[50px] w-auto" />
        <Image src={Casposo} alt="" className="h-[50px] w-auto px-3" />
        <Image src={Belararox} alt="" className="h-[60px] w-auto" />
        <Image src={YPF} alt="" className="h-[50px] w-auto" />
        <Image src={CBB} alt="" className="h-[40px] w-auto px-4" />
        <Image src={Techint} alt="" className="h-[70px] w-auto mx-6" />
        <Image src={PerezCompanc} alt="" className="h-[70px] w-auto" />
        <Image src={BancoHipotecario} alt="" className="h-[50px] w-auto" />
        <Image src={VialidadNacional} alt="" className="h-[70px] w-auto ml-8" />
        <Image src={Enohsa} alt="" className="h-[100px] w-auto -mx-4" />
        <Image src={EDEMSA} alt="" className="h-[50px] w-auto -my-8" />
        <Image src={VialidadMendoza} alt="" className="h-[80px] w-auto mx-4" />
        <Image src={RecursosHidricos} alt="" className="h-[110px] w-auto" />
        <Image src={GobSj} alt="" className="h-[50px] w-auto px-2" />
        <Image src={OSSE} alt="" className="h-[40px] w-auto px-2" />
        <Image src={IPV} alt="" className="h-[60px] w-auto px-2" />
        <Image src={Hidraulica} alt="" className="h-[90px] w-auto -mx-8" />
        <Image src={VialidadProvincial} alt="" className="h-[80px] w-auto" />
        <Image src={MuniSJ} alt="" className="h-[40px] w-auto px-1" />
        <Image src={MuniChimbas} alt="" className="h-[40px] w-auto" />
        {/*  */}
        <Image src={Barrick} alt="" className="h-[50px] w-auto p-3 =mx-3" />
        <Image src={ShandongGold} alt="" className="h-[55px] w-auto px-3" />
        <Image src={Veladero} alt="" className="h-[70px] w-auto" />
        <Image src={McEwenMining} alt="" className="h-[45px] w-auto px-2" />
        <Image src={LosAzules} alt="" className="h-[45px] w-auto" />
        <Image src={MinasArgentinas} alt="" className="h-[70px] w-auto" />
        <Image src={Glencore} alt="" className="h-[150px] w-auto -my-[50px]" />
        <Image src={YamanaGold} alt="" className="h-[60px] w-auto" />
        <Image src={AustralGold} alt="" className="h-[50px] w-auto" />
        <Image src={Casposo} alt="" className="h-[50px] w-auto px-3" />
        <Image src={Belararox} alt="" className="h-[60px] w-auto" />
        <Image src={YPF} alt="" className="h-[50px] w-auto" />
        <Image src={CBB} alt="" className="h-[40px] w-auto px-4" />
        <Image src={Techint} alt="" className="h-[70px] w-auto mx-6" />
        <Image src={PerezCompanc} alt="" className="h-[70px] w-auto" />
        <Image src={BancoHipotecario} alt="" className="h-[50px] w-auto" />
        <Image src={VialidadNacional} alt="" className="h-[70px] w-auto ml-8" />
        <Image src={Enohsa} alt="" className="h-[100px] w-auto -mx-4" />
        <Image src={EDEMSA} alt="" className="h-[50px] w-auto -my-8" />
        <Image src={VialidadMendoza} alt="" className="h-[80px] w-auto mx-4" />
        <Image src={RecursosHidricos} alt="" className="h-[110px] w-auto" />
        <Image src={GobSj} alt="" className="h-[50px] w-auto px-2" />
        <Image src={OSSE} alt="" className="h-[40px] w-auto px-2" />
        <Image src={IPV} alt="" className="h-[60px] w-auto px-2" />
        <Image src={Hidraulica} alt="" className="h-[90px] w-auto -mx-8" />
        <Image src={VialidadProvincial} alt="" className="h-[80px] w-auto" />
        <Image src={MuniSJ} alt="" className="h-[40px] w-auto px-1" />
        <Image src={MuniChimbas} alt="" className="h-[40px] w-auto" />
      </div>
    </div>
  );
};
