// TABELA V – REGISTRO DE IMÓVEIS
//        A – MATRÍCULA
const table05A = [
    { Id: 1, Descricao: 'Abertura de matrícula', Valor: 0.82, Quantidade: null },
    { Id: 2, Descricao: 'Encerramento de matrícula', Valor: 0.41, Quantidade: null }
];
export class Table05A {
    public DadosJson = table05A;
}

// B – REGISTRO NO LIVRO
const table05BextraJudicial = [
    { Id: 1, Descricao: 'Até R$ 35.065,00', Valor: 4.08, Quantidade: null },
    { Id: 2, Descricao: 'De R$ 35.065,01 até R$ 100.000,00', Valor: 11.64, Quantidade: null },
    { Id: 3, Descricao: 'De R$ 100.000,01 até R$ 200.000,00', Valor: 23.28, Quantidade: null },
    { Id: 4, Descricao: 'De R$ 200.000,01 até R$ 300.000,00', Valor: 34.92, Quantidade: null },
    { Id: 5, Descricao: 'De R$ 300.000,01 até R$ 400.000,00', Valor: 46.55, Quantidade: null },
    { Id: 6, Descricao: 'De R$ 400.000,01 até R$ 500.000,00', Valor: 58.19, Quantidade: null },
    { Id: 7, Descricao: 'De R$ 500.000,01 até R$ 600.000,00', Valor: 69.82, Quantidade: null },
    { Id: 8, Descricao: 'Acima de R$ 600.000,00', Valor: 81.62, Quantidade: null },
    { Id: 9, Descricao: 'Títulos Extrajudiciais sem valor: Escritura ou contrato de: instituição de bem de família; ' +
                        'servidão; usufruto; enfiteuse; divisão amigável e dote', Valor: 4.08, Quantidade: null },
];
export class Table05BextraJudicial {
    public DadosJson = table05BextraJudicial;
}

// B – REGISTRO NO LIVRO
const table05Bjudicial = [
    { Id: 1, Descricao: 'Até R$ 35.065,00', Valor: 4.08, Quantidade: null },
    { Id: 1, Descricao: 'De R$ 35.065,01 até R$ 100.000,00', Valor: 11.64, Quantidade: null },
    { Id: 1, Descricao: 'De R$ 100.000,01 até R$ 200.000,00', Valor: 23.28, Quantidade: null },
    { Id: 1, Descricao: 'De R$ 200.000,01 até R$ 300.000,00', Valor: 34.92, Quantidade: null },
    { Id: 1, Descricao: 'De R$ 300.000,01 até R$ 400.000,00', Valor: 46.55, Quantidade: null },
    { Id: 1, Descricao: 'De R$ 400.000,01 até R$ 500.000,00', Valor: 58.19, Quantidade: null },
    { Id: 1, Descricao: 'De R$ 500.000,01 até R$ 600.000,00', Valor: 69.82, Quantidade: null },
    { Id: 1, Descricao: 'Acima de R$ 600.000,00', Valor: 81.62, Quantidade: null }
];
export class Table05Bjudicial {
    public DadosJson = table05Bjudicial;
}

// INCORPORAÇÃO OU DESTINAÇÃO, IDENTIFICAÇÃO E INDIVIDUALIZAÇÃO RESIDENCIAL (por área de construção)
const table05Bresidencial = [
    { Id: 1, Descricao: 'Até 500m2', Valor: 16.32, Quantidade: null },
    { Id: 2, Descricao: 'De 501m2 a 1.000m2', Valor: 24.49, Quantidade: null },
    { Id: 3, Descricao: 'De 1.001m2 a 2.000m2', Valor: 40.81, Quantidade: null },
    { Id: 4, Descricao: 'De 2.001m2 a 5.000m2', Valor: 81.62, Quantidade: null },
    { Id: 5, Descricao: 'De 5.001m2 a 10.000m2', Valor: 97.93, Quantidade: null },
    { Id: 6, Descricao: 'De 10.001m2 a 20.000m2', Valor: 122.43, Quantidade: null },
    { Id: 7, Descricao: 'Acima de 20.000m2', Valor: 163.23, Quantidade: null }
];
export class Table05Bresidencial {
    public DadosJson = table05Bresidencial;
}

