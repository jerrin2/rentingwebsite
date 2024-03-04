const { Router } = require("express");
const {addAmenities,getProperties, getAmenities, getUsers, getAuth, getPermissions, getPopularLocations, getUniversities} = require("./Controllers")
const {createUser,login} = require("./Controllers/authController")
/*
Property,
  Amenities,
  User,
  Authentication,
  Permission,
  Popular_location,
  University,
  Bus_stop,
  Room_owner,
  Property_interest,
  university_details,
  community_chat,
 User_summary_table,
  Dashboard,
  service,
  service_data,
*/
const router = Router();

router.get("/properties",getProperties);
router.get("/amenities",getAmenities);
// router.post("/add-amenities",addAmenities)
router.get("/users",getUsers);
router.get("/authentication",getAuth);
router.get("/permissions",getPermissions);
router.get("/popular-locations",getPopularLocations);
router.get("/universities",getUniversities);

// register endpoint
router.post("/register", createUser);

// login endpoint
router.post("/login", login);

module.exports = router;
