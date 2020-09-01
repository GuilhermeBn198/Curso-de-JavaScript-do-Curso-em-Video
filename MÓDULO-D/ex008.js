console.log('O console funciona corretamente') //demonstrando execução do nodeExec --tecla f8 p executar o node.js

var vel = 90
console.log(`a velocidade do carro é ${vel}`) //para usar esse método de atribuição de valor em uma frase do console tens de usar ``
if (vel > 80) {
    console.log(`atenção a velocidade do seu carro está acima de 80 km/h, recomenda-se redução`)
} else {
    if (vel > 40) {
        console.log(`parabens o seu carro está na velocidade correta da via, pode seguir fluxo`)
    } else {
        console.log(`atenção sua velocidade está abaixo do que é recomendado para a via, acelere por favor`)    
    }
}