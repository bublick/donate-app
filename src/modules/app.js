import { DonateForm } from "./donate-form"
import { DonateList } from "./donate-list"
import { Settings as Globals } from "../core/constants/settings"
import * as Utils from "../core/utils"

export default class App{
    
    mockDonates = [
        { amount: 4, date: new Date() },
        { amount: 20, date: new Date() },
        { amount: 3, date: new Date() },
        { amount: 1, date: new Date() },
    ];
    
    state = { 
        donates: [
           ...this.mockDonates 
        ],
        totalAmount: Utils.calculateSumOfNumbers( this.mockDonates )
    }

    donateFrm = new DonateForm( this.state.totalAmount, 'Введите сумму в ' + Globals.currency, 'Задонатить')
    
    donateLst = new DonateList( this.state.donates )

    createNewDonate( newDonate ){
        this.state.donates.push( { amount: Number(newDonate), date: new Date() }, )
        this.state.totalAmount += Number(newDonate)

        this.donateLst.updateDonates( this.state.donates )
        this.donateFrm.updateTotalAmount( this.state.totalAmount )
    }

    run(){
        document.body.append( this.donateFrm.render() )
        document.body.append( this.donateLst.render() )

        //this.donateFrm.createNewDonate( bind(this.state.totalAmount) )
        
        const donateForm = document.querySelector('.donate-form')
        donateForm.addEventListener( "submit", (event) => {
            event.preventDefault()
            this.createNewDonate( event.target.amount.value )
            event.target.amount.value = ''
        })
    }

}