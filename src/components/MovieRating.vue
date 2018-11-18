<template lang="html">
  <div class="movierating">
    <div class="wrapper">
      <div class="title">
        Ratings
      </div>
      <div class="rating-wrapper">
        <div class="rating">
          <span>audience rating</span><span>{{info.audiencerating}}</span>
          <div class="img">
            <img v-bind:src="reviewImage(info.audiencerating)">
          </div>
          <div class="descript">
            given by the audience who booked on this site
          </div>
        </div>
        <div class="rating">
          <span>critic rating</span><span>{{info.criticrating}}</span>
          <div class="img">
            <img v-bind:src="reviewImage(info.criticrating)">
          </div>
          <div class="descript">
            given by the reporter and the critic
          </div>
        </div>
        <div class="rating">
          <span>netizen rating</span><span>{{info.netizenrating}}</span>
          <div class="img">
            <img v-bind:src="reviewImage(info.netizenrating)">
          </div>
          <div class="descript">
            given by anyone who watched this movie
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieRating',
  data:   function()  {
    return  {
      info: []
    }
  },
  created: function() {
    this.fetchData()
  },
  methods:    {
    fetchData: function()   {
      this.$http.get('https://gist.githubusercontent.com/raneelulu/7c128b466133daaa4848b837c3d3e3a3/raw/96a0652ca85b19b6267b503f35f207591c36b8e9/movieInfo.json').then(result => {
        this.info = result.data.movie[0]
      })
    },
    getImgUrl(arg) {
      var images = require('../img/' + arg + '.jpg')
      return images
    },
    reviewImage: function(arg)  {
      if(arg!== undefined)  {
        var url = this.getImgUrl("review_s"+Math.round(arg))
        return url
      }
    }
  }
}
</script>
