using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HTML5DragAndDrop.Startup))]
namespace HTML5DragAndDrop
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
