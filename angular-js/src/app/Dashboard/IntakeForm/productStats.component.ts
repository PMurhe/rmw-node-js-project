import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
    selector: 'productStats',
  templateUrl: './productStats.component.html',
  styleUrls: ['./productStats.component.css']
})

export class ProductStats {

  tableValue: any = [
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Handle Lever',
      qty: '5',
      price: '2070/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Deadly bearing',
      qty: '1',
      price: '5070/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Pully Pin',
      qty: '10',
      price: '200/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
    {
      productName: 'Fiber Shaft 38 inch',
      qty: '2',
      price: '1770/pcs',
      refilledDate: '02/24/2018'
    },
  ];

  @ViewChild('content') content : ElementRef;
  public export2PDF(){
    let doc = new jsPDF({
    });

    let specialElementHandlers ={
      '#editor': function(element,renderer){
        return true;
      }
    };

    let content = this.content.nativeElement;
    
    doc.fromHTML(content.innerHTML,25,25,{
      'width': 200,
      'elementHandlers':specialElementHandlers
    });
    doc.save('test.pdf');
  }


}