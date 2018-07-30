/*
Usage: <script src="https://mikezamora1998.github.io/csup-scripts/layout.js" async></script>
Present on pages: https://www.csupueblo.edu/admissions/apply-now.html
*/
function changeImage(ele) {
    var id = ele.id;
    var checked = (ele.src.includes("checked"))?true:false;
    var a;
    if (checked) {
      checked = false
      a = "_img/logo-check-list.png";
    } else {
      checked = true
      a = "_img/logo-check-list-checked.png";
    }
    document.getElementById(id).src = a;
  }

  function HideTextBox(ele){
     var id = ele.id;
    
     if(document.getElementById(id+"Text").style.display == 'none'){
         document.getElementById(id+"Text").style.display = '';
         document.getElementById(id +"Text").style.backgroundColor = '#f4f4f4';
     }else{
         document.getElementById(id +"Text").style.display = 'none';
         document.getElementById(id +"Text").style.backgroundColor = '#ffffff';
     }
}