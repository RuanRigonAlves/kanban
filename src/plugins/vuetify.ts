/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from "vuetify";
// Styles
import "@mdi/font/css/materialdesignicons.css";

import "../styles/layers.css";
import "vuetify/styles";
import { red } from "vuetify/util/colors";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",

    themes: {
      dark: {
        colors: {
          surface: "#121212",
          primary: "#00994d",
          bgMain: "#161616",

          btnRed: "#c62828",
          btnOrange: "#fb8c00",
          btnGreen: "#00994d",
          btnBlue: "#0e72ca",

          btn_primary: "#00994d",
          colunaToDo: "#0e72ca20",
          colunaPendente: "#9f57ac20",
          colunaEmAndamento: "#7b1fa220",
          colunaConcluido: "#4f9b6e20",
          colunaRevisao: "#61616120",
          colunaCancelado: "#c6282820",
        },
      },
    },
  },
});
