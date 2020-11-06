const con = require('../config');
const SQL = require('sql-template-strings');
var Sequelize = require('sequelize');

module.exports.check = function(req,res){
    con.query("SELECT * FROM emp_basic_details \
    WHERE emp_no=? " ,[req.body.employeeId],function (err, result){
    if (err) {
        return res.status(400).json({
          err:err
        })
      }else{
        console.log(result);
        if(result.length==0){
  
        return  res.json({
            status:201,
            message:'success'
        })
      }else{
      return  res.json({
          status:400,
          data:{},
          message:'Something went worng.'
      })
  
      }
      }
     
    });
}

module.exports.emp_basic_details = function(req,res){
    try{
    var PendingEmpBasicDetails = 
    {
      "emp_no": req.body.employeeId,
      "auth_id": "1",
      "designation": req.body.employmentDetails.designation,
      "office_no": req.body.otherDetails.officeNo,
      "fax": req.body.otherDetails.fax,
      "joining_date": req.body.employmentDetails.dateOfJoining,
      "retirement_date": req.body.employmentDetails.dateOfRetirement,
      "employment_nature": req.body.employmentDetails.natureOfEmployment
  };
  
  var PendingUserDetails =
  {
      "id": req.body.employeeId,
      "salutation": req.body.personalDetails.salutation,
      "first_name": req.body.personalDetails. firstName,
      "middle_name": req.body.personalDetails.middleName,
      "last_name": req.body.personalDetails. lastName,
      "sex": req.body.personalDetails.gender,
      "category": req.body.personalDetails.category,
      "allocated_category": req.body.personalDetails. firstName,
      "dob": req.body.personalDetails.dob,
      "email": req.body.otherDetails.email,
      "photopath": req.body.personalDetails.photograph,
      "signature" : req.body.personalDetails.signature,
      "marital_status": req.body.personalDetails.maritalStatus,
      "physically_challenged":  req.body.personalDetails.physicallyChallenged,
      "dept_id": req.body.employmentDetails.department,
      "updated": "2018-09-29"
  };

  var PendingEmpPayDetails = 
  {
    "emp_no": req.body.employeeId,
    "pay_code": req.body.salaryDetails.payBand,
    "basic_pay": req.body.salaryDetails.basicPay,
    "grade_pay": req.body.salaryDetails.gradePay
 };
 var PendingFacultyDetails = 
  {
    "emp_no": req.body.employeeId,
    "research_interest": req.body.employmentDetails.researchInterest
  };
  var PendingUserPresentAddress = 
  {
    "id": req.body.employeeId,
    "line1": req.body.addressDetails.presentAddressDetails.addressLine1,
    "line2": req.body.addressDetails.presentAddressDetails.addressLine2,
    "city":req.body.addressDetails.presentAddressDetails.city,
    "state": req.body.addressDetails.presentAddressDetails.state,
    "pincode": req.body.addressDetails.presentAddressDetails.pincode,
    "country": req.body.addressDetails.presentAddressDetails.country,
    "contact_no": req.body.addressDetails.presentAddressDetails.contact,
    "type": "present"
};
var PendingUserPermanantAddress = 
{
  "id": req.body.employeeId,
  "line1": req.body.addressDetails.permanentAddressDetails.addressLine1,
  "line2": req.body.addressDetails.permanentAddressDetails.addressLine2,
  "city":req.body.addressDetails.permanentAddressDetails.city,
  "state": req.body.addressDetails.permanentAddressDetails.state,
  "pincode": req.body.addressDetails.permanentAddressDetails.pincode,
  "country": req.body.addressDetails.permanentAddressDetails.country,
  "contact_no": req.body.addressDetails.permanentAddressDetails.contact,
  "type": "permanant"
};
var PendingUserOtherDetails = 
{
  "id": req.body.employeeId,
  "religion": req.body.personalDetails.religion,
  "nationality": req.body.personalDetails.nationality,
  "kashmiri_immigrant": req.body.personalDetails.kashmiriImmigrant,
  "hobbies": req.body.otherDetails.hobbies,
  "fav_past_time": req.body.otherDetails.favoritePastTime,
  "birth_place": req.body.personalDetails.placeOfBirth,
  "mobile_no": req.body.otherDetails.mobileNo,
  "father_name": req.body.personalDetails.fatherName,
  "mother_name": req.body.personalDetails.motherName,
  "bank_name": req.body.bankDetails.bankName,
  "bank_accno": req.body.bankDetails.accountNumber
};
 

con.query('INSERT INTO pending_emp_basic_details SET ?',PendingEmpBasicDetails,function (error, results, fields) {
    if (error) {
        console.log(error);
    }
  });
   

  con.query('INSERT INTO pending_user_details SET ?',PendingUserDetails,function (error, results, fields) {
    if (error) {
        console.log(error);
    }
  });
   

  con.query('INSERT INTO pending_emp_pay_details SET ?',PendingEmpPayDetails, function (error, results, fields) {
    if (error) {
        console.log(error)
    }
  });

  con.query('INSERT INTO pending_faculty_details SET ?',PendingFacultyDetails, function (error, results, fields) {
    if (error) {
        console.log(error)
    }
  });

  con.query('INSERT INTO pending_user_address SET ?',PendingUserPresentAddress, function (error, results, fields) {
    if (error) {
        console.log(error)
    }
  });

  con.query('INSERT INTO pending_user_address SET ?',PendingUserPermanantAddress, function (error, results, fields) {
    if (error) {
        console.log(error)
    }
  });

  con.query('INSERT INTO pending_user_other_details SET ?',PendingUserOtherDetails, function (error, results, fields) {
    if (error) {
        console.log(error)
    }
  });
    }
    catch(err){
        
            return  res.json({
                status:500,
                message:err
            })
        
        
    }
    return  res.json({
      status:201,
      message:"success"
  })
   
  
}

