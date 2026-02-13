import multitool from '../assets/images/ill_mt.png'
import personalLib from '../assets/images/ill_pl.png'
import worldWise from '../assets/images/ill_ww.png'
import digitalDM from '../assets/images/ill_dm.png'
import materialLib from '../assets/images/ill_mdl.png'

export const ProList = [
    {
        url: multitool,
        altText: "Auser Lab screenshot",
        title: "Auser Lab",
        description: "Piattaforma di e-learning realizzata in PHP per Auser Cremona (non responsive). Include gestione chiamate via Zoom con endpoint su Heroku e gestione Google Cloud Storage per l'upload di file di grandi dimensioni. Pagamenti gestiti via Stripe",
        link: "https://auserlabcr.it/"
    }, {
        url: personalLib,
        altText: "Visit Cremona app screenshot",
        title: "Visit Cremona",
        description: "Piattaforma di ticketing realizzata con Next per Visit Cremona. Include l'integrazione di API di terze parti per la gestione dei prodotti e dei pagamenti. CMS realizzato con Strapi legato a database in Postgres, deploy realizzato tramite Railway",
        link: "https://www.visitcremona.com/"
    }, {
        url: worldWise,
        altText: "MIR app screenshot",
        title: "MIR",
        description: "Piattaforma di archiviazione e consultazione di strumenti ad arco realizzata in Nuxt per MIR. Database e accessi gestiti via Back4App, abbonamenti e pagamenti gestiti via Stripe",
        link: "https://mirweb.it/"
    }, {
        url: digitalDM,
        altText: "Darkai Grillz Configurator app screenshot",
        title: "Darkai Grillz Configurator",
        description: "Configuratore 3D di gioielli personalizzabili realizzato con R3F e Next per Darkai. Database e accessi gestiti via Supabase",
        link: ""
    }, {
        url: materialLib,
        altText: "Cremonese live commentary library screenshot",
        title: "Cremonese Live Results",
        description: "Visualizzazione dei dati restituiti dalle API di Kama Sport, realizzata in PHP, per le sezioni Classifica, Calendario, Risultati e Live Commentary del sito ufficiale della Cremonese",
        link: "(https://uscremonese.it/"
    },
]