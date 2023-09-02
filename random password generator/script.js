function generatePassword() {
    var length = 15; // Length of the generated password
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()"; // Characters to include in the password
    var password = "";
  
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    return password;
  }
  
  document.getElementById("generate-btn").addEventListener("click", function() {
    var generatedPassword = generatePassword();
    document.getElementById("password").value = generatedPassword;
  });
  

  function copyText() {
    var input = document.getElementById("password");
    input.select();
  
    navigator.clipboard.writeText(input.value)
      .then(function() {
        console.log("Text copied to clipboard");
      })
      .catch(function(error) {
        console.error("Unable to copy text: ", error);
      });
  }
  