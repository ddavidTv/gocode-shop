import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Tour of Heroes';
  onSave(): void {
    alert("Saved!");
  }

  onToggle() {
    this.title = this.title ? '' : 'Tour of Heros';
  }
}
