import express from "express";
import db from "../db";
import Had from "../had";

const router = express.Router();

router.get("/", (req, res, next) => {
    db.query(Had.getAllHad(), (err, data)=> {
        if(!err) {
            res.status(200).json({
                message:"Had listed.",
                value:data
            });
        }
    });
});

router.get("/:id", (req, res, next) => {

    let hid = req.params.id

    db.query(Had.getHadById(hid), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"had found",
                    had: data
                });
            } else {
                res.status(404).json({
                    message:"Had Not found."
                });
            }
        }
    });
});

router.post("/search", (req, res, next) => {
    var search = req.body.search;
    db.query(Had.searchHad(search), (err, data)=> {
        if(!err) {
            if(data && data.length > 0) {

                res.status(200).json({
                    message:"had found",
                    value: data
                });
            } else {
                res.status(404).json({
                    message: search +" Had Not found."
                });
            }
        }
    });
});


module.exports = router;