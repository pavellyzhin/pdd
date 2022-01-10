import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { elementFullModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';

@Component({
  selector: 'app-punkt',
  templateUrl: './punkt.component.html',
  styleUrls: ['./punkt.component.css']
})
export class PunktComponent implements OnInit {

  
  public list: elementFullModel[]= [];
  
  public groupId:number = 0;

  
  public listChild: elementFullModel[][] = [];
  
  constructor(
    private manageDataService: ManageDataService,
    private router: ActivatedRoute
  ) { 
    
    this.router.params.subscribe((params)=>{
      this.groupId = params['punktId'];
      this.manageDataService.initPdd();
      this.manageDataService.dataWaitPdd.pipe(map((signs:elementFullModel[])=>{return signs.filter((item)=>item.type.entity.name=='podpunkt')})).subscribe((e:elementFullModel[])=>{
        this.list = e.filter((item)=>item.entity.hook==this.groupId);

      for(let z = 0; z < this.list.length; z++ ){
        let a = e.filter((item)=>item.entity.hook==this.list[z].entity.id);
        this.listChild.push(a);
      }
      console.log(this.listChild);
  
      });
    });
  }

  ngOnInit() {
  }

}
