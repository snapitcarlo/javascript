// https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

function myFunction() {
    var array_of_instances = document.getElementsByClassName("example");
    array_of_instances[0].innerHTML = "Hello World!";
    // for (class_instance of array_of_instances) {
    //     class_instance.innerHTML = "Hello World";
    //   }    
                        //This code is necessary if we want to change all occurences of said class
}

