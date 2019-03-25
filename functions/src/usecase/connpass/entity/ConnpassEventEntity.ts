import * as mocha from "mocha"
import * as chai from 'chai'

class ConnpassEventEntity {
    title: String
    constructor() {
        this.title = ""
    }
}

mocha.describe('Connpassの勉強会を表現するEntityが存在する', () => {
    const connpassEventEntity = new ConnpassEventEntity()
    it('Connpassのイベントにはタイトルが存在する', () => {
        connpassEventEntity.title = ""
        chai.expect(connpassEventEntity.title).equal("")
        
    })
})