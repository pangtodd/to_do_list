// business logic - List
function List()  {
  this.tasks = {};
  this.currentId = 0;
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//business logic - tasks
function Task(date, notes, completed){
  this.date = date;
  this.notes = notes;
  this.completed = completed;
}

let kitchen = new Task("Monday", "dirty dishes", "false");


//removes a task
List.prototype.removeTask = function(id)  {
  if (this.tasks[id] === undefined)  {
    return false;
  }
  delete this.tasks[id];
  return true;
};

// task complete
// List.prototype.completeTask = function(id)  {
//   if (this.tasks[id] === undefined) {
//     return false;
//   }
//   this.completed.tasks[id].push(true);
//   return true;
// };

List.prototype.addTask = function(task)
{
  task.id = this.assignId();
  this.tasks[task.id] = task;
}



// business logic for AddressBook
function AddressBook()  {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.addContact = function(contact)
{
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
}

// business logic for Contacts
function Contact(firstName, lastName, phoneNumber)  {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

AddressBook.prototype.findContact = function(id)  {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id)  {
  if (this.contacts[id] === undefined)  {
    return false;
  }
  delete this.contacts[id];
  return true;
};