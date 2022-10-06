let arr1 = [8, 11, 13, 15, 2]

function mulelement(arr) 
{
    let newarr = []
    for (index = 0; index <arr.length; index++) 
    {
        if (index != (arr.length-1)) 
        {
            let newelement = arr[index] * arr[index + 1]
            newarr.push(newelement)
        }

        else 
        {
            newelement=arr[index] * arr[0]
            newarr.push(newelement)
        }
    }
    console.log(newarr)
}

mulelement(arr1)