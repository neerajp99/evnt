const nodemailer = require('nodemailer')

// Create transporter method 
confirmEmail = (emailContent, callback = () => {}) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: false,
        auth: {
            user: "KEY",
            pass: "SECRET"
        }
    })

    let mailOptions = {
        from: emailContent.from,
        to: emailContent.to,
        subject: `Welcome to ${emailContent.event}! Please confirm your email address to get started.`,
        text: emailContent.message,
        html: `This is a dummy text and some more random text. Before you start working on ${emailContent.event}, you'll need to verify your email address real quick by clicking the link: <a href=${emailContent.link}>${emailContent.link}</a>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error) 
        } else {
            console.log('Confirmation email sent with message ID: ', info.messageId)
        }
        
        return callback(error, info);
    })
}

module.exports = confirmEmail