/* Recurrence pattern.
 *
 * Options:
 *    locatization(object): Customizations to locatizations. Default to null
 *    configuration(object): recurrent input widget configuration
 *
 * Documentation:
 *
 *    # Simple
 *
 *    {{ example-1 }}
 *
 * Example: example-1
 *    <textarea class="pat-recurrence"></textarea>
 *
 *
 */


define([
  'jquery',
  'mockup-patterns-base',
  'jquery.recurrenceinput'
], function($, Base) {
  'use strict';

  var Recurrence = Base.extend({
    name: 'recurrence',
    trigger: '.pat-recurrence',
    defaults: {
      // just passed onto the widget
      language: 'en',
      locatization: null,
      configuration: {}
    },
    init: function() {
      this.$el.addClass('recurrence-widget');
      if(this.options.locatization){
        $.tools.recurrenceinput.localize(this.options.language, this.options.locatization);
      }
      this.$el.recurrenceinput(this.options.configuration);
    }
  });

  return Recurrence;

});