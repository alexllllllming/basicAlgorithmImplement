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

         // defalue compare function 
         cmp = function(left, right){
                // put forward if greater
                if (left > right)
                    return 1

                // keep stable when left and right equal
                else
                    return -1
            }

    // time complexity: O(n^2)
    Array.prototype.selectSort = function(compare){

       // local variable
       var i,            // outer loop counter
           j,            // inner loop counter
           n,            // total num of the outer loop
           key,          // index of element being put forward
           temp          // for varible swap    

        // compare function
        compare = compare ? compare : cmp

        // outer loop: 0 to n-2
        for (i = 0, n = this.length - 1; i < n; i++){

            key = i
            //  find the smallest element between j to the last
            for (j = i + 1; j <= n; j++){

                if (compare(this[key],this[j]) > 0)
                    key = j
            }

            // swap key and i
            temp = this[i]
            this[i] = this[key]
            this[key] = temp
        }
    }

    // time complexity: O(n^2)
    Array.prototype.bubbleSort = function(compare){

        // local variable
        var i,            // outer loop counter
            j,            // inner loop counter
            n,            // total num of the outer loop
            key,          // index of element being put forward
            temp          // for varible swap 
        // compare function
        compare = compare ? compare : cmp

        // outer loop: 0 to n-2
        for (i = 0, n = this.length - 1; i < n; i++){
            for (j = 0; j < n - i; j++){
                if (compare(this[j], this[j+1]) > 0){
                    // swap key and i
                    temp = this[j+1]
                    this[j+1] = this[j]
                    this[j] = temp
                }
            }
        }
    }

    // time complexity: O(nlogn)
    Array.prototype.mergeSort = (function(compare){

        var defaultCmp = cmp, 
            // merge function
            merge = function(left, right, arr,compare){

                var lLength = left.length,
                    rLength = right.length,
                    i = 0, // left pointer
                    j = 0, // right pointer
                    k = 0 // arr point

                while (i < lLength && j < rLength){
            
                    if(compare(left[i], right[j]) > 0)
                        arr[k++] = right[j++]
                    else
                        arr[k++] = left[i++]
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
        }
        // reuse the merge function
        return function(compare){

            // compare function
            compare = compare ? compare : defaultCmp

            var length = this.length

            if (length > 1){
        
                // divide
                var left = this.slice(0, length/2),
                    right = this.slice(length/2)

                left.mergeSort(compare)
                right.mergeSort(compare)

                // merge 
                merge(left, right, this, compare)
            }

        }

    })()

    Array.prototype.quickSort = function() {
            
            var i = 1,                 // left pointer
                temp,
                length = this.length,
                j = length - 1,        // right pointer
                key = this[0]

            // compare function
            compare = compare ? compare : defaultCmp

            // prevent i point out of bound
            this.push(key)

            // patition 
            while (true){
                // increase until meet greater than key
                while (this[i] < key){
                    i++;
                }
                // decrease until meet smaller than key
                while (this[j] > key){
                    j--;
                }
                
                if (i < j){
                    // swap 
                    temp = this[i]
                    this[i++] = this[j]
                    this[j++] = temp
                }
                else{
                    break;
                }
            }

            // remove the last 
            this.splice(length)

            // swap key and this[j]
            this[0]= this[j]
            this[j] = key 
            quickSort(this.slice(0,j))


        
    }
    

     


}()


