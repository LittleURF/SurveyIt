import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Completion } from '../models/completion';
import { PostCompletionRequestBody } from '../request-templates/post-completion-request-body';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Survey[]> {
    return this.http.get<Survey[]>('/api/v1/surveys');
  }

  getFeatured(): Observable<Survey[]> {
    return this.http.get<Survey[]>('/api/v1/surveys/featured');
  }

  getById(id: number): Observable<Survey> {
    return this.http.get<Survey>(`/api/v1/surveys/${id}`);
  }

  postCompletion(requestBody: PostCompletionRequestBody): Observable<Completion> {
    return this.http.post<Completion>('api/v1/surveys/completions', requestBody);
  }

  postNewSurvey(requestBody): Observable<Survey> {
    return this.http.post<Survey>('api/v1/surveys', requestBody);
  }
}
