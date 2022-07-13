
const funcionario = {
    codigo: 10,
    nome: 'Paulo'
};


const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Paulo'
}


interface Funcionario {
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Paulo';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'Paulo'
}