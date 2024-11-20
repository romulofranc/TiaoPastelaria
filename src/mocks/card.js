import pst_carne from "../../assets/Pastel1.jpg";
import pst_frgcat from "../../assets/frangoCat.jpg";
import pst_crnseca from "../../assets/carneSeca.jpg";
import pst_calabresa from "../../assets/calabresaCheddar.jpg";
import pst_palmito from "../../assets/palmito.jpg";
import pst_queijo from "../../assets/queijo.png";

const card = {
    infos: {
        lista: [
            {
                id: 1,
                titulo: "Pastel de Carne",
                descricao:"Pastel recheado com carne de primeira qualidade",
                imagem: pst_carne,
            },
            {
                id: 2,
                titulo: "Pastel de Frango",
                descricao:"Pastel recheado com frango e catupiry excelência",
                imagem: pst_frgcat,
            },
            {
                id: 3,
                titulo: "Pastel de Carne Seca",
                descricao:"Pastel recheado com Carne Seca e quiejo delicioso",
                imagem: pst_crnseca,
            },
            {
                id: 4,
                titulo: "Pastel de Calabresa",
                descricao:"Pastel recheado com Calabresa e queijo sem igual",
                imagem: pst_calabresa,
            },            
            {
                id: 5,
                titulo: "Pastel de Palmito",
                descricao:"Pastel recheado c/ Palmito e queijo muito saboroso",
                imagem: pst_palmito,
            },
            {
                id: 6,
                titulo: "Pastel de Queijo",
                descricao:"Pastel recheado com Queijo fresco muito saboroso",
                imagem: pst_queijo,
            },
        ]
    }
}

export default card;