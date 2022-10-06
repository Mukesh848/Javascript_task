var arr = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function randomPassword(length) 
{
    var arrlength = arr.length
    var randomNumber
    var pass = ''
    for (index = 1; index <= length; index++)
     {
        randomNumber = Math.floor(Math.random() * arrlength)
        pass += arr[randomNumber]
    }
    console.log("Random Password :" + pass)
}

randomPassword(7)