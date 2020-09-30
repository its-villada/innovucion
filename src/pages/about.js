import React, { useContext } from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { ThemeContext, SEO } from "../utils"

export default ({ data }) => {
  const MediaLink = ({ title, author, link }) => (
    <li key={title} style={{ color: "gray" }}>
      <a rel="noopener noreferrer" target="_blank" href={link}>
        {title}
      </a>
      &nbsp;-<i>{author}</i>
    </li>
  )

  const {
    author,
    readingList,
    showsList,
    designations,
  } = data.site.siteMetadata
  const { toString } = useContext(ThemeContext)

  const bookLinks = readingList.map(book => MediaLink(book))
  const showLinks = showsList.map(show => MediaLink(show))

  return (
    <PageLayout>
      <SEO title="Acerca" />
      <PageTitle title="Acerca" />
      <Container>
        <Image
          rounded
          width="270"
          height="235"
          src={`../../icons/fede-${toString()}.jpg`}
          alt={author}
        />
        <article className="m-auto pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Soy <b>Federico Ferraro</b>, Ingeniero en Electrónica recibido en la UTN-FRC. Ex alumno
            y docente del Instituto Técnico Salesiano Villada. Termine en 1995 e ingresé como profe a
            principio de 1998. Es decir, desde el año 1990 solo estuve 2 años fuera del colegio.</p>
          <p>
            En primera instancia esto podría sonar a un alago, pero en mi caso tiene un sabor agridulce.
            Dulce por formar parte durante tanto tiempo de una institución educativa. Amargo porque de
            algún modo me hace cómplice del estado del sistema educativo.</p>
          <p>
            En el año 2015 un grupo de alumnos de 5to año me puso en jaque. Estuve a punto de darme por vencido,
            solo faltaba que dijeran Mate para que el partido de ajedrez terminara. Pero hubo algo que me mostró
            que había una jugada posible. Una jugada que siempre estuvo disponible pero no había alcanzado a
            entender. En ese momento los espejos se alinearon y logre comprender lo que ocurría. Tan simple
            como animarme a cambiar.</p>
          <p>
            A partir de allí comenzó el periodo con mas energía en mi vida docente, donde también me sumé como
            voluntario al programa Clubes TED Ed coordinado por TEDxRiodelaPlata. Hoy soy Coordinador del Clubes
            en la Provincia de Córdoba con TEDxCórdoba.</p>
          <p>
            <p>
              Sigo en el mismo lugar, pero siempre buscando cambiar, generar cosas nuevas y tratando de
              contagiar. Si se suman mas profes, bárbaro. Si no, seguramente ya les llegará su momento de
              entender esa jugada mágica que me permitió mantener la partida viva hasta hoy.
          </p>
            Acá encontrás el <Link to="/blog">blog</Link> para ver de qué se trata todo esto.
          </p>
        </article>
        <article className="m-auto">
          <hr />
          <div className="text-left">
            <h5 className="watch-list-title pt-4">
              Estas son las lecturas que recomiendo:
          </h5>
            <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{bookLinks}</ul>
            <h5 className="watch-list-title pt-4">
              Estas son videos que recomiendo:
          </h5>
            <ul style={{ fontSize: "0.9rem", listStyle: "none" }}>{showLinks}</ul>
          </div>
        </article>
      </Container>
    </PageLayout >
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        designations
        readingList {
          title
          author
          link
        }
        showsList {
          title
          author
          link
        }
      }
    }
  }
`
