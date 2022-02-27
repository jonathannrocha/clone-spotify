// document.querySelectorAll('.about-us').classList.remove('active')


// Selector menu mobile
document.querySelector('.menu-mobile').addEventListener("click", function() {

    if (document.querySelector(".header-menu").style.display == 'block') {

        document.querySelector(".header-menu").style.display = 'none';

        for (i = 0; i <= 2; i++) {

            let addclasform = "menu-mobile--"
            let menumobpri = document.querySelectorAll(`.menu-mobile div`);

            let classform = addclasform + i


            menumobpri[i].classList.remove(classform)


            console.log("teste")
        }


    } else {
        document.querySelector(".header-menu").style.display = 'block';
        for (i = 0; i <= 2; i++) {

            let addclasform = "menu-mobile--"
            let menumobpri = document.querySelectorAll(`.menu-mobile div`);

            let classform = addclasform + i


            menumobpri[i].classList.add(classform)


            // console.log(teste)
        }
    }

});

// transition