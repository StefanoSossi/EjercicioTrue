<template>
  <v-app>
    <v-main>
      <SearchPage msg="iTunes" />
    </v-main>
  </v-app>
</template>

<script>
import SearchPage from "./components/SearchPage";

export default {
  name: "App",

  components: {
    SearchPage,
  },

  data: () => ({
    //
  }),
};
</script>
