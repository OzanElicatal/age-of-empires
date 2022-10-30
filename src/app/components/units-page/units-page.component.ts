import { Component, OnInit } from '@angular/core';
import { DatasService } from 'src/app/service/datas.service';
import { iData } from 'src/app/Model/data';
import { Router } from '@angular/router';


@Component({
  selector: 'app-units-page',
  templateUrl: './units-page.component.html',
  styleUrls: ['./units-page.component.scss']
})
export class UnitsPageComponent implements OnInit {
  public localData: iData[] = []
  public Data: any = null;
  // filterData: iData[];



  constructor(private DatasService: DatasService, private router: Router ){

  }
  ngOnInit(): void {
    // this.getData()
    this.DatasService.getDatas().subscribe(x => 
      this.Data = x);
    
  }
  
 
  
  
  
  
}
