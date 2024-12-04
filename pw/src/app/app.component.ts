import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule] 
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password ='';

  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }
  onButtonClick(){
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random()*validChars.length) 
      generatedPassword += validChars[index]
    }
    this.password = generatedPassword
  }
  onChangeLength(value:KeyboardEvent){
    const keyName = value.target as HTMLInputElement;
    console.log('this val '+ keyName.value)
    const parsedValue = parseInt(keyName.value);
    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }
  title = 'pw';
}  
