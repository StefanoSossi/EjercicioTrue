<template>
  <div class="hello">
    <h1 class="heading grey--text py-4 px-6">{{ msg }}</h1>
    <v-form>
      <v-container class="pa-0">
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="term"
              outlined
              dense
              filled
              label="Search"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="media"
              :items="medias"
              label="Category"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn rounded @click="searchMusic()">
              <v-icon dark large>mdi-magnify</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-btn @click="sortAlphabeticA_Z()">
            <v-icon dark large>mdi-sort-alphabetical-descending-variant</v-icon>
          </v-btn>
          <v-btn @click="sortAlphabeticZ_A()">
            <v-icon dark large>mdi-sort-alphabetical-ascending-variant</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <v-container class="py-4">
        <v-list three-line>
          <template v-for="result in visiblePages">
            <v-list-item :key="result.collectionId">
              <v-list-item-avatar>
                <v-img :src="result.artworkUrl100"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title
                  v-text="result.artistName"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-text="result.collectionName"
                ></v-list-item-subtitle>
                <v-list-item-subtitle
                  v-text="result.collectionType"
                ></v-list-item-subtitle>
                <v-list-item-subtitle
                  v-if="result.collectionPrice"
                  v-text="result.collectionPrice + '$'"
                >
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-pagination
            v-model="page"
            :length="Math.ceil(results.length / itemsPerPage)"
          ></v-pagination>
          <v-btn text @click="seeAll()"> See All </v-btn>
        </v-list>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SearchPage",
  props: {
    msg: String,
  },
  data: () => ({
    medias: [
      "movie",
      "podcast",
      "music",
      "musicVideo",
      "audiobook",
      "shortFilm",
      "tvShow",
      "software",
      "ebook",
      "all",
    ],
    items: ["foo", "bar", "fizz", "buzz"],
    term: null,
    media: "all",
    entity: "album",
    results: [],
    page: 1,
    itemsPerPage: 20,
  }),
  computed: {
    visiblePages() {
      return this.results.slice(
        (this.page - 1) * this.itemsPerPage,
        this.page * this.itemsPerPage
      );
    },
  },
  methods: {
    async searchMusic() {
      await axios
        .get(
          `http://localhost:8080/search?term=${this.term}&media=${this.media}&entity=${this.entity}&limit=200`
        )
        .then((res) => {
          this.results = res.data.results;
        });
    },
    sortAlphabeticA_Z() {
      this.results.sort((a, b) => (a.artistName > b.artistName ? 1 : -1));
    },
    sortAlphabeticZ_A() {
      this.results.sort((a, b) => (a.artistName < b.artistName ? 1 : -1));
    },
    seeAll() {
      this.itemsPerPage = this.results.length;
    },
  },
};
</script>

<style src="./style.css" scoped></style>
