import * as mocha from "mocha"
import * as chai from 'chai'

class ConnpassEventEntity {
    equals: (target: ConnpassEventEntity) => Boolean = (target) => this.event_id == target.event_id

    event_id: number = 0
    title: String = ""
    catch: String = ""
    description: String = ""
    event_url: String = ""
    hash_tag: String = ""
    started_at: Date = new Date(1900, 0, 1, 1, 0, 0, 0)
    ended_at: Date = new Date(1900, 0, 1, 1, 0, 0, 0)
    limit: number = -1
    event_type: String = "participation"
    address: String = ""

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
    it('イベントIDを設定することができる', () => {
        connpassEventEntity.event_id = 1
        chai.expect(connpassEventEntity.event_id).to.be.equal(1)
    })
    it('イベントのキャッチが存在する', () => {
        chai.expect(connpassEventEntity.catch).to.be.equal("")
    })
    it('イベントの詳細が存在する', () => {
        chai.expect(connpassEventEntity.description).to.be.equal("")
    })
    it('イベントURLが存在する', () => {
        chai.expect(connpassEventEntity.event_url).to.be.equal("")
    })
    it('ハッシュタグが存在する', () => {
        chai.expect(connpassEventEntity.hash_tag).to.be.equal("")
    })
    it('イベントの開始日時が存在する', () => {
        chai.expect(connpassEventEntity.started_at).to.be.not.null
    })
    it('イベントの終了日時が存在する', () => {
        chai.expect(connpassEventEntity.ended_at).to.be.not.null
    })
    it('イベントの参加可能人数が存在する', () => {
        chai.expect(connpassEventEntity.limit).to.be.equal(-1)
    })
    it("イベントの種類が存在する", () => {
        chai.expect(connpassEventEntity.event_type).to.be.equal("participation")
    })
    it("イベントの開催場所が存在する", () => {
        chai.expect(connpassEventEntity.address).to.be.equal("")
    })
    it('イベントIDを使いイベントを比較することができる', () => {
        const event1 = new ConnpassEventEntity()
        event1.event_id = 1
        const event2 = new ConnpassEventEntity()
        event2.event_id = 1

        chai.expect(event1.equals(event2)).to.be.true

        event2.event_id = 2
        chai.expect(event1.equals(event2)).to.be.false
    })
})

describe("Dateのテスト", () => {
    const dateInstance = new Date(1900, 0, 1, 1, 0, 0, 0)
    it("インスタンスを作ってみる", () => {
        chai.expect(dateInstance).to.be.not.null
    })
    it("正常に日時が生成されたことを確認する", () => {
        chai.expect(dateInstance.getFullYear()).to.be.eq(1900)
        chai.expect(dateInstance.getMonth()).to.be.eq(0)
        chai.expect(dateInstance.getDay()).to.be.eq(1)
        chai.expect(dateInstance.getHours()).to.be.eq(1)
        chai.expect(dateInstance.getMinutes()).to.be.eq(0)
        chai.expect(dateInstance.getSeconds()).to.be.eq(0)
    })
    it("日時を変更してあとで読み込めるようにする", () => {
        dateInstance.setFullYear(2019)
        chai.expect(dateInstance.getFullYear()).to.be.eq(2019)
    })
})