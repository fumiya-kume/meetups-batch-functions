import * as mocha from "mocha"
import * as chai from 'chai'

type lat = number
type lon = number
type Location = [lat, lon]

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
    place: String = ""
    location: Location = [0,0]
    owner_id: number = 0
    owner_nickname: String = ""
    owner_display_name: String = ""
    accepted: number = -1
    waiting: number = -1
    updated_at:number = -1

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
    it("イベントの開催住所が存在する", () => {
        chai.expect(connpassEventEntity.address).to.be.equal("")
    })
    it("イベント開催場所が存在する", () => {
        chai.expect(connpassEventEntity.place).to.be.equal("")
    })
    it("イベントの開催場所を保存することができる", () => {
        const locationSnapshot = connpassEventEntity.location
        chai.expect(0).to.be.equal(locationSnapshot[0])
        chai.expect(0).to.be.equal(locationSnapshot[1])
    })
    it("イベントの管理者情報が存在する",() =>{
        chai.expect(0).to.be.equal(connpassEventEntity.owner_id)
    })
    it("イベント管理者のニックネームが存在する", () => {
        chai.expect("").to.be.equal(connpassEventEntity.owner_nickname)
    })
    it("イベント管理者のディスプレイネームが存在する", () => {
        chai.expect("").to.be.equal(connpassEventEntity.owner_display_name)
    })
    it("イベント参加者数が存在する", () => {
        chai.expect(-1).to.be.equal(connpassEventEntity.accepted)
    })
    it("イベント補欠者数が存在する", () => {
        chai.expect(-1).to.be.equal(connpassEventEntity.waiting)
    })
    it("イベント情報の更新日時が存在する", () =>{
        chai.expect(connpassEventEntity.updated_at).to.be.not.null
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