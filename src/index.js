/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;

  for ( let i=1; i<= preferences.length-2; i++)
  {
    
    
    if  ( (preferences[i-1]>preferences.length) ||
     (preferences[i-1]==i))
     {
      continue;
      }

    if    ( (preferences[preferences[preferences[i-1]-1]-1]==i) 
          && (preferences[i-1]>i) && preferences[preferences[i-1]-1]>i)
/* secondValue=preferences[i-1];
 thirdValue=preferences[secondValue-1]=preferences[preferences[i-1]-1];
firstValue=preferences[thirdValue-1]= preferences[preferences[preferences[i-1]-1]-1]=
if ((firstValue== i) && (secondValue>i) && (thirdValue>i)) {count++}*/
       {
      count++;
      };
    
     };
   
     return count;

};
