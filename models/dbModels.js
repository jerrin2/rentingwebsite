const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});
// property table
class Property extends Model {}

Property.init(
  {
    Property_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Property_name: DataTypes.STRING,
    Property_type: DataTypes.STRING,
    Property_price: DataTypes.INTEGER,
    coordinates: DataTypes.STRING,
    nearest_bus_stop: DataTypes.STRING,
    active_property: DataTypes.BOOLEAN,
    Property_image: DataTypes.STRING,
    Property_address:DataTypes.STRING,
    property_link:DataTypes.STRING,
  },
  { sequelize, modelName: "property",timestamps:false }
);
// Amenities table
class Amenities extends Model {}

Amenities.init(
  {
    amenities_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    amenities_name: DataTypes.STRING,
    amenities_type: DataTypes.STRING,
  },
  { sequelize, modelName: "amenities",timestamps:false }
);

// User table
class User extends Model {}

User.init(
  {
    User_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    User_name: DataTypes.STRING,
    User_mobile:DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    User_email: DataTypes.STRING,
    username:DataTypes.STRING,
    password:DataTypes.STRING,
    // current_location: DataTypes.STRING,
    // university_name: DataTypes.STRING,
    // job_status: DataTypes.STRING,
    // active_account: DataTypes.BOOLEAN,
    // age: DataTypes.INTEGER,
  },
  { sequelize, modelName: "user",timestamps:false }
);

// Authentication table
class Authentication extends Model {}

Authentication.init(
  {
    authentication_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    aadhaar_name: DataTypes.STRING,
    aadhaar_number: DataTypes.INTEGER,
    image_rgb: DataTypes.STRING,
    
  },
  { sequelize, modelName: "authentication",timestamps:false }
);

// Permission table
class Permission extends Model {}

Permission.init(
  {
    permission_id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
    },
    permission_type: DataTypes.STRING,
  },
  { sequelize, modelName: "permission",timestamps:false }
);
// Popular_location table
class Popular_location extends Model {}

Popular_location.init(
  {
    Popular_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    location_name: DataTypes.STRING,
    location_type: DataTypes.STRING,
    nearest_bus_stop: DataTypes.STRING,
    
  },
  { sequelize, modelName: "Popular_location",timestamps:false }
);

// University table

class University extends Model {}

University.init(
  {
      university_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    university_name: DataTypes.STRING,
    state_name: DataTypes.STRING,
  },
  { sequelize, modelName: "University",timestamps:false }
);
//  Bus_stop table
class Bus_stop extends Model {}

Bus_stop.init(
  {
    bus_stop_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    bus_stop_name: DataTypes.STRING,
    distance_from_university: DataTypes.STRING,
  },
  { sequelize, modelName: "Bus_stop",timestamps:false }
);


class Room_owner extends Model {}

Room_owner.init(
  {
    owner_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    Room_type: DataTypes.STRING,
    number_of_occupancy: DataTypes.STRING,
    available_date: DataTypes.INTEGER,
    active_date: DataTypes.STRING,
    last_active_date: DataTypes.STRING,
    active_property: DataTypes.BOOLEAN,
    Property_image: DataTypes.STRING,
  },
  { sequelize, modelName: "Room_owner",timestamps:false }
);


class Property_interest extends Model {}

Property_interest.init(
  {
      interest_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    date: DataTypes.STRING,
    current_occupancy: DataTypes.INTEGER,
    Room_type: DataTypes.STRING,
    user_gender: DataTypes.STRING,
    
  },
  { sequelize, modelName: "Property_interest",timestamps:false }
);


class university_details extends Model {}

university_details.init(
  {
      details_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    course_name: DataTypes.STRING,  
  },
  { sequelize, modelName: "university_details",timestamps:false }
);


class community_chat extends Model {}

community_chat.init(
  {
    chat_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    message: DataTypes.STRING,
    current_date_time: DataTypes.STRING,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    active_status: DataTypes.STRING,
  },
  { sequelize, modelName: "community_chat",timestamps:false }
);
///
class User_summary_table extends Model {}

User_summary_table.init(
  {
    summary_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    current_date: DataTypes.STRING,
    active_status: DataTypes.STRING,
    property_interest_status: DataTypes.STRING,
    
  },
  { sequelize, modelName: "User_summary_table",timestamps:false }
);

