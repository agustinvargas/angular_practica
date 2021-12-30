import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  dataSource!: User[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'action'];
  loader: boolean = false;
  texto!: any;
  constructor(private usersSvc: UsersService, private router: Router) {}

  ngOnInit(): void {
    this.gettingUsers();
  }

  gettingUsers(): void {
    this.loader = true;
    this.usersSvc.getUsers().subscribe({
      next: (users: User[]) => {
        this.dataSource = users;
      },
      error: (err) => console.log(err),
      complete: () => (this.loader = false),
    });
  }
  goToDetails(id: number): void {
    this.router.navigate([`usuarios/detalle/${id}`]);
  }
  goToEdit(id: number): void {
    this.router.navigate([`usuarios/modificar/${id}`]);
  }

  removeUser(id: number) {
    this.loader = true;
    this.usersSvc.deleteUser(id).subscribe({
      next: () => {
        this.dataSource = this.dataSource.filter((user) => user.id != id);
      },
      error: (err) => console.log('Error al eliminar usuario', err),
      complete: () => (this.loader = false),
    });
  }

  text(text: any): void {
    console.log(text.target.value);
    this.texto = text.target.value;
    this.usersSvc.setText(this.texto);
  }
}
