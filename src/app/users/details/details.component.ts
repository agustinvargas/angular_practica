import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  dataSource = {} as User;
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  loader: boolean = false;
  texto!: any;

  user$!: Observable<User>;
  constructor(private usersSvc: UsersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];
    if (Number(userId)) {
      this.loader = true;
      this.user$ = this.usersSvc.getUser(userId);
    } else {
      alert('ID inválido');
    }
    // const userId = this.route.snapshot.params['id'];
    // this.loader = true;
    // this.usersSvc.getUser(userId).subscribe({
    //   next: (user: User) => {
    //     console.log('USUARIO', user);
    //     this.dataSource = user;
    //     console.log('DATA', this.dataSource);
    //   },
    //   error: (err) => console.log(err),
    //   complete: () => (this.loader = false),
    // });
    this.gettingText();
  }

  gettingText(): void {
    this.usersSvc.text$.subscribe({
      next: (t) => {
        console.log('T', t);
        this.texto = t;
      },
    });
  }
}
