$(document).ready(function () {
    let min = 1;
    let max = 9;
    let compteur = 0;
    let element;
    let number;
    let clearCompteur = 10;
    let myInterval;
    let priut;
    let nimp = $('.taupe').children('img').eq(number).show();
    let valueInput;

    function show() {
        $('.taupe').children('img').css('display', 'none');
        number = Math.floor(Math.random() * (max - min) + min);
        element = $('.taupe').children('img').eq(number).css('display', 'block');
    }


    $('.taupe').children('img').click(function () {
        $('.taupe').children('img').css('display', 'none');
        compteur++;
        $('p').text(compteur);
    })

    function augmenter() {
        if (clearCompteur == 0) {
            clearInterval(priut);
            $('#start').text('recommencer');

        } else {

            clearCompteur--;
            $('.timer').children('h3').text(clearCompteur);
        }

    }


    function enleve() {
        clearInterval(myInterval);
        $('.taupe').children('img').css('display', 'none');
        clearInterval(augmenter);
    }


    $('#start').click(function () {
        $('#start').text('start');
        valueInput = $('input').val();
        $('.compteur').children('h4').text(valueInput);
        myInterval = setInterval(show, 1500);
        priut = setInterval(augmenter, 1000);
        setTimeout(priut, 10000);
        setTimeout(enleve, 10000);
        augmenter();
    });

































});
