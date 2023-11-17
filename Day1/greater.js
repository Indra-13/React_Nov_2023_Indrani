//arrow function
const clickEvent=() =>
{
    var first=parseInt(document.getElementById("FirstNum").value);
    var second=parseInt(document.getElementById("secondNum").value);
    if(first>second)
    {
        document.write(first+" is larger than "+second);
    }
    else{
        document.write(second+" is larger than "+first);
    }
};
clickEvent();