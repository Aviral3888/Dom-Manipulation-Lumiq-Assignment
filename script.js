
// Adding Row Function

let addNewRow = document.getElementById("addNewRow");

addNewRow.addEventListener('click', () =>
{
    let rowCountValue = document.getElementsByClassName("rowCount").length+1;
      
    let tableSelector = document.querySelector('TABLE');
    let newRow = tableSelector.insertRow(-1);
    newRow.className += "rowCount";
  
    let tableRow1 = newRow.insertCell(0);
    let tableRow2 = newRow.insertCell(1);
    let tableRow3 = newRow.insertCell(2);
  
    tableRow1.innerHTML = "<b>"+ rowCountValue +"</b>";
    tableRow2.innerHTML = "Customer Name "+ rowCountValue;
    tableRow3.innerHTML = "<div class='deleteBtn' id='delete' onclick='deleteRow(this)'>Delete</div>";
   
});
  
  
// Delete Row Function

deleteRow = (rowNo) =>
{
    var x = rowNo.parentNode.parentNode.rowIndex;
    document.querySelector('TABLE').deleteRow(x);

}


// Css Theme Change Function 

let main_body = document.getElementById("container");
let css_toggler = document.getElementById("css_toggler");

css_toggler.addEventListener('click', () =>
{
    // let bgcolors = ["red", "rgb(204, 68, 68)" , "pink", "orange","aliceblue", "green", "yellow"];
    let bgcolors = ["rgb(233, 210, 210)", "rgb(235, 210, 163)" , "rgb(207, 175, 116)", "rgb(209, 241, 157)","rgb(184, 245, 232)", "rgb(194, 191, 192)", "rgb(209, 160, 160)"];
  
    let index = document.querySelector('#css_toggler').getAttribute("value");
    index++;

    if(index > bgcolors.length)
        index = 1;
    
    main_body.style.backgroundColor = bgcolors[index-1];
    
    document.querySelector('#css_toggler').setAttribute("value", index);

});
  
  

// Reset Function

let reset = document.getElementById("reset");
reset.addEventListener('click', () =>{
    location.reload();
});
  
  