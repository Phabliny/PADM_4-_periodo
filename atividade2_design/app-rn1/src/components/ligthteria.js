const itemList = [
        {
            imagem: require("./src/img/01-tablelamps.png"),
            descricao: "Abajur"
         },
        {
            imagem: require("./src/img/02-ceilinglamps.png"),
            descricao: "Lâmpada de teto"
        },
        {
            imagem: require("./src/img/03-sconces.png"),
            descricao: "Arendela"
        },
        {
            imagem: require("./src/img/04-floorlamps.png"),
            descricao: "Luminária de chão"
        },
        {
            imagem: require("./src/img/05-lightdecor.png"),
            descricao: "Luminária 5"
        },
        {
            imagem: require("./src/img/06-garlands.png"),
            descricao: "Luminária 6"
        },
        {
            imagem: require("./src/img/bgimage.png"),
            descricao: "Luminária 7"
        },
        {
            imagem: require("./src/img/detalhes-table-lamp.png"),
            descricao: "Luminária 8"
        }
    ]

export const getItens = () => {
    return itemList;
};