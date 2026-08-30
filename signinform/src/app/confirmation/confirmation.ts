import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css'
})
export class Confirmation {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {

  let id = Number(this.route.snapshot.paramMap.get('id'));

  console.log('ID:', id);

  this.userService.getUser(id).subscribe({
    next: (result: any) => {
      console.log('USER:', result);
      this.user = result;
    },
    error: (error) => {
      console.log('ERROR:', error);
    }
  });
}
}