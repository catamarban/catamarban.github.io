
const currentUrl = window.location.href;
const siteUrl = "https://catamarban.github.io";
let updatedUrl = currentUrl.replace("https://catamarban.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Mi portafolio de prácticas y simulaciones matemáticas.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-práctica-1-el-juego-del-caos",
          title: 'Práctica 1 - El juego del caos',
          description: "Simulación del triángulo de Sierpinski mediante iteraciones y probabilidad.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_01/";
            },},{id: "projects-práctica-2-modelos-de-ecuaciones-en-diferencias-finitas",
          title: 'Práctica 2 - Modelos de Ecuaciones en Diferencias Finitas',
          description: "Análisis de crecimiento poblacional y aproximación numérica de ecuaciones diferenciales.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_02/";
            },},{id: "projects-práctica-3-modelo-epidemiológico-sir",
          title: 'Práctica 3 - Modelo Epidemiológico SIR',
          description: "Implementación en diferencias finitas y análisis dinámico de brotes epidémicos.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_03/";
            },},{id: "projects-práctica-5-modelos-de-similitud-geométrica",
          title: 'Práctica 5 - Modelos de Similitud Geométrica',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_05/";
            },},{id: "projects-práctica-7-diagonalización-y-factorizaciones-lu-y-qr",
          title: 'Práctica 7 - Diagonalización y Factorizaciones (LU y QR)',
          description: "Implementación algorítmica de eliminación Gaussiana, factorización matricial LU y descomposición QR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_07/";
            },},{id: "projects-práctica-8-algoritmo-qr",
          title: 'Práctica 8 - Algoritmo QR',
          description: "Implementación computacional del algoritmo QR.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_08/";
            },},{id: "projects-práctica-9-newton-raphson-y-punto-fijo",
          title: 'Práctica 9 - Newton-Raphson y Punto Fijo',
          description: "Implementación de métodos numéricos iterativos para la búsqueda de raíces de funciones.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_09/";
            },},{id: "projects-práctica-10-métodos-para-minimizar-funciones-numéricamente",
          title: 'Práctica 10 - Métodos Para Minimizar Funciones Numéricamente',
          description: "Minimización de funciones multivariadas mediante Descenso del Gradiente y búsqueda probabilística.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_10/";
            },},{id: "projects-práctica-12-teoremas-del-límite-central-y-glivenko-cantelli",
          title: 'Práctica 12 - Teoremas del Límite Central y Glivenko-Cantelli',
          description: "Verificación computacional del Teorema del Límite Central y la convergencia empírica.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_12/";
            },},{id: "projects-práctica-13-cadenas-de-markov",
          title: 'Práctica 13 - Cadenas de Markov',
          description: "Simulación y análisis de comportamiento de Cadenas de Markov",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_13/";
            },},{id: "projects-práctica-4-modelo-depredador-presa-lotka-volterra",
          title: 'Práctica 4 - Modelo Depredador-Presa (Lotka-Volterra)',
          description: "Simulación en diferencias finitas de la interacción entre especies y análisis de sus puntos de equilibrio.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_04/";
            },},{id: "projects-práctica-6-algoritmo-de-dijkstra",
          title: 'Práctica 6 - Algoritmo de Dijkstra',
          description: "Implementación computacional para la optimización de rutas y búsqueda de caminos mínimos en grafos.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/practica_06/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/en-us//assets/pdf/[LANG]/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
