using HomeWork5_24Context.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeWork5_24Context.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private string _connectionString;

        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpPost]
        [Route("addcandidate")]

        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository (_connectionString);
            repo.AddCandidate(candidate);
        }

        [HttpGet]
        [Route("getpending")]

        public List<Candidate> GetPending()
        {
            var repo = new CandidateRepository(_connectionString);
            return(repo.GetStatus(Status.Pending));
        }
        [HttpGet]
        [Route("getConfirmed")]

        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateRepository(_connectionString);
            return (repo.GetStatus(Status.Confirmed));
        }
        [HttpGet]
        [Route("getRefused")]

        public List<Candidate> GetRefused()
        {
            var repo = new CandidateRepository(_connectionString);
            return (repo.GetStatus(Status.Refused));
        }
        [HttpGet]
        [Route("getCandidateById")]

        public Candidate GetById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return (repo.GetById(id));
        }

        [HttpPost]
        [Route("addToConfirmed")]

        public void AddToConfirmed(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.UpdateStatus(candidate.Id, Status.Confirmed);
        }
        [HttpPost]
        [Route("addToRefused")]

        public void AddToRefused(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.UpdateStatus(candidate.Id, Status.Refused);
        }

        [HttpGet]
        [Route("getpendingcount")]

        public object GetPendingCount()
        {
            var repo = new CandidateRepository(_connectionString);            
            return new { count = repo.GetStatus(Status.Pending).Count };
        }
        [HttpGet]
        [Route("getconfirmedcount")]
        public object GetConfirmedCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetStatus(Status.Confirmed).Count };
        }
        [HttpGet]
        [Route("getrefusedcount")]
        public object GetRefusedCount()
        {
            var repo = new CandidateRepository(_connectionString);
            return new { count = repo.GetStatus(Status.Refused).Count };
        }
       
    }
}
