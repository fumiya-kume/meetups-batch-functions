import * as mocha from "mocha"
import * as chai from 'chai'

class ConnpassEventEntity {
    event_id: number
    title: String
    constructor() {
        this.event_id = 0
        this.title = ""
    }
}

mocha.describe('Connpassの勉強会を表現するEntityが存在する', () => {
    const connpassEventEntity = new ConnpassEventEntity()
    it('Connpassのイベントにはタイトルが存在する', () => {
        connpassEventEntity.title = ""
        chai.expect(connpassEventEntity.title).equal("")
    })
    it('イベントIDが存在する', () => {
        chai.expect(connpassEventEntity.event_id).to.be.equal(0)
    })
    it('イベントIDを設定することができる', () =>{
        connpassEventEntity.event_id = 1
        chai.expect(connpassEventEntity.event_id).to.be.equal(1)
    })
})