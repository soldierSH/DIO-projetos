
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

let pessoa1: Humano = {
    nome: 'Maria Clara',
    idade: 29,
    profissao: Trabalho.Atriz
};

let pessoa2: Humano = {
    nome: 'Alberto Roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let pessoa3: Humano = {
    nome: 'Fernanda Lima',
    idade: 16,
    profissao: Trabalho.TikToker
};

let pessoa4: Humano = {
    nome: "Carlos Martins",
    idade: 19,
    profissao: Trabalho.Desenvolvedor
}