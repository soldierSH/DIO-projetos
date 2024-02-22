def calcular_nivel(vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas

    if vitorias < 10:
        nivel = "Ferro"
    elif 11 <= vitorias <= 20:
        nivel = "Bronze"
    elif 21 <= vitorias <= 50:
        nivel = "Prata"
    elif 51 <= vitorias <= 80:
        nivel = "Ouro"
    elif 81 <= vitorias <= 90:
        nivel = "Diamante"
    elif 91 <= vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"

    return saldo_vitorias, nivel


vitorias_jogador = int(input("Digite a quantidade de vitórias do jogador: "))
derrotas_jogador = int(input("Digite a quantidade de derrotas do jogador: "))

saldo, nivel_alcancado = calcular_nivel(vitorias_jogador, derrotas_jogador)

print(f"O Herói tem um saldo de {saldo} e está no nível de {nivel_alcancado}")
