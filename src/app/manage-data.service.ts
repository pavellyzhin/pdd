import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { elementFullModel, elementShortModel } from './iblock-model.model';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {

  public dataWaitPdd: Subject<elementFullModel[]> = new Subject();
  public dataWaitSigns: Subject<elementFullModel[]> = new Subject();
  public dataWaitMarkups: Subject<elementFullModel[]> = new Subject();

  public pddList: elementFullModel[] = [];
  public signsList: elementFullModel[] = [];
  public markupsList: elementFullModel[] = [];

  constructor(
    private http: HttpClient
  ) { 
    this.dataWaitPdd.subscribe((e) => {
      this.pddList = e;
    });

    this.dataWaitSigns.subscribe((e) => {
      this.signsList = e;
    });

    this.dataWaitMarkups.subscribe((e)=>{
      this.markupsList = e;
    });    
    
  }

  public initMarkups(){
    this.http.get('./assets/markups.json').subscribe((data:elementFullModel[])=>{
      this.dataWaitMarkups.next(data);
    });
  }

  public initPdd(){
    this.http.get('./assets/pdd.json').subscribe((data:elementFullModel[])=>{
      this.dataWaitPdd.next(data);
    });
  }

  public initSigns(){
    this.http.get('./assets/signs.json').subscribe((data:elementFullModel[]) => {
      this.dataWaitSigns.next(data);
    });
  }

  public getById(id:number,list:elementFullModel[]){
      for(let i = 0 ; i < list.length;i++){
        if(list[i].entity.id == id){
          return list[i];
        }
        if(list.length == i+1) {
          return new elementFullModel();
        }
      }
  }

  public getByTypeName(typeName:string,list:elementFullModel[]){
      let ar = [];
      for(let i = 0; i < list.length; i++){
        if(typeName == list[i].type.entity.name){
          ar.push(list[i]);
        }
      }
      return ar;
  }

  public getListByHook(hook:number,list:elementFullModel[]):elementFullModel[]{
    let ar = [];
    for(let i =0; i < list.length;i++){
      if(hook == list[i].entity.hook){
        ar.push(list[i]);
      }
    }
    return ar;
  }


}
