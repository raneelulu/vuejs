<template lang="html">
  <div class="moviesummary">
    <!-- background -->
    <div class="summary-top">
      <div class="title">
        {{info.title}}
      </div>
      <div class="starring">
        <span v-for='starring in info.starring'>{{starring}} </span>
      </div>
    </div>
    <div class="summary-bottom">
    </div>
    <div class="partition">
    </div>
    <!-- middle float content -->
    <div class="middle-content">
      <div class="wrapper">
        <div class="first-content"> <!-- first -->
          <img class="title-image" v-bind:src="titleImage(info.title)" alt=""><br />
        </div>
        <div class="second-content"> <!-- second -->
          <div class="title">Information</div>
          <div class="viewtable_level">
            <table>
              <tbody>
                <tr>
                  <td>genres</td>
                  <td><span v-for='genre in info.genres'>{{genre}} </span></td>
                </tr>
                <tr>
                  <td>director</td>
                  <td>{{info.director}}</td>
                </tr>
                <tr>
                  <td>country</td>
                  <td>{{info.country}}</td>
                </tr>
                <tr>
                  <td>running time</td>
                  <td>{{info.runningtime}}</td>
                </tr>
                <tr>
                  <td>release date</td>
                  <td>{{info.releasedate}}</td>
                </tr>
                <tr>
                  <td>distribute</td>
                  <td>{{info.distribute}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSummary',
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
      var images = require('../img/' + arg + '.jpg');
      return images;
    },
    titleImage: function(arg) {
      if(arg!== undefined) {
        var newMovieTitle = arg.replace(/ /g ,"_");
        newMovieTitle = newMovieTitle.replace(/:/g,"_");
        var url = this.getImgUrl(newMovieTitle);
        return url
      } 
    }
  }
}
</script>