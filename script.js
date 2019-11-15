var prices = [165230,293038,37500,187700,250,250,200,200,889,1309,300,300,4033,4033,1799,1799]
var ids = ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016"]

function get_total_price()
{
    var total_amount = 0
    var checked_list = get_checked();
    for(var i=0; i < checked_list.length; i++)
    {
        total_amount += get_price(checked_list[i]);
    }
    document.getElementById("price_tag").innerText = "Total Price: " + formatter.format(total_amount);
}

function get_price(id)
{
    var index = 0;
    for (i=0; i < ids.length; i++)
    {
        if(id == ids[i])
        {
            index = i;
        }
    }
    return prices[index];
}

function get_checked()
{
    var checked_list = [];
    var index = 0;
    for(i=0; i < ids.length; i++)
    {
        if (document.getElementById(ids[i]).checked)
        {
            checked_list[index] = ids[i];
            index += 1;
        }
    }
    return checked_list;
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

function get_package_ids(n)
{
    var id_list = [];
    var index = 0;
    for(var i=n; i < ids.length; i+=2)
    {
        id_list[index] = ids[i];
        index += 1;
    }
    return id_list;
}

function select_package_one()
{
    id_list = get_package_ids(0);
    for(var i=0; i < id_list.length; i++)
    {
        document.getElementById(id_list[i]).checked = true;
    }
}

function select_package_two()
{
    id_list = get_package_ids(1);
    for(var i=0; i < id_list.length; i++)
    {
        document.getElementById(id_list[i]).checked = true;
    }
}

window.onload=function() 
{
  this.get_total_price();  
}

var t = document.querySelectorAll(".close");
for(var i=0;i<t.length;i++)
{
    t[i].addEventListener("click", function() {
        document.querySelector(".bg-modal").style.display = "none";
    
        var m = document.querySelectorAll(".modal-content");
        for(var i=0; i < m.length; i++)
        {
            m[i].style.display = "none";
        }
    });
}

document.getElementById("pic_1").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_1").style.display = 'flex';
});
document.getElementById("pic_2").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_2").style.display = 'flex';
});
document.getElementById("pic_3").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_3").style.display = 'flex';
});
document.getElementById("pic_4").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_4").style.display = 'flex';
});
document.getElementById("pic_5").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_5").style.display = 'flex';
});
document.getElementById("pic_6").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_6").style.display = 'flex';
});
document.getElementById("pic_7").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_7").style.display = 'flex';
});
document.getElementById("pic_8").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_8").style.display = 'flex';
});
document.getElementById("pic_9").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_9").style.display = 'flex';
});
document.getElementById("pic_10").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_10").style.display = 'flex';
});
document.getElementById("pic_11").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_11").style.display = 'flex';
});
document.getElementById("pic_12").addEventListener("click", function() { 
    document.querySelector(".bg-modal").style.display = 'flex';
    document.getElementById("mod_12").style.display = 'flex';
});

var images = ["pictures/img-1.jpg","pictures/img-2.jpg"];

function display_next_image_1() {
    if ("pictures/img-1.jpg" == document.getElementById("image-1").src.substring(40)) {
        document.getElementById("image-1").src = "pictures/img-13.png";
        } else {
        document.getElementById("image-1").src = "pictures/img-1.jpg";
    }
}

function display_next_image_2() {
    if ("pictures/img-2.jpg" == document.getElementById("image-2").src.substring(40)) {
        document.getElementById("image-2").src = "pictures/img-14.png";
        } else {
        document.getElementById("image-2").src = "pictures/img-2.jpg";
    }
}