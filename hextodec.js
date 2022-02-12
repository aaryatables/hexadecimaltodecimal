function hexadecimaltodecimal() {
    var user_input = document.getElementById("user_input").value;
    var converttobig = new BigNumber(user_input , 16);
    var answerconversionr = converttobig.toString(10);
    document.getElementById("answer").innerHTML = answerconversionr;

   }