class Dashboard extends Model {}

Dashboard.init(
  {
    Dashboard_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    
  },
  { sequelize, modelName: "Dashboard",timestamps:false }
);

class service extends Model {}

service.init(
  {
      service_id: {
      type: DataTypes.UUID, 
      primaryKey:true,
    },
    service_name: DataTypes.STRING,
    created_date: DataTypes.STRING,
    last_update_date: DataTypes.STRING,


  },
  { sequelize, modelName: "service",timestamps:false }
);

class service_data extends Model {}

service_data.init(
  {
      data_id: {
      type: DataTypes.UUID,
      primaryKey:true,
    },
    data_header: DataTypes.STRING,
    data_main: DataTypes.STRING,
    data_photo_location: DataTypes.STRING,
    data_update_date: DataTypes.STRING,


  },
  { sequelize, modelName: "service_data",timestamps:false }
);

// Property.Amenities = Property.belongsTo(Amenities);
// Property.belongsTo(Amenities, {
//   constraints: true,
// });


// relation in all tables

Amenities.hasMany(Property, {
  foreignKey: {
    name: "amenities_id",
    allowNull: false,
  },
});

// Amenities.belongsTo(Property);


User.hasOne(Authentication,{
  foreignKey:"User_id"
});
Authentication.hasOne(User,{
  foreignKey:{
    name:"authentication_id",
    allowNull:true
  }
});
Permission.hasOne(User,{
  foreignKey:{
    name:"permission_id",
    allowNull:true
  }
});

University.hasOne(Bus_stop,{
  foreignKey:{
    name:"university_id",
    allowNull:true
  }
});

Property.hasOne(Room_owner,{
  foreignKey:{
    name:"Property_id",
    allowNull:true
  }
});

Property.hasMany(Property_interest,{
  foreignKey:{
    name:"Property_id",
    allowNull:true
  }

});

User.hasOne(Property_interest,{
  foreignKey:{
    name:"User_id",
    allowNull:true
  } 
});

University.hasOne(university_details,{
  foreignKey:{
    name:"university_id",
    allowNull:true
  } 
});
////

Property.hasOne(community_chat,{
  foreignKey:{
    name:"Property_id",
    allowNull:true
  } 
});
Room_owner.hasOne(community_chat,{
  foreignKey:{
    name:"owner_id",
    allowNull:true
  } 
});

//
User.hasOne(community_chat,{
  foreignKey:{
    name:"user_id1",
    allowNull:true
  } 
});

User.hasOne(community_chat,{
  foreignKey:{
    name:"user_id2",
    allowNull:true
  } 
});

User.hasOne(Dashboard,{
  foreignKey:{
    name:"user_id",
    allowNull:true
  } 
});

User.hasOne(service,{
  foreignKey:{
    name:"user_id",
    allowNull:true
  } 
});

University.hasOne(service,{
  foreignKey:{
    name:"university_id",
    allowNull:true
  } 
});

// relation in service table
User.hasOne(service_data,{
  foreignKey:{
    name:"user_id",
    allowNull:true
  } 
});

service.hasOne(service_data,{
  foreignKey:{
    name:"service_id",
    allowNull:true
  } 
});




//////relation of summary table

User.hasOne(User_summary_table,{
  foreignKey:{
    name:"user_id",
    allowNull:true
  } 
});

University.hasOne(User_summary_table,{
  foreignKey:{
    name:"university_id",
    allowNull:true
  } 
});

Property_interest.hasOne(User_summary_table,{
  foreignKey:{
    name:"interest_id",
    allowNull:true
  } 
});
Property.hasOne(User_summary_table,{
  foreignKey:{
    name:"Property_id",
    allowNull:true
  } 
});
community_chat.hasOne(User_summary_table,{
  foreignKey:{
    name:"chat_id",
    allowNull:true
  } 
});
Authentication.hasOne(User_summary_table,{
  foreignKey:{
    name:"authentication_id",
    allowNull:true
  } 
});
Permission.hasOne(User_summary_table,{
  foreignKey:{
    name:"permission_id",
    allowNull:true
  } 
});




// University.hasOne(Bus_stop)
// Bus_stop.belongsTo(University);



module.exports = {
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
  sequelize,
};