import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {CleaverItemList} from "./clever-combobox.interface";

let myDpTpl = './clever-combobox.component.html';
let myDpStyles = './clever-combobox.component.css';

@Component({
  styles: [myDpStyles],
  template: myDpTpl,
  selector: 'clever-combobox'
})
export class CleverComboboxComponent implements OnInit {

  @Input() clearIconClass: string;
  @Input() submitIconClass: string;
  @Input() loadingIconClass: string;

  private iconDefaultPadding = 32;
  itemList: CleaverItemList[] = [
    {keyValue: '1', displayValue: 'Sample 1'},
    {keyValue: '2', displayValue: 'Sample 2'},
    {keyValue: '3', displayValue: 'Sample 3'}
  ];

  private _clearIconClass: string;
  private _submitIconClass: string;
  private displayText: string = '';
  private keyValue: string = '';
  private inputStyleObject: object = {'padding-right': '30px'};
  private clearIconStyleObject: object = {'right': '0'};
  private submitIconStyleObject: object = {'right': '0'};
  private inputHtml: HTMLInputElement;
  private dropDownListMouseOver: boolean = false;
  private dropDownListHtml: HTMLElement;

  defIconClass: string = 'icon-default icon-default-event';
  containerClass: string = 'inner-addon';

  constructor(private myElement: ElementRef) {

  }

  ngOnInit() {
    this.inputHtml = this.myElement.nativeElement.querySelector('input');
    let pr = 0;
    if (this.clearIconClass) pr++;
    if (this.submitIconClass) pr++;
    if (pr > 1)
      this.clearIconStyleObject['right'] = ((pr - 1) * this.iconDefaultPadding).toString() + 'px';

    pr = pr * this.iconDefaultPadding;
    this.inputStyleObject['padding-right'] = (pr ? pr.toString() + 'px' : '10px');
    this._clearIconClass = this.clearIconClass + ' ' + this.defIconClass;
    this._submitIconClass = this.submitIconClass + ' ' + this.defIconClass;
    this.dropDownListHtml = this.myElement.nativeElement.querySelector('#cleaverList');
  }

  keyPressEvent(event: any) {
    let me = this;
    if (!me.loadingIconClass) return;
    me._submitIconClass = me.loadingIconClass + ' icon-default';
    //console.log(event.keyCode);
    setTimeout(function () {
      me._submitIconClass = me.submitIconClass + ' ' + me.defIconClass;
    }, 2000);
    this.dropDownListMouseOver = false;
    this.onFocus();
  }

  public searchIconClick() {
    console.log('searchIconClick ');
  }

  public clearIconClick() {
    this.displayText = '';
    this.dropDownListMouseOver = true;
    this.inputHtml.focus();
  }

  selectEvent(ev: any) {
    console.log('SelectEvent', ev);
  }

  clickDropDownItem(c: any, item: CleaverItemList) {
    this.keyValue = item.keyValue;
    this.displayText = item.displayValue;
    this.dropDownListMouseOver = false;
    this.onFocusOut();
  }

  private onFocusOut() {
    if (!this.dropDownListMouseOver) {
      this.dropDownListHtml.removeAttribute('style');
      this.dropDownListHtml.setAttribute('style', 'display: none; z-index: 1000; position: absolute; width:100%;');
    }
  }

  private onFocus() {
    if (!this.dropDownListMouseOver) {
      this.dropDownListHtml.removeAttribute('style');
      this.dropDownListHtml.setAttribute('style', 'display: block; z-index: 1000; position: absolute; width:100%;');
    }
  }

  private onMouseMove() {
    this.dropDownListMouseOver = true;
  }

  private onMouseLeave() {
    this.dropDownListMouseOver = false;
  }

  private onInputClick() {
    this.dropDownListMouseOver = false;
    this.onFocus();
  }

}
