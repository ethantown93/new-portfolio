import { Component, OnInit } from '@angular/core';
import { UpdateNavService } from '../../services/update-nav.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  constructor(private http: HttpClient, private nav: UpdateNavService) { }

  languagesData: any = [];

  ngOnInit(): void {

    this.nav.getLang().subscribe( res => {
      if(res){
        console.log(res)
        this.languagesData = res;
      }
    })
  }

}
