import * as mocha from "mocha"
import * as chai from 'chai'

class ConnpassEventEntity {
    equals: (target: ConnpassEventEntity) => Boolean = (target) => this.event_id == target.event_id

    event_id: number = 0
    title: String = ""
    catch: String = ""
    description: String = ""
    event_url: String = ""

    constructor() {
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
    it('イベントのキャッチが存在する', () => {
        chai.expect(connpassEventEntity.catch).to.be.equal("")
    })
    it('イベントの詳細が存在する', () =>{
        chai.expect(connpassEventEntity.description).to.be.equal("")
    })
    it('イベントURLが存在する', () => {
        chai.expect(connpassEventEntity.event_url).to.be.equal("")
    })
    it('イベントIDを使いイベントを比較することができる', () => {
        const event1 = new ConnpassEventEntity()
        event1.event_id = 1
        const event2 = new ConnpassEventEntity()
        event2.event_id= 1

        chai.expect(event1.equals(event2)).to.be.true

        event2.event_id = 2
        chai.expect(event1.equals(event2)).to.be.false
    })
})