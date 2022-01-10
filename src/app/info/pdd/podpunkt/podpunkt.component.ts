import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-podpunkt',
  templateUrl: './podpunkt.component.html',
  styleUrls: ['./podpunkt.component.css']
})
export class PodpunktComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.params.subscribe((params)=>{
      console.log(params);
    });
  }

  ngOnInit() {
  }

}
