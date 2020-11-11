var request = require('request');
var fs = require('fs');

var postUrl = 'http://api.hubapi.com/filemanager/api/v3/files/upload?hapikey=107139b4-4101-481d-aea3-06c0697b2827';

var filename = 'bike.jpeg';

var fileOptions = {
    access: 'PRIVATE',
    ttl: 'P3M',
    overwrite: false,
    duplicateValidationStrategy: 'NONE',
    duplicateValidationScope: 'ENTIRE_PORTAL'
};

var formData = {
    file: fs.createReadStream(filename),
    options: JSON.stringify(fileOptions),
    folderPath: 'docs'
};

request.post({
    url: postUrl,
    formData: formData
}, function optionalCallback(err, httpResponse, body){
    return console.log(err, httpResponse.statusCode, body);
});
