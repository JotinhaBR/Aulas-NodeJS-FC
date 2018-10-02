import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {

  respostaJSON: any[] = [];
  respostaHTML: any;
  
  constructor(public userService: UserService) {

    this.respostaHTML = '<div class="alert alert-info" role="alert">Carregando...</div>';

    this.userService.buscarUser({}).subscribe( res => {
        this.respostaJSON = res;
        this.AtivarDataTable();
        this.respostaHTML = '';
    }, error =>{
      this.respostaJSON = error;
    });

   }

  ngOnInit() {
    
  }

  AtivarDataTable(){
      $(document).ready(function() {
        $('#Tabela').DataTable({
              responsive: true,
              order: [0, "desc"]
        });
      });
  }

}
