import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatasService } from 'src/app/service/datas.service';

@Component({
  selector: 'app-unit-detail-page',
  templateUrl: './unit-detail-page.component.html',
  styleUrls: ['./unit-detail-page.component.scss']
})
export class UnitDetailPageComponent implements OnInit {

  constructor(private dataServices: DatasService, private route: ActivatedRoute) { }
  dat: any;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.dataServices.getDataId(id).subscribe(x => {
      console.log(x);
      this.dat =x

    })
  }


}
