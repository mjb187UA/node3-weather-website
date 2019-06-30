const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a4e0022df5bae439d46b3ab10989e736/' + longitude + ',' + latitude

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather services', undefined)
        }
        else if (body.error){
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The high for today is ' + body.daily.data[0].temperatureHigh + ' and the low for today is ' + body.daily.data[0].temperatureLow + '.')
        }
    })
}

module.exports = forecast