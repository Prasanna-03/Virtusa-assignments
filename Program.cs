int k,n;
k = Convert.ToInt32(Console.ReadLine());
n = Convert.ToInt32(Console.ReadLine());
int[] arr ={0,0,0,0,0,0,0,0,0,0};
Console.WriteLine("Enter the array elements:");
for(int i =0;i<n;i++)
{
    int a = Convert.ToInt32(Console.ReadLine());
    if(a<k)
    {
        a=a+2;
    }
    else
    {
        a=a-2;
    }
    arr[i]=a;
    
}

int low = arr[0];
int high = arr[0];
for(int i =1;i<n;i++)
{
    if (low > arr[i])
    {
        low = arr[i];
    }
    if (high < arr[i])
    {
        high = arr[i];
    }
}
Console.WriteLine(high-low);

