import java.util.Arrays;
import java.util.Scanner;

public class anagram{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the first string:");
        String str1 = sc.nextLine();

        System.out.println("Enter the second string:");
        String str2 = sc.nextLine();

        boolean result = areAnagrams(str1, str2);
        System.out.println("Are the two strings anagrams? " + result);
    }

    public static boolean areAnagrams(String str1, String str2) {
        if (str1.length() != str2.length()) {
            return false;
        }

        char[] charArray1 = str1.toCharArray();
        char[] charArray2 = str2.toCharArray();

        Arrays.sort(charArray1);
        Arrays.sort(charArray2);

        return Arrays.equals(charArray1, charArray2);
    }
}