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
        link: `https://books.google.com.ar/books?id=qmj7AwAAQBAJ&dq=Harari&hl=es&source=gbs_navlinks_s`,
      },
      {
        title: `El elemento: Ante un futuro cada vez más incierto`,
        author: `Ken Robinson`,
        link: `https://books.google.com.ar/books?id=KZSxAAAAQBAJ&dq=Ken%20Robinson&hl=es&source=gbs_similarbooks`,
      },
      {
        title: `Escuelas creativas: La revolución que está transformando la educación`,
        author: `Ken Robinson`,
        link: `https://books.google.com.ar/books?id=GakWCgAAQBAJ&dq=Ken+Robinson&hl=es&source=gbs_navlinks_s`,
      },
      {
        title: `Mal de Escuela`,
        author: `Daniel Pennac`,
        link: `https://books.google.com.ar/books?id=8MxPEJcETnsC&dq=Mal+de+Escuela&hl=es&source=gbs_navlinks_s`,
      },
      {
        title: `El colapso de la Educación`,
        author: `Mariano Narodowski`,
        link: `https://books.google.com.ar/books/about/El_colapso_de_la_Educaci%C3%B3n.html?id=ImRZDwAAQBAJ&redir_esc=y`,
      },
      {
        title: `Homo Deus: Breve historia del mañana`,
        author: `Yuval Noah Harari`,
        link: `https://play.google.com/store/books/details/Homo_Deus_Breve_historia_del_ma%C3%B1ana?id=MFLKDAAAQBAJ`,
      },
    ],
    showsList: [
      {
        title: `Aprender de Grandes`,
        author: `Gerry Garbulsky`,
        link: `https://www.youtube.com/channel/UCMoXshslRbfA7MLTu0dasUA`,
      },
      {
        title: `El dilema de las redes sociales`,
        author: `Skyler Gisondo`,
        link: `https://www.netflix.com/ar/title/81254224`,
      },
      {
        title: `Naturaleza humana`,
        author: `Netflix`,
        link: `https://www.netflix.com/ar/title/81220944`,
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
