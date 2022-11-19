let ampiezzaInput = document.getElementById("ampiezza")
ampiezzaInput.addEventListener("input", function(e)
{
    e.preventDefault()
    console.log(`ampiezza cambiata --> ${ampiezzaInput.value}`)
    ampiezza = parseFloat(ampiezzaInput.value)
})

let frequenzaInput = document.getElementById("frequenza");
frequenzaInput.addEventListener("input", function(e)
{
    e.preventDefault()
    console.log(`frequenza cambiata --> ${frequenzaInput.value}`)
    frequenza = parseFloat(frequenzaInput.value)
})

let faseInput = document.getElementById("fase")
faseInput.addEventListener("input", function(e)
{
    e.preventDefault()
    console.log(`fase cambiata --> ${faseInput.value}`)
    fase = parseFloat(faseInput.value)
})