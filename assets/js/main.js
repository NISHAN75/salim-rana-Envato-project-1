(function( $ ){
    $('[data-background]').each(function(){
        var imageUrl = $(this).data('background');
        $(this).css('background-image', 'url(' + imageUrl + ')');
      });

 })( jQuery );