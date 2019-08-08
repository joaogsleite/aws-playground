
# AWS Lambda

Example lambda function to fetch XML files from a FTP server and parse them to JSON


## Requisites

* Install aws cli

```bash
pip install awscli
```

* Configure aws cli

```bash
aws configure
```

```
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: eu-west-2
Default output format [None]: ENTER
```


## Usage

* Start FTP server (docker container)

```
npm run ftpserver
```

* Locally test lambda function


```
npm run test
```

* Deploy lambda function to AWS

```
npm run deploy
```

