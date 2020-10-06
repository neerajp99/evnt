const nodemailer = require('nodemailer')

// Create transporter method 
const sendEmail = (post, callback = () => {
    let transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false,
        auth: {
            user: "USERID",
            pass: "SECRET"
        }
    })

    let mailOptions = {
        from: post.from,
        to: post.to,
        subject: `Invitation: Join ${post.event} as an admin`,
        text: post.message,
        html: `You have been invited to join ${post.event} as an admin. To join, click here: <a href=${post.link}>${post.link}</a>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error) 
        } else {
            console.log('Email Sent with message ID: ', info.messageId)
        }
    })
})

module.exports = sendEmail