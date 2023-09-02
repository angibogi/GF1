import React from 'react'
import founder from '../assets/img/founder.png'
import story1 from '../assets/img/story_1.png'
import story2 from '../assets/img/story_2.png'

export default function About() {
  return (
    <>
    <div className="text-center">
        <h2 className="text-main text-[54px] font-bold ">La nostra storia</h2>
    </div>

    <section className="container mx-auto p-5  my-10">
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


   
  
   
    </>
  )
}
