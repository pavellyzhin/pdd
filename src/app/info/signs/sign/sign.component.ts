import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { elementFullModel, propertyContentModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  public groupId:number = 0;
  public itemId:number = 0;

  public list: elementFullModel[] = [];

  public item: elementFullModel = new elementFullModel();
  public prevItem: elementFullModel = new elementFullModel();
  public nextItem: elementFullModel = new elementFullModel();

  constructor(
    private manageDataService: ManageDataService,
    private router: ActivatedRoute
  ) { 
    this.router.params.subscribe((params)=>{
      this.groupId = params['signGroupId'];
      this.itemId = params['signId'];
      this.manageDataService.initSigns();
      this.manageDataService.dataWaitSigns.pipe(map((signs:elementFullModel[])=>{return signs.filter((item)=>item.entity.hook==this.groupId)})).subscribe((e)=>{
        this.list = e;

        for(let i =0; i < e.length; i++){
          if(e[i].entity.id == this.itemId){
            this.item = e[i];
            this.prevItem = (i == 0) ? e[e.length-1] : e[i-1];
            this.nextItem = (i+1 == e.length) ? e[0] : e[i+1];
          }
        }
        
      });
    })
  }

  ngOnInit() {
  }

}
