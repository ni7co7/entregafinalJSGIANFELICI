document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginUsernameInput = document.getElementById("login-username");
    const loginPasswordInput = document.getElementById("login-password");
  
    const registerForm = document.getElementById("register-form");
    const registerUsernameInput = document.getElementById("register-username");
    const registerPasswordInput = document.getElementById("register-password");
    const registerConfirmPasswordInput = document.getElementById("register-confirm-password");
  
    // Obtener usuarios registrados del almacenamiento local o crear un array vacío
    const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];
  
    // Manejar el formulario de registro
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = registerUsernameInput.value;
      const password = registerPasswordInput.value;
      const confirmPassword = registerConfirmPasswordInput.value;
  
      if (password !== confirmPassword) {
        showError("Passwords do not match.");
        return;
      }
  
      // Agregar el usuario registrado al array
      registeredUsers.push({ username, password });
      // Almacenar el array actualizado en localStorage
      localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
      showSuccess("Registration successful!");
    });
  
    // Manejar el formulario de inicio de sesión
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = loginUsernameInput.value;
      const password = loginPasswordInput.value;
  
      // Verificar si el usuario está registrado
      const storedUser = registeredUsers.find(user => user.username === username && user.password === password);
  
      if (storedUser) {
        showSuccess("Login successful!");
      } else {
        showError("Invalid username or password.");
      }
    });
  
    function showSuccess(message) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: message,
      });
    }
  
    function showError(message) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: message,
      });
    }
  });
  