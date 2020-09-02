$(document).ready(function() {
    const interval = setInterval(function() {
        const momentNow = moment();
        $('#time-part').html(momentNow.format('hh:mm:ss'));
    }, 1000);
});
