const parse = require('csv-parse');
const fs = require('fs');
const Model = require('./Models/Model');
const output = [];
let csvFile = 'data/worldcities.csv';

fs.createReadStream(csvFile)
    .pipe(parse({
    columns: true,
    delimiter: ',',
    trim: true,
    skip_empty_lines: true
})
    .on('readable', function(){
        let record
        while (record = this.read()) {
            console.log(record);
            let Model = Model.create(record, "City");
            output.push(record);
        }
    })
    // When we are done, test that the parsed output matched what expected
    .on('end', function(){

      //  console.log(output);

    }));