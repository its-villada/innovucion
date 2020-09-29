/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Innovucion!`,
    author: `Federico Ferraro`,
    firstName: `Innovucion`,
    lastName: `!`,
    description: `Porque necesitamos una revolución y una innovación masiva para lograr que desde el ámbito de la educación nuestro futuro sea positivo.`,
    occupation: `Soy Federico Ferraro, Ingeniero en Electrónica recibido en la UTN-FRC. Ex alumno y docente del Instituto Técnico Salesiano Villada. Termine en 1995 e ingresé como profe a principio de 1998. Es decir, desde el año 1990 solo estuve 2 años fuera del colegio. En primera instancia esto podría sonar a un alago, pero en mi caso tiene un doble sabor. Dulce por formar parte durante tanto tiempo de una institución educativa. Amargo porque de algún modo me hace cómplice del estado del sistema educativo. 
    En el año 2015 un grupo de alumnos de 5to año me puso en jaque. Estuve a punto de darme por vencido, solo faltaba que dijeran Mate para que el partido de ajedrez terminara. Pero hubo algo que me mostró que había una jugada posible. Una jugada que siempre estuvo disponible pero no había alcanzado a entender. En ese momento los espejos se alinearon y logre comprender lo que ocurría. Tan simple como animarme a cambiar.
    
    A partir de allí comenzó el periodo con mas energía en mi vida docente, donde también me sumé como voluntario al programa Clubes TED Ed coordinado por TEDxRiodelaPlata. Hoy soy Coordinador del Clubes en la Provincia de Córdoba con TEDxCórdoba.
    
    Sigo en el mismo lugar, pero siempre buscando cambiar, generar cosas nuevas y tratando de contagiar. Si se suman mas profes, bárbaro. Si no, seguramente ya les llegará su momento de entender esa jugada mágica que me permitió mantener la partida viva hasta hoy.`,
    keywords: [`Federico`, `Ferraro`, `Blog`, `Educación`, `Secundario`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `docente`,
      `secundario`,
      `ingeniero`,
    ],
    readingList: [
      {
        title: `Sapiens: A Brief History of Humankind`,
        author: `Yuval Noah Harari`,
        link: `https://www.goodreads.com/book/show/23692271-sapiens`,
      },
      {
        title: `Behave: The Biology of Humans at our Best and Worst`,
        author: `Robert Sapolsky`,
        link: `https://www.goodreads.com/book/show/31170723-behave`,
      },
      {
        title: `The Gene: An Intimate History`,
        author: `Siddhartha Mukeherjee`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
    ],
    showsList: [
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
      {
        title: `Love, Death & Robots`,
        author: `Tim Miller`,
        link: `https://www.imdb.com/title/tt9561862/`,
      },
      {
        title: `Star Wars: The Clone Wars`,
        author: `George Lucas, Dave Filoni`,
        link: `https://www.imdb.com/title/tt0458290/`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe's Personal Site`,
        short_name: `J.Doe`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
