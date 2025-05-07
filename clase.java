import java.util.Scanner;

public class clase {
    public static void main(String[] args) {
        int numero;
        System.out.println("introduc un numero");
        Scanner scann = new Scanner(System.in);
        numero = scann.nextInt();
        int cuadrado = numero * numero;
        System.out.println("El cuadrado de " + numero + " es: " + cuadrado);

        double cuadradoConMath = Math.pow(numero, 2);
        System.out.println("El cuadrado de " + numero + " es: " + cuadradoConMath);
        scann.close();
    }
}
