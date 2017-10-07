import { Component, OnInit } from '@angular/core';

// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';
import {LANG_EN_NAME, LANG_EN_TRANS} from "../lang-en";
import {LANG_SW_NAME, LANG_SW_TRANS} from "../lang-sw";

// import translations


@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
export  const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_SW_NAME]: LANG_SW_TRANS,
};

// providers
export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary },
];
