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
            min,          // index of min
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
        for (i = 0, n = arr.length - 1; i < n -1; i++){

            min = i;
            //  find the smallest element between j to the last
            for (j = i + 1; j < n; j++){

                if (compare(arr[min]) > 0)
                    min = j;
            }

            // swap min and i
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    };

}();

