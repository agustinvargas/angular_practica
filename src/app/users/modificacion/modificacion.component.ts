import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.scss'],
})
export class ModificacionComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', Validators.required],
  });
  idParam!: number;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userSvc: UsersService
  ) {}

  ngOnInit(): void {
    this.idParam = this.route.snapshot.params['id'];
    console.log('El parametro es', this.idParam);
    if (Number(this.idParam)) {
      this.userSvc.getUser(this.idParam).subscribe({
        next: (user: User) => {
          this.form.controls['name'].setValue(user.name);
          this.form.controls['username'].setValue(user.username);
          this.form.controls['email'].setValue(user.email);
        },
        error: (err) => console.log('Hubo un error', err),
      });
    }
  }

  edittingUser() {
    if (this.form.valid) {
      const userEdited = this.form.value;
      this.userSvc.editUser(this.idParam, userEdited).subscribe({
        next: (user: User) => console.log(user),
      });
    } else {
      alert('Debés completar todos los campos');
    }
  }
}
