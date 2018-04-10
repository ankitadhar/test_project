import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'bireports',
  templateUrl: './bireports.template.html',
  styleUrls: ['./bireports.component.css']
})
export class BireportsComponent implements OnInit {

  firstFrame: boolean = true;
  myInnerHeight = window.innerHeight - 72;
  leftPanel = window.innerHeight - 120;
  selectedIndex = 1;

  cases_url = "http://10.2.53.194:5601/app/kibana#/dashboard/AWKRlX8UbE8zvnqZG1Cg?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-30d,mode:quick,to:now))&_a=(description:'',filters:!(),options:(darkTheme:!f),panels:!((col:1,id:AWKNKXMK8ZbcdccI9Irt,panelIndex:1,row:1,size_x:3,size_y:3,type:visualization),(col:4,id:AWKNN0hx8ZbcdccI9JN6,panelIndex:2,row:1,size_x:3,size_y:3,type:visualization),(col:1,id:AWKNNbhE8ZbcdccI9JKJ,panelIndex:3,row:4,size_x:6,size_y:5,type:visualization),(col:7,id:AWKRkcoNbE8zvnqZG03k,panelIndex:4,row:1,size_x:6,size_y:3,type:visualization),(col:7,id:AWKRmqWzbE8zvnqZG1Q-,panelIndex:5,row:4,size_x:6,size_y:5,type:visualization)),query:(match_all:()),timeRestore:!t,title:'Case+Dashboard',uiState:(P-1:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-2:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-4:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-5:(vis:(params:(sort:(columnIndex:!n,direction:!n))))),viewMode:view)";
  support_url = "http://10.2.53.194:5601/app/kibana#/dashboard/AWKNMKfN8ZbcdccI9I9w?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-30d,mode:quick,to:now))&_a=(description:'',filters:!(),options:(darkTheme:!f),panels:!((col:7,id:AWKNKxy-8ZbcdccI9Iv3,panelIndex:2,row:4,size_x:6,size_y:3,type:visualization),(col:1,id:AWKNKiR78ZbcdccI9Itl,panelIndex:3,row:4,size_x:6,size_y:3,type:visualization),(col:7,id:AWKNNbhE8ZbcdccI9JKJ,panelIndex:4,row:1,size_x:6,size_y:3,type:visualization),(col:1,id:AWKNN0hx8ZbcdccI9JN6,panelIndex:5,row:1,size_x:6,size_y:3,type:visualization)),query:(match_all:()),timeRestore:!f,title:'Support+SLA+and+Critical+Customers',uiState:(P-1:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-2:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-3:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-5:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)')))),viewMode:view)";
  version_adoption = "http://10.2.53.194:5601/app/kibana#/dashboard/AWKMqX6_8ZbcdccI9Dzk?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-7d,mode:quick,to:now))&_a=(description:'',filters:!(),options:(darkTheme:!f),panels:!((col:5,id:AWKMo_iB8ZbcdccI9Dmn,panelIndex:1,row:1,size_x:3,size_y:3,type:visualization),(col:1,id:AWKMowmz8ZbcdccI9Dkc,panelIndex:2,row:4,size_x:6,size_y:8,type:visualization),(col:1,id:AWKMqlE48ZbcdccI9D1Z,panelIndex:3,row:1,size_x:4,size_y:3,type:visualization),(col:8,id:AWKMqt_j8ZbcdccI9D21,panelIndex:4,row:1,size_x:4,size_y:3,type:visualization),(col:7,id:AWKMrFOq8ZbcdccI9D6H,panelIndex:5,row:4,size_x:6,size_y:8,type:visualization)),query:(match_all:()),timeRestore:!t,title:'Version+Adoption+-+Last+7+Days',uiState:(P-1:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-2:(vis:(legendOpen:!f)),P-3:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-4:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-5:(vis:(legendOpen:!f))),viewMode:view)";
  current_url: SafeResourceUrl = "http://10.2.53.194:5601/app/kibana#/dashboard/AWKRlX8UbE8zvnqZG1Cg?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-30d,mode:quick,to:now))&_a=(description:'',filters:!(),options:(darkTheme:!f),panels:!((col:1,id:AWKNKXMK8ZbcdccI9Irt,panelIndex:1,row:1,size_x:3,size_y:3,type:visualization),(col:4,id:AWKNN0hx8ZbcdccI9JN6,panelIndex:2,row:1,size_x:3,size_y:3,type:visualization),(col:1,id:AWKNNbhE8ZbcdccI9JKJ,panelIndex:3,row:4,size_x:6,size_y:5,type:visualization),(col:7,id:AWKRkcoNbE8zvnqZG03k,panelIndex:4,row:1,size_x:6,size_y:3,type:visualization),(col:7,id:AWKRmqWzbE8zvnqZG1Q-,panelIndex:5,row:4,size_x:6,size_y:5,type:visualization)),query:(match_all:()),timeRestore:!t,title:'Case+Dashboard',uiState:(P-1:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-2:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-4:(vis:(defaultColors:('0+-+100':'rgb(0,104,55)'))),P-5:(vis:(params:(sort:(columnIndex:!n,direction:!n))))),viewMode:view)";

  constructor(private sanitizer: DomSanitizer) { }

  updateSrc(url, index) {
    this.selectedIndex = index;
    this.firstFrame = false;
    this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  ngOnInit() {
  }

}
