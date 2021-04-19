
import java.io.*;

public class Main {
  public static void main(String[] args) {
    System.out.println("<%= intro %>");

    try {
      System.out.println("What was your name again..?");
      BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
      String name = reader.readLine();

      // Printing the read line
      System.out.println("Oh right, hi " + name);
    } catch (IOException ioe) {
    }
  }
}