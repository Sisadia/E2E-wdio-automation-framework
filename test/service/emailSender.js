const nodemailer = require('nodemailer');

const sendEmail = async (filePath) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    let mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.RECIPIENT_EMAIL,
        subject: 'Test Completed - Screenshot Attached',
        text: 'Screenshot captured during test run.',
        attachments: [
            {
                filename: 'screenshot.png',
                path: filePath
            }
        ]
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
