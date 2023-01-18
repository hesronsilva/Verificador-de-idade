function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var htmlAno = document.getElementById('ano')
    var htmlNome = document.getElementById('nome')
    var htmlFoto = document.getElementById('foto')
    var result = document.getElementById('result')
    if (htmlAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else if (htmlAno.value.length == 0 || htmlNome.value.length == 0) {
        alert('Preencha os campos vazios!')
    }
    else {
        var genero = ""
        var idade = ano - htmlAno.value
        var nome = htmlNome.value

        var sexo = document.getElementsByClassName('sexo')
        if (sexo[0].checked) {
            genero = 'Homen'
            if (idade < 2) {
                htmlFoto.src = './img/bebe menino.jpg'
            }
            else if (idade >= 2 && idade <= 16) {
                htmlFoto.src = './img/menino.jpg'
            }
            else if (idade > 16 && idade <= 30) {
                //jovem
                htmlFoto.src = './img/homem-jovem.jpg'
            }
            else if (idade > 30 && idade <= 60) {
                //adulto
                htmlFoto.src = './img/adulto homem.jpg'
            }
            else {
                //idoso
                htmlFoto.src = './img/idoso homem.jpg'
            }
        }
        else {
            genero = 'Mulher'
            if (idade < 2) {
                htmlFoto.src = './img/bebe menina.jpg'
            }
            else if (idade >= 2 && idade <= 16) {
                htmlFoto.src = './img/menina.jpg'
            }
            else if (idade > 16 && idade <= 30) {
                htmlFoto.src = './img/mulher-jovem.jpg'
            }
            else if (idade > 30 && idade <= 60) {
                htmlFoto.src = './img/adulto mulher.jpg'
            }
            else {
                htmlFoto.src = './img/idoso mulher.jpg'
            }
        }
        /*outra forma de fazer a seleção do sexo
        var sexo = document.getElementById('sexo')
        if (sexo.value == 'Mas') {
            genero = 'Homen'
        }
        else {
            genero = 'Mulher'
        }*/
        result.style.textAlign = 'center'
        result.innerHTML = `Olá, ${nome}! <br>Detectamos ${genero} com ${idade} anos.`
        result.append(htmlFoto)
    }

}