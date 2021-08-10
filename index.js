var header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle("sticky", window.scrollY > 0);
})

const hamBurger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav__links");
const navLinks = document.querySelectorAll(".nav__links li");

navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        hamBurger.classList.toggle('toggle');
        nav.classList.toggle('display-off');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        })
        }
    )
})

const navSlide = () => {
    hamBurger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        })
        hamBurger.classList.toggle('toggle');
        nav.classList.toggle('display-off');
    })
}

const addToCart = () => {
    const buttons = document.querySelectorAll(".card__button");

    buttons[0].addEventListener('click', () => {
        buttons[0].classList.toggle("card__button--active");
        if (buttons[0].classList[1]) {
            buttons[0].innerHTML = "Added"
        }
        else {
            buttons[0].innerHTML = "Add +"
        }
    })

    buttons[1].addEventListener('click', () => {
        buttons[1].classList.toggle("card__button--active");
        if (buttons[1].classList[1]) {
            buttons[1].innerHTML = "Added"
        }
        else {
            buttons[1].innerHTML = "Add +"
        }
    })

    buttons[2].addEventListener('click', () => {
        buttons[2].classList.toggle("card__button--active");
        if (buttons[2].classList[1]) {
            buttons[2].innerHTML = "Added"
        }
        else {
            buttons[2].innerHTML = "Add +"
        }
    })
};

const disText = () => {
    const disappearingText = document.getElementsByClassName("disText");
    const text = ["Mukbang challenge?", "Unexpected guests?", "Movie night?", "Game night?", "Late night at office?", "Movie marathon?", "Cooking gone wrong?", "Party night?", "Unexpected friends?"]

    var count = 0;
    setInterval(e => {
        var randomNumber = (Math.floor(Math.random() + 101));
        count = (count + randomNumber) % text.length;
        var newText = text[count];
        disappearingText[0].innerHTML = newText;
    }, 2500);
}

const searchRamens = () => {
    let input = document.getElementById("search__bar").value;
    input = input.toLowerCase();

    let ram = document.getElementsByClassName("ramen");

    for (i=0; i<ram.length; i++){
        if (!ram[i].innerText.toLowerCase().includes(input)){
            ram[i].style.display="none";
        }
        else{
            ram[i].style.display="list-item"
        }
    }
}

const main = document.getElementsByClassName("input-wrapper1");
main[0].addEventListener('click', ()=>{
    location.href="/search.html";
})

navSlide();
addToCart();
disText();