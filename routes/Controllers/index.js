const { Property, Amenities, User, Authentication, Permission, Popular_location, University, Property_interest } = require("../../models/dbModels");
const { Op } = require("sequelize");
async function getProperties(req,res){
    const {location} = req.query;
    console.log(req.query,location)
    let properties;
    // if(location!="undefined" || location!=null){
    //     properties = await Property.findAll();
    // } else{
        properties = await Property.findAll({
            where:{
                Property_address:{
                    [Op.substring]: location,
                }
            }
        })
    // }
    // console.log(properties)
    res.json(properties);
}

async function getAmenities(req,res){
    const amenities = await Amenities.findAll();
    res.json(amenities);
}
async function getUsers(req,res){
    const users = await User.findAll();
    res.json(users);
}
async function getAuth(req,res){
    const auths = await Authent
    ication.findAll();
    res.json(auths);
}
async function getPermissions(req,res){
    const permissions = await Permission.findAll();
    res.json(permissions);
}
async function getPopularLocations(req,res){
    const popular_location = await Popular_location.findAll();
    res.json(popular_location);
}
async function getUniversities(req,res){
    const universities = await University.findAll();
    res.json(universities);
}

// async function addAmenities(req,res){
//     const data = req.body;
//     try{
//         await Amenities.create({
//             amenities_id : (await Amenities.findAll()).length+1,
//             amenities_name: data.name,
//             amenities_type: data.type,
//         })
//         res.json("Added amenity successfully")
//     } catch(e){
//         res.json(e);
//     }
// }

async function addProperties(req,res){
    const properties = req.body;
    try{
        await Property.bulkCreate(properties);
        res.status(201).json({ success: true });
    } catch(e){
        res.status(500).json({ success: false, error: "Internal server error" });
    }
}

module.exports = {
    getProperties,
    getAmenities,
    getAuth,
    getPermissions,
    getPopularLocations,
    getUniversities,
    getUsers,
    addProperties
    // addAmenities
}