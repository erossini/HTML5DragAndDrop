using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTML5DragAndDrop.Controllers {
   public class HomeController : Controller {
      ITestDatabase _testDatabase = new TestDatabase();

      public ActionResult Index() {
         return View();
      }

      public ActionResult About() {
         ViewBag.Message = "Your application description page.";

         return View();
      }

      public ActionResult Contact() {
         ViewBag.Message = "Your contact page.";

         return View();
      }

      [HttpPost]
      public JsonResult InsertTestElements(string testElement) {
         int? insertResult = null;

         if (!string.IsNullOrEmpty(testElement)) {
            string[] elementData = testElement.Split(':');

            string symbol = elementData[0].Trim();
            string name = elementData[1].Trim();

            insertResult = _testDatabase.InsertElement(symbol, name);
         }

         return Json(insertResult);
      }
   }
}