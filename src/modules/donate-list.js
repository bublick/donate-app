export class DonateList{
    #donates

    constructor( donates ){
        this.#donates = donates
    }

    render(){
        const donatesContainer = document.createElement('div')
        donatesContainer.className = 'donates-container'

        const donatesContainer__title = document.createElement('h2')
        donatesContainer__title.className = 'donates-container__title'
        donatesContainer__title.innerText = 'Список донатов'
        donatesContainer.append( donatesContainer__title )

        const donatesContainer__donates = document.createElement('div')
        donatesContainer__donates.className = 'donates-container__donates'

        this.#donates.forEach( el => {
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.innerText = el.date + " - "

            const boldText = document.createElement('b')
            boldText.textContent = el.amount + "$"
            donateItem.append( boldText )

            donatesContainer.append( donateItem )
        });

        return donatesContainer
    }
}