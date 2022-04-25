function compute()
{
    var p = document.getElementById("principal");
    var principal = document.getElementById("principal").value;

    if(principal<=0)  // checks if the principal is zero or a negative number
    {
        alert("Enter a positive number"); // alert message
        p.focus(); // focus 
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100;  // calculating interest

    // calculating the total amount
    // var amount = parseFloat(principal) + interest;

    var year = new Date().getFullYear() + parseInt(years);

    var res = document.getElementById("result"); // the reference to result
    res.innerHTML = "If you deposit <mark>"+principal+",</mark>\<br\>at an interest rate of <mark>"+rate+
    "%</mark>.\<br\>You will receive an amount of <mark>"+ interest +"</mark>,\<br\>in the year <mark>"+ year +"</mark>\<br\>";

    return true;
}

function updateRate()  // used to display the rate value
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
