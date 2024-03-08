const express = require("express");
// const Router = require("./routes");
const Router = require("./routes");
const cors = require('cors');
const {
  sequelize,
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
  service,
  User_summary_table,
} = require("./models/dbModels");
const queryInterface = sequelize.getQueryInterface();
const { DataTypes } = require("sequelize");
async function initialize() {
  const app = express(
    
  );

  app.use(express.json());
  app.use(cors())
  
  const PORT = process.env.PORT || 8000;

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  // queryInterface.addColumn('Properties', 'property_link', { type: DataTypes.STRING });
  await sequelize.sync();

  // Run only once as it will create duplicate entries
    // await Amenities.bulkCreate([
    //   {
    //     amenities_id: "1",
    //     amenities_name: "fitness",
    //     amenities_type: "Gym",
    //   },
    //   {
    //     amenities_id: "2",
    //     amenities_name: "fitness",
    //     amenities_type: "Gym",
    //   },
    //   {
    //     amenities_id: "3",
    //     amenities_name: "fitness",
    //     amenities_type: "Gym",
    //   },
    //   {
    //     amenities_id: "4",
    //     amenities_name: "fitness",
    //     amenities_type: "Gym",
    //   },
    //   {
    //     amenities_id: "6-",
    //     amenities_name: "fitness",
    //     amenities_type: "Gym",
    //   },
    // ]);

  
  //   
  //  await University.truncate();
  //  await Popular_location.truncate();
  // await User_summary_table.truncate();

  // await Property.bulkCreate([

//   {
//   "Property_id": "3",
//   "Property_name": "Evana Grove",
//   "Property_price": "2B 2B",
//   "coordinates": "33.0169145,-96.666556",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "HI",
//   "amenities_id": "1",
//   "Property_address": "3500 Hillridge Dr, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/evana-grove-plano-tx\/pxbfldt\/"
//  },

//     {
//       Property_id: "16",
//       Property_name: "Evana Grove",
//       Property_type: "2bd 2ba",
//       Property_price: 1025,
//       coordinates: "33.0169145, -96.666556",
//       nearest_bus_stop: "route 883 west",
//       active_property: true,
//       Property_image: "https://images1.apartments.com/i2/pgr7hShLAO32igUdeM4Lu55TcR7sdkQV9R1EvO2iMmM/112/evana-grove-plano-tx-building-photo.jpg",
//       amenities_id: "1",
//       Property_address:"3500 Hillridge Dr, Plano, TX 75074",
//       property_link:"https://www.apartments.com/evana-grove-plano-tx/pxbfldt/"
//     },
//    {
//       Property_id: "17",
//       Property_name: "Alta Vista Apartments",
//       Property_type: "1bd 1ba",
//       Property_price: 1125,
//       coordinates: "33.0229913, -96.7070004",
//       nearest_bus_stop: "route 883 west",
//       active_property: true,
//       Property_image: "https://images1.apartments.com/i2/QmYwXco3UVbijn1DUhc88MNoYAOde5YroL1NKw6KmIA/112/alta-vista-apartments-plano-tx-primary-photo.jpg",
//       amenities_id: "1",
//       Property_address:"700 18th St, Plano, TX 75074",
//       property_link:"https://www.apartments.com/alta-vista-apartments-plano-tx/yhy18gs/"
//     },
//    {
//       Property_id: "18",
//       Property_name: "Belleview",
//       Property_type: "2bd 2ba",
//       Property_price: 1025,
//       coordinates: "33.020979, -96.6944057",
//       nearest_bus_stop: "route 883 west",
//       active_property: true,
//       Property_image: "https://www.trulia.com/pictures/thumbs_5/zillowstatic/fp/5d3d4a61005cf8d1dfe50eafa3aef219-f_b.webp",
//       amenities_id: "1",
//       Property_address:"1340 Sherrye Dr, Plano, TX 75074",
//       property_link:"https://www.trulia.com/building/belleview-1407-15th-pl-plano-tx-75074-1002223680"
//     },
//    {
//       Property_id: "19",
//       Property_name: "Plano Apartment Homes",
//       Property_type: "1bd 1ba",
//       Property_price: 915,
//       coordinates: "32.7699777, -96.7967576",
//       nearest_bus_stop: "route 883 west",
//       active_property: true,
//       Property_image: "https://ar.rdcpix.com/fe313b44f750bb556448a7b4c7fb57b8c-f4435799od-w1024_h768_x2.jpg",
//       amenities_id: "1",
//       Property_address:"1407 15th Pl, Plano, TX 75074",
//       property_link:"https://www.realtor.com/rentals/details/1045-15th-Pl-159_Plano_TX_75074_M90603-12746"
//     },
//    {
//       Property_id: "20",
//       Property_name: "sandhurst apartment",
//       Property_type: "2bd 2ba",
//       Property_price: 1025,
//       coordinates: "32.7699777, -96.7967576",
//       nearest_bus_stop: "route 883 west",
//       active_property: true,
//       Property_image: "https://medialibrarycfo.entrata.com/15514/MLv3/4/23/2022/3/22/31543/60181aa42378a0.51631310356.jpg",
//       amenities_id: "1",
//       Property_address:"1201 E Park Blvd, Plano, TX 75074",
//       property_link:"https://www.1201park.com/plano-plano/1201-park/conventional/"
//     },
// //   //  {
// //   //     Property_id: "21",
// //   //     Property_name: "Ferro FLATS",
// //   //     Property_type: "2bd 1ba",
// //   //     Property_price: 1839,
// //   //     coordinates: "32.7699777, -96.7967576",
// //   //     nearest_bus_stop: "route 883 west",
// //   //     active_property: true,
// //   //     Property_image: "https://images1.apartments.com/i2/-X46egTb-tFk5YNJOb-DE3pxmTwk3AJzYUXhe1BHbwo/116/ferro-plano-tx-kitchen-and-dining-area.jpg",
// //   //     amenities_id: "1",
// //   //     Property_address:"1005 11th St, Plano, TX 75074",
// //   //     property_link:"https://www.apartments.com/ferro-plano-tx/7srvb1z/"
// //   //   },
// //     {
// //       Property_id: "25",
// //       Property_name: "Richland Park",
// //       Property_type: "2bd 2ba",
// //       Property_price: 1449,
// //       coordinates: "33.0169145, -96.666556",
// //       nearest_bus_stop: "route 883 west",
// //       active_property: true,
// //       Property_image: "https://photos.zillowstatic.com/fp/e0fb8b958659f0cbb687baf8538392af-cc_ft_1152.webp",
// //       amenities_id: "1",
// //       Property_address:"951 S Abrams Rd, Richardson, TX 75081",
// //       property_link:"https://www.zillow.com/apartments/richardson-tx/richland-park/C6DvvQ/"
// //     },
//  {
//       Property_id: "26",
//       Property_name: "Canterbury Courts",
//       Property_type: "1bd 1ba",
//       Property_price: 1367,
//       coordinates: "33.0169145, -96.666556",
//       nearest_bus_stop: "route 883 west",
//       active_property: true,
//       Property_image: "https://photos.zillowstatic.com/fp/1c83b44556a50b962f0023985caee1b4-cc_ft_1152.webp",
//       amenities_id: "1",
//       Property_address:"2600 E Renner Rd, Richardson, TX 75082",
//       property_link:"https://www.zillow.com/apartments/richardson-tx/canterbury-courts/5Xhsg4/"
//     },
// //  {
// //       Property_id: "27",
// //       Property_name: "The Cayman Las Colinas",
// //       Property_type: "1bd 1ba",
// //       Property_price: 1025,
// //       coordinates: "33.0169145, -96.666556",
// //       nearest_bus_stop: "route 883 west",
// //       active_property: true,
// //       Property_image: "https://photos.zillowstatic.com/fp/00d0b8305c6df698b1c6a33b4e0a6fe6-cc_ft_960.webp",
// //       amenities_id: "1",
// //       Property_address:"1071 Lake Carolyn Pkwy, Irving, TX 75039",
// //       property_link:"https://www.zillow.com/apartments/irving-tx/the-cayman-las-colinas/65gr5g/"
// //     },
// //  {
// //       Property_id: "28",
// //       Property_name: "Grant Valley Ranch",
// //       Property_type: "1bd 1ba",
// //       Property_price: 1250,
// //       coordinates: "33.0169145, -96.666556",
// //       nearest_bus_stop: "route 883 west",
// //       active_property: true,
// //       Property_image: "https://photos.zillowstatic.com/fp/36578e58cec479440a29989282443584-cc_ft_960.webp",
// //       amenities_id: "1",
// //       Property_address:"500 Santa Fe Trl, Irving, TX 75063",
// //       property_link:"https://www.zillow.com/apartments/irving-tx/grant-valley-ranch/5Xhshf/"
// //     },
// //  {
// //       Property_id: "29",
// //       Property_name: "Gardens of Valley Ranch",
// //       Property_type: "1bd 1ba",
// //       Property_price: 1102,
// //       coordinates: "33.0169145, -96.666556",
// //       nearest_bus_stop: "route 883 west",
// //       active_property: true,
// //       Property_image: "https://photos.zillowstatic.com/fp/3b46653a76166b38f5901f3bd5a6d2a1-cc_ft_960.webp",
// //       amenities_id: "1",
// //       Property_address:"8800 Saddlehorn Dr, Irving, TX 75063",
// //       property_link:"https://www.zillow.com/apartments/irving-tx/gardens-of-valley-ranch/9KM9ZM/"
// //     },
// //  {
// //       Property_id: "30",
// //       Property_name: "Gardens of Valley Ranch",
// //       Property_type: "2bd 2ba",
// //       Property_price: 1776,
// //       coordinates: "33.0169145, -96.666556",
// //       nearest_bus_stop: "route 883 west",
// //       active_property: true,
// //       Property_image: "https://photos.zillowstatic.com/fp/91c9e76360b3caea980ddc5e5046c9d1-cc_ft_960.webp",
// //       amenities_id: "1",
// //       Property_address:"8800 Saddlehorn Dr, Irving, TX 75063",
// //       property_link:"https://www.zillow.com/apartments/irving-tx/gardens-of-valley-ranch/9KM9ZM/"
// //     },
// //  {
// //       Property_id: "31",
// //       Property_name: "The Beckham",
// //       Property_type: "1bd 1ba",
// //       Property_price: 940,
// //       coordinates: "33.0169145, -96.666556",
// //       nearest_bus_stop: "route 883 west",
// //       active_property: true,
// //       Property_image: "https://photos.zillowstatic.com/fp/0df5e34a2e93e9ee7525ef606972d847-cc_ft_960.webp",
// //       amenities_id: "1",
// //       Property_address:"12111 Audelia Rd, Dallas, TX 75243",
// //       property_link:"https://www.zillow.com/apartments/dallas-tx/the-beckham/9KThR3/"
// //     },
// {
//   "Property_id": 32,
//   "Property_name": "Texas Star Townhomes",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1425,
//   "coordinates": "33.0195164,-96.6927187",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/q9HvXopR9sqgdgelBkMRpfy1UqtbetA0tJ2DJlHVVYQ\/111\/texas-star-townhomes-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "1504 E 15th St, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/texas-star-townhomes-plano-tx\/8xzfj11\/"
//  },
//  {
//   "Property_id": 33,
//   "Property_name": "The Gio",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1200,
//   "coordinates": "33.0565563,-96.6878521",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/thegioapts.com\/wp-content\/uploads\/2022\/06\/InteriorPhoto-2.jpg",
//   "amenities_id": "6-",
//   "Property_address": "1800 E Spring Creek Pkwy, Plano, TX 75074",
//   "property_link": "https:\/\/thegioapts.com\/?botLoad=ScheduleTour&utm_medium=search"
//  },
//  {
//   "Property_id": 34,
//   "Property_name": "Aura One90",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1330,
//   "coordinates": "33.0056964,-96.7027087",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/KZ8n7t8EDig5grAyNe5pKJ4pVtA3EvqbafNiu0sUvHw\/111\/aura-one90-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "680 Executive Dr, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/aura-one90-plano-tx\/hvcn7g1\/"
//  },
//  {
//   "Property_id": 35,
//   "Property_name": "Touraine Plano",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1290,
//   "coordinates": "33.0193075,-96.6922482",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/-3d1Na2pw9CtR2wrsE1wps7_vEo8xE1M81oth4Owhnk\/111\/touraine-plano-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "1514 E 15th St, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/touraine-plano-plano-tx\/6r0phqv\/"
//  },
//  {
//   "Property_id": 36,
//   "Property_name": "Patriot Park",
//   "Property_type": "2bd 2ba",
//   "Property_price": 990,
//   "coordinates": "33.0172847,-96.7060988",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/NcDLj4kM0Glybpam0aOk_JNNUzuBOE09MRL0UUKDBCM\/111\/patriot-park-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "701 13th\/14th Connector, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/patriot-park-plano-tx\/rpwpx11\/"
//  },
//  {
//   "Property_id": 37,
//   "Property_name": "MAA Los Rios",
//   "Property_type": "1bd 1ba",
//   "Property_price": 1123,
//   "coordinates": "33.012262,-96.6454407",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/bPiLuflmm_FUG91-j-iMds_8q6FNkP_8mWjED0ZPepk\/111\/maa-los-rios-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "4701 14th St, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/maa-los-rios-plano-tx\/de1885l\/"
//  },
//  {
//   "Property_id": 38,
//   "Property_name": "Junction15apartments",
//   "Property_type": "1bd 1ba",
//   "Property_price": 1280,
//   "coordinates": "33.0193965,-96.7012578",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https://www.junction15apartments.com/uploads/images/images/1336x1336G/763215/Junction_15_outdoor_pool_1_.jpg?1702941386",
//   "amenities_id": "6-",
//   "Property_address": "930 E 15th St, Plano, TX 75074",
//   "property_link": "https:\/\/www.junction15apartments.com\/?utm_knock=w&doorway=schedule"
//  },

//  {
//   "Property_id": 39,
//   "Property_name": "camdem valley park",
//   "Property_type": "1bd 1ba",
//   "Property_price": 999,
//   "coordinates": "32.9408147,-96.955362",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images.ctfassets.net\/pg6xj64qk0kh\/FFb0WlozZffcY2HKFLGKT\/e4de54715089c8470ae45828ff5b7ed2\/camden-valley-park-apartments-irving-tx-front-pool-and-fitness-center.jpg",
//   "amenities_id": "6-",
//   "Property_address": "9835 Valley Ranch Pkwy W, Irving, TX 75063",
//   "property_link": "https:\/\/www.camdenliving.com\/apartments\/irving-tx\/camden-valley-park?y_source=1_MTE2Nzc0NjQtNzE1LWxvY2F0aW9uLnJlc2VydmF0aW9uX3VybA%3D%3D#scheduleatour"
//  },
//  {
//   "Property_id": 40,
//   "Property_name": "waterford",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1455,
//   "coordinates": "33.0149412,-96.6628019",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/waterfordonthemeadow.com\/wp-content\/uploads\/2022\/03\/Waterford-on-the-Meadows_1414-Shiloh-Rd-Plano-TX_RPI_II-908124-28.jpg",
//   "amenities_id": "6-",
//   "Property_address": "1414 Shiloh Rd, Plano, TX 75074",
//   "property_link": "https:\/\/waterfordonthemeadow.com\/"
//  },
//  {
//   "Property_id": 41,
//   "Property_name": "vana Grove",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1138,
//   "coordinates": "33.0170441,-96.6656553",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/res.cloudinary.com\/g5-assets-cld\/image\/upload\/x_17,y_77,h_1190,w_1983,c_crop\/q_auto,f_auto,fl_lossy,g_center,h_598,w_998\/g5\/g5-c-5u38kvsco-lurin-properties\/g5-cl-1nph0ghjdd-lurin-properties-plano-tx\/uploads\/IMG_1245_36_uefwem_m0l9pl.jpg",
//   "amenities_id": "6-",
//   "Property_address": "3500 Hillridge Dr, Plano, TX 75074",
//   "property_link": "https:\/\/www.evanagrove.com\/?utm_knock=w&doorway=schedule"
//  },
//  {
//   "Property_id": 42,
//   "Property_name": "Pleasant Park Apartments",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1105,
//   "coordinates": "33.0300997,-96.6994144",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/nBXE9F4TnfINusw6l6gqS1NZ_wl2obtZONiTzlTBVCc\/116\/pleasant-park-apartments-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "2301 K Ave, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/pleasant-park-apartments-plano-tx\/5df8cbq\/"
//  },
//  {
//   "Property_id": 43,
//   "Property_name": "MORADA PLANO",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1330,
//   "coordinates": "33.0186311,-96.6994942",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/encrypted-tbn0.gstatic.com\/images?q=tbn:ANd9GcR43RhLNatxy_-O0wM4s28rFsGfU3--u3jiTw&usqp=CAU",
//   "amenities_id": "6-",
//   "Property_address": "1009 14th St, Plano, TX 75074",
//   "property_link": "https:\/\/www.moradaplanoapts.com\/?utm_knock=gmb"
//  },
//  {
//   "Property_id": 44,
//   "Property_name": "shiloh park",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1330,
//   "coordinates": "33.0291839,-96.6658375",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/assets.marketapts.com\/assets\/converted\/702SPA\/images\/apartments\/photos\/ubxsfl09q6le2ji596c8llmvx7svi7al.jpg.800x600.jpg",
//   "amenities_id": "6-",
//   "Property_address": "3500 E Park Blvd, Plano, TX 75074",
//   "property_link": "https:\/\/www.shilohparkapts.com\/floor-plans"
//  },
//  {
//   "Property_id": 45,
//   "Property_name": "Century Court Student Housing",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1512,
//   "coordinates": "33.0507868,-96.6808213",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/rentpath-res.cloudinary.com\/$img_current\/t_3x2_webp_2xl\/740e8095b76f27f49832205b37b9761d",
//   "amenities_id": "6-",
//   "Property_address": "5800 Jupiter Rd, Plano, TX 75074",
//   "property_link": "https:\/\/www.rent.com\/texas\/plano-apartments\/century-court-student-housing-4-lnp001E000000nyXENIA2"
//  },
//  {
//   "Property_id": 46,
//   "Property_name": "SHERIDAN PARK",
//   "Property_type": "1bd 1ba",
//   "Property_price": 1012,
//   "coordinates": "33.0570334,-96.6847009",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/capi.myleasestar.com\/v2\/dimg\/66948301\/1400x1200\/66948301.jpg",
//   "amenities_id": "6-",
//   "Property_address": "2001 E Spring Creek Pkwy, Plano, TX 75074",
//   "property_link": "https:\/\/www.sheridanparkapartments.com\/"
//  },
//  {
//   "Property_id": 47,
//   "Property_name": "Courtyard Apartments",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1515,
//   "coordinates": "33.0192353,-96.6916412",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/Zzm3ooP-pMmQqNdydiQs4EeddTz3xgrPeULngr6ZWio\/117\/courtyard-apartments-plano-tx-building-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "1600 E 15th St, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/courtyard-apartments-plano-tx\/e82t45q\/"
//  },
//  {
//   "Property_id": 48,
//   "Property_name": "Gateway Crossing",
//   "Property_type": "2bd 2ba",
//   "Property_price": 1238,
//   "coordinates": "33.0010663,-96.6700511",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/LoDniqZ-YsERxl9N9poVMtfkmCT8qrc7AcZMLxrBb9k\/111\/gateway-crossing-apartments-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "380 Vistacourt Dr, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/gateway-crossing-apartments-plano-tx\/he7llw2\/"
//  },
//  {
//   "Property_id": 49,
//   "Property_name": "K Avenue Lofts",
//   "Property_type": "1bd 1ba",
//   "Property_price": 1099,
//   "coordinates": "33.0325599,-96.699918",
//   "nearest_bus_stop": "route 883 west",
//   "active_property": true,
//   "Property_image": "https:\/\/images1.apartments.com\/i2\/Wzd4z9O5QJv7r87VgalezmU4EPmTi5coVS6B-0_5wxc\/111\/k-avenue-lofts-plano-tx-primary-photo.jpg",
//   "amenities_id": "6-",
//   "Property_address": "2505 K Ave, Plano, TX 75074",
//   "property_link": "https:\/\/www.apartments.com\/k-avenue-lofts-plano-tx\/ggxpcjz\/"
//  }

//     ]);
//   //   await Permission.bulkCreate([
//   //     {
//   //       permission_id:"1",
//   //       permission_type: "ACTIVE",
//   //     },
//   //   ]);

  //  await User.bulkCreate([
  // //       {
  // //         User_id: "1",
  // //         User_name: "ben",
  // //         current_location: "dallas",
  // //         university_name: "university of dallas",
  // //         age: "22",
  // //         gender: "male",
  // //         job_status: "nil",
  // //         active_account: true,
  // //         authentication_id: null,
  // //         permission_id: "1",
  // //       },

  //       {
  //         User_id: "2",
  //         User_name: "allen",
  //         current_location: "dallas",
  //         university_name: "university of dallas",
  //         age: "21",
  //         gender: "male",
  //         job_status: "nil",
  //         active_account: true,
  //         authentication_id: null,
  //         permission_id: "1",
  //       },
  //  ]);

  //  await Authentication.bulkCreate([
  //   {
  //     authentication_id: "1",
  //     aadhaar_name: "ben bin",
  //     aadhaar_number: "666667777",
  //     image_rgb: "link.com",
  //     User_id: "1",
  //   },
  // ]);

  //  await Popular_location.bulkCreate([

  //   {
  //     Popular_id: "1",
  //     location_name: "The Plinth",
  //     location_type: "Tourist attraction",
  //     nearest_bus_stop: "route 883 east",
  //   },
  //   {
  //     Popular_id: "2",
  //     location_name: "Prairie Creek Park",
  //     location_type: "Tourist attraction",
  //     nearest_bus_stop: "route 883 east",
  //   },
  //   {
  //     Popular_id: "3",
  //     location_name: "The Dalls Arboretum and Botanical Garden",
  //     location_type: "Tourist attraction",
  //     nearest_bus_stop: "route 883 east",
  //   },
  //   {
  //     Popular_id: "4",
  //     location_name: "Klyde Warren Park",
  //     location_type: "Tourist attraction",
  //     nearest_bus_stop: "route 883 east",
  //   },
  //   {
  //     Popular_id: "5",
  //     location_name: "Celestial Park",
  //     location_type: "Tourist attraction",
  //     nearest_bus_stop: "route 883 west",
  //   },

  // ]);

  //  await University.bulkCreate([
  //   {
  //     university_id: "1",
  //     university_name: "university of dallas",
  //     state_name: "texas",
  //   },
  // ]);

  //  Bus_stop.bulkCreate([
  //   {
  //     bus_stop_id: "1",
  //     bus_stop_name: "richardson",
  //     distance_from_university: "200meters",
  //     university_id: "1",
  //   },
  // ]);

  //   await Room_owner.bulkCreate([
  //     {
  //       owner_id: "1",
  //       Room_type: "2bd 2ba",
  //       number_of_occupancy:"2",
  //       available_date: "12/1/2024",
  //       active_date: "25/12/2023",
  //       last_active_date: "12/1/2025",
  //       Property_id: "1",
  //     },
  // ]);

  //   await Property_interest.bulkCreate([
  //     {
  //       interest_id: "1",
  //       date: "16/12/2023",
  //       current_occupancy:"2",
  //       Room_type: "2bd 2ba",
  //       user_gender: "male",
  //       Property_id: "1",
  //       user_id: "1",
  //     },
  // ]);

  //   await university_details.bulkCreate([
  //     {
  //       details_id: "1",
  //       course_name: "Master of Science in Computer Science",
  //       university_id: "1",
  //     },
  // ]);
    // await User.truncate();

  //   await community_chat.bulkCreate([
  //     {
  //       chat_id: "1",
  //       message: "hello ",
  //       current_date_time:"15/12/2023-2pm",
  //       start_date: "15/12/2023",
  //       end_date: "15/12/2023",
  //       active_status: "1",
  //       Property_id: "1",
  //       owner_id: "1",
  //       user_id1: "1",
  //       user_id2: "2",
  //     },
  // ]);

  //   await User_summary_table.bulkCreate([
  //     {
  //       summary_id: "1",
  //       current_date: "12/1/2024",
  //       active_status: "1",
  //       property_interest_status: "1",
  //       User_id: "1",
  //       university_id: "1",
  //       interest_id: "1",
  //       Property_id: "1",
  //       chat_id: "1",
  //       authentication_id: "1",
  //       permission_id:"1",
  //     },
  // ]);

  // await Dashboard.bulkCreate([
  //   {
  //     Dashboard: "1",
  //     User_id: "1",
  //   },
  // ]);

  //   await service.bulkCreate([
  //     {
  //       service_id: "1",
  //       service_name: "12/1/2024",
  //       created_date: "12/1/2024",
  //       last_update_date: "12/1/2024",
  //       User_id: "1",
  //       university_id: "1",
  //     },
  // ]);

  // queryInterface.addColumn('properties', 'Property_address', { type: DataTypes.STRING,defaultValue: "Address 1",allowNull: false });
  // await Property.bulkCreate([
  //   {
  //     Property_id: "8",
  //     Property_name: "south side flats",
  //     Property_type: "2bd 2ba",
  //     Property_price: 1625,
  //     coordinates: "32.7699777, -96.7967576",
  //     nearest_bus_stop: "route 883 west",
  //     active_property: true,
  //     Property_image: "https://www.southsideflatsapts.com/schedule-a-tour?utm_medium=organic&utm_source=google&utm_campaign=gmb-meet-elise",
  //     amenities_id: "1",
      // Property_address:"address 2"
  //   }])

  app.use("/api",Router);
  app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`);
  });

}

initialize();
