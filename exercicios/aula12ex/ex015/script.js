function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        window.alert('Tudo Ok')
    }
}   