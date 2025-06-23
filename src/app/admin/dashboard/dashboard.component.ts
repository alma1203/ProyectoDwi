import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
      public chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      { data: [25, 59, 80, 81, 56], label: 'Reservas' },
      { data: [15, 39, 60, 71, 46], label: 'Eventos' }
    ]
  };

  public chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };
}
