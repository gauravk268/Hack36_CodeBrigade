const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.PASSWORD
    },
});

let mailOptions = {
    from : process.env.ADMIN_EMAIL,
    to: "",
    subject: 'Alert for Covid Spread !!',
    text : "Hi there, hope your having good health. We found a covid case on the same day you visit our restaurant, we are awaring you. Hope you are safe !!"
};

// transporter.sendMail(mailOptions, function(error, info){
//     if(error){
//         console.log("error");
//     }
//     else {
//         console.log('Email sent'+ info.response);
//     }
// });

var sendDm = (email)=>{
    mailOptions.to = email;
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log("error");
        }
        else {
            console.log('Email sent'+ info.response);
        }
    });
}

exports.sendDm = sendDm;

// var sendDM = async(mailOptions)=>{
//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         smtp:457,
//         auth: {
//         user: process.env.ADMIN_EMAIL,
//         pass: process.env.PASSWORD
//         }
//     });
//     transporter.sendMail(mailOptions, function(error){
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' );
//             return res.status(200).send(data);
//         }
//     });
//     try {
//         console.log('2222222');
//         const opts = mailOptions;
//         const data = await transporter.sendMail(opts);
        
//     }
//     catch(err){
//         console.log('*****');
//         return res.status(501).send('Service not working');
//     }
// }
// try{
//     var mailOptions = {
//         from: process.env.ADMIN_EMAIL,
//         to: '' ,
//         subject: 'Alert for Covid Spread !!',
//         text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
//         html: '<p>Hi there, hope your having good health. We found a covid case on the same day you visit our restaurant, we are awaring you. Hope you are safe !!</p>'
//     }
//     var transporter = nodemailer.createTransport({
//         host: "smtp.mailtrap.io",
//         port: 2525,
//         auth: {
//           user: "e417eae4f3cbf6",
//           pass: "2acf6727f8b668"
//         }
//       });
//     transporter.verify(function(error, success) {
//         if (error) {
//              console.log(error);
//         } else {
//              console.log('Server is ready to take our messages');
//         }
//      });
//     // let transporter = nodemailer.createTransport({
//     //     service:'gmail',
//     //     auth: {
//     //         user: '011999gv@gmail.com',
//     //         pass: '01@Gaurav'
//     //     }
//     // });
    
// }
// catch(err){
//     console.log(err)
// }


// async function sendDM(mail) {
//         console.log('0')
//     // try {
//         console.log('1')
       
//         console.log('2')
//         var mailOptions = {
//             from: process.env.ADMIN_EMAIL,
//             to: '' ,
//             subject: 'Alert for Covid Spread !!',
//             text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
//             html: '<p>Hi there, hope your having good health. We found a covid case on the same day you visit our restaurant, we are awaring you. Hope you are safe !!</p>'
//         }
//         var transporter = nodemailer.createTransport({
//             host: "smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//               user: "e417eae4f3cbf6",
//               pass: "2acf6727f8b668"
//             }
//           });
//         transporter.verify(function(error, success) {
//             if (error) {
//                  console.log(error);
//             } else {
//                  console.log('Server is ready to take our messages');
//             }
//          });
//         mailOptions.to=mail;
//         console.log(mailOptions.to);
//         console.log('pandjn')
//         const data =  transporter.sendMail(mailOptions,(err,info)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(info);
//             }
//         });
//         console.log('91919');
//         // await transporter.sendMail(mailOptions, error => console.log(error), info => console.log('Message sent: '+ info.messageId));
//         // return res.status(200).send('Mail sent')
//         return { success : true, message : 'Email sent.', data : data }
//     // }
//     // catch (err) {
//     //     return { success : false, message : 'Email service not working.' , error : err}
//     // }
// }


// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.ADMIN_EMAIL,
//         pass: process.env.PASSWORD
//     }
// });


//  function sendDM(mail) {

//     //try {
//             var mailOptions = {
//                 from: process.env.ADMIN_EMAIL,
//                 to: mail ,
//                 subject: 'Alert for Covid Spread !!',
//                 text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
//                 html: '<p>Hi there, hope your having good health. We found a covid case on the same day you visit our restaurant, we are awaring you. Hope you are safe !!</p>'
//             }
//             console.log('sas');
            
//             console.log('ddw')
//             const data = nodemailer.createTransport({
//                 host: "smtp.mailtrap.io",
//                 port: 2525,
//                 auth: {
//                     user: "e417eae4f3cbf6",
//                     pass: "2acf6727f8b668"
//                 }
//                 }).sendMail(mailOptions);
//             console.log('asss');

    //return { success : true, message : 'Email sent.', data : data }
    //return res.status(200).send('xjhd');
    // }
    // catch (err) {
    //     return { success : false, message : 'Email service not working.' , error : err}
    // }
// }

// exports.sendDM = sendDM;







