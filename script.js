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
    document.getElementById("price_tag").innerText = formatter.format(total_amount);
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