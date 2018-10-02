import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public userService: UserService) { }

  fnome: string;
  femail: string;
  fsenha: string;
  respostaHTML: any;

  submitCreateUser(){
    var lUser = {
      nome: this.fnome,
      email: this.femail,
      senha: this.fsenha
    };

    this.respostaHTML = '<div class="alert alert-info" role="alert">Carregando...</div>';
    this.userService.createUser(lUser).subscribe( res => {
        if (res.ok == 1){
          this.respostaHTML = '<div class="alert alert-info" role="alert">OK: Usuario criado no banco de dados.</div>';
          setTimeout(function(){ this.respostaHTML = ''; }, 2000);
        }else{
          this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: '+res+'</div>';
          setTimeout(function(){ this.respostaHTML = ''; }, 2000);
        }
       }, error =>{
        this.respostaHTML = '<div class="alert alert-info" role="alert">ERRO: '+error+'</div>';
        setTimeout(function(){ this.respostaHTML = ''; }, 2000);
      });
  }

  ngOnInit() {
  }

}
