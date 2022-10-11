var images = ["img/tolerapic.jpg","img/tolerapicc.jpg","img/tolerapiccc.jpg"];
var lslider = document.querySelector("#ls");
var rslider = document.querySelector("#rs");
var slider = document.querySelector("#slider");
var nums = 1;
function slide (value){
    console.log(images[value]);
    slider.style.backgroundImage = "url('img/tolerapic.jpg')";
}
lslider.addEventListener("click", function(){
    if(nums == 0){
        slide(nums);
        nums = 3;
    }
    slide(nums);
    nums--;

});
rslider.addEventListener("click", function(){
    if(nums == 3){
        slide(nums);
        nums = 0;
    }
    slide(nums);
    nums++;
})