import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { map } from 'rxjs/operators';
import { elementFullModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';

@Component({
  selector: 'app-sign-group',
  templateUrl: './sign-group.component.html',
  styleUrls: ['./sign-group.component.css']
})
export class SignGroupComponent implements OnInit {

  public list: elementFullModel[]= [];
  
  public groupId:number = 0;

  constructor(
    private manageDataService: ManageDataService,
    private router: ActivatedRoute
  ) { 
    this.manageDataService.initSigns();
    this.router.params.subscribe((params)=>{
      this.groupId = params['signGroupId'];
      this.manageDataService.dataWaitSigns.pipe(map((signs:elementFullModel[])=>{return signs.filter((item)=>item.entity.hook==this.groupId)})).subscribe((e:elementFullModel[])=>{
        this.list = e;
      });
    });
  }

  ngOnInit() {
  }

}
