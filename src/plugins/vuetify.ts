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

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",

    themes: {
      dark: {
        colors: {
          btn_primary: "#00994d",
          bg_blue: "#0e72ca20",
          bg_light_purple: "#9f57ac20",
          bg_purple: "#7b1fa220",
          bg_red: "#fc302c20",
          bg_green: "#4f9b6e20",
          bg_gray: "#61616120",
        },
      },
    },
  },
});
