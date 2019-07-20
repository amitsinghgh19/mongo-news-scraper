$(document).ready(function() {

    var delay = 300; // milliseconds
    var cookie_expire = 0; // days

    var cookie = localStorage.getItem("list-builder");
    if(cookie == undefined || cookie == null) {
        cookie = 0;
    }

    if(((new Date()).getTime() - cookie) / (1000 * 60 * 60 * 24) > cookie_expire) {
        $("#list-builder").delay(delay).fadeIn("fast", () => {
            $("#popup-box").fadeIn("fast", () => {});
        });

        $("button[name=subscribe]").click(() => {
            $.ajax({
                type: "POST",
                url: $("#popup-form").attr("action"),
                data: $("#popup-form").serialize(),
                success: (data) => {
                    $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Tech Newscrape newsletter!</p>");
                }
            });
            $("#popup-box-content").html("<p style='text-align: center'>Thank you for subscribing to The Tech Newscrape newsletter!</p>");
            //location.href='/'
        });

        $("#popup-close").click(() => {
            $("#list-builder, #popup-box").hide();
            localStorage.setItem("list-builder", (new Date()).getTime());
            location.href='/'
        });
    }

    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.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);
    // const msg = {
    // to: 'test@example.com',
    // from: 'test@example.com',
    // subject: 'Sending with Twilio SendGrid is Fun',
    // text: 'and easy to do anywhere, even with Node.js',
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // };
    // sgMail.send(msg);

});