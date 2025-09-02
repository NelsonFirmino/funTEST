// TABELA II – REGISTRO CIVIL DE PESSOAS NATURAIS
const table02 = [
    { Id: 1, Descricao: 'Registro de nascimento até 12 anos e de natimorto*', Valor: 0, Quantidade: null },
    { Id: 2, Descricao: 'Pedido de registro de nascimento após 12 anos – fora do prazo', Valor: 1.22, Quantidade: null },
    { Id: 3, Descricao: 'Casamento civil e religioso com efeito (habilitação, publicação de edital, lavratura do termo e 1ª certidão)**',
        Valor: 4.90, Quantidade: null },
    { Id: 4, Descricao: 'Pedido de dispensa de consentimento e suplementação de idade', Valor: 0.82, Quantidade: null },
    { Id: 5, Descricao: 'Registro de Óbito, inclusive a 1ª certidão*', Valor: 0, Quantidade: null },
    { Id: 6, Descricao: 'Processo de registro de óbito fora de prazo', Valor: 0.82, Quantidade: null  },
    { Id: 7, Descricao: 'Pedido de retificação no registro civil', Valor: 0.82, Quantidade: null  },
    { Id: 8, Descricao: 'Certidão de nascimento, de solteiro, de casamento, de óbito com ou sem averbação',
        Valor: 0.82, Quantidade: null  },
    { Id: 9, Descricao: 'Certidão de verbo ad verbum', Valor: 1.64, Quantidade: null  },
    { Id: 10, Descricao: 'Pedido de transcrição do registro de nascimento de pessoas estrangeiras, inclusive a 1ª certidão*',
        Valor: 4.09, Quantidade: null  },
    { Id: 11, Descricao: 'Averbação de divórcio; separação; retificação; suprimento; cancelamento de registro;emancipação; ' +
                         'interdição e tutela; inclusive certidão', Valor: 1.64, Quantidade: null  }
];

export class Table02 {
    public DadosJson = table02;
}
