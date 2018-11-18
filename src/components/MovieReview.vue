<template lang="html">
  <div class="moviereview">
    <div class="wrapper">
      <div class="title">
        reviews
      </div>
      <div class="content-wrapper" v-for="(review,index) in reviews" >
        <div class="user-info">
          <span>{{review.id}}</span>
          <span>|</span>
          <span>{{dates[index]}}</span>
        </div>
        <div class="score">
          <div class="specialty">
            <span class="m-re-txt320">{{review.stars}}</span>
            <div class="img">
              <img v-bind:src="reviewImage(review.stars)">
            </div>
          </div>
        </div>
        <div class="note">
          {{review.review}}
        </div>
        <div class="division"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieReview',
  data:   function()  {
    return  {
      reviews: [],
      dates: [],
    }
  },
  created: function() {
    this.fetchData()
  },
  methods:    {
    fetchData: function()   {
      this.$http.get('https://gist.githubusercontent.com/raneelulu/0123062c2dd7d50c561e8bdfc13cbb45/raw/2b4034ccd559626c65f9add3e27134a414a78c70/reviews.json').then(result => {
        this.reviews = result.data.reviews
        this.monthDate(this.reviews)
      })
    },
    getImgUrl(arg) {
      var images = require('../img/' + arg + '.jpg')
      return images
    },
    monthDate: function(arg)  {
      var that = this
      arg.forEach(function(val, index) {
        var year = val.date.substring(0,4)
        var month = val.date.substring(4,6)
        that.dates.push(year+'.'+month)
      })
    },
    reviewImage: function(arg)  {
      var url = this.getImgUrl("review_s"+arg)
      return url
    }
  }
}
</script>

<style lang="css">
</style>
