<template lang="html">
  <div class="viewmovieinfo">
    <MovieSummary></MovieSummary>
    <MovieRating></MovieRating>
    <MovieReview></MovieReview>
  </div>
</template>

<script>
import {
  MovieSummary,
  MovieRating,
  MovieReview,
} from '@/components'

import '@/style/ViewMovieInfo.css'
import '@/style/font.css'
export default {
  methods: {
    testVuex () {
      this.$store.commit('TEST')
    }
  },
  components: {
    MovieSummary,
    MovieRating,
    MovieReview,
  }
}
</script>

<style lang="css">
</style>
