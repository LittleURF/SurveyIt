import { Injectable } from '@angular/core';
import { Survey } from '../models/survey';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Survey[]> {
    return this.http.get<Survey[]>('/api/v1/surveys');
  }

  getFeatured() : Observable<Survey[]> {
    return this.http.get<Survey[]>('/api/v1/surveys/featured');
  }

  getById(id: number) {
    return this.http.get<Survey>(`/api/v1/surveys/${id}`);
  }
}
