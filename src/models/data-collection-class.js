'use strict';



// wrapper for our CRUD actions against the DB

class Products {
  constructor(model) {
    this.model = model;

  }

  get(id) {
    if (id) {
      return this.model.findOne({ _id: id })  //findOne is a mongoose method to find one specific item
    } else {
      return this.model.find({});
    }
  }
  create(record) {
    let newRecord = new this.model(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true })// new: true is required to get back the newly created thing
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = Products;
