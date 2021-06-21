var array = [1, 5, 3, 2, 1, 3, 2, 3, 3, 2, 3, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i<array.length; i++)
{ 
        for (var j = i; j<array.length; j++)
        {  
                if (array[i] == array[j]) {
                 m++; }

                if (mf<m)
                {
                  mf = m; 
                  item = array[i];
                }
        }
        console.log(m)
        m = 0;
}
console.log(item + " er der hyppigeste tal" + " ( med " + mf +" gentagelser ) ") ;