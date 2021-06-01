import { createServer } from "miragejs"

declare global {
  interface Window{
    server: any;
  }
}

// if (window.server) server.shutdown()


window.server = createServer({
  routes() {
    this.get("/api/products", () => {
      return {
        products: [
          {
            id: '1',
            description: "Bombril",
            image:"https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg",
            price: 1.69,
            date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)",
            peso: "45 g",
            quantidade: 0
          },
          {
            id: '2',
            description: "Manteiga Qualy",
            image:"https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
            price: 5.29,
            date: "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)",
            peso: "45 g",
            quantidade: 0
          },
          {
            id: '3',
            description: "Nescau",
            image:"https://www.mercadoqualidade.com.br/wp-content/uploads/2017/07/ACHOCOLATADO-EM-P%C3%93-NESCAU-2.0-800G.png",
            price: 10.25,
            date: "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)",
            peso: "45 g",
            quantidade: 0
          },
          {
            id: '4',
            description: "Leite Italac",
            image:"https://www.italac.com.br/wp-content/uploads/2018/11/Italac_imagens_1024x1024px_export_0020s_0004_AF-3D-ITALAC-LEITE-UHT-INTEGRAL-1L-EDGE-SIMPL.png",
            price: 11.39,
            date: "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)",
            peso: "45 g",
            quantidade: 0
          },
          {
            id: '5',
            description: "Presunto Sadia",
            image:"https://cdn-cosmos.bluesoft.com.br/products/7893000097926",
            price: 10.02,
            date: "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)",
            peso: "45 g",
            quantidade: 0
          },
          {
            id: '6',
            description: "Arroz Integral",
            image:"https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/images-upload-uploaded-1321-arroz-integral-768x768.png",
            price: 10.02,
            date: "Sat Oct 05 2016 00:00:00 GMT-0700 (PDT)",
            peso: "5 kl",
            quantidade: 0
          },
          {
            id: '7',
            description: "Feijão Carioca",
            image:"https://www.camil.com.br/wp-content/uploads/sites/12/2020/06/7896006744115-feijao-carioca-camil-1kg-1.png",
            price: 7.98,
            date: "Sat Oct 07 2016 00:00:00 GMT-0700 (PDT)",
            peso: "1 kl",
            quantidade: 0
          },
          {
            id: '8',
            description: "Açúcar Cristal",
            image:"https://superprix.vteximg.com.br/arquivos/ids/174589-600-600/Acucar-Cristal-Uniao-Cristalcucar-1kg.png?v=636213802015630000",
            price: 2.55,
            date: "Sat Oct 08 2016 00:00:00 GMT-0700 (PDT)",
            peso: "1 kl",
            quantidade: 0
          },
          {
            id: '9',
            description: "Macarrão",
            image:"https://isabela.com.br/wp-content/uploads/2020/12/macarrao.png",
            price: 3.55,
            date: "Sat Oct 10 2016 00:00:00 GMT-0700 (PDT)",
            peso: "500 g",
            quantidade: 0
          },
          {
            id: '10',
            description: "Biscoito Maria",
            image:"https://static.paodeacucar.com/img/uploads/1/293/665293.png",
            price: 6.75,
            date: "Sat Oct 12 2016 00:00:00 GMT-0700 (PDT)",
            peso: "400 g",
            quantidade: 0
          },
          {
            id: '11',
            description: "Café Torrado",
            image:"https://superprix.vteximg.com.br/arquivos/ids/177936-600-600/Cafe-Torrado-e-Moido-Melitta-Tradicional-500g-Caixa.png?v=636698465698800000",
            price: 5.95,
            date: "Sat Oct 13 2016 00:00:00 GMT-0700 (PDT)",
            peso: "500 g",
            quantidade: 0
          },
          {
            id: '12',
            description: "Leite em Pó",
            image:"https://www.embare.com.br/wp-content/uploads/2013/06/leite-po-integral-400g.png",
            price: 8.11,
            date: "Sat Oct 15 2016 00:00:00 GMT-0700 (PDT)",
            peso: "400 g",
            quantidade: 0
          },
          {
            id: '13',
            description: "Bolacha",
            image:"https://motamais.com.br/wp-content/uploads/2020/06/biscoito-bono-recheado-chocolate.png",
            price: 2.79,
            date: "Sat Oct 17 2016 00:00:00 GMT-0700 (PDT)",
            peso: "140 g",
            quantidade: 0
          },
          {
            id: '14',
            description: "Ketchup",
            image:"https://emporioquatroestrelas.vteximg.com.br/arquivos/ids/158930-1000-1000/KETCHUP1.png?v=637019881339300000",
            price: 8.22,
            date: "Sat Oct 19 2016 00:00:00 GMT-0700 (PDT)",
            peso: "320 g",
            quantidade: 0
          },
          {
            id: '15',
            description: "Maionese",
            image:"https://trimais.vteximg.com.br/arquivos/ids/1008431-1000-1000/foto_original.jpg?v=637395837185870000",
            price: 4.49,
            date: "Sat Oct 20 2016 00:00:00 GMT-0700 (PDT)",
            peso: "500 g",
            quantidade: 0
          },
          {
            id: '16',
            description: "Vinagre",
            image:"https://cdn-cosmos.bluesoft.com.br/products/7898286190484",
            price: 3.65,
            date: "Sat Oct 21 2016 00:00:00 GMT-0700 (PDT)",
            peso: "500 ml",
            quantidade: 0
          },
          {
            id: '17',
            description: "Oléo de Soja",
            image:"https://www.paodeacucar.com/img/uploads/1/281/565281.png",
            price: 7.89,
            date: "Sat Oct 23 2016 00:00:00 GMT-0700 (PDT)",
            peso: "900 ml",
            quantidade: 0
          },
          {
            id: '18',
            description: "Sardinha",
            image:"https://emporioquatroestrelas.vteximg.com.br/arquivos/ids/160034-1000-1000/Sardinha-com-Oleo-125g-Coqueiro.png?v=637251472889900000",
            price: 4.55,
            date: "Sat Oct 26 2016 00:00:00 GMT-0700 (PDT)",
            peso: "125 g",
            quantidade: 0
          },
          {
            id: '19',
            description: "Kitut",
            image:"https://trimais.vteximg.com.br/arquivos/ids/1008313-410-410/foto_original.jpg?v=637395836234570000",
            price: 9.78,
            date: "Sat Oct 27 2016 00:00:00 GMT-0700 (PDT)",
            peso: "320 g",
            quantidade: 0
          },
        ],
      }
    })
  },
})