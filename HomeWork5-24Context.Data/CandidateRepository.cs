using System;
using System.Collections.Generic;

namespace HomeWork5_24Context.Data
{
    public class CandidateRepository
    {
        public string _connectionString { get; set; }

        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public void AddCandidate(Candidate c)
        {
            using var context = new CandidateDataContext(_connectionString);
            context.candidates.Add(c);
            context.SaveChanges();
        }
        public List<Candidate> GetStatus(Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.candidates.Where(c => c.Status == status).ToList();
        }
        public Candidate GetById(int id)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.candidates.FirstOrDefault(c => c.Id == id);
        }

        public void UpdateStatus(int id, Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            var candidate = context.candidates.FirstOrDefault(c => c.Id == id);
            candidate.Status = status;
            context.candidates.Update(candidate);
            context.SaveChanges();
        }
        public int GetCount(Status status)
        {
            using var context = new CandidateDataContext(_connectionString);
            return context.candidates.Where(c => c.Status == status).ToList().Count();
        }

    }
}