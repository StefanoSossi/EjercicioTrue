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
      </v-container>
      <v-container class="py-4">
        <v-list three-line>
          <template v-for="result in results">
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
    term: null,
    media: "all",
    entity: "album",
    results: [],
  }),

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
  },
};
</script>

<style src="./style.css" scoped></style>
