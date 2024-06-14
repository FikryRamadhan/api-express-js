const memberController = require("../src/Controller/MemberCotroller")

const express = require("express")

const router = express.Router()

router.get("/", memberController.getAllMembers)
router.post("/", memberController.createMember)

module.exports = router
