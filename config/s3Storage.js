const AWS = require("aws-sdk")

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET
})
const { v4: uuidv4 } = require('uuid');

async function upto_s3_storage(bucketName, file, path) {
  try {
    let namesplited = file.name.split(".")
    let filetype = namesplited[namesplited.length - 1]
    const params = {
      Bucket: bucketName + path,
      Key: file.name,
      Body: file.data,
    }
    return await s3.upload(params).promise()
  }
  catch (err) {
    console.log(err)
  }
}

exports.fileUploadToS3 = async (bucketName, files, path) => {
  return new Promise((resolve, reject) => {
    files = Array.isArray(files) ? files : [files]
    if (!files.length) return reject("No files found")
    let uploaded = []
    files.forEach(async (file) => {
      try {
        let uploadDetail = await upto_s3_storage(bucketName, file, path)
        uploaded.push(uploadDetail)
        console.log(uploadDetail)
        if (uploaded.length == files.length) return resolve(uploaded)
      }
      catch (err) {
        console.log(err)
        reject("File Uplaod failed")
      }
    });
  })
}

exports.fileDownloadFromS3 = async (bucketName, fileKey, fileVersion, res) => {
  const params = {
    Bucket: bucketName,
    Key: fileKey,
    VersionId: fileVersion == 'undefined' ? undefined : fileVersion
  }
  try {
    let data = await s3.getObject(params).promise()
    res.status(200).send(data.Body)
  } catch (ex) {
    console.log(ex)
  }
}
exports.getFileFromS3 = async (bucketName, fileKey, fileVersion) => {
  return new Promise(async (resolve, reject) => {
    const params = {
      Bucket: bucketName,
      Key: fileKey,
      VersionId: fileVersion == 'undefined' ? undefined : fileVersion
    }
    try {
      let data = await s3.getObject(params).promise()
      resolve(data)
    } catch (ex) {
      console.log(ex)
      reject(ex)
    }
  })
}
exports.fileDeleteFromS3 = (bucketName, fileKey, VersionId = null) => {
  return new Promise(async (resolve, reject) => {
    try {
      const params = {
        Bucket: bucketName,
        Key: fileKey,
        VersionId
      }
      let data = await s3.deleteObject(params).promise()
      resolve(data)
    } catch (err) {
      reject(err)
    }
  })
}