// INCORPORAÇÃO OU DESTINAÇÃO, IDENTIFICAÇÃO E INDIVIDUALIZAÇÃO COMERCIAL (por área de construção)
const table05Bcomercial = [
    { Id: 1, Descricao: 'Até 500m2', Valor: 24.49, Quantidade: null },
    { Id: 2, Descricao: 'De 501m2 a 1.000m2', Valor: 36.73, Quantidade: null },
    { Id: 3, Descricao: 'De 1.001m2 a 2.000m2', Valor: 48.97, Quantidade: null },
    { Id: 4, Descricao: 'De 2.001m2 a 5.000m2', Valor: 65.29, Quantidade: null },
    { Id: 5, Descricao: 'De 5.001m2 a 10.000m2', Valor: 81.62, Quantidade: null },
    { Id: 6, Descricao: 'De 10.001m2 a 20.000m2', Valor: 122.43, Quantidade: null },
    { Id: 7, Descricao: 'De 20.001m2 a 30.000m2', Valor: 163.23, Quantidade: null },
    { Id: 8, Descricao: 'Acima de 30.000m2', Valor: 204.03, Quantidade: null }
];
export class Table05Bcomercial {
    public DadosJson = table05Bcomercial;
}

// LOTEAMENTOS
const table05Bloteamento = [
    { Id: 1, Descricao: 'Processo, publicação de edital, registro, certidão e arquivamento, por cada lote' +
                        ' ou gleba, área verde ou destinada a equipamentos comunitários', Valor: 1.64, Quantidade: null },
    { Id: 2, Descricao: 'Emissão de debênture', Valor: 2.05, Quantidade: null },
    { Id: 3, Descricao: 'Cédulas de crédito rural, comercial ou industrial', Valor: 2.05, Quantidade: null },
    { Id: 4, Descricao: 'Convenção de condomínio', Valor: 2.05, Quantidade: null },
    { Id: 5, Descricao: 'Penhor de máquinas e de aparelhos utilizados na indústria', Valor: 2.05, Quantidade: null },
    { Id: 6, Descricao: 'Convenções antenupciais', Valor: 2.05, Quantidade: null },
    { Id: 7, Descricao: 'Contratos de penhor rural', Valor: 2.05, Quantidade: null },
    { Id: 8, Descricao: 'Outros títulos por inteiro teor ou requerimento do interessado', Valor: 2.05, Quantidade: null }
];
export class Table05Bloteamento {
    public DadosJson = table05Bloteamento;
}

// C – REGISTRO NO LIVRO “3 – AUXILIAR”, INCLUSIVE PROTOCOLO E PRENOTAÇÃO
const table05C = [
    { Id: 1, Descricao: 'Emissão de debênture', Valor: 1.32, Quantidade: null },
    { Id: 2, Descricao: 'Cédulas de crédito rural, comercial ou industrial', Valor: 1.32, Quantidade: null },
    { Id: 3, Descricao: 'Convenção de condomínio', Valor: 1.32, Quantidade: null },
    { Id: 4, Descricao: 'Penhor de máquinas e de aparelhos utilizados na indústria', Valor: 1.32, Quantidade: null },
    { Id: 5, Descricao: 'Convenções antenupciais', Valor: 1.32, Quantidade: null },
    { Id: 6, Descricao: 'Contratos de penhor rural', Valor: 1.32, Quantidade: null },
    { Id: 7, Descricao: 'Outros títulos por inteiro teor ou requerimento do interessado', Valor: 1.32, Quantidade: null }
];
export class Table05C {
    public DadosJson = table05C;
}

// D – AVERBAÇÕES
const table05D = [
    { Id: 1, Descricao: 'Mudanças de estado civil', Valor: 0.82, Quantidade: null },
    { Id: 2, Descricao: 'Restabelecimento da sociedade conjugal', Valor: 0.82, Quantidade: null },
    { Id: 3, Descricao: 'Alteração no nome da rua ou no número do imóvel', Valor: 0.82, Quantidade: null },
    { Id: 4, Descricao: 'Substituição da carta de aforamento', Valor: 0.82, Quantidade: null },
    { Id: 5, Descricao: 'De demolição', Valor: 0.82, Quantidade: null },
    { Id: 6, Descricao: 'De cancelamento de onus', Valor: 0.82, Quantidade: null },
    { Id: 7, Descricao: 'De cláusula restritiva', Valor: 0.82, Quantidade: null },
    { Id: 8, Descricao: 'De retificação, ratificação ou aditamento de qualquer escritura ou contrato, ' +
                        'inclusive cédula hipotecária, de CND do INSS. De ART do CREA, de obra de arte, ' +
                        'de caução e cessão fiduciária, com a respectiva certidão.', Valor: 0.82, Quantidade: null },
    { Id: 9, Descricao: 'Modificação no processo de incorporação, com certidão', Valor: 4.08, Quantidade: null }
];
export class Table05D {
    public DadosJson = table05D;
}

