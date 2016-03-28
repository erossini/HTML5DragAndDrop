using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

public class TestDatabase : ITestDatabase {
   /// <summary>
   /// Save an element in the database and return the new ID
   /// </summary>
   /// <param name="symbol"></param>
   /// <param name="name"></param>
   /// <returns></returns>
   public int InsertElement(string symbol, string name) {
      // save the element in database
      return 1;
   }
}