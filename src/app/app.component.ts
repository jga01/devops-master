import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Stats from 'stats.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private stats: Stats = new Stats();
  private animationFrameId: number = 0;
  showMenu = false;
  currentYear = new Date().getFullYear();

  ngOnInit() {
    this.initStatsMonitor();
    this.updateStats();
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.animationFrameId);
  }

  
  private initStatsMonitor() {
    this.stats = new Stats();
    this.stats.showPanel(0); // Show FPS panel
    document.body.appendChild(this.stats.dom);

    // You can customize the position and style of the stats monitor
    this.stats.dom.style.position = 'fixed';
    this.stats.dom.style.left = '0';
    this.stats.dom.style.top = '0';
    this.stats.dom.style.zIndex = '9999';
  }

  private updateStats() {
    this.stats.begin();
    // All monitored code should go here

    this.stats.end();
    this.animationFrameId = requestAnimationFrame(() => this.updateStats());
  }
}
