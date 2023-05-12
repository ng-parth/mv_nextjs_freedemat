import sendEmail from "./services/send-email";

const postInquiryHandler = async (req, res) => {
    console.log('Req received ');
    if (req.method === 'POST') {
        console.log('Req body: ', req.body);
        try {
            const info = await sendEmail(JSON.parse(req.body));
            console.log('Email resp: ', info);
            res.status(200).json(info);   
        } catch (error) {
            console.log('Failed to send email: ', error);
            res.status(500).send(error);
        }
    }
    res.status(403).send();
};

export default postInquiryHandler;