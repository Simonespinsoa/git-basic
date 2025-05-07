import java.util.Scanner;

public class suma2 {
    public static void main(String[] args) {
        int numero1;
        int numero2;
        int suma;
        int resta;
        int multiplicar;
        System.out.println("introduce el primer numero");
        Scanner scann = new Scanner(System.in);
        numero1 = scann.nextInt();
        System.out.println("introduce el segundo numero");
        numero2 = scann.nextInt();
        suma = numero1 + numero2;
        System.out.println("La suma de " + numero1 + " y " + numero2 + " es: " + suma);
        resta = numero1 - numero2;
        System.out.println("La resta de " + numero1 + " y " + numero2 + " es: " + resta);
        multiplicar = numero1 * numero2;
        System.out.println("La multiplicacion de " + numero1 + " y " + numero2 + " es: " + multiplicar);
        scann.close();
    }
    
}
