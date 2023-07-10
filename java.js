let contador = 0

function sanduiche() {
    if(contador == 0){
        contador++
        document.querySelector(".debaixodosanduba").style.display="block"
        document.querySelector(".header-center").style.display="none"
    }
    else{
        document.querySelector(".debaixodosanduba").style.display="none"
        document.querySelector(".header-center").style.display="block"
        contador = 0 
    }
}