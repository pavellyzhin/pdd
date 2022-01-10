export class elementModel {
    id: number;
    hook: number;
    type: number;
}

export class elementShortModel {
    entity: elementModel = new elementModel();
    hook: elementModel = new elementModel();
    type: typeShortModel = new typeShortModel();
    properties: propertyModel[];
}

export class elementFullModel {
    entity: elementModel = new elementModel();
    hook: elementShortModel = new elementShortModel();
    type: typeShortModel = new typeShortModel();
    child: elementFullModel[] = [];
    properties: any = {};
}

export class metaModel {
    hook: number;
    title: string;
    keywords: string;
    description: string;
}

export class typeShortModel {
     entity: typeModel = new typeModel();
     typeType: typeTypeModel[] = [];
     typeProperty: typePropertyModel[] = [];
     typePropertyValue: typePropertyValueModel[] = [];
}

export class typeModel {
    id: number|null;
    title: string|null;
    name: string|null;
    basic: boolean

    /*constructor(obj:{id:number|null,title:string|null,name:string|null,basic:boolean} = {id:null,title:null,name:null,basic:false}){
        this.id = (obj.id) ? obj.id : null;
        this.title = (obj.title) ? obj.title : null;
        this.name = (obj.name) ? obj.name : null;
        this.basic= (obj.basic)? obj.basic : false;
    }*/
}

export class typeTypeModel{
    hook: number;
    type: number;
}

export class typeTypeShortModel{
    hook: typeModel = new typeModel();
    type: typeModel = new typeModel();

}

export class typePropertyModel{
    hook: number;
    property: number;
}


export class typePropertyValueModel{
    hook: number;
    property: number;
    value:number;
}
export class propertyModel{
    id: number|null;
    title: string|null;
    name: string|null;
    

    constructor(obj:{id:number|null,title:string|null,name:string|null} = {id:null,title:null,name:null}){
        this.id = (obj.id) ? obj.id : null;
        this.title = (obj.title) ? obj.title : null;
        this.name = (obj.name) ? obj.name : null;
    
    }
}

export class valueModel {
    id: number|null;
    title: string|null;
    name: string|null;

    constructor(obj:{id:number|null,title:string|null,name:string|null} = {id:null,title:null,name:null}){
        this.id    = (obj.id)    ? obj.id    : null ;
        this.title = (obj.title) ? obj.title : null ;
        this.name  = (obj.name)  ? obj.name  : null ;
    }
}

export class postRequestModel {
    success: boolean;
    data: any;
    errors: {key:string,message:string}[];
}

export class postResponceModel {
    key: string;
    action:string;
    data: {};
}

export class communicModel {
    id?: number;
    hook?: number;
    target?: number;
    pattern?: number;
    type?: number;
}

export class patternCommunicModel{
    id: number|null;
    title: string|null;
    name: string|null;
    
    constructor(obj:{id:number|null,title:string|null,name:string|null} = {id:null,title:null,name:null}){
        this.id = (obj.id) ? obj.id : null;
        this.title = (obj.title) ? obj.title : null;
        this.name = (obj.name) ? obj.name : null;
    
    }
}

export class typeCommpatternTypeModel {
    hook: number;
    pattern:number;
    type: number;
    
}

export class propertyContentModel{
    content: string;
    hook: number;
}

export class propertyVideoModel {
    url: string;
    hook: number;
    type?:number;
}

export class propertyImageModel{
    path: string;
    hook: number;
    file?: File;
}

export class propertyCoordinateModel {
    id?:number;
    hook:number;
    x:number =0;
    y:number =0;
    z:number =0;
}

export class propertyDateModel {
    id?:number;
    hook: number;
    year: number = 0;
    month: number = 0;
    day: number = 0;
    hour: number = 0;
    minute: number = 0;
    second?: number = 0;
}

export class propertyGameObjectModel {
    hook: number = 0;
    live: number = 0;
    locked: number = 0;
    quantity: number = 0;
    originalID: number = 0;
}