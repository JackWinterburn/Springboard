<template>
  <v-app>
    <v-content>
      <Navbar />
      <Calendar />
    </v-content>
  </v-app>
</template>

<script>
import Calendar from "./components/Calendar";
import Navbar from "./components/Navbar"

export default {
  name: 'App',

  components: {
    Calendar,
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
