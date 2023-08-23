export function tr(msg:string, dial:boolean=false, cons:boolean=true)
{
    if(dial)
    {
        alert(msg);
    }
    if(cons)
    {
        console.log(msg);
    }
}