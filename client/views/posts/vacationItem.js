Template.vacationItem.helpers({
  vacation : function() {
     return Vacations.findOne({_id: this.vacationId});
  }
});