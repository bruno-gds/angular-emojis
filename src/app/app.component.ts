import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

import {PickerModule} from "@ctrl/ngx-emoji-mart";

import { emojiMartLocalesPt } from './util/emoji-mart-pt';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PickerModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-emojis';
  showEmojiPicker = false;
  selectedEmoji: any;
  locale = emojiMartLocalesPt;

  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    this.selectedEmoji = event.emoji;
    this.showEmojiPicker = false;
  }
}
