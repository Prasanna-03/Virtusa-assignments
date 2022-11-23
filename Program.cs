
Console.WriteLine("enter no of trains:");
int a,b;
int n = Convert.ToInt32(Console.ReadLine());
int [] arr={0,0,0,0,0,0,0,0,0,0};
int [] dep={0,0,0,0,0,0,0,0,0,0};
for (int i=0;i<n;i++)
{
    a=Convert.ToInt32(Console.Read());
    arr[i]=a;
     
}
Console.ReadLine();
for (int i =0;i<n;i++)
{
    b=Convert.ToInt32(Console.Read());
    dep[i]=b;
}
int co=0;

for(int i=0;i<n-1;i++)
{
    
        if(dep[i]>=arr[i+1])
        {
            co=co+1;
        }
    
}
Console.WriteLine(co);


