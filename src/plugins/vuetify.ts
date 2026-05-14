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
        },
      },
    },
  },
});
