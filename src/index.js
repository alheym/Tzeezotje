import swiper from './modules/swiper/swiper';
import { modal, closeModal } from './modules/modal/modal';
import { nav } from './modules/navigation/navigation';

window.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('.reserve');

    modal('[data-modal]', '.modal', '.overlay');
    nav('.hamburger', '.navigation', '.overlay');


    form.submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            closeModal('.modal', '.overlay');
            $('form').trigger('reset');
        });
        return false;
    });

});
