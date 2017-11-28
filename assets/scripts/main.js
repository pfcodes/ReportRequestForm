'use strict';

(function() {
  // Initialize Semantic-UI Variables
  $('.dropdown').dropdown();
  $('.calendar#date-section').calendar({
    type: 'date'
  });

  var $form = $('.ui.form');

  // Form validation
  $form.submit(function (e) {
    e.preventDefault();

    if ( $form.form('is valid')) {
      var formFields = $form.form('get values');
      console.log('Form succesfully validated, outputting fields: ');
      console.log(formFields);
    }

  })

  $form.form({
    fields: {
      'first-name': 'empty',
      'last-name': 'empty',
      'email': ['email'],
      'department': 'empty',
      'delivery-date': 'empty',
      'reports': 'empty'
    }
  })
}())