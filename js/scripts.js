 /*==============Navbar Start=======================*/
 var nav = document.getElementById('navitem');
 var navname = document.getElementById('navname');

    function toggle() {

        if ( nav.style.display === "" )
        {nav.style.display = "block";
        }

        else
        {
        nav.style.display = "";
        navname.style.display="";
        }
    }


    function windowResizeHandler () {
        if ( screen.width > 500 )
        {nav.style.display = "";
            navname.style.display="";
        }
    }

    window.addEventListener("resize", windowResizeHandler);

    /*==============Navbar End=======================*/

    function showContainer(cid)
    {
      nav.style.display = "";
      navname.style.display="";
        section=document.getElementsByClassName("section");
        for(let i=0;i<section.length;i++)
        {
            console.log(cid);
            if(i==cid)
            {
                section[i].classList.remove('hidden');
            }
            else
            {
                section[i].classList.add('hidden');
            }
        }

    }



    function hideandshow(id)
         {
         	var f = "frame"+String(id);
         	if(document.getElementById(f).style.display == "none")
         		document.getElementById(f).style.display = "block";
         	else
         		document.getElementById(f).style.display = "none";
         }

    function updateDateTime()
    {
      var split = new Date().toString().split(" ");
      dateTime=split[1]+" "+split[2]+", "+split[3] + " "+split[4]+" "+split[6]+" "+split[7]+" "+split[8]

      document.getElementById('time').innerText = dateTime;
      document.getElementById('time1').innerText = dateTime;
    }

    setInterval(function(){ updateDateTime(); }, 1000);
