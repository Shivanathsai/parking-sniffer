const mongoose = require("mongoose");
// const Spot = require("./Spot");

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  booking_status: {
    type: String
  },
  vehicle_id: {
    type: Number
  }
  // parker: {
  //   type: Schema.Types.ObjectId,
  //   ref: "users"
  // }
});

const SpotSchema = new Schema({
  address: {
    line1: {
      type: String
    },
    line2: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zipcode: {
      type: Number
    }
  },
  description: {
    type: String
  },
  vehicle_types: {
    type: [String]
  },
  spot_type: {
    type: String
  },
  rental_rate: {
    type: Number
  },
  rental_type: {
    type: String
  },
  img_url: {
    type: String
  },
  reservations: [ReservationSchema]
  // {
  //   start_date: {
  //     type: Date
  //   },
  //   end_date: {
  //     type: Date
  //   },
  //   booking_status: {
  //     type: String
  //   },
  //   vehicle_id: {
  //     type: Number
  //   }
  // }
});

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },
  profile: {
    avatar: {
      type: String
    },
    bio: {
      type: String
    }
  },
  spots: [SpotSchema],
  vehicles: [
    {
      vehicle_type: {
        type: String
      },
      plate_no: {
        type: String
      },
      color: {
        type: String
      },
      model: {
        type: String
      },
      year: {
        type: Number
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
