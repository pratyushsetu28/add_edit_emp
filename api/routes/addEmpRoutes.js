const express = require('express');
const router = express.Router();
const { check, emp_basic_details, emp_prev_emp_details,emp_prev_stay_details,emp_educational_qualification,emp_family_details  } = require("../controllers/addEmpController");


router.post("/add-employee" ,check );
router.post("/add-employee-basic-details",emp_basic_details);
router.post("/add-employee-previous-employment-details",emp_prev_emp_details);
router.post("/add-employee-previous-stay-details" ,emp_prev_stay_details );
router.post("/add-employee-educational-qualifications",emp_educational_qualification );
router.post("/add-employee-dependent-family-members-details",emp_family_details);
module.exports = router;
