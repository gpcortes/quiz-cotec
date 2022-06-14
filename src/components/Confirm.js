import React from "react";
import { Fragment } from "react";
import parse from 'html-react-parser';
import { Button, Box, List, ListItem, ListItemText, Typography, Link } from "@material-ui/core";
import { QRCodeSVG } from 'qrcode.react';
import { makeStyles } from "@material-ui/core/styles";

const courses = [
  {
    option: "a",
    title: "Informação e Comunicação",
    curses: ["Manutenção", "Suporte em Informática"],
    description: "<p>Voc&ecirc; &eacute; uma pessoa que demonstra ter interesse em aprender mais sobre manuten&ccedil;&atilde;o preventiva e corretiva de equipamentos de inform&aacute;tica, identificando os principais componentes de um computador e suas funcionalidades. Instala, configura e desinstala programas e softwares b&aacute;sicos, utilit&aacute;rios e aplicativos.</p>",
    url: "https://hselecao2.cett.dev.br/formulario-inscricao-cotec",
  },
  {
    option: "b",
    title: "Gestão e Negócios",
    curses: ["Finanças", "Recursos Humanos", "Vendas"],
    description: "<p>Voc&ecirc; &eacute; uma pessoa que demonstrou ter uma vis&atilde;o incr&iacute;vel de mercado, e mostra ter interesse em aprender mais sobre tr&acirc;mites financeiros, tributos, investimentos, contas a pagar e planejamento.</p>",
    url: "https://hselecao2.cett.dev.br/formulario-inscricao-cotec",
  },
  {
    option: "c",
    title: "Infraestrutura",
    curses: ["Edificações"],
    description: "<p>Voc&ecirc; &eacute; uma pessoa que demonstra tem como principal objetivo adquirir conhecimentos para que tenha habilidades para interpretar e desenhar constru&ccedil;&otilde;es, elaborar or&ccedil;amentos e cronogramas, gerenciar obras prediais e escolher materiais de boa qualidadcourse.</p>",
    url: "https://hselecao2.cett.dev.br/formulario-inscricao-cotec",
  },
  {
    option: "d",
    title: "Turismo, Hospitalidade e Lazer",
    curses: ["Gastronomia"],
    description: "<p>Voc&ecirc; gosta de aprender possui interesses que v&atilde;o muito al&eacute;m das habilidades t&eacute;cnicas para&nbsp;manusear e preparar alimentos. Voc&ecirc; tamb&eacute;m valoriza conhecimentos voltados para gest&atilde;o, seguran&ccedil;a alimentar, processos industriais, valor nutricional e caracter&iacute;sticas dos alimentos, relacionada &agrave; ind&uacute;stria aliment&iacute;cia.</p>",
    url: "https://hselecao2.cett.dev.br/formulario-inscricao-cotec",
  },
  {
    option: "e",
    title: "Recursos Naturais",
    curses: ["Agricultura", "Agroecologia", "Agropecuária"],
    description: "<p>Voc&ecirc; &eacute; uma pessoa bem-informada sobre as novas tecnologias voltadas para o campo, uma vez que possui pensamentos flex&iacute;veis e, capacidade de adapta&ccedil;&atilde;o e de resolver problemas j&aacute; que s&atilde;o algumas das principais caracter&iacute;sticas desse profissional.</p>",
    url: "https://hselecao2.cett.dev.br/formulario-inscricao-cotec",
  }
];

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },

  listCourses: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flexWrap: "wrap",
    // backgroundColor: "#fafafa",
  },
  result: {
    display: "flex",
    ["@media (max-width: 768px)"]: {
      flexDirection: "column",
      alignItems: "center",
    },
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(3)
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "23rem",
    // height: "rem",
    padding: theme.spacing(3.5),
    // backgroundColor: "#fafafa",
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(2)
    },
  },
  qrcode: {
    textAlign: "center",
    ["@media (max-width: 768px)"]: {
      display: "none",
    },
  },
  link: {
    textAlign: "center",
    ["@media (min-width: 769px)"]: {
      display: "none",
    },
  },
}));

export default function ConfirmPage({ answers }) {

  const classes = useStyles();

  const answer = answers.reduce(function (acc, e) { acc[e] = (e in acc ? acc[e] + 1 : 1); return acc }, {});

  const option = Object.keys(answer).reduce(function (acc, e) {
    if (answer[e] > acc.answer) {
      acc.answer = answer[e];
      acc.option = e;
    }
    return acc;
  });

  const reload = () => {
    window.location.reload();
  }

  return (
    <Fragment>
      <Box className={classes.header}>
        <Typography variant="h1">PARABÉNS!</Typography>
      </Box>
      {courses.map((course, i) => {
        if (course.option === option) {
          return (
            <Box>
              <Box>
                <br />
                <Typography variant="h2">Seu proximo curso é na área de {course.title}</Typography>
                <br />
                <Typography>{parse(course.description)}</Typography>
                <br />
              </Box>
              <Box className={classes.result}>
                <Box className={classes.card}>
                  <Typography variant="h3" style={{
                    textAlign: "center",
                  }}>Cursos para você</Typography>
                  <Box>
                    <List className={classes.listCourses}>
                      {course.curses.map((e, i) => {
                        return (
                          <ListItem>
                            <ListItemText key={e} primary={e} />
                          </ListItem>
                        )
                      }
                      )}
                    </List>
                  </Box>
                </Box>
                <Box className={classes.card}>
                  <Typography variant="h2" style={{
                    textAlign: "center",
                  }}>Faça sua inscrição</Typography>
                  <br />
                  <Box className={classes.qrcode}>
                    <QRCodeSVG value={course.url} bgColor="none" size="256" level="H" />
                  </Box>
                  <Box className={classes.link}>
                    <Button href={course.url} variant="contained" color="primary">Inscreva-se</Button>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.footer}>
                <Button variant="contained" color="primary" onClick={reload} >Recomeçar</Button>
              </Box>
            </Box>
          )
        }
      }
      )}
    </Fragment >
  );
}
