import { Component, OnInit } from '@angular/core';
import { elementFullModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';
import {filter, map} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-markup-group',
  templateUrl: './markup-group.component.html',
  styleUrls: ['./markup-group.component.css']
})
export class MarkupGroupComponent implements OnInit {

  public list: elementFullModel[] = [];
  public groupId:number = 0;
  


  constructor(
    private manageDataService: ManageDataService,
    private router: ActivatedRoute
  ) {
    this.manageDataService.initMarkups();
    this.router.params.subscribe((params) => {
      this.groupId = params['markupGroupId'];
      this.manageDataService.dataWaitMarkups.pipe(map((e) => {
          return e.filter((item)=>item.entity.hook==params['markupGroupId'])
      })).subscribe((e:elementFullModel[]) => {
        this.list = e;

      });
    });
    
  }

  ngOnInit() {
    
  }



  

}
