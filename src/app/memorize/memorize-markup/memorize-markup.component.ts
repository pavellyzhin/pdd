import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { elementFullModel } from 'src/app/iblock-model.model';
import { ManageDataService } from 'src/app/manage-data.service';

@Component({
  selector: 'app-memorize-markup',
  templateUrl: './memorize-markup.component.html',
  styleUrls: ['./memorize-markup.component.css']
})
export class MemorizeMarkupComponent implements OnInit {

  public sign: elementFullModel = new elementFullModel();
  public variants: elementFullModel[] = [];
  public list:elementFullModel[] = [];
  
  public quest:number = 0;
  public loose:number = 0;
  ///////////////
  public answerResult: boolean|null = null;
  public vIndex:number|null = null;
  public disable:boolean = false;

  constructor(
    private manageDataService: ManageDataService
  ) { 
    this.manageDataService.initMarkups();
    this.manageDataService.dataWaitMarkups.pipe(map((signs:elementFullModel[])=>{return signs.filter((item)=>item.type.entity.name=='markup')})).subscribe((e)=>{
      this.list = e;
      this.sign = this.randSign();
      this.variantes(3);

    });
  }

  public next(){
    this.disable=false;
    this.vIndex= null;
    this.answerResult = null;
    this.sign = this.randSign();
    this.variantes(3);

  }

  public randSign(){
    return this.list[Math.floor(Math.random() * this.list.length)];
  }

  public answer(item){
    this.quest++;
    this.disable = true;
    if(item.properties.meta.hook == this.sign.properties.meta.hook){
      // правильно
      this.answerResult = true;
      setTimeout(()=>{this.next();},3000);
    } else {
      // неправильно
      this.loose++;
      this.answerResult = false;
      setTimeout(()=>{this.next();},3000);
    }
  }

  public variantes(count=1){
    
    this.variants=[];
    let ar:elementFullModel[] = [];
    ar.push(this.sign);

    for(let i =0; i < count; i++){
      let a = this.randVariant(ar);
      ar.push(this.list[a]);
    }

    this.variants = this.shuffleArray(ar);
    
  }


  public shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

  public randVariant(ar:elementFullModel[]){
    let a = Math.floor(Math.random() * this.list.length);

    for(let i =0; i < ar.length; i++){
      if(this.list[a].entity.id == ar[i].entity.id){
        return this.randVariant(ar);
      } else {
        if(i+1 == ar.length){
          return a;
        }
      }
    }
  }

  public classVariant(num:number){
    this.vIndex = num;
  }

  ngOnInit() {
  }

}
