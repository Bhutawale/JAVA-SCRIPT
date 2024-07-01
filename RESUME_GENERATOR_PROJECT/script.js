function addExperience()
{
   let new_exp=document.createElement('textarea')
   new_exp.classList.add("exp")
   new_exp.classList.add("form-control")
   new_exp.classList.add("mt-2")
   new_exp.setAttribute("rows",2)
   new_exp.setAttribute("cols",10)
   new_exp.setAttribute("placeholder","Add Another Experience")

    let exp_ob=document.getElementById("experience")
    let exp_btn=document.getElementById("expbtn")

    exp_ob.insertBefore(new_exp,exp_btn.parentNode)
}

function addQualification()
{
    let new_quali=document.createElement('textarea')
    new_quali.classList.add("certi")
    new_quali.classList.add("form-control")
    new_quali.classList.add("mt-2")
    new_quali.setAttribute("rows",2)
    new_quali.setAttribute("cols",10)
    new_quali.setAttribute("placeholder","Add Another Qualification")

    let quali_ob=document.getElementById("qualification")
    let quali_btn=document.getElementById("certibtn")

    quali_ob.insertBefore(new_quali,quali_btn.parentNode)

}

function addContact()
{
    let newContact=document.createElement('input')
    newContact.classList.add("form-control")
    newContact.classList.add("mt-2")
    newContact.classList.add("contact")
    newContact.setAttribute("type","number")
    newContact.setAttribute("name","contact")
    newContact.setAttribute("placeholder","Add Alternate Phone Number")

    let phone_ob=document.getElementById("addPhone")
    let phonebtn=document.getElementById("contactbtn")

    phone_ob.insertBefore(newContact,phonebtn)
}

function generateCV()
{
    // first name
    let first=document.getElementById("fname").value

    let fname=document.getElementById("fnameT")

    fname.innerHTML=first

    // middle name
    let middle=document.getElementById("mname").value

    let mname=document.getElementById("mnameT")

    mname.innerHTML=middle

    // last name

    let last=document.getElementById("lname").value

    let lname=document.getElementById("lnameT")

    lname.innerHTML=last

    // Full Name 
    document.getElementById('nameT').innerHTML=
    document.getElementById('fname').value +" "+ 
    document.getElementById('mname').value +" "+
    document.getElementById('lname').value


    //Contact Number
    let contacts = document.getElementsByClassName('contact')
    let phone = "";
    for (let i = 0; i < contacts.length; i++) {
        phone += contacts[i].value+"<br>";
    }
    document.getElementById('contactT').innerHTML = phone;


    //Experience

    let experiences=document.getElementsByClassName('exp')
    let ex="";
    for(let i=0;i<experiences.length;i++)
    {
        ex= ex + `<li> ${experiences[i].value} </li>`
    }

    document.getElementById('expT').innerHTML=ex;


    //Quaification

    let qua=document.getElementsByClassName('certi')
    let q="";
    for(let i=0;i<qua.length;i++)
    {
        q=q+`<li> ${qua[i].value} </li>`
    }
    document.getElementById('qualiT').innerHTML=q;

    // address

    document.getElementById('addressT').innerHTML=
    document.getElementById('address').value

    // email

    document.getElementById('emailT').innerHTML=
    document.getElementById('email').value

    // facebook id

    document.getElementById('fbidT').innerHTML=
    document.getElementById('fbid').value

    let fbid=document.getElementById('fbidT')
    let fb=document.getElementById('fbid').value
    fbid.setAttribute("href",fb);

    // LinkedIn id

    document.getElementById('linkedinidT').innerHTML=
    document.getElementById('lnid').value

    let lnid=document.getElementById('linkedinidT')
    let ln=document.getElementById('lnid').value
    lnid.setAttribute("href",ln)

    // objective

    document.getElementById('objectiveT').innerHTML=
    document.getElementById('objective').value

    //image

    let file= document.getElementById('imgfield').files[0]

    let reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend=function(){
        document.getElementById("imgtemplate").src=reader.result;
    }

    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block"
}

function printCV()
{
    window.print();
}