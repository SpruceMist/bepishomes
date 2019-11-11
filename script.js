var prices = [165230,293038,37500,187700,250,250,200,200,889,1309,300,300]
var ids = ["001","002","003","004","005","006","007","008","009","010","011","012"]

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