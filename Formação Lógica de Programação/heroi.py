class Heroi:
    def __init__(self, nome, idade, tipo):
        self.nome = nome
        self.idade = idade
        self.tipo = tipo

    def atacar(self):
        if self.tipo == "mago":
            ataque = "usou magia"
        elif self.tipo == "guerreiro":
            ataque = "usou espada"
        elif self.tipo == "monge":
            ataque = "usou artes marciais"
        elif self.tipo == "ninja":
            ataque = "usou shuriken"
        else:
            ataque = "usou um ataque desconhecido"

        mensagem_ataque = f"O {self.tipo} atacou usando {ataque}"
        print(mensagem_ataque)


heroi_exemplo = Heroi(nome="Herói Exemplo", idade=25, tipo="mago")
heroi_exemplo.atacar()

heroi_guerreiro = Heroi(nome="Guerreiro", idade=30, tipo="guerreiro")
heroi_guerreiro.atacar()
