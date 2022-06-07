
$(function(){
    $('#feedback-form').submit(function(event){
        event.preventDefault();

        $.post('/api/feedbacks/send-message', $(this).serialize()).done(
            (res) => {
                Swal.fire(
                    'Successfully sent!',
                    'Thank you, we really appreciate your feedback :)',
                    'success'
                );

                $(this).trigger("reset");
            }
        );
    });
});