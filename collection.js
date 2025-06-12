var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var prodctlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0; count<prodctlist.length;count=count+1)
    {
        var productname = prodctlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }

    }
})