module.exports.emp_prev_emp_details=function(req,res){
  
    for ( var i in req.body.previousStayDetails){
        p = req.body.previousStayDetails[i];
        var obj = 
        {

            "emp_no": req.body.employeeId,
            "sno": i,
            "designation": p.positionHeld,
            "from": p.from,
            "to": p.to,
            "pay_scale": p.payScale,
            "address": p.fullAddressOfEmployer,
            "remarks": p.remarks
      }
      con.query('INSERT INTO  pending_emp_prev_exp_details SET ?',obj, function (error, results, fields) {
        if (error) {
        return  res.json({
              status:500,
              message:err.message || "Some error occurred while creating the  pending_emp_prev_exp_details."
          })
        }
      });
      

    }
    return res.json({
        status:201,
        message:"success"
    })

}




module.exports.emp_prev_stay_details=function(req,res){
  
    for ( var i in req.body.previousStayDetails){
        p = req.body.previousStayDetails[i];
        var obj = 
        {

            "emp_no":  req.body.employeeId,
            "sno": i,
            "from": p.from,
            "to": p.to,
            "res_addr": p.residentialAddress,
            "dist_hq_name": p.nameOfDistrictHeadquarters
      }
      con.query('INSERT INTO pending_emp_last5yrstay_details SET ?',obj, function (error, results, fields) {
        if (error) {
        return  res.json({
              status:500,
              message:err.message || "Some error occurred while creating the prev_stay_details."
          })
        }
      });
      

    }
    return res.json({
        status:201,
        message:"success"
    })

}

module.exports.emp_educational_qualification=function(req,res){
  
    for ( var i in req.body.previousStayDetails){
        p = req.body.previousStayDetails[i];
        var obj = 
        {

            "emp_no": req.body.employeeId,
            "sno": i,
            "exam": p.examination,
            "specialization": p.course,
            "institute": p.college,
            "year": p.year,
            "grade": p.grade,
            "division": p.division
      }
      con.query('INSERT INTO pending_emp_education_details SET ?',obj, function (error, results, fields) {
        if (error) {
        return  res.json({
              status:500,
              message:err.message || "Some error occurred while creating the pending_emp_education_details."
          })
        }
      });
      

    }
    return res.json({
        status:201,
        message:"success"
    })

}
module.exports.emp_family_details=function(req,res){
  
    for ( var i in req.body.previousStayDetails){
        p = req.body.previousStayDetails[i];
        var obj = 
        {

            "emp_no": req.body.employeeId,
            "sno": i,
            "name": p.name,
            "relationship": p.relationship,
            "profession": p.profession,
            "present_post_addr": p.presentPostalAddress,
            "photopath": p.photograph,
            "dob": p.dob,
            "active_inactive": p.activeOrInactive,
            "emp_dep_allergy": "FDfd",
            "emp_dep_disease": "fddf"
      }
      con.query('INSERT INTO pending_emp_family_details SET ?',obj, function (error, results, fields) {
        if (error) {
        return  res.json({
              status:500,
              message:err.message || "Some error occurred while creating the pending_emp_family_details."
          })
        }
      });
      

    }
    return res.json({
        status:201,
        message:"success"
    })

}

