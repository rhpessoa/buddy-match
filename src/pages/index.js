import { HomeContain } from "./indexStyle";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/index";

export default function Home() {
  return (
    <>
      <HomeContain>
        <header>
          <Head>
            <title>Buddy Match</title>
          </Head>
        </header>
        <section>
          <h1>Buddy Match</h1>
          <div className="container__imagem">
            <Image
              alt="Uma Imagem"
              src="https://i.imgur.com/2sjEFDk.png"
              width={372}
              height={326}
            />
          </div>
          <div className="container__texto">
            <span>
              Nunca foi tão fácil achar alguém para subir na Solo Q e jogar
              casualmente!
            </span>
          </div>
          <div className="container__button">
            <Link href="/login">
              <Button className="button__conheca">Conheça!</Button>
            </Link>
          </div>
        </section>
        <section>
          <div className="container__texto experiencia">
            <span>
              Por mais que você não tenha experiências boas, aqui no Buddy Match{" "}
              <strong>priorizamos:</strong>
            </span>
          </div>
          <div className="container__info">
            <span>LUGAR AMIGÁVEL</span>
            <Image
              alt="Uma Imagem"
              src="https://i.imgur.com/sEmBPqF.png"
              width={225}
              height={202}
            />
          </div>
          <div className="container__info">
            <span>SÓ PARCERIA DE RESPEITO </span>
            <Image
              alt="Uma Imagem"
              src="https://i.imgur.com/6rEVKPZ.png"
              width={225}
              height={202}
            />
          </div>
        </section>
      </HomeContain>
    </>
  );
}
