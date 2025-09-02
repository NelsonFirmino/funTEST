// TABELA I – PROTESTO DE TÍTULOS
const table01 = [
    { Id: 1, Descricao: 'Até R$ 260,00', Valor: 0.20, Quantidade: null },
    { Id: 2, Descricao: 'De R$ 260,01 até R$ 700,00', Valor: 0.55, Quantidade: null },
    { Id: 3, Descricao: 'De R$ 700,01 até R$ 1.000,00', Valor: 0.78, Quantidade: null },
    { Id: 4, Descricao: 'De R$ 1.000,01 até R$ 5.000,00', Valor: 3.89, Quantidade: null },
    { Id: 5, Descricao: 'De R$ 5.000,01 até R$ 10.520,00', Valor: 7.76, Quantidade: null },
    { Id: 6, Descricao: 'Acima de R$ 10.520,00', Valor: 8.16, Quantidade: null },
    { Id: 7, Descricao: 'Cancelamento de protesto, inclusive certidão negativa', Valor: 0.41, Quantidade: null },
    { Id: 8, Descricao: 'Certidão positiva, inclusive buscas – de um título', Valor: 0.41, Quantidade: null },
    { Id: 9, Descricao: 'Certidão positiva, inclusive buscas – por cada título excedente', Valor: 0.05, Quantidade: null },
    { Id: 10, Descricao: 'Certidão Negativa', Valor: 0.41, Quantidade: null }
];

export class Table01 {
    public DadosJson = table01;
}

// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'Até R$ 260,00', 0.20 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'De R$ 260,01 até R$ 700,00', 0.55 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'De R$ 700,01 até R$ 1.000,00', 0.78 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'De R$ 1.000,01 até R$ 5.000,00', 3.89 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'De R$ 5.000,01 até R$ 10.520,00', 7.76 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'Acima de R$ 10.520,00', 8.16 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'Cancelamento de protesto, inclusive certidão negativa', 0.41 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'Certidão positiva, inclusive buscas – de um título', 0.41 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'Certidão positiva, inclusive buscas – por cada título excedente',
// 0.05 )
// INSERT INTO dbo.tbServicos ([txDiscriminacao], [vaServico]) Values ( 'Certidão Negativa', 0.41 )
