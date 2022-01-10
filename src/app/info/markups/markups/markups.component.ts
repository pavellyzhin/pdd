import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { elementFullModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';

@Component({
  selector: 'app-markups',
  templateUrl: './markups.component.html',
  styleUrls: ['./markups.component.css']
})
export class MarkupsComponent implements OnInit {

  list: elementFullModel[] = [];

  constructor(
    private manageDataService: ManageDataService
  ) { 
    this.manageDataService.initMarkups();
    this.manageDataService.dataWaitMarkups.pipe(map((markups:elementFullModel[])=>{return  markups.filter((item:elementFullModel)=>item.type.entity.name=='group_markup')})).subscribe((markups:elementFullModel[])=>{
      this.list=markups;
    });
  }

  ngOnInit() {
  }

}
