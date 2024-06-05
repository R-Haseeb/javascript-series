        // Replace and Remove / child

// var newElement = document.createElement("li");
// var newText = document.createTextNode("WOW new Text");

// newElement.appendChild(newText);

// var target = document.getElementById("list");
// var oldElement = target.children[1];

// target.replaceChild(newElement,oldElement);
// target.removeChild(oldElement);

        // ClonNode 
// var target = document.getElementById("list").children[0];
// var copyElement = target.cloneNode(true);

// document.getElementById("list2").appendChild(copyElement);

        //contains()
// var perentElement = document.getElementById("outer");
// var target = document.getElementById("abc");
// var find = perentElement.contains(targert);

        // hasAttribute() and hasChildNodes()
// es ka matlb ha kisi bi line ma agr ak sa zayda attribute lagy hu tu uny dhonta ha

        // DOM isEqualNode()
// es ma do chezo ko compare kiya jata ha jesy ka 2 list hu hamry pass or un ma sa kiya kiya same ha or reply ma hamy ture ya false answer milta ha

        //Form Events
// function focusFunction(element){
//     element.style.background = "lime";
// }
// function blurFuncation(element){
//     element.style.background = "";
// }

        //Animation setInterval clearInterval

// var a = 0;
// setInterval(Anim,1000);

// function Anim(){
//     a = a + 10;
//     if(a == 200){
//         clearInterval(id);
//     }else{
//         var target = document.getElementById("test");
//         target.style.width = a + 'px';
//     }
// }


        // setTimeOut and clearTimeout
// var id = setTimeout(Anim, 5000);

// function Anim(){
//     var target = document.getElementById("test");
//     target.style.width = "500px";
// }
// function stopAnimation(){
//     clearTimeout(id);
// }