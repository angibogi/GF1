import React from 'react'
import founder from '../assets/img/founder.webp'
import story1 from '../assets/img/story_1.webp'
import story2 from '../assets/img/story_2.webp'
import today1 from '../assets/img/today_1.webp'
import today2 from '../assets/img/today_2.webp'
import group1 from '../assets/img/group_1.webp'
import group2 from '../assets/img/card_4.webp'
import {Helmet} from "react-helmet";
import Title from '../components/Title'

const About = () => {
  return (
    <>
          <Helmet>
                <meta charSet="utf-8" />
                <title>La nostra storia - GF1 Srl</title>
                <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          
      <Title>La nostra storia</Title>

      <section className="container mx-auto p-5 mb-[5%]">
        <div>
          <img className="float-left mr-[15px] h-[400px]" src={founder} alt="founder" />
          <p className="text-[18px]">Questo momento e spazio è dedicato ad un Padre che ci ha trasmesso  <strong className="text-third">"il valore del lavoro"</strong> fatto di <strong className="text-third">tenacia, dovere, responsabilità, modestia</strong> ed <strong className="text-third"> umiltà </strong>,ed a non temere le innovazioni, ma anzi ad anticiparle.
            <br /> <br />
            Un Padre che ci ha insegnato <strong className="text-third"> "il valore della famiglia", </strong> bene supremo e fondante di serenità, sviluppo, armonia per ogni essere umano.
            <br /> <br />
            Un Padre che purtroppo oggi non è più tra noi, ma nella Pace e nella Luce del Cielo, e proprio per questo,  <strong className="text-third">Ora ancora più di prima, più forti ed uniti che mai, </strong> Sentiamo, Vediamo e Percepiamo che quegli Insegnamenti non sono sabbia dispersa dal vento, ma <strong className="text-third">"Principi Fondalmentali" </strong> per proseguire in quella stessa strada, portando a termine tutto cio' che Lui non e' riuscito a fare, con quella sua stessa Determinazione, Tenacia e Responsabilita' che sempre Lo hanno caratterizzato, e trasmettendo quei <strong className="text-third"> "Valori" </strong> ai nostri Figli,propio come lui fece con noi.
            <br /> <br />
            Ciao Babbo e Grazie per tutto quello che hai fatto.
            <br /> <br />
            I Tuoi Figli Silvestro e Stefano</p>
        </div>
      </section>

      <section className="container mx-auto px-4 w-[90%]">
        <h1 id='story' className="text-main font-bold text-lg">La Storia</h1>
        <div className="flex my-5  items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            <div className="group relative border-4 border-main cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-500 w-500">
                <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={story1} alt="story" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                <p className="mb-3 lg:text-lg  text-[0.6em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">La Garanzia del marchio GF1 Panconi, proviene da una lunga tradizione familiare iniziata nel 1921 con i Nonni Silvestro ed Elia nella vecchia bottega dei Quercioli a Massa, e poi continuata nel 1973 dal Padre Giovanni e dagli Zii Franco, Fortunato ed Emanuele.
                  <br /> <br /> Nel 1991 Silvestro Panconi con l'esperienza accumulata nell'azienda familiare, inaugura con i suoi collaboratori personali Aldo Baccei e Stefano Campinoti il proprio magazzino denominato “GF1” in località Partaccia a Marina di Carrara.</p>
              </div>
            </div>
            <div className="group relative border-4 border-main cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-500 w-500">
                <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={story2} alt="thestory" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                <p className="mb-3 lg:text-lg  text-[0.6em]  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Il rapido successo gli impone l'apertura di un nuovo punto vendita dopo solo 5 anni, nella piccola cittadina di Levanto, nella costa del levante ligure.
                  <br /><br /> Nel corso degli anni la GF1 Panconi ha saputo crescere, maturando le competenze necessarie per affermarsi nel settore della fornitura alimentare ed oggi, con due nuove strutture inaugurate nel 2005 ed un'attività ormai consolidata, lavora per offrire un ottimo servizio, con la garanzia che deriva dall'esperienza.</p>

              </div>
            </div>
          </div>

        </div>
        <h1 id='today' className="text-main font-bold text-lg">Oggi</h1>

        <div className="flex my-5  items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            <div className="group relative border-4 border-main cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-500 w-500">
                <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={today1} alt="today" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                <p className="mb-3 lg:text-lg  text-[0.6em]  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">GF1 Panconi è un'azienda seria e determinata, con un team di collaboratori cordiali e affidabili. La sua forza risiede nella capacità di adattarsi alla continua evoluzione del mercato.
                  <br /><br />
                  L'azienda si impegna a soddisfare i clienti offrendo un servizio personalizzato di alta qualità. Grazie a uno staff brillante e competente, GF1 Panconi è diventata un'azienda moderna, dinamica e all'avanguardia. La sua reputazione si basa sulla qualità dei prodotti e sulla dedizione delle persone che vi lavorano.</p>
              </div>
            </div>
            <div className="group relative border-4 border-main cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-500 w-500">
                <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={today2} alt="todaytwo" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                <p className="mb-3 lg:text-lg  text-[0.6em]  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  GF1 Panconi si avvale del prezioso aiuto della C.I.C (Cooperativa Italiana Catering) di cui è socia. Questa valida collaborazione permette all'azienda di acquistare la merce tramite contrattualistica nazionale, permettendole così una maggiore convenienza, e parallelamente di gestire la distribuzione e sviluppare i prodotti a marchio Qualitaly-Tavolaviva ed Utility, di cui C.I.C. è proprietaria.
                  <br /><br />
                  L'attività del consorzio fà sì che GF1 Panconi possa quindi garantire sempre il meglio ai propri clienti.</p>

              </div>
            </div>
          </div>

        </div>

        <h1 id='product' className="text-main font-bold text-lg">Prodotti Consorzio</h1>

        <div className="flex my-5  items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
            <div className="group relative border-4 border-main cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div>
                <img className="h-full w-full object-cover transition-transform duration-500  group-hover:scale-125" src={group1} alt="group" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                <p className="mb-3 lg:text-lg  text-[0.6em]   text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">GF1 Panconi è da sempre sinonimo di qualità, vasta scelta di prodotti e convenienza, è al passo con le novità e i nuovi trend di mercato, con un occhio sempre attento al consumatore, per offrire il miglior servizio, assortimento e competitività.
                  <br /> <br />
                  L'essenza di GF1 Panconi è questa: forte dinamismo e crescita costante, per creare un rapporto di fiducia con il cliente attraverso un servizio personalizzato ed un ampio assortimento di prodotti di marca freschi, gastronomia da banco, surgelati e non food.</p>
              </div>
            </div>
            <div className="group relative border-4 border-main cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div>
                <img className=" h-full w-full  object-cover transition-transform duration-500  group-hover:scale-125" src={group2} alt="product" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                <p className="mb-3 lg:text-lg  text-[0.6em]  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  GF1 Panconi si avvale del prezioso aiuto della C.I.C (Cooperativa Italiana Catering) di cui è socia. Questa valida collaborazione permette all'azienda di acquistare la merce tramite contrattualistica nazionale, permettendole così una maggiore convenienza, e parallelamente di gestire la distribuzione e sviluppare i prodotti a marchio Qualitaly-Tavolaviva ed Utility, di cui C.I.C. è proprietaria.
                  <br /><br />
                  L'attività del consorzio fà sì che GF1 Panconi possa quindi garantire sempre il meglio ai propri clienti.</p>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
