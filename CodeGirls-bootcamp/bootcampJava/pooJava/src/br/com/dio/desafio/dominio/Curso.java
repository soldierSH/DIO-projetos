package br.com.dio.desafio.dominio;

public class Curso  extends Conteudo{
    private int cargaHoraria;
    
    

    //getters e setters
    public int getCargaHoraria() {
        return cargaHoraria;
    }

    public void setCargaHoraria(int cargaHoraria) {
        this.cargaHoraria = cargaHoraria;
    }
    
    //override
    @Override
    public double calcularXP() {
        // TODO Auto-generated method stub
        return XP_PADRAO * cargaHoraria;
    }

    @Override
    public String toString() {
        return "Curso:\n"+
        "Titulo = " + getTitulo() +
        "\nDescrição = " + getDescricao() +
        "\nCarga Horária = " + cargaHoraria + "\n";
    }

    
}
