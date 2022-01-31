import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my Sample App';

  //**Products List begins here
  products: any = [
    {
    title:'My Phone',
    price:'$999.99',
    description:'Samsung Galaxy S9'
  },
  {
    title:'My TV',
    price:'$1999.99',
    description:'LG 55 inches'
  }
]
//**Products List ends here


//**zdata begins here
zdata: any = [
  {
    title: "WV Rising Stars",
    gender: "Girls",
    city: "Charleston"
  },
  {
    title: "WV Thunder",
    gender: "Girls",
    city: "Huntington"
  },
  {
    title: "WV Xplosion",
    gender: "Boys",
    city: "Charleston"
  }
]
//**zdata ends here

//**Show Results begins here */
filtereddata: undefined;
searchkey: any;
p: undefined;
showresults(){
  this.filtereddata = this.zdata.filter((p: { city: string | any[]; }) => p.city.includes(this.searchkey));
}
//**Show Results begins here */

//**Button Function begins here
i:any = 10;

testfunction() {
  alert(this.i);
}
//*Button Function ends here */

//*Multply begins here
public num1: number = 0;
public num2: number = 0;
public res: any;

check() {
  this.res = this.num1 * this.num2;
  if (this.num1 * this.num2 > 100) {
    alert (this.res + " is greater than 100!")
  }
  else
  {
    alert (this.res + " is less than 100!")
  }  
  alert(this.res);
}


}


