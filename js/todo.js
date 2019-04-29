$(function () {
  
    $.ajax({
        type: 'GET',
        url: '/api//backend.json',
        success: function(data) {
            console.log('success', data);
        }
    });

})