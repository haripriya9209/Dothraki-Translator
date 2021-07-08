var translteButton= document.querySelector("#translate-btn");
var input= document.querySelector("#inputtext");
var output=document.querySelector("#outputtext");

function completeurl(text){

    return "https://api.funtranslations.com/translate/dothraki.json" +"?"+"text="+ text;
    
}

function clickHandle(){ 
    var inputvalue= input.value;
    fetch(completeurl(inputvalue))
    .then(response => response.json()) //converting response to json
    .then(json=>  
    {
        if(input.value=="")
        {
        alert("Please enter text");  //error message
        }
        else{
            output.value=json.contents.translated;
        }
    })
}


translteButton.addEventListener("click",clickHandle); //click action on translate button