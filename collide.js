function collides (object1,object2){
if(object1.x+object1.width>=object2.x){
    return true
}
return false
}