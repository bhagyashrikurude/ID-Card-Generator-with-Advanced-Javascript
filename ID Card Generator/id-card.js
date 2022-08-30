function idCardGenerate(){
    // Get value of student Name from input
    let inputName = document.getElementById("name");
    let inputNameValue = inputName.value;
    // Assign the value of student name to generated card
    document.getElementById("cardName").innerHTML = inputNameValue;
    
    // Get value of Branch Name from input
    let inputBranchName = document.getElementById("branchName");
    let inputBranchNameValue = inputBranchName.value;
    // Assign the value of Branch name to generated card
    document.getElementById("cardbranchName").innerHTML = inputBranchNameValue;
    
    // Get value of College Name from input
    let inputCollegeName = document.getElementById("clgName");
    let inputCollegeNameValue = inputCollegeName.value;
    // Assign the value of College name to generated card
    document.getElementById("cardclgName").innerHTML = inputCollegeNameValue;
    
    // Final display of generated ID card
    document.getElementById("idCard").style.display = "block";
}