import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static void main(String[] args) {
        int[] arr = {15, 7, 3, 2};
        int target = 9;
        System.out.println(Arrays.toString(twoSum(arr, target)));
    }

    static int[] twoSum(int[] arr, int target){
        Map<Integer, Integer> map = new HashMap<>();

        for(int i=0; i<arr.length; i++){
            int compliment = target - arr[i];

            if(map.containsKey(compliment)){
                return new int[]{map.get(compliment), i};
            }

            map.put(arr[i], i);
        }

        return new int[]{};
    }
}
