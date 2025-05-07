import java.util.Scanner;

public class nombre {
    public static void main(String[] args) {

        String nombre;
        String apellido;
        String edad;
        Scanner scannear = new Scanner(System.in);
        System.out.println("introduce tu nombre");
        nombre = scannear.nextLine();
        System.out.println("introduce tu apellido");
        apellido = scannear.nextLine();
        System.out.println("introduce tu edad");
        edad = scannear.nextLine();
        System.out.println("Hola tu nombre es " + nombre + " " + apellido + " y tu edad es " + edad);
        scannear.close();
    }

}
