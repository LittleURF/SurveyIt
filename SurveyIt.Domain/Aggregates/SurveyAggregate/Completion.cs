using SurveyIt.Domain.Exceptions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Completion : Entity
    {
        public int Id { get; private set; }
        public int SurveyId { get; private set; }
        public Survey Survey { get; private set; }
        public int CompletingUserId { get; private set; }
        public DateTime CompletionDate { get; private set; }
        public IReadOnlyList<Answer> Answers => _answers;
        private readonly List<Answer> _answers;

        public Completion(Survey survey, List<Answer> answers, int completingUserId)
        {
            Survey = survey;
            SurveyId = survey.Id;
            _answers = answers;
            CompletingUserId = completingUserId;

            Validate();
        }

        private Completion() { }

        public void Validate()
        {
            if (CompletingUserId == 0)
                throw new MissingDataException("Completing User Id unspecified");

            if (!IsNotAlreadyCompleted())
                throw new RepeatedCompletionException("The survey has already been completed by this user");

            if (!AreQuestionsAnsweredFromCurrentSurvey())
                throw new IdMismatchedException("Question ids specified in the answers list, do not exist on the specified Survey");

            if (!AreAllQuestionsAnswered())
                throw new MissingDataException("Not all questions of the survey are answered");
        }

        public void SetCompletionDateNow()
        {
            CompletionDate = DateTime.Now;
        }

        private bool AreQuestionsAnsweredFromCurrentSurvey()
        {
            var currentSurveyQuestionsIds = Survey.Questions.Select(q => q.Id).ToList();

            foreach (var answer in Answers)
            {
                if (!currentSurveyQuestionsIds.Contains(answer.QuestionId))
                    return false;
            }
            return true;
        }

        private bool AreAllQuestionsAnswered()
        {
            if (Answers.Count != Survey.Questions.Count)
                return false;

            var answeredQuestionsIds = Answers.Select(a => a.QuestionId);
            var questionsIds = Survey.Questions.Select(a => a.Id);

            bool doIdsCover = questionsIds.Except(answeredQuestionsIds).Count() == 0;
            if (!doIdsCover)
                return false;

            return true;
        }

        private bool IsNotAlreadyCompleted() 
        {
            var usersWithCompleted = Survey.Completions.Select(s => s.CompletingUserId);
            if (usersWithCompleted.Contains(CompletingUserId))
                return false;

            return true;
        }
    }
}
