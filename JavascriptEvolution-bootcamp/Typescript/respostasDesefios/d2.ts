
enum Trabalho {
    Atriz,
    Padeiro, 
    Desenvolvedor,
    TikToker
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa0: Humano = {
    nome: 'Maria Clara',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa1: Humano = {
    nome: 'Alberto Roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa2: Humano = {
    nome: 'Fernanda Lima',
    idade: 16,
    profissao: Trabalho.TikToker
};

let pessoa: Humano = {
    nome: "Carlos Martins",
    idade: 19,
    profissao: Trabalho.Desenvolvedor
}