import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrls: ['/../../assets/css/estilos4.css']
})
export class Register {
evaluarSeguridad() {
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const strengthBar = document.getElementById('strength-bar') as HTMLElement;

  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[@$!%*?&]/.test(password)) strength++;

  strengthBar.style.width = strength * 20 + '%';
  strengthBar.className = 'strength-bar';

  if (strength <= 2) {
    strengthBar.classList.add('weak');
  } else if (strength <= 4) {
    strengthBar.classList.add('medium');
  } else {
    strengthBar.classList.add('strong');
  }
}

}
