class AdminController {
    constructor(){
       this.event = document.getElementById("img")
    }

clickphoto(){
  this.event.addEventListener("click",event=>{

    console('click',this.event)
  })
  
 
};
photo(value){
    this.event(this.clickphoto)
}

}


