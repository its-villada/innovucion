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
    description: `Porque necesitamos una revolución y una innovación masiva para lograr que desde
     el ámbito de la educación nuestro futuro sea positivo.`,
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
        title: `El elemento: Ante un futuro cada vez más incierto`,
        author: `Ken Robinson`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
      {
        title: `Escuelas creativas: La revolución que está transformando la educación`,
        author: `Ken Robinson`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
      {
        title: `Mal de Escuela`,
        author: `Daniel Pennac`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
      {
        title: `El colapso de la Educación`,
        author: `Mariano Narodowski`,
        link: `https://www.goodreads.com/book/show/27276428-the-gene`,
      },
      {
        title: `Homo Deus: Breve historia del mañana`,
        author: `Yuval Noah Harari`,
        link: `https://play.google.com/store/books/details/Homo_Deus_Breve_historia_del_ma%C3%B1ana?id=MFLKDAAAQBAJ`,
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
