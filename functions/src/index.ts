import * as mocha from "mocha"
import * as chai from 'chai'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

mocha.describe('DESC', () => {
    it('IT', () => {
        chai.assert("foo", "bar");
    })
    it('ON', () => {
        chai.assert("foo", "bar");
    });
})