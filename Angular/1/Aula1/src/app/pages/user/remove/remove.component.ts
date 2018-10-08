import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  respostaJSON: any[] = [];
  respostaHTML: any;

  ngOnInit() {

  }
  
  constructor(public userService: UserService, private route: ActivatedRoute) {
    var varID = route.params['_value']['getID'];
    var Query = {
      id: varID
    };
    console.log(Query);
    this.userService.deleteUser(Query).subscribe( res => {
        this.respostaJSON = res;
        console.log(this.respostaJSON);
    }, error =>{
      this.respostaJSON = error;
    });

   }

}
