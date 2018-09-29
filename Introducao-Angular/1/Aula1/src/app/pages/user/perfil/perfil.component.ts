import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public userService: UserService) { }

  fnome: string;
  femail: string;
  fsenha: string;

  submitCreateUser(){
    var lUser = {
      nome: this.fnome,
      email: this.femail,
      senha: this.fsenha
    };

    $('#respostaForm').html('<div class="alert alert-info" role="alert">Carregando...</div>');
    this.userService.createUser(lUser).subscribe({
      next(res) {
        if (res.ok == 1){
          $('#respostaForm').html('<div class="alert alert-info" role="alert">OK: Usuario criado no banco de dados.</div>');
          setTimeout(function(){ $('#respostaForm').html(''); }, 2000);
        }else{
          $('#respostaForm').html('<div class="alert alert-info" role="alert">ERRO: '+res+'</div>');
          setTimeout(function(){ $('#respostaForm').html(''); }, 2000);
        }
      },
      error(err) {
        $('#respostaForm').html('<div class="alert alert-info" role="alert">ERRO: '+err+'</div>');
        setTimeout(function(){ $('#respostaForm').html(''); }, 2000);
      }

    });
  }

  ngOnInit() {
  }


}
