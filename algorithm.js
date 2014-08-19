/**
 * Created by AlexTesng
 * 2014-08-19
 *
 */

!function(){
    Array.prototype.selectSort = function(compare){

        var i,            // outer loop counter
            j,            // inner loop counter
            n,            // total num of the outer loop
            key,          // index of element being put forward
            temp,         // for varible swap
            arr = this;
        if (!compare){
            // default order: ascending
            compare = function(left, right){
                // put forward if greater
                if (left > right)
                    return 1;

                // keep stable when left and right equal
                else
                    return -1;
            }
        }
        
        // time complexity: O(n^2)
        for (i = 0, n = arr.length - 1; i < n; i++){

            key = i;
            //  find the smallest element between j to the last
            for (j = i + 1; j <= n; j++){

                if (compare(arr[key],arr[j]) > 0)
                    key = j;
            }

            // swap key and i
            temp = arr[i];
            arr[i] = arr[key];
            arr[key] = temp;
        }
    };

}();

