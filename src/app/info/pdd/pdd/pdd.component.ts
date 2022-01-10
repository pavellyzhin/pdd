import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { elementFullModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';

@Component({
  selector: 'app-pdd',
  templateUrl: './pdd.component.html',
  styleUrls: ['./pdd.component.css']
})
export class PddComponent implements OnInit {

  public list: elementFullModel[] = [];
  
  constructor(
    private manageDataService: ManageDataService
  ) { 
    this.manageDataService.initPdd();
    this.manageDataService.dataWaitPdd.pipe(map((pdd:elementFullModel[])=>{return pdd.filter((item)=>item.type.entity.name=='punkt')})).subscribe((e)=>{
      this.list = e;
      
    })
  }

  ngOnInit() {
  }

}
