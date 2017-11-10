provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_lambda_function" "slash_command" {
  filename         = "module.zip"
  function_name    = "diablo-character-fetcher"
  role             = "${aws_iam_role.iam_for_lambda.arn}"
  handler          = "exports.handler"
  source_code_hash = "${base64sha256(file("module.zip"))}"
  runtime          = "nodejs6.10"

  environment {
    variables = {
      ACCOUNTS = "${var.bnet_ids}"
      API_KEY = "${var.api_key}"
    }
  }
}

