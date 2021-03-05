const rp = require("request-promise");
const fs = require("fs");
const path = require("path");

const options = {
    uri: "https://reddit.com/r/popular.json",
    json: true // Automatically parses the JSON string in the response
};

rp(options)
    .then(payload => {
        payload.data.children.forEach(article => {
            const extname = path.extname(article.data.url);
            
            const reqImageOptions = {
                uri: article.data.url,
                encoding: "base64"
            };

            if (extname == ".jpg" || extname == ".gifv" || extname == ".png") {
                rp(reqImageOptions)
                    .then(image => {
                        fs.writeFile(`./downloads/${article.data.id}${extname}`, image, "base64",  (err) => {
                            if (err) throw err;
                            console.log('Saved!');
                        });
                    })
            }
        });
    })
    .catch(err => console.log(err));