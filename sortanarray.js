//Objective is to sort an array in nlogn time.

let nums = [1,5,3,9,7]


//O(nlogn) solution using merge sort (divide and conquer) to mid split, sort,
//then put back together the array.

function mergeSort(list) {
    if (list.length < 2) {
        return list
    }

    //Find the middle of the array, then split the array into two
    //and keep splitting until we have single elements
    let mid = Math.floor(list.length / 2)
    let left = mergeSort(list.slice(0, mid))
    let right = mergeSort(list.slice(mid, list.length))

    //Once we're done splitting, merge everything back together
    return merge(left, right)

    //Merge function is to find the lower between two elements then push
    //it into the result. Then at the end, we concat the two splits together
    function merge(left, right) {
        let result = []
        while (left.length && right.length) {
            result.push(left[0] < right[0] ? left.shift() : right.shift())
        }
        return result.concat(left, right)
    }
}
return mergeSort(nums)


//O(nlogn) solution using quick sort to find a pivot, sort, and then recursively
//call the smaller side until it is empty

function quickSort(list) {
    if (list.length < 2) {
        return list
    }

    //Use a random pivot - the first element in this case
    let pivot = list[0]
    let left = []
    let right = []

    //Put all elements less than and greater than the pivot
    //into two arrays
    for (let i = 1; i < list.length; i++) {
        if (pivot >= list[i]) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }

    //Sort the left side again, then add on the pivot and right array
    return quickSort(left).concat(pivot, right)
}
return quickSort(nums)