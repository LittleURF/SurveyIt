using Microsoft.AspNetCore.Mvc;
using SurveyIt.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Survey : AggregateRoot
    {
        private const int MIN_QUESTIONS = 3;
        private const int MAX_QUESTIONS = 50;

        public int Id { get; private set; }
        public int CreatorId { get; private set; }
        public string Title { get; private set; }
        public string Description { get; private set; }
        public DateTime CreationDate { get; private set; }
        public IReadOnlyList<Completion> Completions => _completions;
        public IReadOnlyList<Question> Questions => _questions;
        private readonly List<Completion> _completions;
        private readonly List<Question> _questions;


        public Survey(int creatorId, string title, List<Question> questions, string description = null, List<Completion> completions = null)
        {
            CreatorId = creatorId;
            Title = title;
            Description = description;
            _questions = questions ?? new List<Question>();
            _completions = completions ?? new List<Completion>();

            Validate();
        }

        private Survey() { }

        public void Validate()
        {
            if (CreatorId == 0)
                throw new MissingDataException("Creator Id unspecified");

            if (String.IsNullOrWhiteSpace(Title))
                throw new MissingDataException("Survey title is null or empty");

            if (_questions.Count < MIN_QUESTIONS)
                throw new MissingDataException($"A Survey must have at least {MIN_QUESTIONS} questions!");

            if (_questions.Count > MAX_QUESTIONS)
                throw new MissingDataException($"A Survey can only have up to {MAX_QUESTIONS} questions!");
        }

        public void SetCreationDateNow()
        {
            CreationDate = DateTime.Now;
        }

        public void AddCompletion(Completion completion)
        {
            _completions.Add(completion);
        }

    }
}
