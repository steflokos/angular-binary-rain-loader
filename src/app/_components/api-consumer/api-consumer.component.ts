import { Component, OnDestroy } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { Subject, takeUntil } from 'rxjs';
import { MockApiService } from '../../_services/mock-api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-api-consumer',
  imports: [LoaderComponent, NgIf, MatButton],
  templateUrl: './api-consumer.component.html',
  styleUrl: './api-consumer.component.scss'
})
export class ApiConsumerComponent implements OnDestroy{


  destroy$: Subject<void> = new Subject<void>();
  data: string | undefined = undefined;
  isLoading: boolean = false;
 
  constructor(private mockApiService: MockApiService, private snackBar: MatSnackBar) { }

  fetchData(): void {
 
    this.isLoading = true;
    this.data = undefined;

    this.mockApiService.getMockData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: string) => {
          this.data = response
          this.isLoading = false;
        },
        error: (error) => {
          this.isLoading = false;
          this.snackBar.open('There was an error!' + error, 'Close', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 3000,
          });

        }
      })

  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
