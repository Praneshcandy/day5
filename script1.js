 //Question:1 for the given json iterate over all for loops (for ,for in )
  //for loop
     var num = [10,20,30,40];
     for (var i=0;i<num.length;i++){
        console.log(num[i]);
     }
  // for in loop
   var person = {
    firstname : "Pranesh",
    middlename : "siva",
    lastname : "sakthi",
   };
   for (var a in person){
    console.log(a,person[a])
   };

 //Question 2: Create a own resume data in a JSON format
   var myresume = {
    "Name": "Pranesh",
    "age": "24",
    "email": "pranesh@gmail.com",
    "location": "ooty",
    "Degree":"Bachelor of Engineering",
    "stream": "Electronics and Instrumentation engineering"
   }
   console.log(myresume);
