const validation = document
  .getElementById("signup_btn")
  .addEventListener("click", e => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;
    let username = document.getElementById("username").value;

    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confirm);

    if (email) {
      if (!password || !confirm) {
        // alert("fill both boxes!");
      } else if (password != confirm) {
        alert("passwords do not match!");
        e.preventDefault();
      } else {
        // alert("yeah they are the same pal");
      }
    } else {
      //   alert("enter email and username!");
    }
  });
