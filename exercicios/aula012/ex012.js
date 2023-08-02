var agora = new Date()
var hora = agora.getHours()
console.log(`Agora é exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
}
else if (hora <= 18){
    console.log('Boa tarde!')
}
else if (hora > 0){
    console.log('Boa noite!')
}