import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type AlertType = 'success' | 'error' | 'warning' | 'info';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  @Input() message: string = '';
  @Input() type: AlertType = 'info';
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  closed() {
    this.close.emit();
  }

  get icon(): string {
    switch (this.type) {
      case 'success': return 'fa-circle-check';
      case 'error': return 'fa-circle-xmark';
      case 'warning': return 'fa-triangle-exclamation';
      default: return 'fa-circle-info';
    }
  }
}