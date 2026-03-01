//pressing the spacebar triggers falling confetti across the screen.
document.addEventListener("DOMContentLoaded", function (){

   
    document.addEventListener("keydown", function (event) {

        if(event.code === "Space"){

            event.preventDefault(); //prevents scrolling.

            for (let i = 0; i < 30; i++){
                let confetti = document.createElement("div");
                confetti.innerText = "🎉";
                confetti.style.position = "fixed";
                confetti.style.left = Math.random() * 100 + "vw"; //random horizontal position, multiply by 100 to spread confetti across the full screen width.
                confetti.style.top = "-20px";
                confetti.style.fontSize = "100px";
                confetti.style.animation = "fall 2s linear";

                document.body.appendChild(confetti);

                setTimeout(function (){
                    confetti.remove();
                }, 2000); //2 seconds
            }
        }
    });
});


//temporarily changes all h2  when clicked.
document.querySelectorAll("h2").forEach(function (title){
    title.addEventListener("click", function(){


        const orginalText = title.textContent;
        title.textContent = "hihihihi";


        setTimeout(function (){
            title.textContent = orginalText;
        }, 1000);
    })
})
