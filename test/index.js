var expect = require('chai').expect;
var connectTest = require('../build/app.js');
var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is running.

var server = supertest.agent("http://localhost:2604");


// UNIT test begin

describe("SAMPLE unit test", function () {
var ayx=0;
    it("Lay danh sach bai viet", function (done) {

        //calling ADD api
        server
            .get('/api/post/limit/1/offset/0')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.respondCode.should.equal(1);
                ayx = res.body.respondCode;

                done();
            });
    });


    it("Lay danh sach tiep", function (done) {
        console.log("Axy la " + ayx);
        server
            .get('/api/post/limit/2/offset/0')
            .expect("Content-type", /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                res.body.respondCode.should.equal(1);
                done();    
        })
    })


});