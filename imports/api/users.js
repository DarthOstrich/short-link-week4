import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

// code to run on server at startup
Accounts.validateNewUser((user) => {
  // console.log('this is the user', user);
  const email = user.emails[0].address;

  try {
    const userSchema = new SimpleSchema({
      email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
      }
    });

    userSchema.validate({
      email
    });
  } catch (e) {
    throw new Meteor.Error(400, e.message);
  }

  return true;
});
