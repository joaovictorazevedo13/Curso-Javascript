var idade = 24
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18 || idade >= 65){
        console.log('VOTO OPCIONAL')
    } else{
        console.log('VOTO OBRIGATÓRIO')
    }
}
