function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotoBebeM.png')
                res.innerHTML = `Detectamos um bebê, com ${idade} anos.`
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotoJovemM.png')
                res.innerHTML = `Detectamos um jovem, com ${idade} anos.`
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoAdultoM.png')
                res.innerHTML = `Detectamos um adulto, com ${idade} anos.`
            }
            else{
                //idoso
                img.setAttribute('src', 'fotoIdosoM.png')
                res.innerHTML = `Detectamos um idoso, com ${idade} anos.`
            }
        }
        else if(fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'fotoBebeF.png')
                res.innerHTML = `Detectamos um bebê, com ${idade} anos.`
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'fotoJovemF.png')
                res.innerHTML = `Detectamos uma jovem, com ${idade} anos.`
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotoAdultoF.png')
                res.innerHTML = `Detectamos uma adulta, com ${idade} anos.`
            }
            else{
                //idoso
                img.setAttribute('src', 'fotoIdosoF.png')
                res.innerHTML = `Detectamos uma idosa, com ${idade} anos.`
            }
        }
        res.style.textAlign = 'center'
        //res.innerHTML = `Detectamos ${genero}, com ${idade} anos.`
        res.appendChild(img)
    }
}   