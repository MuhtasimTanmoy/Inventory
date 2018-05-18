import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


Meteor.methods({
    'user.create'(data){
        console.log(data);
        console.log("here");
        check(data,UserSchema);

        let userid = Accounts.createUser({
            username: data.username,
            password: data.password,
            profile:{
                contactNo: data.contactNo,
            }
        });

        return { status: 1, };
    },
    'user.update'( data ){
      console.log(data);
        Meteor.users.update({_id: this.userId},
            {$set:
                {
                    'username': data.username,

                }
            }
        );
        return {
            statusCode: 1,
        }
    },

    // 'user.online'(){
    //     console.log(this);
    //     console.log("online");
    //     Meteor.users.update({_id: this.userId},
    //         {$set:
    //             {
    //                 'profile.online':true,
    //
    //             }
    //         }
    //     );
    //     return {
    //         statusCode: 1,
    //     }
    //
    //
    // },
     // 'user.offline'(){
    //     console.log(this);
    //     console.log("offline");
    //     Meteor.users.update({_id: this.userId},
    //         {$set:
    //             {
    //                 'profile.online':false,
    //
    //             }
    //         }
    //     );
    //     return {
    //         statusCode: 1,
    //     }
    //
    //
    // }

})
