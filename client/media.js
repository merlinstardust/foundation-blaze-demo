Template.Media.helpers({
  slides: function () {
    var slides = _.range(3).map(function (value) {
      return {
        header: 'Header ' + value,
        text: 'Text ' + value,
      };
    });
    slides[1].template = 'SlideOverwrite';
    return slides;
  },
});
