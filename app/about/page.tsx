"use client";

import Link from "next/link";
import { useState } from "react";
import Nav from "../components/NavBar";

const categories = {
    wissenschaft: 'Wissenschaft',
    geschichte: 'Geschichte',
    technologie: 'Technologie'
  };


export default function About() {
    const [category, setCategory] = useState(categories.wissenschaft);
  return (
    <>
    <div className="bg-cover bg-center h-screen" id="about">
    <Nav category={category} setCategory={setCategory} categories={categories} />

        <main className="text-center text-white bg-cover bg-center flex flex-col items-center justify-center">
            <div className="backdrop-blur-2xl p-10 rounded-lg md:mt-5 mt-20 md:w-3/6 w-11/12 text-wrap text-justify" data-aos="fade-up">
            <h1 className="text-3xl underline pb-2 font-bold text-center">Über uns ~ Fakt Zentrale</h1>
            
            <p>
            Willkommen bei Faktzentrale, Ihrem vertrauenswürdigen Partner für faktenbasierte Informationen und fundierte Analysen. In einer Zeit, in der Informationen in rasantem Tempo verbreitet werden und die Grenze zwischen Wahrheit und Fiktion oft verschwimmt, ist es unser Ziel, Klarheit und Transparenz zu schaffen. Wir glauben daran, dass fundierte Entscheidungen nur auf der Grundlage verlässlicher Daten und Fakten getroffen werden können. Deshalb haben wir Faktzentrale ins Leben gerufen – eine Plattform, die sich der Verbreitung wahrheitsgetreuer Informationen widmet. {"\n"}
            </p>
            <br />
            <h2 className="text-xl pb-5 font-bold">Unsere Mission</h2>
            <p>
            Unsere Mission ist es, die Öffentlichkeit mit genauen, überprüfbaren und unvoreingenommenen Informationen zu versorgen. Wir wollen dazu beitragen, dass Menschen informierte Entscheidungen treffen können, sei es im täglichen Leben, in der Politik, in der Wissenschaft oder in der Wirtschaft. Wir verstehen uns als Bollwerk gegen Desinformation und Falschmeldungen, die heutzutage allzu leicht die Runde machen. {"\n"}
            </p>
            <br />
            <h2 className="text-xl pb-5 font-bold">Unser Team</h2>
            <p>
            Das Team hinter Faktzentrale besteht aus erfahrenen Journalisten, Datenanalysten, Wissenschaftlern und Technikexperten. Jeder von uns bringt seine einzigartigen Fähigkeiten und Perspektiven ein, um sicherzustellen, dass unsere Inhalte nicht nur akkurat, sondern auch verständlich und zugänglich sind. Unser redaktionelles Team arbeitet unermüdlich daran, die neuesten Entwicklungen zu recherchieren, zu überprüfen und verständlich aufzubereiten. Unterstützt werden wir von einem Netzwerk aus Experten und Gastautoren, die ihr Fachwissen mit uns teilen. {"\n"}
            </p>
            <br />
            <h2 className="text-xl pb-5 font-bold">Unsere Arbeitsweise</h2>
            <p>
            Die Basis unserer Arbeit bildet ein strenger Verifizierungsprozess. Jede Information, die wir veröffentlichen, durchläuft mehrere Ebenen der Überprüfung. Unsere Quellen sind immer klar benannt und nachvollziehbar, sodass unsere Leser die Herkunft jeder Information selbst nachprüfen können. Wir setzen auf Transparenz und Offenheit, um das Vertrauen unserer Leser zu gewinnen und zu bewahren. Darüber hinaus nutzen wir modernste Datenanalyse- und Visualisierungstools, um komplexe Sachverhalte anschaulich darzustellen. {"\n"}
            </p>
            <br />
            <h2 className="text-xl pb-5 font-bold">Kontaktieren Sie uns</h2>
            <p>
            Wir laden Sie herzlich ein, Teil unserer Mission zu werden. Besuchen Sie unsere Website regelmäßig, abonnieren Sie unseren Newsletter und folgen Sie uns auf unseren Social-Media-Kanälen, um stets auf dem Laufenden zu bleiben. Wenn Sie Fragen, Anregungen oder Kritik haben, zögern Sie nicht, uns zu kontaktieren. Wir freuen uns auf den Austausch mit Ihnen und darauf, gemeinsam die Welt ein Stückchen klarer und verständlicher zu machen.

Vielen Dank, dass Sie Faktzentrale besuchen und unsere Arbeit unterstützen. Gemeinsam können wir dafür sorgen, dass Fakten und Wahrheit wieder den Stellenwert bekommen, den sie verdienen.
            </p>
            <br />
            <p className="pt-6 text-center font-extrabold">Gehe zurück zur <Link href="/" className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-600 drop-shadow-lg">Startseite</Link></p>
            </div>
        </main>
    </div>
    </>
  )
}