// CONSTRUÇÃO RESIDENCIAL
const table05Dresidencial = [
    { Id: 1, Descricao: 'Até 100m2', Valor: 0.82, Quantidade: null },
    { Id: 2, Descricao: 'De 101m2 a 200m2', Valor: 1.64, Quantidade: null },
    { Id: 3, Descricao: 'De 201m2 a 500m2', Valor: 4.08, Quantidade: null },
    { Id: 4, Descricao: 'De 501m2 a 1.000m2', Valor: 8.16, Quantidade: null },
    { Id: 5, Descricao: 'De 1.001m2 a 2.000m2', Valor: 12.25, Quantidade: null },
    { Id: 6, Descricao: 'De 2.001m2 a 5.000m2', Valor: 24.49, Quantidade: null },
    { Id: 7, Descricao: 'De 5.001m2 a 10.000m2', Valor: 40.81, Quantidade: null },
    { Id: 8, Descricao: 'De 10.001m2 a 20.000m2', Valor: 48.97, Quantidade: null },
    { Id: 9, Descricao: 'Acima de 20.000m2', Valor: 81.62, Quantidade: null }
];
export class Table05Dresidencial {
    public DadosJson = table05Dresidencial;
}

// CONSTRUÇÃO COMERCIAL
const table05Dcomercial = [
    { Id: 1, Descricao: 'Até 100m2', Valor: 2.45, Quantidade: null },
    { Id: 2, Descricao: 'De 101m2 a 200m2', Valor: 4.08, Quantidade: null },
    { Id: 3, Descricao: 'De 201m2 a 500m2', Valor: 8.16, Quantidade: null },
    { Id: 4, Descricao: 'De 501m2 a 1.000m2', Valor: 16.32, Quantidade: null },
    { Id: 5, Descricao: 'De 1.001m2 a 2.000m2', Valor: 24.49, Quantidade: null },
    { Id: 6, Descricao: 'De 2.001m2 a 5.000m2', Valor: 40.81, Quantidade: null },
    { Id: 7, Descricao: 'De 5.001m2 a 10.000m2', Valor: 48.97, Quantidade: null },
    { Id: 8, Descricao: 'De 10.001m2 a 20.000m2', Valor: 57.13, Quantidade: null },
    { Id: 9, Descricao: 'De 20.001m2 a 30.000m2', Valor: 81.62, Quantidade: null },
    { Id: 10, Descricao: 'Acima de 30.000m2', Valor: 122.43, Quantidade: null },
    { Id: 11, Descricao: 'De desmembramento, por cada lote ou gleba resultante, com certidão', Valor: 0.82, Quantidade: null },
    { Id: 12, Descricao: 'De coordeamento, independente da área acrescida ou decrescida com certidão', Valor: 0.82, Quantidade: null }
];
export class Table05Dcomercial {
    public DadosJson = table05Dcomercial;
}

// E – CERTIDÕES
const table05E = [
    { Id: 1, Descricao: 'De registro de imóveis e ônus, inclusive buscas', Valor: 0.82, Quantidade: null },
    { Id: 2, Descricao: 'Negativa de Registro de Imóveis', Valor: 0.41, Quantidade: null },
    { Id: 3, Descricao: 'Da averbação de construção (exceto a 1ª)', Valor: 0.82, Quantidade: null },
    { Id: 4, Descricao: 'De cancelamento de ônus reais (exceto a 1ª)', Valor: 0.41, Quantidade: null },
    { Id: 5, Descricao: 'Vintenária e ônus reais, até cinco itens', Valor: 1.22, Quantidade: null },
    { Id: 6, Descricao: 'Por cada item excedente', Valor: 0.41, Quantidade: null },
];
export class Table05E {
    public DadosJson = table05E;
}
