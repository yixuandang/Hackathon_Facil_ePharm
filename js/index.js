$(document).ready(function(){
    $('.log-btn').click(function(){
        $('.log-status').addClass('wrong-entry');
        $('.alert').fadeIn(500);
        setTimeout( "$('.alert').fadeOut(1500);",3000 );
    });
    $('.form-control').keypress(function(){
        $('.log-status').removeClass('wrong-entry');
    });
});

//------------------------------------------------------

/*var image = document.getElementById("testImg");
var button = document.getElementById("testBtn");

if (image.classList && image && button){
    button.onclick = function(){
        if (this.value == 'pause'){
            image.classList.add('stop');
            this.value = 'play';
        }
        else{
            image.classList.remove('stop');
            this.value = 'pause';
        }
    }
}*/