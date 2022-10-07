let multiArray=[1,2,3,[4,5,6,[7,8,[9,10]]]]


function flatArr(arr)
{
    let flatarray=[]

function flatNestedArray(arr1)
{
for (index=0 ; index<arr1.length ; index++)
{   let value=arr1[index]
    if(Array.isArray(value))
    {
        flatNestedArray(value)
    }
    else 
    {
        flatarray.push(value)
    }
}
}
flatNestedArray(arr)
console.log(flatarray)
}
 flatArr(multiArray)