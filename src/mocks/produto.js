import pst_carne from "../../assets/Pastel1.jpg";
import caldo from "../../assets/caldo de cana.jpg";
import doce from "../../assets/doce.jpg"

const produto = {
    topo: {
        titulo: "Detalhes do Produto",
    },
    detalhes: {
        nome: "Combo de Pastel",
        detalhes: "Esse combo contém 2 deliciosos pasteis de carne de até 3 ingredientes, 1 Caldo de cana de 600ml e um mini pastel doce à escolha do cliente. É uma escolha excelente pra quem quer provar um pouquinho de cada coisa que a nossa pastelaria oferece. TUDO ISSO POR APENAS:",
        preco: "R$ 60,00",
        botao: "Adicionar na lista de desejos",
    },
    itens: {
        titulo: "Itens do Kit",
        lista: [
            {
                nome: "2x Pasteis (até 3 ingredientes)",
                imagem: pst_carne,
            },
            {
                nome: "1x Caldo de cana (600ml)",
                imagem: caldo,
            },
            {
                nome: "1x Mini pastel doce",
                imagem: doce,
            }
        ]
    }
}

export default produto;