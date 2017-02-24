export class Meal {
  public consumed : string="Not Yet";
  public daynoconsumed : number=null;
  public shown : boolean = false;
  constructor(
    public name: string,
    public details : string,
    public calories : number) {   }
}
