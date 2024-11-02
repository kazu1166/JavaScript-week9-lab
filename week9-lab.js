//  This is the program for JS Week9 Lab

// Q1
// - Create a constructor to create a `Player` object with a name
// - Player should have a `name` as well as a `lvl` set to **1** by default and `points` set to **0** by default
// - Create a method on the prototype called `gainXp` that takes in a number from 1-10 and adds it to the players `points`.
//   If the current `points` are >= 10 then add 1 to the `lvl` and decrement the points by 10.
// - Create another prototype method called `describe` that displays the players stats (name, lvl, points)

console.log("\nQ1.");

function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.point = 0;
}

Player.prototype.describe = function () {
  console.log(
    `Status \n${this.name} is Level ${this.lvl} with ${this.point} experience points \n----------------------------------------`
  );
};

Player.prototype.gainXp = function (number) {
  this.point += number;
  console.log(
    `${this.name} got ${number} points, currently has ${this.point} points`
  );

  if (this.point >= 10) {
    ++this.lvl;
    this.point -= 10;
    console.log(
      `Level Up! \n${this.name} is Level ${this.lvl} with ${this.point} experience points`
    );
  }
  console.log("----------------------------------------");
};

const player1 = new Player("Kazu");

player1.describe();

player1.gainXp(3);

player1.gainXp(9);

player1.describe();

// ---------------------------------------------------------------------------------------------------------------------
// Q2.
// You are creating a website for your college. Create a class User with 2 properties, name & email.
// It also has a method called viewData( ) that allows user to view website data.

console.log("\nQ2.");

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.view = false;
  }
  viewData() {
    const websiteData = {
      title: "College Website",
      courses: ["Computer Programming", "Business", "Physics"],
      news: "New term starts on September 1st!",
    };

    this.view = true;
    console.log(
      `${this.name} has been given permission to view the website data.`,
      this.view,
      websiteData
    );
  }
}

const user1 = new User("Kazu", "kazu@gmail.com");

console.log(user1);
user1.viewData();

// --------------------------------------------------------------------------------------------------------------------------
// Q3. Create a new class called Admin which inherits from User.
// Add a new method called editData to Admin that allows it to edit website data.

console.log("\nQ3.");

class Admin extends User {
  constructor(name, email) {
    super(name, email);
    this.edit = false;
  }
  editData() {
    this.edit = true;
    console.log(
      `${this.name} has been given permission to edit the website data.`,
      this.edit
    );
  }
}

const admin = new Admin("Bob", "bob@gmail.com");

console.log(admin);
admin.viewData();
admin.editData();
