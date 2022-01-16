import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Task Tracker";
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private router: Router, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
  }

  ngOnInit(): void {
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }

  toggleAddTask(): void {
    this.uiService.toggleAddTask();
  }
}
