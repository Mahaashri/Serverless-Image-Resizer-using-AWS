const AWS = require('aws-sdk');
const Jimp = require('jimp');

const s3 = new AWS.S3();
const DEST_BUCKET = process.env.DEST_BUCKET;

exports.handler = async (event) => {
    const record = event.Records[0];
    const sourceBucket = record.s3.bucket.name;
    const objectKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, ' '));

    try {
        const params = { Bucket: sourceBucket, Key: objectKey };
        const inputData = await s3.getObject(params).promise();

        const image = await Jimp.read(inputData.Body);
        const resizedImage = await image.resize(200, 200).getBufferAsync(Jimp.MIME_JPEG);

        const destParams = {
            Bucket: DEST_BUCKET,
            Key: objectKey,
            Body: resizedImage,
            ContentType: 'image/jpeg'
        };

        await s3.putObject(destParams).promise();

        console.log(`Successfully resized ${objectKey}`);
    } catch (error) {
        console.error(error);
        throw error;
    }
};
