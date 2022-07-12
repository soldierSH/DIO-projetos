import java.time.LocalDate;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

import br.com.dio.desafio.dominio.*;

public class Main {
    static Scanner scan = new Scanner(System.in);
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, DIO!");

        Curso cursoJS = new Curso();
        cursoJS.setTitulo("Sintaxe Básica em Javascript");
        cursoJS.setDescricao("Curso Javascript");
        cursoJS.setCargaHoraria(4);
        Curso cursoPython = new Curso();
        cursoPython.setTitulo("Segurança da informação com Python");
        cursoPython.setDescricao("Segurança com Python");
        cursoPython.setCargaHoraria(3);

        Mentoria mentoria = new Mentoria();
        mentoria.setTitulo("Habilidades dos profissionais do futuro.");
        mentoria.setDescricao("Para aqueles que desejam trabalhar remoto");
        mentoria.setData(LocalDate.now());

        Bootcamp boot = new Bootcamp();
        boot.setTitulo("Bootcamp Code Girls");
        boot.setDescricao("Santander Bootcamp 2022");
        boot.getConteudos().add(cursoJS);
        boot.getConteudos().add(cursoPython);
        boot.getConteudos().add(mentoria);

        Developer devScarlet = new Developer("Scarlet");
        devScarlet.IncreverBootcamp(boot);
        devScarlet.getConteudoConcluido().add(mentoria);
        Developer devHanna = new Developer("Hanna");
        devHanna.IncreverBootcamp(boot);
        
        System.out.println(devScarlet.toString());
        System.out.println(devHanna.toString());
        
        
    }
    
}
