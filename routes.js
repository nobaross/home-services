const express = require("express");
const router = express.Router();

const scheduleCtrl = require("./../controllers/schedule_ctrl");
//const serviceCtrl = require("./../controllers/service_ctrl");
//const customerCtrl = require("./../controllers/customer_ctrl");

// Schedules
router.post("/add_schedule", scheduleCtrl.save);
/*router.get("/get_schedule", scheduleCtrl.get);
router.put("/update_schedule/:id", scheduleCtrl.update);
router.delete("/delete_schedule", scheduleCtrl.delete);

// Services
router.post("/add_service", serviceCtrl.save);
router.get("/get_service", serviceCtrl.get);
router.put("/update_service/:id", serviceCtrl.update);
router.delete("/delete_service", serviceCtrl.delete);

// Customers
router.post("/add_customer", customerCtrl.save);
router.get("/get_customer", customerCtrl.get);
router.put("/update_customer/:id", customerCtrl.update);
router.delete("/delete_customer", customerCtrl.delete);*/

module.exports = router;
