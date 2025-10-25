import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class TwoSum {
    public static void main(String[] args) {
        int[] arr = {2, 7, 11, 15};
        int target = 9;
        
        int[] result = twoSum(arr, target);
        System.out.println(Arrays.toString(result)); // Output: [0, 1]
    }
    
	static int[] twoSum(int[] arr, int target){
		Map<Integer, Integer> map = new HashMap<>();
		
		for(int i=0; i<arr.length; i++){
			int complement = target - arr[i];
			
			if(map.containsKey(complement)){
				return new int[]{map.get(complement), i};
			}
			
			map.put(arr[i], i);
		}
		
		return new int[]{};
	}
}
