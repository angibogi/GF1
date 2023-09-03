import React from 'react'
import founder from '../assets/img/founder.png'
import story1 from '../assets/img/story_1.png'
import story2 from '../assets/img/story_2.png'
import today1 from '../assets/img/today_1.png'
import today2 from '../assets/img/today_2.png'
import group1 from '../assets/img/group_1.png'
import group2 from '../assets/img/card_4.png'

export default function About() {
  return (
    <>
    <div className="text-center">
        <h2 className="text-main text-[54px] font-bold ">La nostra storia</h2>
    </div>

    <section className="container mx-auto p-5 mb-[150px]">
        <div>
        <img className="float-left mr-[15px] h-[400px]" src={founder} alt="" />
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

    <section  className="container mx-auto px-4 w-[90%]">
        <div className="grid gap-4 md:grid-cols-2 lx:ml-[5%] lg:ml-[4%] md:ml-[1%] ml-[2%] my-[10px] "><h3 className="font-bold text-third ">La Storia</h3></div>
        <div className="grid gap-4 md:grid-cols-2">
            <div className=" relative  mx-auto max-w-[600px] max-h-[600px]  border-2 border-main bg-second transition delay-150 duration-300 ease-in-out scale-95 hover:scale-100 p-0 m-0">
            <img className="  object-fill h-[100%] p-0 m-0 transition delay-150 duration-300 ease-in-out scale-100  hover:opacity-10" src={story1} alt="" />
            <p className=" xl:text-[24px] lg:text-[24px]  md:text-[12px] text-[16px]   absolute p-[30px] left-[50%] ml-[-50%] top-[10%] mt-[-10%] md:mt-[-45%] md:top-[50%] -z-10   text-black  transition delay-150 duration-300 ease-in-out ">
                La Garanzia del marchio GF1 Panconi, proviene da una lunga tradizione familiare iniziata nel 1921 con i Nonni Silvestro ed Elia nella vecchia bottega dei Quercioli a Massa, e poi continuata nel 1973 dal Padre Giovanni e dagli Zii Franco, Fortunato ed Emanuele.
                <br /> <br /> Nel 1991 Silvestro Panconi con l'esperienza accumulata nell'azienda familiare, inaugura con i suoi collaboratori personali Aldo Baccei e Stefano Campinoti il proprio magazzino denominato “GF1” in località Partaccia a Marina di Carrara.</p>
            </div>
            <div className=" mx-auto max-w-[600px] max-h-[600px]  border-2 border-main bg-second transition delay-150 duration-300 ease-in-out scale-95 hover:scale-100 p-0 m-0">
            <img className="  object-fill h-[100%] p-0 m-0 transition delay-150 duration-300 ease-in-out scale-100  hover:opacity-10" src={story2} alt="" />
            <p className=" xl:text-[24px] lg:text-[24px]  md:text-[12px] text-[16px]   absolute p-[30px] left-[50%] ml-[-50%] top-[10%] mt-[-10%] md:mt-[-45%] md:top-[50%] -z-10   text-black  transition delay-150 duration-300 ease-in-out ">
                Il rapido successo gli impone l'apertura di un nuovo punto vendita dopo solo 5 anni, nella piccola cittadina di Levanto, nella costa del levante ligure. 
            <br /><br /> Nel corso degli anni la GF1 Panconi ha saputo crescere, maturando le competenze necessarie per affermarsi nel settore della fornitura alimentare ed oggi, con due nuove strutture inaugurate nel 2005 ed un'attività ormai consolidata, lavora per offrire un ottimo servizio, con la garanzia che deriva dall'esperienza.</p>
            </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lx:ml-[5%] lg:ml-[4%] md:ml-[1%] ml-[2%]  my-[10px]  "><h3 className="font-bold text-third ">Oggi</h3></div>
        <div className="grid gap-4 md:grid-cols-2  ">
            <div className=" mx-auto max-w-[600px] max-h-[600px]  border-2 border-main bg-second transition delay-150 duration-300 ease-in-out scale-95 hover:scale-100 p-0 m-0">
            <img className="  object-fill h-[100%] p-0 m-0 transition delay-150 duration-300 ease-in-out scale-100  hover:opacity-10" src={today1} alt="" />
            <p className=" xl:text-[24px] lg:text-[24px]  md:text-[12px] text-[16px]   absolute p-[30px] left-[50%] ml-[-50%] top-[10%] mt-[-10%] md:mt-[-45%] md:top-[50%] -z-10   text-black  transition delay-150 duration-300 ease-in-out ">
                Con il sodalizio con Silvestro, l'attività di GF1 Panconi si è rapidamente evoluta, trasformandosi in una realtà forte e dinamica. <br /><br />
                Da sempre l'azienda è sinonimo di qualità, di vasta scelta di prodotti e di grande convenienza e sono molti i clienti che si appoggiano a GF1 Panconi per i loro acquisti, sicuri di ricevere piena soddisfazione ad ogni loro esigenza: Ristoranti, Alberghi, Bar e tutti gli operatori del settore commerciale HO.RE.CA.</p>
            </div>
            <div className=" mx-auto max-w-[600px] max-h-[600px]   border-2 border-main bg-second transition delay-150 duration-300 ease-in-out scale-95 hover:scale-100 p-0 m-0">
            <img className="  object-fill h-[100%] p-0 m-0 transition delay-150 duration-300 ease-in-out scale-100  hover:opacity-10" src={today2} alt="" />
            <p className=" xl:text-[24px] lg:text-[24px]  md:text-[12px] text-[16px]   absolute p-[30px] left-[50%] ml-[-50%] top-[10%] mt-[-10%] md:mt-[-45%] md:top-[50%] -z-10   text-black  transition delay-150 duration-300 ease-in-out ">
                GF1 Panconi è un'azienda seria e determinata, con un team di collaboratori cordiali e affidabili. La sua forza risiede nella capacità di adattarsi alla continua evoluzione del mercato. 
                <br /><br />
                L'azienda si impegna a soddisfare i clienti offrendo un servizio personalizzato di alta qualità. Grazie a uno staff brillante e competente, GF1 Panconi è diventata un'azienda moderna, dinamica e all'avanguardia. La sua reputazione si basa sulla qualità dei prodotti e sulla dedizione delle persone che vi lavorano.</p>
            </div>
        </div>
        
        
            <div className="grid gap-4 md:grid-cols-2"  >
            <div>
            <h3 className="font-bold text-third  my-[10px] lx:ml-[5%] lg:ml-[4%] md:ml-[1%] ml-[2%] ">Il Gruppo</h3>
            <div className=" mx-auto max-w-[600px] max-h-[600px]   border-2 border-main bg-second transition delay-150 duration-300 ease-in-out scale-95 hover:scale-100 p-0 m-0">
            <img className="  object-fill h-[100%] p-0 m-0 transition delay-150 duration-300 ease-in-out scale-100  hover:opacity-10" src={group1} alt="" />
            <p className=" xl:text-[24px] lg:text-[24px]  md:text-[12px] text-[16px]   absolute p-[30px] left-[50%] ml-[-50%] top-[10%] mt-[-10%] md:mt-[-45%] md:top-[50%] -z-10   text-black  transition delay-150 duration-300 ease-in-out ">
                GF1 Panconi è da sempre sinonimo di qualità, vasta scelta di prodotti e convenienza, è al passo con le novità e i nuovi trend di mercato, con un occhio sempre attento al consumatore, per offrire il miglior servizio, assortimento e competitività. 
            <br /> <br /> 
            L'essenza di GF1 Panconi è questa: forte dinamismo e crescita costante, per creare un rapporto di fiducia con il cliente attraverso un servizio personalizzato ed un ampio assortimento di prodotti di marca freschi, gastronomia da banco, surgelati e non food.</p>
            </div>
            </div>

      
            <div>
                <h3 className="font-bold text-third lx:ml-[5%] lg:ml-[4%] md:ml-[1%] ml-[2%] my-[10px] ">Prodotti consorzio</h3>
                <div className=" mx-auto max-w-[600px] max-h-[600px]   border-2 border-main bg-second transition delay-150 duration-300 ease-in-out scale-95 hover:scale-100 p-0 m-0">
                    <img className="  object-fill h-[100%] p-0 m-0 transition delay-150 duration-300 ease-in-out scale-100  hover:opacity-10" src={group2} alt="" />
                    <p className=" xl:text-[24px] lg:text-[24px]  md:text-[12px] text-[16px]   absolute p-[30px] left-[50%] ml-[-50%] top-[10%] mt-[-10%] md:mt-[-45%] md:top-[50%] -z-10   text-black  transition delay-150 duration-300 ease-in-out ">
                     GF1 Panconi si avvale del prezioso aiuto della C.I.C (Cooperativa Italiana Catering) di cui è socia. Questa valida collaborazione permette all'azienda di acquistare la merce tramite contrattualistica nazionale, permettendole così una maggiore convenienza, e parallelamente di gestire la distribuzione e sviluppare i prodotti a marchio Qualitaly-Tavolaviva ed Utility, di cui C.I.C. è proprietaria. 
                    <br /><br />
                    L'attività del consorzio fà sì che GF1 Panconi possa quindi garantire sempre il meglio ai propri clienti.</p>
                </div>
            </div>
        </div>
        
    </section>


   
  
   
    </>
  )
}
