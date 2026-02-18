**Serverless Image Resizer using AWS**
**Overview:**
This project is a fully serverless image processing application built on AWS.
It automatically resizes images when they are uploaded to an S3 bucket.
The system uses event-driven architecture to trigger image processing without managing servers.

**Architecture**

**1) Services Used:**

Amazon S3 – Stores original and resized images
AWS Lambda – Processes and resizes images
Amazon CloudWatch – Logs and monitors execution
IAM Roles – Secure service permissions

**2) How It Works**

User uploads an image to the source S3 bucket
S3 triggers a Lambda function
Lambda:
Downloads the image
Resizes it to 200x200 using Jimp
Uploads the resized image to a destination S3 bucket
Logs are stored in CloudWatch

**3) Tech Stack**

Node.js 20
Jimp (v0.16.1)
AWS SDK
Amazon S3
AWS Lambda


**Project Structure**

index.js
package.json
node_modules/
README.md

**4) Lambda Configuration**

Runtime: Node.js 20
Memory: 512 MB
Timeout: 10 seconds

Environment Variable:
DEST_BUCKET = destination bucket name

**5) IAM Permissions Required**

The Lambda execution role must allow:

s3:GetObject
s3:PutObject
CloudWatch Logs permissions

**6) Key Learnings**

Event-driven serverless architecture
AWS Lambda memory and timeout optimization
Debugging using CloudWatch logs
Managing IAM roles and permissions
Handling image processing in Node.js

**7) Future Improvements**

Support multiple image sizes
Add API Gateway for public upload endpoint
Integrate CloudFront for global delivery
Store metadata in DynamoDB

Why This Project?
This project demonstrates how scalable, serverless applications can be built using AWS without managing infrastructure.

**Output**
<img width="1906" height="728" alt="Input-1" src="https://github.com/user-attachments/assets/cd7ff0c5-83d3-437f-b5fe-9ac9c441a89a" />

<img width="1879" height="647" alt="Input-2" src="https://github.com/user-attachments/assets/a1631383-40a3-4dd7-a128-94adacf970fa" />

<img width="1513" height="674" alt="Output" src="https://github.com/user-attachments/assets/ac234db4-1ae5-4d48-bae2-c4c0cf923e1a" />



**Setup & Installation**
1️⃣ Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

2️⃣ Install Dependencies
npm install
If installing manually:
npm install aws-sdk
npm install jimp@0.16.1

3️⃣ Create Deployment ZIP for AWS Lambda
Make sure the folder contains:
index.js
package.json
node_modules/
Then compress them into:
package.zip

Upload this ZIP file to AWS Lambda.

4️⃣ Environment Variable (Important)

In AWS Lambda → Configuration → Environment variables
Add:
DEST_BUCKET=your-destination-bucket-name

▶️ Run Locally (Optional Testing)
To test locally with a mock event:
node index.js
(You may need to simulate an S3 event JSON if testing locally.)



