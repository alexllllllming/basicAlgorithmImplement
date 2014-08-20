/**
 * Created by AlexTesng
 * 2014-08-19
 *
 */

!function(){
     // local variable
     var i,            // outer loop counter
         j,            // inner loop counter
         n,            // total num of the outer loop
         key,          // index of element being put forward
         temp,         // for varible swap
         arr,

         // defalue compare function 
         cmp = function(left, right){
                // put forward if greater
                if (left > right)
                    return 1;

                // keep stable when left and right equal
                else
                    return -1;
            };

    // time complexity: O(n^2)
    Array.prototype.selectSort = function(compare){
         
        arr = this;

        // compare function
        compare = compare ? compare : cmp;

        // outer loop: 0 to n-2
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

    // time complexity: O(n^2)
    Array.prototype.bubbleSort = function(compare){
        arr = this;

        // compare function
        compare = compare ? compare : cmp;

        // outer loop: 0 to n-2
        for (i = 0, n = arr.length - 1; i < n; i++){
            for (j = 0; j < n - i; j++){
                if (compare(arr[j], arr[j+1]) > 0){
                    // swap key and i
                    temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    };

    // time complexity: O(nlogn)
    Array.prototype.mergeSort = function(compare){

        // compare function
        compare = compare ? compare : cmp;

        var that = this,

            // merge function
            merge = function(left, right, arr){
             var lLength = left.length,
                    rLength = right.length,
                    i = 0, // left pointer
                    j = 0, // right pointer
                    k = 0; // arr point

             while (i < lLength && j < rLength){
            
                if(compare(left[i], right[j]) > 0)
                    arr[k++] = right[j++];
                    else
                        arr[k++] = left[i++];
                }
        
                // left array all copid and not right
                if (i == lLength && j < rLength){
                    // copy the left part
                    for(;j < rLength; j++)
                        arr[k++] = right[j]
                }
                else if (j == rLength && i < lLength){
                    // copy the left part
                    for (;i < lLength; i++)
                        arr[k++] = left[i]
                }
        };
        // return annoymous for not detecting compare everytime
        // and reuse the merge function
        return (function(){
            var length = that.length;

            if (length > 1){
        
                // divide
                var left = that.slice(0, length/2),
                    right = that.slice(length/2);

                left.mergeSort(compare);
                right.mergeSort(compare);

                // merge 
                merge(left, right, that);
            }

        })();

    };


}();


