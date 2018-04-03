import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'bireports',
  templateUrl: './bireports.component.html',
  styleUrls: ['./bireports.component.css']
})
export class BireportsComponent implements OnInit {

  firstFrame:boolean=true;
  myInnerHeight = window.innerHeight - 72;
  leftPanel = window.innerHeight - 120;
  selectedIndex = 1;

  http_asup_adoption = "http://prod-kibana-f0792d43402a7116.elb.us-west-2.amazonaws.com:5601/app/kibana#/dashboard/AV-gotTaBE7V2HMVKw61?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-7d,mode:quick,to:now))&_a=(description:'',filters:!(),options:(darkTheme:!f),panels:!((col:4,id:AV-gn3hxw1Mqk2EQj8pA,panelIndex:1,row:1,size_x:3,size_y:3,type:visualization),(col:7,id:AV-gq7TLw1Mqk2EQj8pC,panelIndex:2,row:1,size_x:3,size_y:3,type:visualization),(col:1,id:AV-goCU4w1Mqk2EQj8pB,panelIndex:3,row:1,size_x:3,size_y:3,type:visualization),(col:10,id:AV-go8VAyejoK19dZS-8,panelIndex:4,row:1,size_x:3,size_y:3,type:visualization),(col:1,id:AV_K-BNZyejoK19dKx5k,panelIndex:5,row:4,size_x:12,size_y:4,type:visualization)),query:(match_all:()),timeRestore:!t,title:'HTTP-ASUP%20Adoption',uiState:(P-1:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-2:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-3:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-4:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-5:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)')))),viewMode:view)";
  install_base_url = "http://prod-kibana-f0792d43402a7116.elb.us-west-2.amazonaws.com:5601/app/kibana#/dashboard/AV-hh8rByejoK19dgn8W";
  install_base_upgrade_url = "http://prod-kibana-f0792d43402a7116.elb.us-west-2.amazonaws.com:5601/app/kibana#/dashboard/AWAxytjIyejoK19duwBC?_g=()";
  current_url :SafeResourceUrl= "http://prod-kibana-f0792d43402a7116.elb.us-west-2.amazonaws.com:5601/app/kibana#/dashboard/AV-gotTaBE7V2HMVKw61?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-7d,mode:quick,to:now))&_a=(description:'',filters:!(),options:(darkTheme:!f),panels:!((col:4,id:AV-gn3hxw1Mqk2EQj8pA,panelIndex:1,row:1,size_x:3,size_y:3,type:visualization),(col:7,id:AV-gq7TLw1Mqk2EQj8pC,panelIndex:2,row:1,size_x:3,size_y:3,type:visualization),(col:1,id:AV-goCU4w1Mqk2EQj8pB,panelIndex:3,row:1,size_x:3,size_y:3,type:visualization),(col:10,id:AV-go8VAyejoK19dZS-8,panelIndex:4,row:1,size_x:3,size_y:3,type:visualization),(col:1,id:AV_K-BNZyejoK19dKx5k,panelIndex:5,row:4,size_x:12,size_y:4,type:visualization)),query:(match_all:()),timeRestore:!t,title:'HTTP-ASUP%20Adoption',uiState:(P-1:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-2:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-3:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-4:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'))),P-5:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)')))),viewMode:view)";

  constructor(private sanitizer: DomSanitizer) { }

  updateSrc(url,index) {
    this.selectedIndex=index;
    this.firstFrame = false;
    this.current_url = this.sanitizer.bypassSecurityTrustResourceUrl(url)
  } 
  
  ngOnInit() {
  }

}
