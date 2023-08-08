using Microsoft.AspNetCore.Mvc;

namespace ChartAcceptorApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BackEndController : ControllerBase
    {
        private readonly ILogger<BackEndController> _logger;

        public BackEndController(ILogger<BackEndController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetBackEnd")]
        public IEnumerable<int> Get()
        {
            return new List<int>() { 1, 2, 3, 4, 5, 6, 7 };
        }

        [HttpPost]
        public void Index(IFormFile file)
        {
            if (file == null)
                throw new Exception("something strange");

            string path = AppDomain.CurrentDomain.BaseDirectory + "UploadedFiles/";
            string filename = Path.GetFileName(file.FileName);
            Console.WriteLine(Path.Combine(path, filename));
        }
    }
}