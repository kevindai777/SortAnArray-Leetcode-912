//Objective is to sort an array in nlogn time.

let nums = [1,5,3,9,7]


//O(nlogn) solution using merge sort (divide and conquer) to mid split, sort,
//then put back together the array.

function mergeSort(list) {
    if (list.length < 2) {
        return list
    }

    let mid = Math.floor(list.length / 2)
    let left = mergeSort(list.slice(0, mid))
    let right = mergeSort(list.slice(mid, list.length))

    return merge(left, right)

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

    let pivot = list[0]
    let left = []
    let right = []

    for (let i = 1; i < list.length; i++) {
        if (pivot >= list[i]) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }

    return quickSort(left).concat(pivot, right)
}
return nums