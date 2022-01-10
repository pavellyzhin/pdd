import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { elementFullModel, propertyContentModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';

@Component({
  selector: 'app-markup',
  templateUrl: './markup.component.html',
  styleUrls: ['./markup.component.css']
})
export class MarkupComponent implements OnInit {

  public item: elementFullModel = new elementFullModel();
  public prevItem: elementFullModel = new elementFullModel();
  public nextItem: elementFullModel = new elementFullModel();

  public groupId:number = 0;
  public itemId:number = 0;

 
  constructor(
    private manageDataService: ManageDataService,
    private router: ActivatedRoute
  ) { 
    this.router.params.subscribe((params) => {
      this.groupId = params['markupGroupId'];
      this.itemId  = params['markupId'];
      this.manageDataService.initMarkups();
      this.manageDataService.dataWaitMarkups.pipe(map((markups)=>{ return markups.filter((item)=>item.entity.hook==this.groupId)})).subscribe((e) => {
        this.item = e.filter((item,i) => item.entity.id==this.itemId)[0];

        for(let i =0; i < e.length; i++){
          if(e[i].entity.id == this.itemId){
            this.item = e[i];
            this.prevItem = (i == 0) ? e[e.length-1] : e[i-1];
            this.nextItem = (i+1 == e.length) ? e[0] : e[i+1];
          }
        }

      });
    });
  }

  ngOnInit() {
  }

}
