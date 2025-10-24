import java.util.HashMap;
import java.util.HashSet;

public class ContainsDuplicate {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 1};
        System.out.println(containsDuplicate(arr));
    }

    static boolean containsDuplicate(int[] arr){

        HashSet<Integer> seenNumbers = new HashSet<>();

        for(int num : arr){
            if(seenNumbers.contains(num)){
                return true;
            }

            seenNumbers.add(num);
        }

        return false;
    }
}
