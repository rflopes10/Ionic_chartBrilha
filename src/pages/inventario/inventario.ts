import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import chartJs from 'chart.js';
import { ViewChild } from '@angular/core'


/**
 * Generated class for the InventarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventario',
  templateUrl: 'inventario.html',
})
export class InventarioPage {
    
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('pieCanvas') pieCanvas;


   
    lineChart: any;
    pieChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngAfterViewInit(){
    setTimeout(() => {
      
      this.lineChart = this.getLineChart();
    }, 150)
    setTimeout(() => {
      this.pieChart = this.getPieChart();
      
    }, 250)
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }


  

  getLineChart(){
    const data = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
      datasets: [{
        label: 'Pedidos',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(231, 205, 35)',
        borderColor: 'rgb(231, 205, 35)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[20, 15, 98, 4],
        scanGaps: false,
      }, {
        label: 'Produtos',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgb(51, 50, 46)',
        borderColor: 'rgb(51, 50, 46)',
        borderCapStyle: 'butt',
        borderJoinStyle: 'miter',
        pointRadius: 1,
        pointHitRadius: 10,
        data:[29, 135, 13, 70],
        scanGaps: false,
      }
    ]
    }

    return this.getChart(this.lineCanvas.nativeElement, 'line', data)
  }

  getPieChart(){
    const data = {
      labels: ['Estoque', 'Valor Total'],
      datasets: [{
        data: [300, 224],
        backgroundColor: ['rgb(165,42,42)', 'rgb(30,144,255)']
      }]
    }

    return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventarioPage');
  }

}
