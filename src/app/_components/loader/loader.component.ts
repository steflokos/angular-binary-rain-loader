import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [NgFor],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',

})
export class LoaderComponent implements OnInit{

  constructor() { }
 
  loaderData: string[][] = [];

  ngOnInit(): void {
    // Initialize the loader with a random binary array
    this.initializeLoader();

    // Update each column at different intervals
    // smaller is faster
    const columnIntervals = [400, 400, 400, 400];

    for (let i = 0; i < 4; i++) {
      setInterval(() => {
        this.updateColumn(i);
      }, columnIntervals[i]);
    }
  }

  private initializeLoader() {
    for (let i = 0; i < 4; i++) {
      const row = [];
      for (let j = 0; j < 4; j++) {
        row.push(this.getRandomBinary());
      }
      this.loaderData.push(row);
    }
  }

  private getRandomBinary(): string {
    return Math.random() < 0.5 ? '0' : '1';
  }

  private updateColumn(columnIndex: number) {
    // Shift the data in the specified column vertically
    const newRow:string[] = [];
    for (let i = 0; i < 4; i++) {
      newRow.push(this.getRandomBinary());
    }
    this.loaderData.forEach((row) => {
      row[columnIndex] = newRow.shift()!;
    });
  }
}
