/* global $ */
$(document).ready(function () {
  // var width = ($('#skillsCanvasContainer').width() * 0.5) + 'px';
  // $('#skillsCanvas').attr('width', width).attr('height', width);
  if (!$('#skillsCanvas').tagcanvas({
    imageMode: 'image',
    freezeActive: true,
    clickToFront: 1,
    maxSpeed: 0.03,
    depth: 0.75
  }, 'skillsTags')) {
    console.error('Tag Canvas failed to load');
    $('#skillsCanvasContainer').hide();
  }
  // $('#skillsCanvas span').each(function (i, el) {
  //   $(el).attr('width', $(el).width() + 'px').attr('height', $(el).height() + 'px');
  // });
})
