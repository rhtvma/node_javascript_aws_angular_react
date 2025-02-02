Amazon's SNS is a fully managed publish and subscribe service. A publisher sends a 
message to a topic and many consumers/subscribers are subscribed to this topic. 
The relationship is many to many. You can have many publishers and many subscribers to a topic.

SNS differentiates in their sending methods. 
It is either Application to Application (A2A) or Application to Person (A2P).

Application to Application (A2A) destinations are:
    AWS Lambda
    Amazon SQS
    Amazon Kinesis Data Firehose
    AWS Event Fork Pipelines
    HTTP Endpoints

Application to Person (A2P) destinations are:
    SMS
    Email
    In-App notification
    AWS Chatbot
    PagerDuty

    

// ===================

When should I use SNS?
    Multiple receivers
    The receiver type is Email, SMS, or an In-App Notification
    The message needs to be forwarded instantly

//https://blog.awsfundamentals.com/aws-sns-vs-sqs-what-are-the-main-differences