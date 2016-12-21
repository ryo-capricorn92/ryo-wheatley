/* global $ */
$(document).ready(function () {
  // Define an object to hold all info on each skill, to display on tag click
  // This would be easier on me to create on the index page, and simply
  // dynamically hide and show it, but that would create a heavy overhead, with
  // the added base data for each defined element. It may look uglier, but it's
  // much more efficient!
  var skillsData = {
    Angular: {
      description: "",
      experience: "",
      projects: ""
    },
    Auth0: {
      description: "",
      experience: "",
      projects: ""
    },
    AWS: {
      description: "",
      experience: "",
      projects: ""
    },
    Backbone: {
      description: "",
      experience: "",
      projects: ""
    },
    Bootstrap: {
      description: "",
      experience: "",
      projects: ""
    },
    Bower: {
      description: "",
      experience: "",
      projects: ""
    },
    Chai: {
      description: "",
      experience: "",
      projects: ""
    },
    "C++": {
      description: "",
      experience: "",
      projects: ""
    },
    CSS3: {
      description: "",
      experience: "",
      projects: ""
    },
    D3: {
      description: "",
      experience: "",
      projects: ""
    },
    Git: {
      description: "",
      experience: "",
      projects: ""
    },
    GitHub: {
      description: "",
      experience: "",
      projects: ""
    },
    Grunt: {
      description: "",
      experience: "",
      projects: ""
    },
    Gulp: {
      description: "",
      experience: "",
      projects: ""
    },
    Heroku: {
      description: "",
      experience: "",
      projects: ""
    },
    HTML5: {
      description: "",
      experience: "",
      projects: ""
    },
    Jasmine: {
      description: "",
      experience: "",
      projects: ""
    },
    JavaScript: {
      description: "",
      experience: "",
      projects: ""
    },
    jQuery: {
      description: "",
      experience: "",
      projects: ""
    },
    Karma: {
      description: "",
      experience: "",
      projects: ""
    },
    Mocha: {
      description: "",
      experience: "",
      projects: ""
    },
    Express: {
      description: "",
      experience: "",
      projects: ""
    },
    Mongo: {
      description: "",
      experience: "",
      projects: ""
    },
    MySQL: {
      description: "",
      experience: "",
      projects: ""
    },
    npm: {
      description: "",
      experience: "",
      projects: ""
    },
    "Node": {
      description: "",
      experience: "",
      projects: ""
    },
    OAuth: {
      description: "",
      experience: "",
      projects: ""
    },
    Postgres: {
      description: "",
      experience: "",
      projects: ""
    },
    React: {
      description: "",
      experience: "",
      projects: ""
    },
    Redux: {
      description: "",
      experience: "",
      projects: ""
    },
    Sequelize: {
      description: "",
      experience: "",
      projects: ""
    },
    Socket: {
      description: "",
      experience: "",
      projects: ""
    },
    Webpack: {
      description: "",
      experience: "",
      projects: ""
    },
    Mongoose: {
      description: "",
      experience: "",
      projects: ""
    }
  }

  // Add href and onclick events to each a in skillsTags
  $('#skillsTags a').each(function (i, el) {
    $(el).attr('href', 'javascript:void(0);').attr('onclick', 'showSkill(event)');
  })

  //  href="javascript:void(0);" onclick="showSkill(event)"

  // Draw the canvas for the skills tag cloud
  if (!$('#skillsCanvas').tagcanvas({
    imageMode: 'image',
    dragControl: true,
    dragThreshold: 1,
    pinchZoom: true,
    freezeActive: true,
    initial: [0.080, -0.180],
    clickToFront: 1,
    maxSpeed: 0.01,
    depth: 0.75
  }, 'skillsTags')) {
    console.error('Tag Canvas failed to load');
    $('#skillsCanvasContainer').hide();
  }

  // define on click function for click event on skill tags, to update info panel
  window.showSkill = function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('HELLO');
  }
})
