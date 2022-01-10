import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { elementFullModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-signs',
  templateUrl: './signs.component.html',
  styleUrls: ['./signs.component.css']
})
export class SignsComponent implements OnInit {

  public list: elementFullModel[] = [];
  

  constructor(
    private manageDataService: ManageDataService,
    private route: ActivatedRoute
  ) { 
    this.manageDataService.initSigns();
    
    this.manageDataService.dataWaitSigns.pipe(map((signs:elementFullModel[])=>{ 
        return signs.filter((item)=>item.type.entity.name==' group_road_sign')
      })).subscribe((e:elementFullModel[])=>{
      this.list = e;


    });
  }

  ngOnInit() {
  }

}
