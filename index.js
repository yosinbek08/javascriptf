function Hello() {
 let a= document.getElementById ("raqam").value
 let b= document.getElementById("text")

    switch (a) {
        case "+998":
            b.innerHTML="Uzbekistan"
            break;
        case "+7":
            b.innerHTML="Russia"
            break;
        case "+55":
            b.innerHTML="Korea"
            break;
        case "+996":
            b.innerHTML="Kazakistan"
            break;
        case "+1":
            b.innerHTML="America"
            break;
            
            default:
                console.log("xato");
                break;
            }
        }