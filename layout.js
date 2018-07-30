/*
Usage: <script src="https://mikezamora1998.github.io/csup-scripts/layout.js" async></script>
Present on pages: https://www.csupueblo.edu/admissions/apply-now.html
*/
function changeImage(ele) {
    var id = ele.id;
    var checked = (ele.src.includes("active"))?true:false;
    var a;
    if (checked) {
      checked = false
      a = "https://mikezamora1998.github.io/csup-scripts/img/checkbox.png";
    } else {
      checked = true
      a = "https://mikezamora1998.github.io/csup-scripts/img/checkbox-active.png";
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

//  /render/file.act?path=admissions/_img/logo-check-list.png