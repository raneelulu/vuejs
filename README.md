# How to deploy vuejs app at aws s3

## First of all, this is my vuejs "mobile" project
>http://raneelulu-vue.s3-website.ap-northeast-2.amazonaws.com/#/md

### install node
>https://nodejs.org/en/download/

### install aws cli
>https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/awscli-install-windows.html

### aws configure

``` bash
/to/your/vuejs/project/path$ aws configure
AWS Access Key ID [None]: [your access key]
AWS Secret Access Key [None]: [your secret access key]
Default region name [None]: [your region name]
Default output format [None]: [your output format]
```

#### how to find access key
Sign in aws and go to "My Security Credentials"
<img width="1229" alt="2018-11-19 4 35 04" src="https://user-images.githubusercontent.com/39694718/48677908-3d07c380-ebbf-11e8-84f2-5a6f8d089ee3.png">
Click "Continue to Security Credentials"
<img width="812" alt="2018-11-19 4 37 25" src="https://user-images.githubusercontent.com/39694718/48677924-5e68af80-ebbf-11e8-99ff-ef0ef28519a5.png">
Click "Access keys (access key ID and secret access key)"
<img width="1228" alt="2018-11-19 4 38 51" src="https://user-images.githubusercontent.com/39694718/48677928-6d4f6200-ebbf-11e8-85fc-1d4d7e1b9b9c.png">

### install dependencies
``` bash
/to/your/vuejs/project/path$ npm install
```
### build for production with minification

``` bash
/to/your/vuejs/project/path$ npm run build
```

### deploy at aws s3

``` bash

/to/your/vuejs/project/path$ aws s3 sync ./dist s3://[your s3 bucket name]

```

### check

[your bucket name].s3-website.[your region].amazoneaws.com